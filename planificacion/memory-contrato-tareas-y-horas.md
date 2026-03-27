# Memoria — Contrato de tareas y horas

## Objetivo del contrato

Definir un flujo estable de datos entre ramas para evitar duplicación de lógica y reducir ambigüedad de integración.

## Flujo acordado

1. `workspace/ms365` extrae tareas desde Planner y escribe staging en `ms365-sync/output/*.yaml`.
2. `workspace/vault` consume ese staging y consolida la información útil en `diario/*.md` y, si aplica, en notas de soporte del vault.
3. `workspace/dashboard` lee el vault y el estado de sync solo en modo lectura para visualización local.

## Fuente de verdad por capa

- Tareas operativas importadas: `ms365-sync/output/*.yaml` como staging temporal.
- Horas consumidas consolidadas: `diario/*.md`.
- Catálogo documental y contexto: `proyectos/`.
- Visualización: `dashboard/` sin persistencia fuera de su carpeta.

## Campos mínimos esperados

### Staging de tareas

- `fecha`
- `fuente`
- `sync_timestamp`
- `tareas[].descripcion`
- `tareas[].iniciativa`
- `tareas[].proyecto`
- `tareas[].rol`
- `tareas[].estado`
- `tareas[].horas`
- `tareas[].planner_task_id`

### Consolidación en diario

- `fecha`
- `semana`
- `entradas[].proyecto`
- `entradas[].iniciativa`
- `entradas[].rol`
- `entradas[].tipo-trabajo`
- `entradas[].actividad`
- `entradas[].modalidad`
- `entradas[].horas`
- `entradas[].descripcion`
- `entradas[].estado`
- `horas-total`

## Reglas de calidad

- No escribir directo desde `ms365` a `diario/`.
- No calcular horas ficticias en el import.
- No duplicar una misma tarea importada sin una regla explícita de deduplicación.
- No mover lógica de normalización al frontend.
- Toda expansión del schema debe documentarse antes de implementarse.

## Validaciones mínimas

- El YAML de staging debe ser legible y consistente entre corridas.
- La consolidación al diario debe respetar catálogos canónicos del vault.
- El dashboard debe tolerar `horas: null` en staging y usar solo HH consolidadas para métricas finales.
