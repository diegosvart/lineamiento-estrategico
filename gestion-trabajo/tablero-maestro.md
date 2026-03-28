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
| `workspace/vault` | Construcción documental del PM Workspace + intake manual de tareas | definido | Ejecutar el nuevo plan `workspace-pm` y reflejar avances en la capa visible |
| `workspace/ms365` | Staging de Planner hacia output YAML | definido | Mantener salida consistente para consolidación posterior |
| `workspace/dashboard` | Visualización local del vault | definido | Consumir horas y estados sin duplicar lógica |

## Planes activos y listos para ejecutar

| Plan | Estado visible | Rama dueña | Siguiente acción |
| --- | --- | --- | --- |
| [[gestion-trabajo/planes-activos/workspace-pm-proyecto-y-base-documental-workspace|Workspace PM — proyecto y base documental]] | listo-para-ejecutar | `workspace/planning` → `workspace/vault` | Construir el proyecto `proyectos/workspace-pm/` como contenedor formal del sistema de trabajo |
| [[gestion-trabajo/planes-activos/formalizacion-organizacional-workspace|Formalización organizacional área TI]] | listo-para-ejecutar | `workspace/planning` → `workspace/vault` | Preparar documentación y validación con JTI |
| [[gestion-trabajo/planes-activos/carga-tareas-y-dashboard-horas-workspace|Carga de tareas y dashboard de horas consumidas]] | listo-para-ejecutar | cross-rama | Ejecutar handoffs por rama y consolidar visualización |

## Alertas abiertas

- G1 sigue siendo el hito más cercano del proyecto primario
- El PM Workspace debe formalizarse como proyecto para no seguir compitiendo informalmente con el resto del trabajo
- La capa visual necesita mantenerse sincronizada con cada cambio de estado técnico

## Handoffs pendientes

- `workspace/vault` debe construir `proyectos/workspace-pm/` como MVP documental del sistema de trabajo
- `workspace/planning` debe seguir actualizando `gestion-trabajo/` cuando cambie el estado de los planes
- `workspace/vault` debe reflejar tareas relevantes en el tablero o canvas del plan correspondiente

## Siguiente acción sugerida

Ejecutar el plan `Workspace PM — proyecto y base documental` para convertir el sistema de trabajo actual en un proyecto formal y navegable dentro del vault.
