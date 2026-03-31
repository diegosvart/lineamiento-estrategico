---
fecha: 2026-03-31
iniciativa: "Cierre HH marzo + control PR + skill principal por agente"
lineamiento: "L1"
estado: listo-para-ejecutar
ejecutor: workspace/vault
workspace_visual: "gestion-trabajo/planes-activos/cierre-hh-marzo-control-pr-y-skills-workspace.md"
estado_visible: "listo-para-ejecutar"
siguiente_accion: "workspace/vault debe cerrar HH marzo y publicar evidencia de faltantes en cero."
---

## Objetivo

> Ejecutar hoy una coordinacion urgente cross-rama: cerrar HH de marzo al 100% desde `workspace/vault`, bloquear PR vacias en GitHub desde `workspace/planning` y activar una skill principal por frente para estandarizar operacion.

## Contexto

> La regla de jornada oficial ya esta definida en `diario/RESUMEN-HORAS.md`:
> - Lunes-Miercoles: 9h
> - Jueves-Viernes: 8h
>
> Corte al inicio de este plan (marzo 2026):
> - HH esperadas: 190
> - HH registradas: 43
> - HH faltantes: 148
>
> El detalle por fecha pendiente queda documentado en:
> - `planificacion/2026-03-31-informe-hh-marzo-pendiente.md`

## Tareas

- [ ] Publicar informe corto de HH pendientes de marzo y dejarlo como insumo oficial para `workspace/vault` → entregable: `planificacion/2026-03-31-informe-hh-marzo-pendiente.md`
- [ ] Ejecutar en `workspace/vault` el cierre de HH marzo en `diario/2026/03/*.md` hasta faltante cero y reportar evidencia final → entregable: actualizacion en notas diarias + resumen final en informe
- [ ] Reforzar plantilla PR y bloquear PR vacias o incompletas para todo el repo → entregable: `.github/PULL_REQUEST_TEMPLATE.md` + `.github/workflows/pr-body-quality.yml`
- [ ] Dejar una skill principal por frente, alineada a su `SCOPE` y referenciada en handoff/memoria → entregable: skill planning creada + tareas explicitas para vault/dashboard/ms365

## Criterios de Aceptacion

- [ ] `workspace/vault` reporta HH faltantes de marzo en cero con evidencia por fecha.
- [ ] Existe informe corto de pendientes iniciales y cierre final de marzo.
- [ ] PR con body vacio o placeholders falla automaticamente en CI.
- [ ] PR con contenido util y checks minimos completos pasa el gate.
- [ ] Existe skill principal de `workspace/planning`.
- [ ] Los handoffs de `workspace/vault`, `workspace/dashboard` y `workspace/ms365` incluyen tarea explicita de crear su skill principal en su rama.

## Archivos a Crear/Modificar

| Accion | Ruta | Descripcion |
|--------|------|-------------|
| Crear | `planificacion/2026-03-31-informe-hh-marzo-pendiente.md` | Informe base de HH faltantes por fecha |
| Modificar | `planificacion/memory-handoff-vault.md` | Handoff urgente para cierre HH + skill principal vault |
| Modificar | `planificacion/memory-handoff-dashboard.md` | Tarea skill principal dashboard |
| Modificar | `planificacion/memory-handoff-ms365.md` | Tarea skill principal ms365 |
| Crear | `planificacion/skill-principal-planning.md` | Skill principal de planning/admin |
| Modificar | `.github/PULL_REQUEST_TEMPLATE.md` | Plantilla PR obligatoria |
| Crear | `.github/workflows/pr-body-quality.yml` | Gate de calidad para body de PR |
| Crear | `gestion-trabajo/planes-activos/cierre-hh-marzo-control-pr-y-skills-workspace.md` | Capa visual del plan urgente |
| Modificar | `gestion-trabajo/tablero-maestro.md` | Visibilidad del plan urgente y handoffs |
| Modificar | `gestion-trabajo/backlog-iniciativas.md` | Lista visible actualizada |
| Modificar | `planificacion/backlog.md` | Backlog tecnico actualizado |

## Dependencias

> - `workspace/vault` debe ejecutar la carga de HH en sus notas diarias.
> - La validacion de PR depende de GitHub Actions habilitado en el repositorio.

## Workspace Visual

> Nota visible: `gestion-trabajo/planes-activos/cierre-hh-marzo-control-pr-y-skills-workspace.md`
> Estado visible: `listo-para-ejecutar`
> Siguiente accion: `workspace/vault` cierra HH marzo y reporta faltantes en cero.

## Notas para workspace/vault

> Este frente (planning) no carga HH directamente en `diario/`; solo define y asigna la ejecucion.
> Ejecutar con prioridad de hoy:
> 1. completar HH faltantes de marzo
> 2. publicar evidencia de cierre
> 3. crear skill principal del frente vault
