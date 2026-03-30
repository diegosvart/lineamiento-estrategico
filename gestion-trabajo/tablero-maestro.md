---
aliases:
  - Tablero Maestro
  - Work Board
tags:
  - activo
---

# Tablero Maestro

Vista rápida del trabajo en curso para abrir Obsidian y entender foco, handoffs y cola de ejecución.

**Última actualización:** 2026-03-28
**Proyecto principal:** [[proyectos/plan-gobernanza-ti/00-indice|Plan Gobernanza TI]]
**Backlog humano:** [[gestion-trabajo/backlog-iniciativas|Ver backlog]]
**Canvas maestro:** [[gestion-trabajo/00-tablero-trabajo.canvas|Abrir canvas]]

## Flujo activo por rama

| Rama | Flujo activo | Estado | Próximo paso |
| --- | --- | --- | --- |
| `workspace/planning` | Capa visual de planificación + ciclo de vida de planes | en-ejecucion | Mantener backlog, tablero y workspaces visuales sincronizados |
| `workspace/vault` | Formalización organizacional área TI (deadline 31 Mar) + intake manual de tareas | activo | Coordinar con JTI entrega de documentos antes del 31 Mar |
| `workspace/ms365` | Staging de Planner hacia output YAML | definido | Mantener salida consistente para consolidación posterior |
| `workspace/dashboard` | Visualización local del vault | definido | Consumir horas y estados sin duplicar lógica |

## Planes activos y listos para ejecutar

| Plan | Estado visible | Rama dueña | Siguiente acción |
| --- | --- | --- | --- |
| [[gestion-trabajo/planes-activos/workspace-pm-proyecto-y-base-documental-workspace|Workspace PM — proyecto y base documental]] | completado ✅ | `workspace/vault` | Cerrado 2026-03-29 — Fase 1 completa |
| [[gestion-trabajo/planes-activos/formalizacion-organizacional-workspace|Formalización organizacional área TI]] | listo-para-ejecutar | `workspace/planning` → `workspace/vault` | Preparar documentación y validación con JTI |
| [[gestion-trabajo/planes-activos/carga-tareas-y-dashboard-horas-workspace|Carga de tareas y dashboard de horas consumidas]] | listo-para-ejecutar | cross-rama | Ejecutar handoffs por rama y consolidar visualización |

## Alertas abiertas

- G1 es el hito más cercano del proyecto primario — fecha: 30 Mar 2026
- Formalización organizacional: deadline 31 Mar 2026 — JTI debe entregar documentos
- La capa visual necesita mantenerse sincronizada con cada cambio de estado técnico

## Handoffs pendientes

- `workspace/vault` debe construir `proyectos/workspace-pm/` como MVP documental del sistema de trabajo
- `workspace/planning` debe seguir actualizando `gestion-trabajo/` cuando cambie el estado de los planes
- `workspace/vault` debe reflejar tareas relevantes en el tablero o canvas del plan correspondiente

## Siguiente acción sugerida

Confirmar con JTI el estado de los documentos de formalización organizacional (deadline 31 Mar 2026). Si están listos, ejecutar el plan `formalizacion-organizacional-area-ti`.
