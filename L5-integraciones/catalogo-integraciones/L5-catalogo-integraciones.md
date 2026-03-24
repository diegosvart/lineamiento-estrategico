---
aliases:
  - L5-catalogo-integraciones
  - Catálogo de Integraciones
---

# Catálogo de Integraciones

**Lineamiento:** [[../L5-integraciones|L5 - Integraciones TI]]
**Horizonte:** S10–S14
**Esfuerzo estimado:** ~24 hh (inventario + análisis)
**Responsable:** PM (diseño), ARI (infraestructura), Equipo externo (validación ERP)
**Precondición:** [[../../L4-infraestructura-ti/diseno-arquitectura/L4-diseno-arquitectura|Diseño de Arquitectura L4]]

---

## Descripción

Inventario exhaustivo de todas las integraciones tecnológicas existentes entre los 11 sistemas ERP del holding, incluyendo: flujos ERP ↔ ERP (sincronización de maestros), flujos ERP → BD central (replicación de datos), flujos ERP → PowerBI (extracción analítica), e integraciones con sistemas externos (banca, aduanas, logística). Para cada integración se documenta: sistemas origen/destino, protocolo actual, frecuencia, latencia, propietario técnico, últimas validaciones.

---

## Entregables

- ✓ Matriz de integraciones: origen, destino, protocolo, SLA actual
- ✓ Análisis de integraciones heredadas (a deprecar vs. a refactorizar)
- ✓ Identificación de integraciones faltantes para transversalidad
- ✓ Propuesta de consolidación (ERP Manager vs. BD central como hub)

---

## Dependencias

- **Input:** [[../../L4-infraestructura-ti/L4-infraestructura-ti|L4 - Nueva Infraestructura TI]] (arquitectura define topología)
- **Input:** Auditoría técnica del consultor externo (conocimiento ERP actual)
- **Habilita:** [[../definicion-estandares/L5-definicion-estandares|Definición de estándares]] (catálogo informa qué normalizar)
- **Habilita:** [[../../L1-portafolio-ti/L1-portafolio-ti|L1 - Portafolio TI]] (nuevos proyectos de integración)

*Última actualización: 23 marzo 2026*
