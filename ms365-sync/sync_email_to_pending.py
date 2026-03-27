"""
sync_email_to_pending.py
Ámbito: workspace/ms365

Lee correos pendientes de acción via Microsoft Graph API
y los escribe a diario/PENDIENTES.md en el vault.

Uso:
    python ms365-sync/sync_email_to_pending.py --dry-run
    python ms365-sync/sync_email_to_pending.py
"""

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path


SCRIPT_DIR = Path(__file__).parent
VAULT_ROOT = SCRIPT_DIR.parent
CONFIG_PATH = SCRIPT_DIR / "config.json"
PENDIENTES_PATH = VAULT_ROOT / "diario" / "PENDIENTES.md"


def load_config() -> dict:
    if not CONFIG_PATH.exists():
        print(f"ERROR: config.json no encontrado en {CONFIG_PATH}", file=sys.stderr)
        sys.exit(1)
    with open(CONFIG_PATH, encoding="utf-8") as f:
        return json.load(f)


def fetch_action_emails(config: dict) -> list[dict]:
    """
    Obtiene correos marcados como pendientes de acción via Graph API.
    Reutiliza el cliente de autenticación del repo MS365.
    """
    ms365_repo = config.get("ms365_repo_path")
    if not ms365_repo:
        print("ERROR: 'ms365_repo_path' no configurado en config.json", file=sys.stderr)
        sys.exit(1)

    sys.path.insert(0, str(ms365_repo))
    try:
        import graph_client  # type: ignore  # noqa: PLC0415
    except ImportError:
        print("WARN: graph_client no disponible. Usando modo stub.", file=sys.stderr)
        return []

    try:
        client = graph_client.get_client()
        # Filtrar correos con followupFlag.flagStatus = 'flagged'
        emails = client.get(
            "/me/messages?$filter=followupFlag/flagStatus eq 'flagged'"
            "&$select=subject,from,receivedDateTime,webLink"
            "&$top=50&$orderby=receivedDateTime desc"
        )
        return emails.get("value", [])
    except Exception as e:
        print(f"WARN: Error obteniendo correos: {e}", file=sys.stderr)
        return []


def format_pendientes_md(emails: list[dict]) -> str:
    """Genera el contenido de PENDIENTES.md desde la lista de correos."""
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    lines = [
        "# Pendientes de Acción",
        "",
        f"> Actualizado: {today} via sync_email_to_pending.py",
        "",
        "## Correos Pendientes",
        "",
    ]

    if not emails:
        lines.append("*(sin correos flagged actualmente)*")
    else:
        for email in emails:
            subject = email.get("subject", "(sin asunto)")
            sender = email.get("from", {}).get("emailAddress", {}).get("name", "")
            received = email.get("receivedDateTime", "")[:10]
            link = email.get("webLink", "")
            lines.append(f"- [ ] **{subject}** — {sender} ({received})")
            if link:
                lines.append(f"  [Abrir en Outlook]({link})")

    lines.append("")
    return "\n".join(lines)


def write_pendientes(content: str, dry_run: bool):
    if dry_run:
        print("\n--- DRY RUN: PENDIENTES.md que se escribiría ---")
        print(content)
        print("--- FIN DRY RUN ---")
    else:
        PENDIENTES_PATH.parent.mkdir(parents=True, exist_ok=True)
        PENDIENTES_PATH.write_text(content, encoding="utf-8")
        print(f"Escrito: {PENDIENTES_PATH}")


def main():
    parser = argparse.ArgumentParser(description="Sync correos flagged → PENDIENTES.md")
    parser.add_argument("--dry-run", action="store_true", help="Previsualizar sin escribir")
    args = parser.parse_args()

    print(f"sync_email_to_pending.py {'(DRY RUN)' if args.dry_run else ''}")

    config = load_config()
    emails = fetch_action_emails(config)
    print(f"Correos flagged encontrados: {len(emails)}")

    content = format_pendientes_md(emails)
    write_pendientes(content, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
