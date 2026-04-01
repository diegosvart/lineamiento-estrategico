---
aliases:
  - Tablero Maestro
  - Work Board
tags:
  - activo
---

# Tablero Maestro

Vista rápida del trabajo en curso para abrir Obsidian y entender foco, handoffs y cola de ejecución.

**Última actualización:** 2026-04-01
**Proyecto principal:** [[proyectos/plan-gobernanza-ti/00-indice|Plan Gobernanza TI]]
**Backlog humano:** [[gestion-trabajo/backlog-iniciativas|Ver backlog]]
**Canvas maestro:** [[gestion-trabajo/00-tablero-trabajo.canvas|Abrir canvas]]

## Flujo activo por rama

| Rama | Flujo activo | Estado | Próximo paso |
| --- | --- | --- | --- |
| `workspace/planning` | Admin del sistema + planificación + intake único | activo | Formalizar worktrees por frente y mantener memoria/tablero sincronizados |
| `workspace/vault` | Ejecución documental del vault | activo | Consumir cambios publicados desde `desarrollo` y actualizar documentación de `workspace-pm` |
| `workspace/ms365` | Staging de Planner hacia output YAML | definido | Mantener salida consistente para consolidación posterior |
| `workspace/dashboard` | Visualización local del vault + reporte mensual ejecutivo | completado | Publicado vía PR #18 — próximo paso: aislar entorno con worktree e ignore del frontend |

## Planes activos y listos para ejecutar

| Plan | Estado visible | Rama dueña | Siguiente acción |
| --- | --- | --- | --- |
| [[gestion-trabajo/planes-activos/workspace-pm-proyecto-y-base-documental-workspace|Workspace PM — proyecto y base documental]] | completado ✅ | `workspace/vault` | Cerrado 2026-03-29 — Fase 1 completa |
| [[gestion-trabajo/planes-activos/formalizacion-organizacional-workspace|Formalización organizacional área TI]] | listo-para-ejecutar | `workspace/planning` → `workspace/vault` | Preparar documentación y validación con JTI |
| [[gestion-trabajo/planes-activos/carga-tareas-y-dashboard-horas-workspace|Carga de tareas y dashboard de horas consumidas]] | listo-para-ejecutar | cross-rama | Ejecutar handoffs por rama y consolidar visualización |
| [[gestion-trabajo/planes-activos/reporte-mensual-dashboard-workspace|Reporte mensual ejecutivo dashboard + convención workspace PM]] | completado ✅ | `workspace/dashboard` → `workspace/vault` | PR #18 mergeado 2026-03-30 — pendiente follow-up documental en vault |
| [[gestion-trabajo/planes-activos/cierre-hh-marzo-control-pr-y-skills-workspace|Cierre HH marzo + control PR + skill principal por agente]] | listo-para-ejecutar | cross-rama | `workspace/vault` cierra HH marzo; `workspace/planning` activa gate PR; cada frente crea skill principal |

## Alertas abiertas

- G1 es el hito más cercano del proyecto primario — fecha: 30 Mar 2026
- Formalización organizacional: deadline 31 Mar 2026 — JTI debe entregar documentos
- La operación multiagente sigue expuesta a una sola carpeta compartida hasta migrar a worktrees por frente
- `dashboard/node_modules/` y `dashboard/dist/` siguen ensuciando el working tree hasta corregir ignore

## Handoffs pendientes

- `workspace/planning` debe seguir actualizando `gestion-trabajo/` cuando cambie el estado de los planes
- `workspace/vault` debe reflejar tareas relevantes en el tablero o canvas del plan correspondiente
- `workspace/vault` debe actualizar la convención documental de `workspace-pm` una vez validado el reporte mensual en dashboard
- `workspace/planning` debe liderar la migración a carpetas físicas separadas por frente
- `workspace/vault` debe ejecutar el cierre de HH marzo 2026 y actualizar `planificacion/2026-03-31-informe-hh-marzo-pendiente.md` con faltante final en cero
- `workspace/dashboard` y `workspace/ms365` deben crear su skill principal alineada a su `SCOPE`

## Control operativo por tarea (fuente unica)

Registro transversal del estado operativo de tareas delegadas entre frentes.
`workspace/planning` mantiene esta tabla con base en los reportes de cierre de cada agente.

**Regla dura:** una tarea usa una sola rama temporal. La rama no se reutiliza para otra tarea.

| task_id | Plan o ruta de trabajo | Frente ejecutor | Responsable | Rama por tarea | Estado | PR | En desarrollo | Evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `T-2026-04-01-001` | `planificacion/2026-03-31-cierre-hh-marzo-control-pr-y-skills-plan.md` | `workspace/vault` | Claude Code | `feature/vault-cierre-hh-marzo-2026` | `delegada` | `pendiente` | `no` | Baseline: `planificacion/2026-03-31-informe-hh-marzo-pendiente.md` |

Estados operativos validos: `nueva`, `delegada`, `en-ejecucion`, `reportada`, `bloqueada`, `cerrada`.

Una tarea solo pasa a `cerrada` cuando:
- existe PR mergeado,
- el cambio esta integrado en `desarrollo`,
- el reporte de cierre usa `planificacion/template-status-rama.md`.

## Siguiente acción sugerida

Priorizar plan urgente de cierre HH marzo y control PR; luego continuar con migracion a worktrees por frente.

## Punto Cero Operativo

**Fecha de corte:** 2026-03-31
**Comando de preflight:** `powershell -ExecutionPolicy Bypass -File .\planificacion\session-start-check.ps1 -TargetWorkspace <planning|vault|ms365|dashboard>`

**Estado requerido para declarar Punto Cero validado:**
- `workspace/planning` limpio y sincronizado con `origin/workspace/planning`
- PR de corrección de arranque mergeado a `workspace/planning`
- `desarrollo` actualizado con ese merge
- `workspace/vault`, `workspace/dashboard` y `workspace/ms365` sincronizados desde `desarrollo`

**Regla de operación:**
- Si preflight falla, no se ejecutan tareas
- Si preflight pasa, se habilita ejecución del plan del frente
