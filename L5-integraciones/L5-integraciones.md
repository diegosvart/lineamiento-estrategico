---
aliases:
  - L5 — Integraciones TI
tags:
  - pendiente
---

# L5 — Integraciones TI

**Horizonte:** S10+ (paralelo tardío con L4)
**Esfuerzo estimado:** Por dimensionar
**Precondición:** L4 Diseño de Arquitectura + BD central operativa

---

## Descripcion

Framework de integración tecnológica entre los 11 sistemas ERP del holding, la base de datos centralizada, plataformas analíticas (PowerBI) y sistemas externos. Define el catálogo de integraciones existentes, estándares de protocolo (REST API, ETL batch, webhooks), procedimientos operativos de monitoreo y mantenimiento, y hoja de ruta para nuevas integraciones transversales que soportan reportes consolidados, sincronización de maestros y gobernanza de datos.

---

## Categorias

| Categoria | Carpeta | Estado |
|---|---|---|
| Catálogo de integraciones | [[catalogo-integraciones/L5-catalogo-integraciones]] | Pendiente |
| Definición de estándares | [[definicion-estandares/L5-definicion-estandares]] | Pendiente |
| Procedimientos operativos | [[procedimientos-operativos/L5-procedimientos-operativos]] | Pendiente |
| Nuevas integraciones | [[nuevas-integraciones/L5-nuevas-integraciones]] | Pendiente |

---

## Notas de diseno

- **Transversalidad desde v1:** Todas las nuevas integraciones deben ser transversales al holding, no puntuales a una subsidiaria
- **APIs como fuente de verdad:** Las integraciones se implementan via REST API cuando sea posible; ETL batch como opción secundaria
- **ERP Manager como restricción:** Los 11 ERPs no consolidan nativamente; la BD central es el punto de convergencia, no el ERP Manager
- **Monitoreo proactivo:** Alertas automáticas por latencia, falla de conexión, validación de esquema
- **Versionado y deprecación:** Contratos de datos con SLA; procedimiento formal para retirar integraciones antiguas

---

*Documento hub — todas las categorías de integración enlazan a este documento para visibilidad de dependencias*
*Última actualización: 23 marzo 2026*
