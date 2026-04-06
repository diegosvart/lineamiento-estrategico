---
fecha: 2026-04-06
iniciativa: "Dashboard-Vault CRUD de tareas por etapas"
lineamiento: "Cross-rama"
estado: listo-para-ejecutar
ejecutor: workspace/planning
workspace_visual: "gestion-trabajo/planes-activos/dashboard-vault-crud-etapas-workspace.md"
estado_visible: "listo-para-ejecutar"
siguiente_accion: "Delegar etapa 1-2 a workspace/dashboard y etapa de contrato a workspace/vault."
---

## Objetivo

> Habilitar un mantenedor de tareas en dashboard para crear, editar y eliminar logicamente tareas del vault, respetando el contrato canonico y sin romper los flujos actuales de `vault-timesheet`, `vault-task` ni `ms365-sync`.

## Contexto

> El sistema actual separa responsabilidades por capas:
> - `workspace/ms365` produce staging en `ms365-sync/output/*.yaml`.
> - `workspace/vault` consolida en `diario/*.md`.
> - `workspace/dashboard` visualiza.
>
> Para soportar ahorro de tokens y continuidad operativa, se incorpora un flujo gradual donde dashboard inicia la gestion de tareas mediante API local, manteniendo trazabilidad y eliminacion logica (`estado: Cancelado`).

## Etapas

### Etapa 0 - Planificacion y contrato

- [x] Formalizar plan por etapas y asignacion por workspace.
- [x] Registrar `task_id` y rama por tarea en `gestion-trabajo/tablero-maestro.md`.
- [x] Actualizar handoffs de dashboard, vault y ms365 para este flujo.

### Etapa 1 - API local de escritura (workspace/dashboard)

- [ ] Implementar API local Node para mutar solo frontmatter YAML en `diario/`.
- [ ] Operaciones minimas: crear, editar y cancelacion logica.
- [ ] Validar catalogos canonicos del vault antes de persistir.

### Etapa 2 - Mantenedor de tareas en dashboard (workspace/dashboard)

- [ ] Formulario rapido de alta de tareas con campos canonicos del vault.
- [ ] Listado con estados y accion de edicion.
- [ ] Accion de eliminacion logica (cambio a `Cancelado`).

### Etapa 3 - Contrato de persistencia y trazabilidad (workspace/vault)

- [ ] Definir id estable de tarea para soportar edit/cancel sin ambiguedad.
- [ ] Alinear reglas de compatibilidad retroactiva para entradas existentes.
- [ ] Garantizar no edicion del body Dataview en daily notes.

### Etapa 4 - Integracion ms365 paralela (workspace/ms365)

- [ ] Integrar adaptador liviano a repo externo `C:\repos\Planner_Import`.
- [ ] Mantener `ms365-sync` como orquestador del flujo (sin migrar ownership).
- [ ] Preparar sincronizacion de tareas marcadas para Planner sin bloquear el MVP dashboard-vault.

## Tareas Asignadas por Workspace

| task_id | Workspace | Rama por tarea | Entregable |
| --- | --- | --- | --- |
| `T-2026-04-05-101` | `workspace/planning` | `feature/planning-plan-dashboard-vault-crud-etapas` | Plan formal + tablero operativo |
| `T-2026-04-05-201` | `workspace/dashboard` | `feature/dashboard-task-maintainer-v1` | UI mantenedor + cliente API create/edit/cancel |
| `T-2026-04-05-301` | `workspace/vault` | `feature/vault-contrato-crud-dashboard` | Contrato de persistencia/edicion/cancelacion logica |
| `T-2026-04-05-401` | `workspace/ms365` | `feature/ms365-adapter-planner-import` | Adaptador liviano a `Planner_Import` |

## Criterios de Aceptacion

- [ ] Crear tarea desde dashboard persiste en destino correcto (`diario/YYYY/MM/*.md` o `diario/PENDIENTES.md`).
- [ ] Editar tarea actualiza `entradas[]` sin alterar body Dataview.
- [ ] Eliminar tarea aplica cancelacion logica (`estado: Cancelado`) sin borrado fisico.
- [ ] El contrato de `workspace/vault` mantiene compatibilidad con `/vault-timesheet` y `/vault-task add`.
- [ ] Integracion ms365 en paralelo valida adaptador a `C:\repos\Planner_Import` sin romper staging existente.

## Archivos a Crear/Modificar

| Accion | Ruta | Descripcion |
| --- | --- | --- |
| Crear | `planificacion/2026-04-06-dashboard-vault-crud-etapas-plan.md` | Plan formal por etapas |
| Crear | `gestion-trabajo/planes-activos/dashboard-vault-crud-etapas-workspace.md` | Capa visible del plan |
| Modificar | `gestion-trabajo/tablero-maestro.md` | Asignacion operativa por `task_id` |
| Modificar | `planificacion/memory-contrato-tareas-y-horas.md` | Contrato extendido para CRUD dashboard-vault |
| Modificar | `planificacion/memory-handoff-dashboard.md` | Handoff para etapa 1-2 |
| Modificar | `planificacion/memory-handoff-vault.md` | Handoff para contrato de trazabilidad |
| Modificar | `planificacion/memory-handoff-ms365.md` | Handoff paralelo para adaptador externo |

