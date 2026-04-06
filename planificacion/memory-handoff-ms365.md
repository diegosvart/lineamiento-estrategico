# Handoff — workspace/ms365

## Objetivo

Dejar un flujo confiable de carga de tareas desde Planner hacia `ms365-sync/output/` como staging validable por otras ramas.

## Alcance

- Revisar `config.json` y GUIDs necesarios.
- Ejecutar `sync_planner_to_vault.py --dry-run`.
- Ajustar el mapeo si faltan campos o catálogos.
- Escribir salida consistente en `ms365-sync/output/`.
- Asegurar que el staging permita a `workspace/vault` enriquecer tareas con contexto de proyecto y lineamiento sin perder trazabilidad de origen.
- Integrar adaptador liviano con el repo externo `C:\repos\Planner_Import` usando ruta configurable.

## Tareas prioritarias

- Verificar que cada tarea importada tenga suficiente información para vincularse a proyecto e iniciativa.
- Documentar excepciones de mapeo cuando Planner no entregue contexto suficiente.
- Mantener identificadores estables para evitar duplicaciones o pérdida de trazabilidad entre corridas.
- Mantener `ms365-sync` como orquestador principal (sin migrar ownership del flujo).
- Preparar sincronización para tareas marcadas desde flujo dashboard-vault sin bloquear etapa 1-2 del MVP.
- Crear skill principal del frente ms365, alineada a `ms365-sync/SCOPE.md`, con objetivo, alcance, no alcance, entradas/salidas y checklist minimo.
  - Entregable sugerido: `ms365-sync/skill-principal-ms365.md`

## No alcance

- No escribir en `diario/`.
- No modificar `proyectos/`.
- No asignar horas inventadas.
- No acoplar el dashboard directamente al repo `Planner_Import`.

## Definición de terminado

- Existe al menos un archivo YAML de staging correcto.
- El esquema respeta el contrato documentado.
- Queda claro qué campos vienen de Planner y cuáles quedan pendientes de consolidación.
- La salida permite navegación posterior por proyecto, iniciativa y estado, aunque la consolidación final ocurra en el vault.
- La integración con `C:\repos\Planner_Import` es configurable y demostrable en `--dry-run`.
- El flujo paralelo no interrumpe la entrega del MVP dashboard-vault.

## Buenas prácticas

- Reutilizar la lógica existente; no reimplementar Graph innecesariamente.
- Usar `--dry-run` antes de cualquier escritura real.
- Documentar cualquier excepción de mapeo en esta memoria antes de cambiar contrato.
- Usar una rama temporal por tarea y no reutilizarla al cerrar.
- Si surge una tarea autodetectada durante ejecución, puede resolverse, pero debe reportarse al cierre para consolidación en planning.

## Si cambias algo importante

Actualizar primero `planificacion/memory-contrato-tareas-y-horas.md`.

## Cierre obligatorio por tarea

Cada tarea finalizada en `workspace/ms365` debe cerrar con:

- commit del trabajo (si hubo cambios),
- reporte de rama con `git branch --show-current` y `git status --short --branch`,
- reporte de PR asociado y estado de merge,
- confirmación de integración en `desarrollo`,
- confirmación explícita de si quedan cambios sin commit.
- formato estándar: `planificacion/template-status-rama.md`
