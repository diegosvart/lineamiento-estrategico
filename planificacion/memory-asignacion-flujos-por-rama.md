# Memoria — Asignación de flujos por rama

## Objetivo

Dejar explícito qué rama es responsable de cada operación y cómo interactúa con `workspace/planning` como admin del sistema.

| Flujo | Rama dueña | Salida principal |
|-------|------------|------------------|
| Intake de nuevas necesidades | `workspace/planning` | clasificación + backlog/plan/handoff |
| `/vault-task add` | `workspace/vault` | `diario/YYYY-MM-DD.md` o `diario/PENDIENTES.md` |
| `/plan add` | `workspace/planning` | `planificacion/YYYY-MM-DD-[iniciativa]-plan.md` + `planificacion/backlog.md` |
| `/plan update` | `workspace/planning` | plan existente actualizado + `planificacion/backlog.md` |
| `/plan archive` | `workspace/planning` | plan archivado + historial en `planificacion/backlog.md` |
| `/plan iterate` | `workspace/planning` | nuevo plan + archivo previo referenciado/archivado + `planificacion/backlog.md` |
| `/plan workspace` | `workspace/planning` | nota operativa + `.canvas` en `gestion-trabajo/planes-activos/` |
| `/workflow-board refresh` | `workspace/planning` | `gestion-trabajo/tablero-maestro.md` + `gestion-trabajo/00-tablero-trabajo.canvas` |
| Recepción de entregas de ejecutores | `workspace/planning` | decisión operativa + follow-up + actualización visible |
| `/session-start` | rama activa | resumen de foco técnico + visible |
| `/session-end` | rama activa | handoff técnico + actualización de estado visible |

## Principio operativo

Cada rama escribe solo en su área dueña. Si un flujo necesita ampliar el contrato, la documentación de `planificacion/` se actualiza antes de pedir automatización nueva.

## Intake y cross-rama

- Toda necesidad nueva entra por `workspace/planning`.
- Si una rama necesita algo de otra, lo registra primero en planning/admin.
- `workspace/planning` decide si la necesidad se resuelve como plan, backlog o handoff.

## Límites

- `workspace/vault` no administra el ciclo de vida documental de planes.
- `workspace/planning` no escribe entradas operativas en `diario/`, pero sí mantiene la capa visible de planificación y la guía humana del sistema.
- `workspace/dashboard` consume en lectura y ejecuta UI/exportación en su ámbito; no redefine contratos.
- `workspace/ms365` produce staging; no escribe directo en el vault.
