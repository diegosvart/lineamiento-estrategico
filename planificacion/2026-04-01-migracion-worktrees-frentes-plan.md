---
fecha: 2026-04-01
iniciativa: "Migración a estándar admin-driven con worktrees por frente"
lineamiento: "Cross-rama"
estado: listo-para-ejecutar
ejecutor: workspace/planning
workspace_visual: "gestion-trabajo/planes-activos/migracion-worktrees-workspace.md"
estado_visible: "en-ejecucion"
siguiente_accion: "Crear script de setup de worktrees y actualizar SCOPE/guia-admin"
---

## Objetivo

> Establecer un modelo de aislamiento físico por frente (planning, vault, ms365, dashboard) utilizando `git worktree` para profesionalizar la operación multiagente y eliminar conflictos de entorno.

## Contexto

> Actualmente, todos los agentes operan sobre la misma carpeta física. Esto genera ruido (archivos locales, `node_modules`, `dist`) y riesgo de colisiones en el estado local de Git. La memoria técnica ya menciona el estándar de worktrees pero no se ha materializado el procedimiento ni los scripts.

## Tareas

- [ ] Crear script de automatización para el usuario → entregable: `planificacion/scripts/setup-worktrees.ps1`
- [ ] Actualizar `guia-admin.md` con el flujo de administración de worktrees → entregable: `planificacion/guia-admin.md`
- [ ] Actualizar `SCOPE.md` con validación de carpeta física → entregable: `planificacion/SCOPE.md`
- [ ] Crear capa visual del plan → entregable: `gestion-trabajo/planes-activos/migracion-worktrees-workspace.md`
- [ ] Refinar `tablero-maestro.md` para reflejar el estado operativo → entregable: `gestion-trabajo/tablero-maestro.md`

## Criterios de Aceptación

- [ ] Existe un kit de herramientas (script + instrucciones) para que el usuario despliegue los worktrees.
- [ ] La `guia-admin.md` describe cómo operar en este nuevo esquema.
- [ ] El preflight (`session-start-check.ps1`) valida correctamente la carpeta física según el frente declarado.
- [ ] El tablero maestro refleja la migración como un hito completado o en curso.

## Archivos a Crear/Modificar

| Acción | Ruta | Descripción |
|--------|------|-------------|
| Crear | `planificacion/2026-04-01-migracion-worktrees-frentes-plan.md` | Este plan formal |
| Crear | `planificacion/scripts/setup-worktrees.ps1` | Script de automatización |
| Modificar | `planificacion/guia-admin.md` | Actualización de procedimientos |
| Modificar | `planificacion/SCOPE.md` | Validación de entorno físico |
| Crear | `gestion-trabajo/planes-activos/migracion-worktrees-workspace.md` | Nota operativa visible |
| Modificar | `gestion-trabajo/tablero-maestro.md` | Control operativo de la migración |

## Dependencias

> Ninguna bloqueante actual. Se recomienda haber completado el plan de "Skills por frente" para que cada worktree nazca con su identidad clara.

## Historial

> Iniciado el 2026-04-01 tras aprobación del implementation plan.

## Workspace Visual

> Nota visible: `gestion-trabajo/planes-activos/migracion-worktrees-workspace.md`
> Estado visible: `en-ejecucion`
> Siguiente acción: Implementar `setup-worktrees.ps1`.
