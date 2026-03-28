---
fecha: YYYY-MM-DD
iniciativa: "[nombre exacto del catálogo canónico]"
lineamiento: "[L2|L3|L4|L5]"
estado: borrador
ejecutor: workspace/vault
---

<!-- Campos opcionales para planes archivados o iterados:
archivado_el: YYYY-MM-DD
archivado_por: workspace/planning
motivo_archivo: "solo si estado = archivado"
iteracion_de: "ruta o identificador del plan previo si aplica"
reemplaza_plan: "ruta del plan reemplazado si aplica"
workspace_visual: "gestion-trabajo/planes-activos/[slug].md"
estado_visible: "definido|listo-para-ejecutar|en-ejecucion|bloqueado|handoff-pendiente|completado|archivado"
siguiente_accion: "acción humana o de agente visible en tablero"
-->

## Objetivo

> Descripción concisa (1-2 oraciones) de qué se quiere lograr con este plan.

## Contexto

> Estado actual de la iniciativa. Qué existe hoy en el vault, qué está pendiente.
> Citar archivos relevantes: `proyectos/[lineamiento]/[iniciativa]/`

## Tareas

- [ ] [acción concreta] → entregable: `[ruta/archivo-en-vault.md]`
- [ ] [acción concreta] → entregable: `[ruta/archivo-en-vault.md]`
- [ ] [acción concreta] → entregable: `[ruta/archivo-en-vault.md]`

## Criterios de Aceptación

> Condiciones medibles que indican que el plan está completado.

- [ ] [criterio medible 1]
- [ ] [criterio medible 2]
- [ ] [criterio medible 3]

## Archivos a Crear/Modificar

| Acción | Ruta | Descripción |
|--------|------|-------------|
| Crear | `proyectos/[lineamiento]/[iniciativa]/[archivo].md` | [descripción] |
| Modificar | `proyectos/[lineamiento]/00-indice.md` | Agregar link a nuevo archivo |

## Dependencias

> Planes o tareas que deben completarse antes de ejecutar este plan.
> Dejar vacío si no hay dependencias.

## Historial

> Usar esta sección cuando el plan se archive o itere.
> Registrar fecha, motivo y referencia al plan previo o siguiente según corresponda.

## Workspace Visual

> Registrar la ruta de la nota visible y del `.canvas` asociado en `gestion-trabajo/`.
> Indicar también el estado visible y la siguiente acción sugerida.

## Notas para workspace/vault

> Contexto adicional que Claude Code necesita para ejecutar correctamente.
> Por ejemplo: convenciones específicas, links existentes, decisiones de diseño.
