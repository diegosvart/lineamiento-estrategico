tags:
  - pendiente
---
aliases:
  - L4-migracion-soluciones
  - Migración de Soluciones
tags:
  - pendiente
---
# Migración de Soluciones

**Lineamiento:** [[../L4-infraestructura-ti|L4 - Nueva Infraestructura TI]]
**Horizonte:** S20–S38 (migraciones progresivas)
**Esfuerzo estimado:** ~200 hh (por dimensionar según catastro)
**Responsable:** PM (planificación), ARI (ejecución)
**Precondición:** [[../../L3-gobernanza-ti/catastro-aplicaciones/L3-catastro-aplicaciones|Catastro Level C]] + [[../diseno-arquitectura/L4-diseno-arquitectura|Arquitectura]]

tags:
  - pendiente
---

## Descripción

Traslado de soluciones existentes (desde ERP Manager y sistemas terceros) a la nueva plataforma.
Incluye: análisis dependencias, plan rollback, testing, cutover, validación.

tags:
  - pendiente
---

## Soluciones en scope (del catastro)

| Solución | Fuente | Criticidad | Complejidad |
|---|---|---|---|
| ERP Manager (11 inst) | SQLServer 2012–2019 | Crítica | Alta |
| SQL Server 2012 | Legacy (sin soporte desde 2023) | Crítica | Alta |
| PowerBI | Nativo | Media | Baja |
| Gestion Documental | Tercero | Media | Media |
| SIA / Abastecimiento | Nativo | Media | Media |
| Sitrack (Flota) | Nativo | Baja | Baja |

tags:
  - pendiente
---

## Fases de migración

1. **Planificación** (S20): priorización, timeline, recursos
2. **Diseño detallado** (S21–S22): arquitectura por solución, rollback plan
3. **Pruebas** (S23–S25): UAT, stress tests, DR tests
4. **Cutover** (S26–S35): migraciones en vivo, monitoreo, soporte
5. **Validación** (S36–S38): auditoría, cierre, lecciones aprendidas

tags:
  - pendiente
---

## Entregables

- ✓ Plan de migración por solución (roadmap, riesgos, rollback)
- ✓ Especificación técnica de migración (herramientas, scripts, validaciones)
- ✓ Plan de cutover (horarios, comunicación, escalamiento)
- ✓ Reporte post-migración (validaciones, incidentes, causas raíz)

tags:
  - pendiente
---

## Dependencias

- **Input:** [[../../L3-gobernanza-ti/catastro-aplicaciones/L3-catastro-aplicaciones|Catastro Level C]]
- **Input:** [[../diseno-arquitectura/L4-diseno-arquitectura|Diseño arquitectura]]
- **Input:** [[../artefactos-sync/L4-artefactos-sync|Sincronización operativa]]

*Última actualización: 23 marzo 2026*
