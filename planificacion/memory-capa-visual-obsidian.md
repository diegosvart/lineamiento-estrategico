# Memoria — Capa visual de planificación en Obsidian

## Objetivo

Representar la planificación técnica de `planificacion/` en una capa visible para humanos dentro del vault, sin exponer la carpeta técnica en el grafo.

## Principio base

- `planificacion/` sigue siendo la fuente de verdad técnica.
- `gestion-trabajo/` es la representación visible y operativa para navegación humana.
- Todo flujo activo debe existir en ambas capas.

## Artefactos visibles mínimos

- `gestion-trabajo/00-indice-gestion-trabajo.md`
- `gestion-trabajo/backlog-iniciativas.md`
- `gestion-trabajo/tablero-maestro.md`
- `gestion-trabajo/00-tablero-trabajo.canvas`
- una nota y un canvas por plan activo en `gestion-trabajo/planes-activos/`

## Regla de sincronización

Cuando cambie el estado de un plan o flujo en `planificacion/`, debe actualizarse también su representación visible en `gestion-trabajo/`.

## Uso esperado

- El humano abre Obsidian y usa `gestion-trabajo/` para entender la cola, el foco actual y los próximos pasos.
- Los agentes leen primero `planificacion/` para contratos y luego `gestion-trabajo/` para contexto visual.
