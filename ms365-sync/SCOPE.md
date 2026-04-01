# SCOPE — workspace/ms365

**Rol:** Integrar datos de Microsoft 365 hacia el vault y gestionar el entorno M365.
**IDE:** VS Code (con acceso al repo MS365 como carpeta adicional)
**Rama:** `workspace/ms365` (long-lived)
**Área exclusiva:** carpeta `ms365-sync/`

---

## Inicio de Sesión

1. **Git**: verificar rama actual y situarse explícitamente en `workspace/ms365`
   → Si no estás en `workspace/ms365`, cambiar a esa rama antes de leer o ejecutar nada
2. **Git sync**: `git checkout workspace/ms365 && git fetch origin && git merge origin/desarrollo`
   → Sincroniza cambios integrados desde otros ámbitos
   → Regla: una rama temporal por tarea; al cerrar tarea no reutilizar la rama
3. **Abrir**: VS Code con `.vscode/pm-workspace.code-workspace`
   → Ambos repos visibles: Vault (Obsidian) + MS365 Integration
4. **Verificar**: `ms365-sync/config.json` tiene GUIDs correctos y `ms365_repo_path` apunta al repo local
   → Si los GUIDs cambiaron en Planner, actualizar antes de continuar
5. **Primer acto**: `python ms365-sync/sync_planner_to_vault.py --dry-run`
   → Validar output antes de escribir a `ms365-sync/output/`

**Regla de seguridad:** si la rama actual no coincide con este `SCOPE`, detener el trabajo y corregir la rama antes de continuar.

---

## Capacidades

- Leer tareas de Planner via `planner_import.py --mode tasks` y convertirlas a YAML de timesheet
- Leer correos pendientes de acción via Graph API y escribirlos a `diario/PENDIENTES.md`
- Mapear campos Planner al schema canónico del vault (iniciativa, rol, estado)
- Detectar tareas nuevas en Planner no registradas en el vault
- Ejecutar en modo `--dry-run` para previsualizar antes de escribir
- Gestionar `config.json` (rutas del vault, filtros de proyectos, IDs de planes)
- Provisionar nuevos entornos M365 via Graph API
- Manejar throttling 429 + paginación nextLink

---

## Estructura de Archivos

```
ms365-sync/
  SCOPE.md                          ← archivo canónico del ámbito (este archivo)
  sync_planner_to_vault.py          ← Lee planner_import.py → escribe YAML vault
  sync_email_to_pending.py          ← Lee Graph API mail → escribe PENDIENTES.md
  config.json                       ← paths del vault, filtros de proyectos, IDs
  output/                           ← staging antes de escribir al vault
    YYYY-MM-DD-planner-tasks.yaml   ← output de sync_planner_to_vault.py
    .gitkeep
```

---

## Mapeo Planner → YAML Vault

```
Planner.title         → descripcion (max 100 chars)
Planner.bucketName    → iniciativa (lookup catálogo canónico)
Planner.dueDateTime   → fecha de la entrada diaria
Planner.assignments   → rol (inferido del assignee GUID)
estado                → "Pendiente" (default para importados)
horas                 → null (completar manualmente)
```

**Catálogo canónico de iniciativas:** ver `CLAUDE.md` y notas en `proyectos/plan-gobernanza-ti/`

---

## Schema YAML de Salida (output/)

```yaml
# YYYY-MM-DD-planner-tasks.yaml
fecha: YYYY-MM-DD
fuente: planner
sync_timestamp: YYYY-MM-DDTHH:MM:SSZ
tareas:
  - descripcion: "[Planner.title]"
    iniciativa: "[bucket mapeado]"
    proyecto: "[proyecto del plan]"
    rol: "[inferido de assignee]"
    estado: Pendiente
    horas: null
    planner_task_id: "[GUID]"
```

---

## Uso

```bash
# Previsualizar sin escribir:
python ms365-sync/sync_planner_to_vault.py --dry-run

# Sync real (escribe en output/):
python ms365-sync/sync_planner_to_vault.py

# Sync correos pendientes:
python ms365-sync/sync_email_to_pending.py --dry-run

# Output queda en ms365-sync/output/ para que workspace/vault lo procese
```

---

## Dependencias

- **planner_import.py** del repo MS365 (no reimplementar lógica Graph)
- **project_config.json** del repo MS365 (GUIDs de planes por proyecto)
- `.vscode/pm-workspace.code-workspace` para acceder a ambos repos desde VS Code

---

## Protocolo de Salida

- Escribe YAML a `ms365-sync/output/` — staging, no escribe directo al vault
- `workspace/vault` (Claude Code) lee el output y lo procesa hacia `diario/`
- Nunca escribir directamente en `proyectos/` o `diario/`

---

## Coordinación con Otros Ámbitos

| Ámbito | SCOPE | Interacción |
|--------|-------|-------------|
| workspace/vault | `SCOPE.md` (raíz) | Produce output YAML; vault consume |
| workspace/planning | `planificacion/SCOPE.md` | Reporta cierre de tareas para consolidación de estado en tablero maestro |
| workspace/dashboard | `dashboard/SCOPE.md` | Dashboard lee `output/` para status sync |

## Cierre obligatorio por tarea

Cada tarea finalizada en `workspace/ms365` debe cerrar con:

- commit del trabajo (si hubo cambios),
- reporte de rama con `git branch --show-current` y `git status --short --branch`,
- reporte de PR asociado y estado de merge,
- confirmación de integración en `desarrollo`,
- confirmación explícita de cambios sin commit.

Formato estándar:

- `planificacion/template-status-rama.md`

---

*Rama: `workspace/ms365` — VS Code — Última actualización: 2026-03-28*
