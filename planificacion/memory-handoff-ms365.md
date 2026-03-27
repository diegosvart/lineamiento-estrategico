# Handoff — workspace/ms365

## Objetivo

Dejar un flujo confiable de carga de tareas desde Planner hacia `ms365-sync/output/` como staging validable por otras ramas.

## Alcance

- Revisar `config.json` y GUIDs necesarios.
- Ejecutar `sync_planner_to_vault.py --dry-run`.
- Ajustar el mapeo si faltan campos o catálogos.
- Escribir salida consistente en `ms365-sync/output/`.
- Asegurar que el staging permita a `workspace/vault` enriquecer tareas con contexto de proyecto y lineamiento sin perder trazabilidad de origen.

## Tareas prioritarias

- Verificar que cada tarea importada tenga suficiente información para vincularse a proyecto e iniciativa.
- Documentar excepciones de mapeo cuando Planner no entregue contexto suficiente.
- Mantener identificadores estables para evitar duplicaciones o pérdida de trazabilidad entre corridas.

## No alcance

- No escribir en `diario/`.
- No modificar `proyectos/`.
- No asignar horas inventadas.

## Definición de terminado

- Existe al menos un archivo YAML de staging correcto.
- El esquema respeta el contrato documentado.
- Queda claro qué campos vienen de Planner y cuáles quedan pendientes de consolidación.
- La salida permite navegación posterior por proyecto, iniciativa y estado, aunque la consolidación final ocurra en el vault.

## Buenas prácticas

- Reutilizar la lógica existente; no reimplementar Graph innecesariamente.
- Usar `--dry-run` antes de cualquier escritura real.
- Documentar cualquier excepción de mapeo en esta memoria antes de cambiar contrato.

## Si cambias algo importante

Actualizar primero `planificacion/memory-contrato-tareas-y-horas.md`.
