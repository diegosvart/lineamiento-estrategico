# Memoria — Interfaces visuales y procedimentales

## Objetivo

Documentar las interfaces que sincronizan la fuente técnica `planificacion/` con la capa visible `gestion-trabajo/`.

## `/plan workspace`

- Rama dueña: `workspace/planning`
- Propósito: crear o actualizar la nota operativa y el `.canvas` de un plan activo
- Salida mínima:
  - `gestion-trabajo/planes-activos/[slug].md`
  - `gestion-trabajo/planes-activos/[slug].canvas`

## `/workflow-board refresh`

- Rama dueña: `workspace/planning`
- Propósito: refrescar el tablero maestro visible desde el backlog técnico y el estado de planes
- Salida mínima:
  - `gestion-trabajo/tablero-maestro.md`
  - `gestion-trabajo/00-tablero-trabajo.canvas`

## `/session-start`

- Comportamiento transversal
- Debe leer memoria técnica y tablero visible
- Debe informar foco, handoffs pendientes y siguiente acción recomendada

## `/session-end`

- Comportamiento transversal
- Debe cerrar con estado del flujo, handoff y referencia al impacto visible

## Regla

Estas interfaces pueden comenzar como contrato documental, pero toda sesión debe comportarse como si ya existieran de forma obligatoria.
