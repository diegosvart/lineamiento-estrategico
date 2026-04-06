# Memoria — Contrato de tareas y horas

## Objetivo del contrato

Definir un flujo estable de datos entre ramas para evitar duplicación de lógica y reducir ambigüedad de integración.

## Flujo acordado

1. `workspace/ms365` extrae tareas desde Planner y escribe staging en `ms365-sync/output/*.yaml`.
2. `workspace/vault` consume ese staging y consolida la información útil en `diario/*.md` y, si aplica, en notas de soporte del vault.
3. `workspace/dashboard` visualiza y puede iniciar altas/ediciones/cancelaciones via API local, aplicando mutaciones solo sobre frontmatter YAML del vault.

## Fuente de verdad por capa

- Tareas operativas importadas: `ms365-sync/output/*.yaml` como staging temporal.
- Horas consumidas consolidadas: `diario/*.md`.
- Catálogo documental y contexto: `proyectos/`.
- Escritura iniciada por dashboard: API local que muta `diario/` bajo reglas canónicas del vault.
- Visualización: `dashboard/` mantiene lectura de métricas y estado de sync.

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

### Campos de trazabilidad para CRUD dashboard-vault

- `entradas[].task_id` (id estable para edición/cancelación sin ambigüedad)
- `entradas[].origen` (valor sugerido: `dashboard-manual` cuando aplique)
- `entradas[].actualizado_en` (timestamp ISO de la última mutación)

> `horas-total` fue eliminado (2026-03-30). El total se calcula en runtime por DataviewJS desde `entradas[].horas`. No existe como campo YAML.

## Regla del body de Daily Notes

El body de cada `diario/YYYY/MM/YYYY-MM-DD.md` contiene un bloque DataviewJS que renderiza la tabla de entradas y el total automáticamente desde el YAML frontmatter. El único punto de edición es `entradas[]` en YAML — el body nunca se edita manualmente.

## Reglas de calidad

- No escribir directo desde `ms365` a `diario/`.
- No calcular horas ficticias en el import.
- No duplicar una misma tarea importada sin una regla explícita de deduplicación.
- No mover lógica de normalización al frontend.
- No permitir borrado físico desde dashboard en esta etapa; solo cancelación lógica (`estado: Cancelado`).
- No editar el body Dataview de las daily notes desde ningún flujo de CRUD.
- Toda expansión del schema debe documentarse antes de implementarse.

## Validaciones mínimas

- El YAML de staging debe ser legible y consistente entre corridas.
- La consolidación al diario debe respetar catálogos canónicos del vault.
- El dashboard debe tolerar `horas: null` en staging y usar solo HH consolidadas para métricas finales.
- El CRUD iniciado desde dashboard debe:
  - validar catálogo canónico (`proyecto`, `iniciativa`, `rol`, `actividad`, `tipo-trabajo`, `modalidad`, `estado`)
  - persistir en `diario/YYYY/MM/YYYY-MM-DD.md` o `diario/PENDIENTES.md`
  - permitir edición por `task_id` y cancelación lógica sin borrado físico

## Integración ms365 paralela

- El frente `workspace/ms365` integra un adaptador liviano con repo externo configurable (`C:\repos\Planner_Import`).
- `ms365-sync` mantiene ownership de orquestación y salida en `ms365-sync/output/`.
- Esta integración no bloquea el MVP dashboard-vault.
