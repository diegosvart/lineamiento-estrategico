---
aliases:
  - Tablero Maestro
  - Work Board
tags:
  - activo
---

# Tablero Maestro

Vista rápida del trabajo en curso para abrir Obsidian y entender foco, handoffs y cola de ejecución.

**Última actualización:** 2026-04-06
**Proyecto principal:** [[proyectos/plan-gobernanza-ti/00-indice|Plan Gobernanza TI]]
**Backlog humano:** [[gestion-trabajo/backlog-iniciativas|Ver backlog]]
**Canvas maestro:** [[gestion-trabajo/00-tablero-trabajo.canvas|Abrir canvas]]

## Flujo activo por rama

| Rama | Flujo activo | Estado | Próximo paso |
| --- | --- | --- | --- |
| `workspace/planning` | Admin del sistema + planificación + intake único | activo | Publicar plan por etapas dashboard-vault CRUD y distribuir handoffs |
| `workspace/vault` | Ejecución documental del vault | activo | Cerrar HH marzo y crear skill principal bajo el nuevo esquema físico |
| `workspace/ms365` | Staging de Planner hacia output YAML | definido | Mantener salida consistente para consolidación posterior |
| `workspace/dashboard` | Visualización local + mantenedor de tareas para vault | activo | Ejecutar etapa 1-2: API local Node + formulario create/edit/cancel |

## Planes activos y listos para ejecutar

| Plan | Estado visible | Rama dueña | Siguiente acción |
| --- | --- | --- | --- |
| [[gestion-trabajo/planes-activos/workspace-pm-proyecto-y-base-documental-workspace|Workspace PM — proyecto y base documental]] | completado ✅ | `workspace/vault` | Cerrado 2026-03-29 — Fase 1 completa |
| [[gestion-trabajo/planes-activos/formalizacion-organizacional-workspace|Formalización organizacional área TI]] | listo-para-ejecutar | `workspace/planning` → `workspace/vault` | Preparar documentación y validación con JTI |
| [[gestion-trabajo/planes-activos/carga-tareas-y-dashboard-horas-workspace|Carga de tareas y dashboard de horas consumidas]] | listo-para-ejecutar | cross-rama | Ejecutar handoffs por rama y consolidar visualización |
| [[gestion-trabajo/planes-activos/reporte-mensual-dashboard-workspace|Reporte mensual ejecutivo dashboard + convención workspace PM]] | completado ✅ | `workspace/dashboard` → `workspace/vault` | PR #18 mergeado 2026-03-30 — pendiente follow-up documental en vault |
| [[gestion-trabajo/planes-activos/cierre-hh-marzo-control-pr-y-skills-workspace|Cierre HH marzo + control PR + skill principal por agente]] | listo-para-ejecutar | cross-rama | `workspace/vault` cierra HH marzo; `workspace/planning` activa gate PR; cada frente crea skill principal |
| [[gestion-trabajo/planes-activos/dashboard-vault-crud-etapas-workspace|Dashboard-Vault CRUD de tareas por etapas]] | listo-para-ejecutar | cross-rama | Ejecutar etapa 1-2 en dashboard y etapa de contrato en vault |

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
- `workspace/dashboard` debe implementar etapa 1-2 del mantenedor CRUD con API local y validaciones canónicas
- `workspace/vault` debe definir id estable de tarea y reglas de cancelacion lógica sin borrado físico
- `workspace/ms365` debe integrar adaptador liviano a `C:\repos\Planner_Import` en paralelo al MVP

## Control operativo por tarea (fuente unica)

Registro transversal del estado operativo de tareas delegadas entre frentes.
`workspace/planning` mantiene esta tabla con base en los reportes de cierre de cada agente.

**Regla dura:** una tarea usa una sola rama temporal. La rama no se reutiliza para otra tarea.

| task_id | Plan o ruta de trabajo | Frente ejecutor | Responsable | Rama por tarea | Estado | PR | En desarrollo | Evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `T-2026-04-01-001` | `planificacion/2026-03-31-cierre-hh-marzo-control-pr-y-skills-plan.md` | `workspace/vault` | Claude Code | `feature/vault-cierre-hh-marzo-2026` | `delegada` | `pendiente` | `no` | Baseline: `planificacion/2026-03-31-informe-hh-marzo-pendiente.md` |
| `T-2026-04-01-002` | `planificacion/2026-04-01-migracion-worktrees-frentes-plan.md` | `workspace/planning` | Codex | `feature/planning-flujo-operativo-rama-por-tarea` | `reportada` | `pendiente` | `no` | Plan formal y script de setup creados |
| `T-2026-04-01-003` | Estandarización de Rol PM Senior (Gobernanza) | `workspace/planning` | Codex | `feature/planning-flujo-operativo-rama-por-tarea` | `reportada` | `pendiente` | `no` | Protocolo de reporte ejecutivo formalizado |
| `T-2026-04-05-101` | `planificacion/2026-04-06-dashboard-vault-crud-etapas-plan.md` | `workspace/planning` | Codex | `feature/planning-plan-dashboard-vault-crud-etapas` | `en-ejecucion` | `pendiente` | `no` | Plan por etapas + handoffs y contrato en actualizacion |
| `T-2026-04-05-201` | `planificacion/2026-04-06-dashboard-vault-crud-etapas-plan.md` | `workspace/dashboard` | Agente dashboard | `feature/dashboard-task-maintainer-v1` | `delegada` | `pendiente` | `no` | Handoff: API local + formulario create/edit/cancel |
| `T-2026-04-05-301` | `planificacion/2026-04-06-dashboard-vault-crud-etapas-plan.md` | `workspace/vault` | Agente vault | `feature/vault-contrato-crud-dashboard` | `delegada` | `pendiente` | `no` | Handoff: id estable + cancelacion logica + compatibilidad retroactiva |
| `T-2026-04-05-401` | `planificacion/2026-04-06-dashboard-vault-crud-etapas-plan.md` | `workspace/ms365` | Agente ms365 | `feature/ms365-adapter-planner-import` | `delegada` | `pendiente` | `no` | Handoff: adaptador liviano hacia `C:\\repos\\Planner_Import` |

Estados operativos validos: `nueva`, `delegada`, `en-ejecucion`, `reportada`, `bloqueada`, `cerrada`.

Una tarea solo pasa a `cerrada` cuando:
- existe PR mergeado,
- el cambio esta integrado en `desarrollo`,
- el reporte de cierre usa `planificacion/template-status-rama.md`.

## Siguiente acción sugerida

Ejecutar etapa 1-2 del plan dashboard-vault CRUD y mantener en paralelo la integracion ms365 con `Planner_Import`.

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
