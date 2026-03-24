tags:
  - pendiente
---
aliases:
  - L4-homogenizacion-maestros
  - Homogenización de Maestros
tags:
  - pendiente
---
# Homogenización de Maestros de Datos

**Lineamiento:** [[../L4-infraestructura-ti|L4 - Nueva Infraestructura TI]]
**Horizonte:** S9–S20 (mapeo, validación, implementación)
**Esfuerzo estimado:** ~100 hh
**Responsable:** PM (diseño), ARI (implementación)
**Precondición:** [[../bd-central/L4-bd-central|BD central]] operativa

tags:
  - pendiente
---

## Descripción

Creación de un modelo de datos maestro único para el holding. Reconcilia definiciones inconsistentes
de conceptos clave (clientes, productos, cuentas, centros de costo) entre 11 empresas.

Sin maestros homogenizados, los reportes consolidados son incorrectos.

tags:
  - pendiente
---

## Maestros a homogenizar

| Maestro | Complejidad | Volumen | Prioridad |
|---|---|---|---|
| Clientes | Alta | ~50k registros | Crítica |
| Proveedores | Alta | ~30k registros | Crítica |
| Productos | Media | ~10k registros | Crítica |
| Centros de Costo | Media | ~200 registros | Alta |
| Activos Fijos | Media | ~5k registros | Alta |
| Proyectos | Baja | ~1k registros | Media |

tags:
  - pendiente
---

## Entregables

- ✓ Matriz de reconciliación (11 empresas × cada maestro)
- ✓ Reglas de mapeo (cómo consolidar registros duplicados/inconsistentes)
- ✓ Tablas maestras en BD central
- ✓ Procedimiento de sincronización desde fuentes

tags:
  - pendiente
---

## Dependencias

- **Input:** [[../bd-central/L4-bd-central|BD central]] completa
- **Habilita:** [[../artefactos-sync/L4-artefactos-sync|Sincronización]]
- **Habilita:** [[../../L1-portafolio-ti/L1-portafolio-ti|Reportes L1 consolidados]]

*Última actualización: 23 marzo 2026*
