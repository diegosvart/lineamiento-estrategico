"""
sync_planner_to_vault.py
Ámbito: workspace/ms365

Lee tareas de Microsoft Planner via planner_import.py del repo MS365
y las convierte al schema YAML canónico del vault.

Output: ms365-sync/output/YYYY-MM-DD-planner-tasks.yaml

Uso:
    python ms365-sync/sync_planner_to_vault.py --dry-run
    python ms365-sync/sync_planner_to_vault.py
"""

import argparse
import json
import sys
import os
from datetime import datetime, timezone
from pathlib import Path


# ---------------------------------------------------------------------------
# Configuración
# ---------------------------------------------------------------------------

SCRIPT_DIR = Path(__file__).parent
VAULT_ROOT = SCRIPT_DIR.parent
CONFIG_PATH = SCRIPT_DIR / "config.json"
OUTPUT_DIR = SCRIPT_DIR / "output"


def load_config() -> dict:
    """Carga config.json con paths y GUIDs de planes."""
    if not CONFIG_PATH.exists():
        print(f"ERROR: config.json no encontrado en {CONFIG_PATH}", file=sys.stderr)
        print("Copia y completa config.json con los GUIDs de tus planes Planner.", file=sys.stderr)
        sys.exit(1)
    with open(CONFIG_PATH, encoding="utf-8") as f:
        return json.load(f)


# ---------------------------------------------------------------------------
# Mapeo de datos Planner → schema vault
# ---------------------------------------------------------------------------

def map_bucket_to_iniciativa(bucket_name: str, config: dict) -> str:
    """
    Mapea nombre de bucket Planner al nombre canónico de iniciativa del vault.
    Usa config['bucket_map'] o retorna el bucket como fallback.
    """
    bucket_map = config.get("bucket_map", {})
    return bucket_map.get(bucket_name, bucket_name)


def infer_rol_from_assignee(assignee_guid: str, config: dict) -> str:
    """
    Infiere el rol desde el GUID del assignee.
    Usa config['assignee_roles'] o retorna 'PM' como default.
    """
    assignee_roles = config.get("assignee_roles", {})
    return assignee_roles.get(assignee_guid, "PM")


def map_planner_task(task: dict, config: dict) -> dict:
    """Convierte una tarea Planner al schema YAML del vault."""
    due_date = task.get("dueDateTime", "")
    if due_date:
        # Normalizar a fecha YYYY-MM-DD
        due_date = due_date[:10]

    bucket = task.get("bucketName", "")
    iniciativa = map_bucket_to_iniciativa(bucket, config)

    # Assignee: toma el primero si hay varios
    assignments = task.get("assignments", {})
    assignee_guid = next(iter(assignments.keys()), "")
    rol = infer_rol_from_assignee(assignee_guid, config)

    descripcion = task.get("title", "")
    if len(descripcion) > 100:
        descripcion = descripcion[:97] + "..."

    return {
        "descripcion": descripcion,
        "iniciativa": iniciativa,
        "proyecto": task.get("planTitle", config.get("default_project", "plan-gobernanza-ti")),
        "rol": rol,
        "estado": "Pendiente",
        "horas": None,
        "planner_task_id": task.get("id", ""),
    }


# ---------------------------------------------------------------------------
# Integración con planner_import.py del repo MS365
# ---------------------------------------------------------------------------

def fetch_planner_tasks(config: dict) -> list[dict]:
    """
    Importa tareas desde el repo MS365 usando planner_import.py.
    Requiere que MS365_REPO_PATH esté configurado en config.json.
    """
    ms365_repo = config.get("ms365_repo_path")
    if not ms365_repo:
        print("ERROR: 'ms365_repo_path' no configurado en config.json", file=sys.stderr)
        print("Agrega la ruta local del repo MS365 para continuar.", file=sys.stderr)
        sys.exit(1)

    ms365_repo = Path(ms365_repo)
    if not ms365_repo.exists():
        print(f"ERROR: Repo MS365 no encontrado en: {ms365_repo}", file=sys.stderr)
        sys.exit(1)

    # Agregar repo MS365 al path para importar planner_import
    sys.path.insert(0, str(ms365_repo))
    try:
        import planner_import  # type: ignore  # noqa: PLC0415
    except ImportError as e:
        print(f"ERROR: No se pudo importar planner_import.py: {e}", file=sys.stderr)
        sys.exit(1)

    plan_ids = config.get("planner_plan_ids", [])
    if not plan_ids:
        print("WARN: 'planner_plan_ids' vacío en config.json — no hay planes que sincronizar.")
        return []

    all_tasks = []
    for plan_id in plan_ids:
        print(f"  Leyendo plan: {plan_id}")
        try:
            tasks = planner_import.get_tasks(plan_id)
            all_tasks.extend(tasks)
        except Exception as e:
            print(f"  WARN: Error leyendo plan {plan_id}: {e}", file=sys.stderr)

    return all_tasks


# ---------------------------------------------------------------------------
# Escritura de output
# ---------------------------------------------------------------------------

def write_output(mapped_tasks: list[dict], dry_run: bool) -> Path:
    """Escribe el YAML de salida en output/."""
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    output_file = OUTPUT_DIR / f"{today}-planner-tasks.yaml"

    # Construir contenido YAML manualmente (sin dependencia de PyYAML)
    lines = [
        f"fecha: {today}",
        "fuente: planner",
        f"sync_timestamp: {datetime.now(timezone.utc).isoformat()}",
        "tareas:",
    ]

    for task in mapped_tasks:
        horas = "null" if task["horas"] is None else str(task["horas"])
        lines.extend([
            f'  - descripcion: "{task["descripcion"]}"',
            f'    iniciativa: "{task["iniciativa"]}"',
            f'    proyecto: "{task["proyecto"]}"',
            f'    rol: "{task["rol"]}"',
            f'    estado: {task["estado"]}',
            f'    horas: {horas}',
            f'    planner_task_id: "{task["planner_task_id"]}"',
        ])

    content = "\n".join(lines) + "\n"

    if dry_run:
        print("\n--- DRY RUN: output que se escribiría ---")
        print(f"Archivo: {output_file}")
        print(content)
        print("--- FIN DRY RUN ---")
    else:
        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
        output_file.write_text(content, encoding="utf-8")
        print(f"Output escrito: {output_file}")
        print(f"Total tareas: {len(mapped_tasks)}")

    return output_file


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Sync Planner → Vault YAML")
    parser.add_argument("--dry-run", action="store_true", help="Previsualizar sin escribir")
    args = parser.parse_args()

    print(f"sync_planner_to_vault.py {'(DRY RUN)' if args.dry_run else ''}")
    print(f"Config: {CONFIG_PATH}")

    config = load_config()

    print("\nFetching tareas desde Planner...")
    raw_tasks = fetch_planner_tasks(config)
    print(f"Tareas obtenidas: {len(raw_tasks)}")

    print("\nMapeando al schema vault...")
    mapped_tasks = [map_planner_task(t, config) for t in raw_tasks]

    write_output(mapped_tasks, dry_run=args.dry_run)

    if not args.dry_run:
        print("\nPróximo paso: workspace/vault procesa el output con /vault-timesheet")


if __name__ == "__main__":
    main()
