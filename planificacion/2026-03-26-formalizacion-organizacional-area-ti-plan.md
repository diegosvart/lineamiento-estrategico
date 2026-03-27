---
fecha: 2026-03-26
iniciativa: "Formalización organizacional área TI"
lineamiento: "L2"
estado: listo-para-ejecutar
ejecutor: workspace/vault
---

## Objetivo

> Dejar formalizada la estructura organizacional base del área TI para habilitar G1 y destrabar la ejecución de L3 y la transferencia de conocimiento desde el consultor externo.

## Contexto

> La iniciativa ya existe en el vault como categoría prioritaria dentro de L2 y está marcada como pendiente de ejecución. En [L2-estructuracion-area-ti.md](C:\Users\dmorales\OneDrive - Cosemar\PM\Consultoria\repos\plan-lineamiento-estrategico-2026\plan-lineamiento-estrategico-2026\proyectos\plan-gobernanza-ti\L2-estructuracion-area\L2-estructuracion-area-ti.md) se declara que L2 es el punto de arranque del plan y que la formalización organizacional es prerequisito operativo para el resto del lineamiento.
>
> La ficha de la iniciativa en [L2-formalizacion-organizacional.md](C:\Users\dmorales\OneDrive - Cosemar\PM\Consultoria\repos\plan-lineamiento-estrategico-2026\plan-lineamiento-estrategico-2026\proyectos\plan-gobernanza-ti\L2-estructuracion-area\formalizacion-organizacional\L2-formalizacion-organizacional.md) ya define cuatro tareas base: propuesta y validación del organigrama, más definición y validación del rol Data Governance Manager.
>
> Además, [L2-reduccion-dependencia.md](C:\Users\dmorales\OneDrive - Cosemar\PM\Consultoria\repos\plan-lineamiento-estrategico-2026\plan-lineamiento-estrategico-2026\proyectos\plan-gobernanza-ti\L2-estructuracion-area\reduccion-dependencia\L2-reduccion-dependencia.md) declara esta iniciativa como precondición explícita. Por impacto de calendario, esta formalización debe quedar documentada antes del 30 de marzo de 2026 para sostener G1.

## Tareas

- [ ] Consolidar la ficha de la iniciativa con objetivo ejecutivo, alcance, sponsor, riesgos y decisiones pendientes → entregable: `proyectos/plan-gobernanza-ti/L2-estructuracion-area/formalizacion-organizacional/L2-formalizacion-organizacional.md`
- [ ] Documentar en una nota dedicada la propuesta de organigrama TI con roles, responsabilidades, líneas de reporte y dominios de decisión → entregable: `proyectos/plan-gobernanza-ti/L2-estructuracion-area/formalizacion-organizacional/organigrama-area-ti.md`
- [ ] Documentar en una nota dedicada la definición formal del rol Data Governance Manager, incluyendo mandato, autonomía, interfaces con JTI y relación con L3/L4 → entregable: `proyectos/plan-gobernanza-ti/L2-estructuracion-area/formalizacion-organizacional/rol-data-governance-manager.md`
- [ ] Actualizar el índice de L2 para reflejar los nuevos artefactos y dejar trazabilidad clara de que la formalización organizacional habilita reducción de dependencia y L3 → entregable: `proyectos/plan-gobernanza-ti/L2-estructuracion-area/L2-estructuracion-area-ti.md`
- [ ] Dejar registradas las validaciones pendientes con JTI como próximos pasos fechables dentro de la iniciativa para que `workspace/vault` pueda cerrar la ejecución sin rediseñar la estructura → entregable: `proyectos/plan-gobernanza-ti/L2-estructuracion-area/formalizacion-organizacional/L2-formalizacion-organizacional.md`

## Criterios de Aceptación

- [ ] La iniciativa [L2-formalizacion-organizacional.md](C:\Users\dmorales\OneDrive - Cosemar\PM\Consultoria\repos\plan-lineamiento-estrategico-2026\plan-lineamiento-estrategico-2026\proyectos\plan-gobernanza-ti\L2-estructuracion-area\formalizacion-organizacional\L2-formalizacion-organizacional.md) queda con objetivo, alcance, sponsor o responsable validador, próximos pasos, al menos un riesgo activo y decisiones pendientes explícitas.
- [ ] Existen dos notas nuevas, una para el organigrama y otra para el rol DGM, ambas con YAML válido, wikilinks correctos y contenido suficiente para revisión con JTI.
- [ ] [L2-estructuracion-area-ti.md](C:\Users\dmorales\OneDrive - Cosemar\PM\Consultoria\repos\plan-lineamiento-estrategico-2026\plan-lineamiento-estrategico-2026\proyectos\plan-gobernanza-ti\L2-estructuracion-area\L2-estructuracion-area-ti.md) refleja los nuevos documentos como parte del paquete de formalización organizacional.
- [ ] La documentación deja explícito que esta iniciativa habilita [L2-reduccion-dependencia.md](C:\Users\dmorales\OneDrive - Cosemar\PM\Consultoria\repos\plan-lineamiento-estrategico-2026\plan-lineamiento-estrategico-2026\proyectos\plan-gobernanza-ti\L2-estructuracion-area\reduccion-dependencia\L2-reduccion-dependencia.md) y la ejecución de L3 sin ambigüedad de dependencia.

## Archivos a Crear/Modificar

| Acción | Ruta | Descripción |
|--------|------|-------------|
| Modificar | `proyectos/plan-gobernanza-ti/L2-estructuracion-area/formalizacion-organizacional/L2-formalizacion-organizacional.md` | Completar la ficha ejecutiva de la iniciativa y registrar validaciones con JTI |
| Crear | `proyectos/plan-gobernanza-ti/L2-estructuracion-area/formalizacion-organizacional/organigrama-area-ti.md` | Propuesta documentada de organigrama TI |
| Crear | `proyectos/plan-gobernanza-ti/L2-estructuracion-area/formalizacion-organizacional/rol-data-governance-manager.md` | Definición formal del rol DGM |
| Modificar | `proyectos/plan-gobernanza-ti/L2-estructuracion-area/L2-estructuracion-area-ti.md` | Actualizar categoría e índice con los nuevos artefactos |

## Dependencias

> Ninguna. Esta iniciativa es punto de arranque de L2 y prerequisito para `Reducción de dependencia externa` y para la ejecución operativa de L3.

## Notas para workspace/vault

> Mantener nomenclatura en español, minúsculas, sin tildes en nombres de archivo. Usar YAML frontmatter con un único tag de estado válido.
>
> No rediseñar la estructura del plan L2: reutilizar la ficha existente y crear notas de soporte para evitar sobrecargar `L2-formalizacion-organizacional.md`.
>
> Si al ejecutar se detecta que falta sponsor explícito, asumir provisionalmente validación por `JTI` y dejar `> ⚠️ PENDIENTE:` para confirmación formal, en vez de inventar un sponsor no documentado.
