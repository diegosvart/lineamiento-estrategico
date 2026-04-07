---
aliases:
  - BD Central — Esquema Unificado
tags:
  - pendiente
---

# BD Central — Esquema Unificado

**Lineamiento:** [[../L4-infraestructura-ti|L4 - Nueva Infraestructura TI]]
**Horizonte:** S5–S9 (diseño), S10–S26 (implementación)
**Responsable:** PM (diseño), ARI (implementación)
**Precondición:** [[../diseno-arquitectura/L4-diseno-arquitectura|Diseño de arquitectura]]


## Descripción

Base de datos centralizada y unificada para el holding. Consolida datos de 11 subsidiarias que hoy
residen en ERP Manager (11 instancias SQL independientes). Es el corazón de L4.


## Áreas de diseño

- Esquema de BD unificado (tablas, relaciones, constraints)
- Ciclo de vida de datos (ingesta, transformación, salida)
- Replicación y sincronización desde ERP Manager
- Seguridad (encriptación, auditoría, accesos)
- Performance (índices, materialización, caché)
- Backup y recuperación


## Entregables

- ✓ Documento ELT/ETL (extracción desde 11 instancias → BD central)
- ✓ Esquema relacional normalizado
- ✓ Diccionario de datos (78+ campos)
- ✓ Procedimientos almacenados para transformación
- ✓ Plan de migración datos (rollback, validación)


## Dependencias

- **Input:** [[../diseno-arquitectura/L4-diseno-arquitectura|Diseño arquitectura]]
- **Habilita:** [[../homogenizacion-maestros/L4-homogenizacion-maestros|Homogenización de maestros]]
- **Habilita:** [[../artefactos-sync/L4-artefactos-sync|Artefactos de sincronización]]

*Última actualización: 23 marzo 2026*
