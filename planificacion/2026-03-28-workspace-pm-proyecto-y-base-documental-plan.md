---
fecha: 2026-03-28
iniciativa: "Workspace PM — proyecto y base documental"
lineamiento: "—"
estado: completado
ejecutor: workspace/vault
---

## Objetivo

> Formalizar el PM Workspace como proyecto transversal dentro del vault y construir su base documental mínima para gobernar backlog, reporting, visualización ejecutiva e integración con MS365 sin reemplazar las fuentes corporativas de ejecución.

## Contexto

> El repositorio ya dejó de ser solo un apoyo documental del Plan Gobernanza TI. Hoy concentra varias capacidades en paralelo: reporting de trabajo, gestión del portafolio, documentación del lineamiento estratégico 2026, integración con MS365 y una nueva capa visual de planificación en `gestion-trabajo/`.
>
> Esa capacidad ya funciona como un sistema de trabajo del PM, pero todavía no está modelada como proyecto formal dentro de `proyectos/`, por lo que compite informalmente con el resto de iniciativas y no tiene backlog, roadmap ni contenedor propio dentro del vault.
>
> La capa técnica existente en `planificacion/` y la capa visible en `gestion-trabajo/` son insumos del nuevo proyecto, no trabajo a rehacer. El objetivo de este plan es pedir a `workspace/vault` que construya el proyecto `proyectos/workspace-pm/` y lo use para ordenar lo ya avanzado.

## Tareas

- [x] Crear el proyecto `proyectos/workspace-pm/` con un `00-indice.md` que actúe como puerta de entrada del sistema de trabajo del PM → entregable: `proyectos/workspace-pm/00-indice.md`
- [x] Documentar el contexto estratégico del PM Workspace: por qué existe, qué problema resuelve, qué capacidades integra y quiénes son sus stakeholders → entregable: `proyectos/workspace-pm/00-contexto/contexto-workspace-pm.md`
- [x] Documentar la arquitectura operativa por capas, dejando explícito el rol de MS365, repo/integración, Obsidian y dashboard web → entregable: `proyectos/workspace-pm/00-contexto/arquitectura-operativa.md`
- [x] Documentar el modelo de fuentes de verdad y reglas operativas para evitar duplicación entre Planner, Obsidian, SharePoint y dashboard → entregable: `proyectos/workspace-pm/00-contexto/fuentes-de-verdad.md`
- [x] Documentar el stack recomendado de herramientas y decisiones activas, incluyendo qué usar ahora y qué posponer → entregable: `proyectos/workspace-pm/00-contexto/stack-herramientas.md`
- [x] Crear un roadmap del proyecto por fases (fundación, reporting, visibilidad ejecutiva, madurez) para que el avance pueda gestionarse como trabajo incremental → entregable: `proyectos/workspace-pm/roadmap-workspace-pm.md`
- [x] Crear un backlog propio del proyecto con líneas de trabajo, prioridades y próximos pasos, alineado con `gestion-trabajo/` y con los planes técnicos existentes → entregable: `proyectos/workspace-pm/backlog-workspace-pm.md`
- [x] Documentar la integración con MS365 y el rol del repositorio actual como activo ya avanzado del proyecto → entregable: `proyectos/workspace-pm/integracion-ms365.md`
- [x] Actualizar `00-dashboard.md` y `gestion-trabajo/00-indice-gestion-trabajo.md` para enlazar el nuevo proyecto como parte del sistema oficial de trabajo → entregable: `00-dashboard.md` y `gestion-trabajo/00-indice-gestion-trabajo.md`

## Criterios de Aceptación

- [x] Existe un proyecto formal `proyectos/workspace-pm/` visible desde el vault, con índice y estructura mínima navegable.
- [x] La documentación del proyecto explica con claridad por qué existe, qué integra, qué ya está construido y cuál es su siguiente etapa.
- [x] Queda explícito que Planner sigue siendo la fuente de verdad de ejecución y que Obsidian complementa con conocimiento, reporting y visualización.
- [x] El proyecto deja priorizado el stack recomendado: Dataview/DataviewJS, Canvas, Excalidraw, Mermaid y Kanban solo para backlog humano.
- [x] El roadmap y backlog del proyecto permiten tratar este frente como trabajo incremental y no como una mejora difusa del repositorio.
- [x] `00-dashboard.md` y `gestion-trabajo/00-indice-gestion-trabajo.md` enlazan el nuevo proyecto sin romper la navegación actual.

## Archivos a Crear/Modificar

| Acción | Ruta | Descripción |
|--------|------|-------------|
| Crear | `proyectos/workspace-pm/00-indice.md` | Índice principal del proyecto transversal PM Workspace |
| Crear | `proyectos/workspace-pm/00-contexto/contexto-workspace-pm.md` | Contexto estratégico, problema y alcance |
| Crear | `proyectos/workspace-pm/00-contexto/arquitectura-operativa.md` | Arquitectura por capas del sistema de trabajo |
| Crear | `proyectos/workspace-pm/00-contexto/fuentes-de-verdad.md` | Reglas entre Planner, Obsidian, SharePoint y dashboard |
| Crear | `proyectos/workspace-pm/00-contexto/stack-herramientas.md` | Stack recomendado y decisiones activas |
| Crear | `proyectos/workspace-pm/roadmap-workspace-pm.md` | Roadmap por fases |
| Crear | `proyectos/workspace-pm/backlog-workspace-pm.md` | Backlog propio del proyecto |
| Crear | `proyectos/workspace-pm/integracion-ms365.md` | Estado actual y objetivo de integración |
| Modificar | `00-dashboard.md` | Agregar enlace al nuevo proyecto |
| Modificar | `gestion-trabajo/00-indice-gestion-trabajo.md` | Enlazar el proyecto como contenedor formal de la capa visual |

## Dependencias

> Reutiliza como insumos ya existentes `planificacion/`, `gestion-trabajo/`, `diario/RESUMEN-HORAS.md`, `ms365-sync/` y `dashboard/`. No depende de instalar nuevos plugins ni de completar automatizaciones antes de crear la base documental.

## Workspace Visual

> Nota visible: `gestion-trabajo/planes-activos/workspace-pm-proyecto-y-base-documental-workspace.md`
> Canvas: `gestion-trabajo/planes-activos/workspace-pm-proyecto-y-base-documental-workspace.canvas`
> Estado visible: `listo-para-ejecutar`
> Siguiente acción: construir el proyecto `workspace-pm` como contenedor formal del sistema de trabajo del PM.

## Notas para workspace/vault

> No abordar este trabajo como “instalar plugins”. Abordarlo como construcción de un proyecto transversal con arquitectura, fuentes de verdad, backlog y roadmap.
>
> Reutilizar la capa visual existente en `gestion-trabajo/` y la documentación técnica en `planificacion/` como evidencia de avance ya realizado.
>
> Si durante la ejecución se detecta que falta una decisión de naming o alcance menor, mantener `workspace-pm` como nombre de trabajo y dejar la validación humana marcada con `> ⚠️ PENDIENTE:` en vez de bloquear la base documental.
