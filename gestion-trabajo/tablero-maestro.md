---
aliases:
  - Tablero Maestro
  - Work Board
tags:
  - activo
---

# Tablero Maestro

Vista rápida del trabajo en curso para abrir Obsidian y entender foco, handoffs y cola de ejecución.

**Última actualización:** 2026-03-30
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

## Siguiente acción sugerida

Sincronizar ramas base desde `desarrollo`, crear worktrees por frente y ejecutar el follow-up documental de `workspace/vault` para `workspace-pm`.
