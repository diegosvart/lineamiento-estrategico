# Memoria — Procedimiento transversal de sesiones

## Objetivo

Hacer que todas las ramas trabajen bajo el mismo flujo operativo de inicio a fin, con actualización técnica y visual en cada sesión.

## Inicio de sesión obligatorio

1. `git checkout [rama]`
2. `git merge desarrollo`
3. Leer `planificacion/MEMORY.md`
4. Leer el handoff de la rama
5. Leer `gestion-trabajo/tablero-maestro.md`
6. Identificar flujos activos y siguiente acción de la rama

Si la rama actual no coincide con el `SCOPE` del agente, corregirla antes de leer, ejecutar o editar cualquier artefacto.

## Cierre de sesión obligatorio

1. Resumir trabajo realizado
2. Registrar el estado actual del flujo trabajado
3. Dejar handoff explícito
4. Actualizar referencia visible si el foco cambió
5. Señalar cambios fuera de scope detectados

## Interfaces documentales

- `/session-start` debe reportar memoria técnica + tablero visible
- `/session-end` debe dejar estado de flujo + handoff + impacto visible
- `/workflow-board refresh` actualiza la capa visible desde el estado técnico

## Regla operativa

Una tarea no está cerrada si solo cambió el artefacto técnico o solo cambió la vista visible. Deben quedar consistentes ambas capas cuando el flujo siga activo.
