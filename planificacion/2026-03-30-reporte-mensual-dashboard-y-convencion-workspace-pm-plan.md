---
fecha: 2026-03-30
iniciativa: "Reporte mensual ejecutivo dashboard + convención workspace PM"
lineamiento: "—"
estado: listo-para-ejecutar
ejecutor: workspace/dashboard
workspace_visual: "gestion-trabajo/planes-activos/reporte-mensual-dashboard-workspace.md"
estado_visible: "listo-para-ejecutar"
siguiente_accion: "Implementar vista previa, descarga Markdown y dejar handoff a workspace/vault para actualizar documentación del workspace PM."
---

## Objetivo

> Construir en `workspace/dashboard` una vista de reporte mensual ejecutivo con selector de período, vista previa simple y descarga en Markdown a partir de `diario/YYYY/MM/*.md`, y dejar explícito el handoff documental para que `workspace/vault` actualice la convención de crecimiento de `workspace-pm`.

## Contexto

> El dashboard actual ya carga `daily notes`, iniciativas y estado de sync desde `dashboard/src/lib/vaultReader.ts`, y renderiza sus vistas desde `dashboard/src/App.tsx`. Hoy no existe una capacidad para consolidar un mes específico en un reporte enviable por correo ni una vista previa de ese contenido dentro de la UI.
>
> Las fuentes de verdad ya están definidas en el vault:
>
> - `diario/YYYY/MM/YYYY-MM-DD.md` contiene la lista `entradas` con `proyecto`, `iniciativa`, `rol`, `tipo-trabajo`, `actividad`, `horas`, `descripcion` y `estado`.
> - `proyectos/workspace-pm/guia-uso-workspace.md` y `proyectos/workspace-pm/backlog-workspace-pm.md` ya describen el sistema de trabajo, pero todavía no dejan una convención explícita y compacta para clasificar nuevos pendientes del `workspace-pm`.
>
> Este plan separa claramente la ejecución técnica del frontend y la actualización documental posterior:
>
> - `workspace/dashboard` implementa la UI, las transformaciones y la descarga.
> - `workspace/vault` actualiza la guía y el backlog del proyecto cuando el comportamiento quede validado en dashboard.

## Tareas

- [ ] Extender `dashboard/src/lib/vaultReader.ts` para leer notas desde `diario/YYYY/MM/*.md`, excluyendo archivos no válidos y dejando fuera `diario/PENDIENTES.md` → entregable: `dashboard/src/lib/vaultReader.ts`
- [ ] Definir en `dashboard/src/types/vault.ts` los tipos del reporte mensual: período, fila de actividad, resumen ejecutivo, agrupación por proyecto/iniciativa y payload exportable → entregable: `dashboard/src/types/vault.ts`
- [ ] Implementar en `dashboard/src/lib/dataTransforms.ts` funciones puras para filtrar notas por `YYYY-MM`, aplanar `entradas`, calcular KPIs, agrupar por proyecto/iniciativa y producir la estructura de vista previa/exportación → entregable: `dashboard/src/lib/dataTransforms.ts`
- [ ] Crear un generador Markdown reutilizable en `dashboard/src/lib/` que convierta el payload mensual en un reporte estático, ejecutivo y enviable por correo → entregable: `dashboard/src/lib/monthlyReportMarkdown.ts`
- [ ] Crear un componente nuevo en `dashboard/src/components/` con selector de período, vista previa simple, resumen ejecutivo y botón de descarga, reutilizando exactamente la misma estructura de datos que usa la exportación → entregable: `dashboard/src/components/MonthlyReportPanel.tsx`
- [ ] Integrar el panel en `dashboard/src/App.tsx` sin duplicar la carga de datos y sin romper `HorasChart`, `EstadoGrid`, `AlertasPanel` ni `MS365SyncStatusPanel` → entregable: `dashboard/src/App.tsx`
- [ ] Implementar la descarga con `Blob` + `URL.createObjectURL` usando el nombre `reporte-mensual-actividades-YYYY-MM-generado-YYYY-MM-DD.md` → entregable: `dashboard/src/components/MonthlyReportPanel.tsx`
- [ ] Validar localmente el dashboard con datos reales para los casos de mes con datos, mes vacío, entradas sin iniciativa, entradas sin descripción y exclusión de `PENDIENTES.md` → entregable: validación local en `workspace/dashboard`
- [ ] Dejar handoff explícito para `workspace/vault` indicando que, una vez validada la funcionalidad, debe actualizar `proyectos/workspace-pm/guia-uso-workspace.md` y `proyectos/workspace-pm/backlog-workspace-pm.md` con la convención de crecimiento y la nueva línea de trabajo del reporte mensual → entregable: sección final de este plan + referencia visible en `gestion-trabajo/`

