# Memoria — Flujo intake de tareas del vault

## Objetivo

Definir el contrato de entrevista guiada para ingresar nuevas tareas al vault usando catálogos canónicos y persistencia inicial en `diario/`.

## Entrada oficial

- Comando: `/vault-task add`
- Rama dueña: `workspace/vault`
- Patrón base: `/vault-timesheet add`

## Orden de la entrevista

1. `fecha`
2. `proyecto`
3. `iniciativa` si `proyecto = Plan Gobernanza TI`
4. `rol`
5. `actividad`
6. `tipo-trabajo` autoderivado desde `actividad`, con opción de override
7. `modalidad`
8. `horas`
9. `descripcion`
10. `estado`

## Catálogos a reutilizar

- Proyectos
- Iniciativas
- Roles
- Actividades por rol
- Tipos de trabajo
- Modalidades
- Estados

La fuente canónica inicial para estos catálogos es `.claude/commands/vault-timesheet.md`.

## Reglas de persistencia

- Si existe `fecha`, persistir en `diario/YYYY-MM-DD.md`.
- Si no existe `fecha`, persistir en `diario/PENDIENTES.md`.
- No crear nota separada de tarea en esta primera versión.
- Siempre recalcular `horas-total` cuando se escriba en un diario con fecha.

## Validaciones mínimas

- `proyecto` debe existir en catálogo.
- `iniciativa` debe existir en catálogo cuando aplique.
- `rol` debe existir en catálogo.
- `actividad` debe pertenecer al rol elegido.
- `tipo-trabajo` debe respetar catálogo si el usuario sobreescribe el valor sugerido.
- `horas` debe ser múltiplo de 0.5 entre 0.5 y 12.
- `estado` debe existir en catálogo.

## Confirmación esperada

El flujo debe terminar con un resumen legible de la tarea agregada, indicando:

- archivo destino
- proyecto/iniciativa
- rol/actividad
- horas
- estado

## Relación con la capa visible

Si la tarea agregada impacta un plan activo o un flujo en curso, la sesión debe dejar
explícito en `gestion-trabajo/tablero-maestro.md` o en el canvas del plan cuál fue el avance.

## No alcance

- No editar tareas existentes.
- No borrar tareas existentes.
- No crear lógica especial para dashboard en este flujo.
