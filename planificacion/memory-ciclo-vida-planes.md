# Memoria — Ciclo de vida de planes

## Objetivo

Definir las cuatro operaciones canónicas para gestionar planes desde `workspace/planning` con trazabilidad documental completa.

## Operaciones oficiales

### `/plan add`

- Rama dueña: `workspace/planning`
- Crea un archivo nuevo desde `planificacion/templates/plan-iniciativa.md`
- Nombre esperado: `planificacion/YYYY-MM-DD-[iniciativa]-plan.md`
- Estado inicial: `borrador`
- Debe actualizar `planificacion/backlog.md`
- Debe crear o actualizar la representación visible en `gestion-trabajo/planes-activos/`

### `/plan update`

- Rama dueña: `workspace/planning`
- Edita un plan existente sin cambiar su identidad
- Puede modificar:
  - frontmatter
  - objetivo
  - contexto
  - tareas
  - criterios de aceptación
  - dependencias
  - notas para workspace/vault
- Puede mover el plan entre bloques de backlog según estado
- Debe actualizar nota visible, canvas y tablero maestro si cambia foco o estado

### `/plan archive`

- Rama dueña: `workspace/planning`
- Reemplaza el concepto de eliminación física
- No borra el archivo
- Cambia `estado` a `archivado`
- Debe registrar:
  - `archivado_el`
  - `archivado_por`
  - `motivo_archivo`
- Debe sacar el plan de bloques activos de `backlog.md`
- Debe mover la referencia visible a historial y conservar el canvas como histórico

### `/plan iterate`

- Rama dueña: `workspace/planning`
- Se usa cuando el cambio es estructural, no solo editorial
- Crea un nuevo archivo de plan que referencia al anterior
- El plan previo queda archivado o marcado como reemplazado
- El nuevo plan pasa a ser el plan activo en `backlog.md`
- El nuevo plan debe pasar a ser el nodo vigente en `gestion-trabajo/`

## Criterio para update vs iterate

- Usar `update` si el plan conserva el mismo objetivo, alcance y estrategia base.
- Usar `iterate` si cambia el enfoque, el alcance o la estrategia de ejecución.

## Campos adicionales recomendados

Para planes archivados o iterados, permitir los siguientes metadatos en frontmatter:

- `archivado_el`
- `archivado_por`
- `motivo_archivo`
- `iteracion_de`
- `reemplaza_plan`

## Reglas de backlog

- `borrador` → bloque `En Planificación`
- `listo-para-ejecutar` → bloque `Listos para Ejecutar`
- `completado` → bloque `Completados`
- `archivado` → no permanece en bloques activos; se referencia en una sección de historial

## Regla de visibilidad

Todo plan en `borrador`, `listo-para-ejecutar` o `en-ejecucion` debe tener:

- nota visible de trabajo
- referencia en `gestion-trabajo/backlog-iniciativas.md`
- presencia en `gestion-trabajo/tablero-maestro.md`

## Trazabilidad mínima

Ningún plan se elimina sin dejar rastro. Toda sustitución debe permitir responder:

- cuál era el plan anterior
- por qué se archivó o reemplazó
- cuál es ahora el plan vigente
