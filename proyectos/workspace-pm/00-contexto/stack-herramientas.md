---
aliases:
  - Stack Herramientas Workspace PM
tags:
  - activo
---

**Proyecto:** [[proyectos/workspace-pm/00-indice|Workspace PM]]

# Stack de Herramientas — Decisiones activas

## Stack recomendado

| Herramienta | Capa | Uso | Prioridad | Estado |
|-------------|------|-----|-----------|--------|
| Dataview DQL | Conocimiento | Queries simples en notas (listas, tablas de estado) | Alta | Activo |
| DataviewJS | Conocimiento | Dashboards ricos en RESUMEN-HORAS.md (calendarios, barras, KPIs) | Alta | Activo |
| Canvas | Visual | Mapas de planes activos, tablero de trabajo | Alta | Activo |
| Excalidraw | Visual | Diagramas de arquitectura, flujos de proceso | Media | Activo |
| Mermaid | Conocimiento | Diagramas inline en notas (flowchart, sequence) | Media | Disponible |
| Kanban | Visual | Backlog visual humano únicamente | Baja | Solo para backlog |
| Templater | Conocimiento | Templates parametrizados para nuevas notas | Media | Disponible |
| Tasks | Conocimiento | Tracking de tareas con fechas en vault | Baja | Posponer |

## Qué usar ahora vs qué posponer

**Usar ahora:**
- DataviewJS para RESUMEN-HORAS.md (ya implementado)
- Canvas para tablero maestro y planes activos (ya implementado)
- Dataview DQL para queries simples en índices

**Posponer:**
- Tasks plugin — agrega complejidad; Planner es la fuente de tareas operativas
- Kanban — solo si se necesita backlog visual humano adicional al de `gestion-trabajo/`
- Templater — útil pero no crítico para la fase actual

## Decisiones activas

- DataviewJS habilitado en configuración de Dataview (requerido para RESUMEN-HORAS.md)
- Juggl para coloreado de nodos por tag de estado en el grafo
- Git plugin para auto-backup del vault
- Templater: **no instalado** (verificado 2026-03-29 — no existe `.obsidian/plugins/templater-obsidian/`). Posponer hasta que sea necesario.
