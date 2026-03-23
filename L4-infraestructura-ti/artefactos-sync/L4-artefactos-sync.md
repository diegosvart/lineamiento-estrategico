---
aliases:
  - L4-artefactos-sync
  - Artefactos de Sincronización
---
# Artefactos de Sincronización

**Lineamiento:** [[../L4-infraestructura-ti|L4 - Nueva Infraestructura TI]]
**Horizonte:** S10–S25 (diseño, construcción, validación)
**Esfuerzo estimado:** ~150 hh
**Responsable:** PM (diseño), ARI (construcción)
**Precondición:** [[../homogenizacion-maestros/L4-homogenizacion-maestros|Maestros homogenizados]]

---

## Descripción

Conectores e integraciones de datos entre:
- 11 instancias ERP Manager (fuentes)
- BD central (destino)
- Nuevas aplicaciones (consumidores)

Define qué datos se sincronizan, con qué frecuencia, y qué hacer si hay fallos.

---

## Tipos de artefactos

| Tipo | Propósito | Frecuencia | Volumen |
|---|---|---|---|
| **Extracción** | ERP → BD central (datos maestro) | Diaria | ~100k registros |
| **Transformación** | Validación, mapeo, reconciliación | Diaria | ~100k registros |
| **Carga** | Inserción/actualización en BD central | Diaria | ~100k registros |
| **Reportería** | BD central → reportes / BI | Diaria/Semanal | ~1M filas |
| **Alertas** | Monitoreo de inconsistencias | Real-time | —–  |

---

## Entregables

- ✓ Mapeo de flujos datos (qué va donde, con qué frecuencia)
- ✓ Especificación de conectores (tecnología, logs, error handling)
- ✓ Scripts ETL/ELT documentados
- ✓ Procedimiento de validación (checksums, auditoría)
- ✓ Dashboard de monitoreo

---

## Dependencias

- **Input:** [[../homogenizacion-maestros/L4-homogenizacion-maestros|Maestros homogenizados]]
- **Habilita:** [[../migracion-soluciones/L4-migracion-soluciones|Migraciones de soluciones]]
- **Habilita:** [[../nuevas-aplicaciones/L4-nuevas-aplicaciones|Nuevas aplicaciones transversales]]

*Última actualización: 23 marzo 2026*