## Criterios de Aceptación

- [ ] El dashboard carga datos desde `diario/YYYY/MM/*.md` y sigue excluyendo `diario/PENDIENTES.md`.
- [ ] El usuario puede elegir un período `YYYY-MM` y ver una vista previa simple del reporte mensual dentro del dashboard.
- [ ] La vista previa muestra al menos: mes seleccionado, fecha de generación, HH totales, cantidad de actividades, proyectos involucrados, iniciativas involucradas, resumen agrupado por proyecto y un detalle consolidado del mes.
- [ ] El botón de descarga genera un archivo `.md` cuyo contenido coincide con la vista previa y cuyo nombre sigue exactamente el patrón `reporte-mensual-actividades-YYYY-MM-generado-YYYY-MM-DD.md`.
- [ ] El Markdown exportado no contiene wikilinks, bloques Dataview ni sintaxis dependiente de Obsidian.
- [ ] `HorasChart`, `EstadoGrid`, `AlertasPanel` y `MS365SyncStatusPanel` siguen renderizando sin regresiones.
- [ ] Queda explícito en la documentación de planning que la actualización de `workspace-pm` corresponde como follow-up a `workspace/vault`, no al frontend.

## Archivos a Crear/Modificar

| Acción | Ruta | Descripción |
|--------|------|-------------|
| Modificar | `dashboard/src/lib/vaultReader.ts` | Leer daily notes desde subcarpetas por año/mes |
| Modificar | `dashboard/src/types/vault.ts` | Tipos del reporte mensual |
| Modificar | `dashboard/src/lib/dataTransforms.ts` | Transformaciones y agregaciones para reporte mensual |
| Crear | `dashboard/src/lib/monthlyReportMarkdown.ts` | Generador Markdown del reporte mensual |
| Crear | `dashboard/src/components/MonthlyReportPanel.tsx` | Vista previa + selector de período + descarga |
| Modificar | `dashboard/src/App.tsx` | Integrar el nuevo panel en el dashboard |
| Modificar | `planificacion/memory-handoff-dashboard.md` | Registrar este entregable como prioridad concreta del frente dashboard |

## Dependencias

> Depende de que `diario/YYYY/MM/*.md` siga siendo la fuente consolidada de HH y actividades del workspace. La actualización documental de `proyectos/workspace-pm/` queda como handoff posterior para `workspace/vault`.

## Workspace Visual

> Nota visible: `gestion-trabajo/planes-activos/reporte-mensual-dashboard-workspace.md`
> Canvas: no requerido para esta iteración
> Estado visible: `listo-para-ejecutar`
> Siguiente acción: `workspace/dashboard` implementa la vista previa y la descarga; luego `workspace/vault` actualiza la guía y backlog del `workspace-pm`.

## Notas para workspace/dashboard

> Mantener toda la lógica de transformación fuera del componente visual. El componente debe consumir un payload mensual ya preparado.
>
> La vista previa y la exportación deben salir de la misma estructura de datos para evitar divergencias.
>
> El reporte es estático, ejecutivo y regenerable: cada descarga produce un archivo nuevo del lado del usuario, sin escribir archivos dentro del repo.
>
> No mover a frontend ninguna lógica de normalización que pertenezca a `workspace/vault`; el dashboard solo debe leer `daily notes` ya consolidadas y transformarlas para visualización/exportación.
