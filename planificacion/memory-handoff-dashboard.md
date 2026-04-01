# Handoff — workspace/dashboard

## Objetivo

Construir una vista local para navegar la información del vault y obtener métricas y KPI de HH consumidas, sin depender de reinterpretar manualmente el modelo documental.

## Alcance

- Visualizar HH consumidas por día, semana, proyecto y rol.
- Visualizar HH consumidas por iniciativa y, cuando exista información suficiente, por lineamiento.
- Mostrar estado de última sync de `ms365-sync/output/`.
- Reutilizar el stack React + Vite + TypeScript + Recharts ya definido.
- Separar lectura, transformación y presentación en módulos distintos.

## Tareas prioritarias

- Implementar navegación mínima por proyecto, iniciativa y período.
- Exponer métricas base: HH totales, HH por proyecto, HH por rol, HH por iniciativa.
- Exponer KPI de seguimiento: distribución de horas, concentración por proyecto, variación temporal básica y cobertura de carga.
- Diseñar la UI para que permita responder preguntas de gestión, no solo mostrar gráficos aislados.
- Implementar un reporte mensual ejecutivo con selector `YYYY-MM`, vista previa simple y descarga en Markdown a partir de `diario/YYYY/MM/*.md`.
- Crear skill principal del frente dashboard, alineada a `dashboard/SCOPE.md`, con objetivo, alcance, no alcance, entradas/salidas y checklist minimo.
  - Entregable sugerido: `dashboard/skill-principal-dashboard.md`

### Entregado (rama `feature/reporte-mensual-bitacora` / dashboard)

- **Reporte mensual:** panel `MonthlyReportPanel` en [dashboard/src/App.tsx](dashboard/src/App.tsx); selector `YYYY-MM`, vista previa y descarga usan el mismo string de [dashboard/src/lib/monthlyReportMarkdown.ts](dashboard/src/lib/monthlyReportMarkdown.ts).
- **Bitácora:** tabla alineada a la sección **J) Bitácora de Actividades** de `diario/RESUMEN-HORAS.md` (columnas Día, Proyecto, Iniciativa, Actividad, Descripción, HH; orden por fecha descendente).
- **Archivo generado:** patrón `reporte-mensual-actividades-YYYY-MM-generado-YYYY-MM-DD.md` (fecha local de generación).
- **Transformaciones:** [dashboard/src/lib/dataTransforms.ts](dashboard/src/lib/dataTransforms.ts) — `filterNotesByCalendarMonth`, `buildMonthlyBitacora`, `buildMonthlyReportPayload`, `listMonthsFromNotesDescending`.
- **Lectura diario:** [dashboard/src/lib/vaultReader.ts](dashboard/src/lib/vaultReader.ts) — glob `diario/**/*.md`, solo archivos `YYYY-MM-DD.md`; normalización de `fecha` si viene como `Date` desde YAML.

**Follow-up `workspace/vault` (no bloquea el merge del dashboard):** actualizar [proyectos/workspace-pm/guia-uso-workspace.md](proyectos/workspace-pm/guia-uso-workspace.md) y [proyectos/workspace-pm/backlog-workspace-pm.md](proyectos/workspace-pm/backlog-workspace-pm.md) con la convención del reporte mensual una vez validado en UI (según [planificacion/2026-03-30-reporte-mensual-dashboard-y-convencion-workspace-pm-plan.md](planificacion/2026-03-30-reporte-mensual-dashboard-y-convencion-workspace-pm-plan.md)).

## No alcance

- No escribir fuera de `dashboard/`.
- No asumir que staging equivale a HH consumidas.
- No duplicar la normalización que corresponde a `workspace/vault`.
- No exportar contenido dependiente de Obsidian; el reporte descargado debe ser Markdown legible fuera del vault.

## Definición de terminado

- El dashboard renderiza datos reales del vault.
- Las métricas de horas salen de `diario/*.md`.
- El frontend sigue funcionando si existe staging con `horas: null`.
- Las transformaciones de UI están aisladas de la extracción de datos.
- Existe al menos una navegación útil para revisar contexto y no solo una vista estática.
- Los KPI visibles permiten interpretar consumo de horas y avance operativo con mínimo esfuerzo.
- El reporte mensual puede previsualizarse en dashboard y descargarse como `.md` con nombre fechable sin escribir archivos en el repo.

## Buenas prácticas

- Tipar explícitamente el contrato de datos.
- Mantener componentes pequeños y con una sola responsabilidad.
- Validar con datos reales antes de optimizar diseño.
- Evitar lógica de negocio enterrada dentro de componentes visuales.
- Priorizar legibilidad analítica sobre complejidad visual innecesaria.
- Usar una rama temporal por tarea y no reutilizarla al cerrar.
- Si surge una tarea autodetectada durante ejecución, puede resolverse, pero debe reportarse al cierre para consolidación en planning.

## Si cambias algo importante

Actualizar primero `planificacion/memory-contrato-tareas-y-horas.md` o esta memoria de handoff.

## Cierre obligatorio por tarea

Cada tarea finalizada en `workspace/dashboard` debe cerrar con:

- commit del trabajo (si hubo cambios),
- reporte de rama con `git branch --show-current` y `git status --short --branch`,
- reporte de PR asociado y estado de merge,
- confirmación de integración en `desarrollo`,
- confirmación explícita de si quedan cambios sin commit.
- formato estándar: `planificacion/template-status-rama.md`
