# Handoff — workspace/vault

## Objetivo

Consumir el staging de tareas y ampliar el vault como fuente principal de contexto, consolidando información sin perder trazabilidad ni romper catálogos canónicos.

## Alcance

- Leer `ms365-sync/output/*.yaml`.
- Integrar tareas a `diario/*.md` cuando corresponda.
- Mantener consistencia con proyectos, iniciativas, roles y estados válidos.
- Dejar rastro documental cuando una importación revele un gap del catálogo.
- Profundizar el detalle de lineamientos `L*` cuando falte contexto útil para interpretar tareas y horas.
- Agregar o completar contexto de proyectos cuando la información actual no permita navegar o analizar el trabajo con claridad.
- Fortalecer la trazabilidad entre tarea, iniciativa, proyecto, lineamiento y horas consumidas.

## No alcance

- No cambiar el contrato de staging sin registrarlo.
- No cargar lógica de frontend en el vault.
- No sobreescribir datos manuales sin una regla explícita.
- No priorizar mejoras secundarias que no aporten a contexto, lineamientos o consolidación de datos.

## Definición de terminado

- Las entradas consolidadas respetan el schema de daily notes.
- La procedencia desde Planner sigue siendo trazable.
- Los catálogos no quedan ambiguos después de la consolidación.
- Los lineamientos relevantes tienen contexto suficiente para relacionar trabajo ejecutado con objetivo y estado.
- Los proyectos relevantes tienen contexto mínimo útil para navegación posterior desde dashboard o revisión ejecutiva.

## Tareas prioritarias

- Completar notas o secciones faltantes para que cada lineamiento `L*` tenga objetivo, alcance, estado y relación con iniciativas.
- Agregar contexto de proyecto cuando falten objetivo, alcance, riesgos, dependencias o relación con tareas importadas.
- Asegurar que las entradas de `diario/` puedan vincularse claramente con proyecto, iniciativa y lineamiento.
- Registrar gaps documentales detectados durante la consolidación en vez de dejar ambigüedad silenciosa.

## Buenas prácticas

- Preferir cambios pequeños y verificables.
- Marcar pendientes con `> ⚠️ PENDIENTE:` cuando falte validación humana.
- Actualizar índices o notas de contexto solo si la nueva información lo justifica.
- Mantener la documentación suficientemente estructurada para que el dashboard consuma datos sin depender de interpretación manual.

## Si cambias algo importante

Actualizar primero `planificacion/memory-contrato-tareas-y-horas.md` o esta memoria de handoff.
