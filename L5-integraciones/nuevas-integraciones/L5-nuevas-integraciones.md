---
aliases:
  - L5-nuevas-integraciones
  - Nuevas Integraciones
---

# Nuevas Integraciones Transversales

**Lineamiento:** [[../L5-integraciones|L5 - Integraciones TI]]
**Horizonte:** S14–S36 (paralelo con L4)
**Esfuerzo estimado:** Por dimensionar (dependiente de portafolio L1)
**Responsable:** PM (arquitectura), Equipo externo (implementación), ARI (integración infraestructura)
**Precondición:** [[../definicion-estandares/L5-definicion-estandares|Estándares definidos]] + [[../../L4-infraestructura-ti/diseno-arquitectura/L4-diseno-arquitectura|Arquitectura L4]]

---

## Descripción

Diseño e implementación de nuevas integraciones transversales del holding que habilitan la consolidación de datos, reportes unificados y gobernanza de maestros. Incluye: BD central ↔ ERP Manager (flujos bidireccionales de maestros), ERP → PowerBI (extracción automática para reportes consolidados), APIs nuevas para aplicaciones transversales (control de gastos, presupuestos, análisis), y sincronización de datos de compliance (19.628, 21.663). Ejecutadas bajo L1 portafolio como proyectos específicos, pero coordinadas arquitectónicamente aquí.

---

## Nuevas integraciones prioritarias

| Integración | Origen | Destino | Tipo | Prioridad | Semana est. |
|---|---|---|---|---|---|
| Maestros | ERP Manager | BD central | ETL bidireccional | Crítica | S14–S18 |
| Reportes | BD central | PowerBI | ETL nightly + webhooks | Crítica | S16–S20 |
| Compliance | Todos ERPs | Auditoría central | ETL batch | Alta | S18–S22 |
| Control gastos | ERPs + BD | Nueva app (SaaS) | REST API | Media | S20–S26 |
| Presupuestos | ERPs + BD | Nueva app | REST API | Media | S22–S28 |

---

## Fases de implementación

1. **Fase 1 (S14–S18):** Maestros ERP → BD central (sincronización de datos de negocio)
2. **Fase 2 (S16–S22):** PowerBI + procedimientos operativos (reportes consolidados confiables)
3. **Fase 3 (S20–S28):** Nuevas aplicaciones transversales (funcionalidad estratégica)
4. **Fase 4 (S28–S36):** Consolidación y optimización (tuning, deprecación integraciones heredadas)

---

## Dependencias

- **Input:** [[../definicion-estandares/L5-definicion-estandares|Estándares]] (guían arquitectura)
- **Input:** [[../../L4-infraestructura-ti/bd-central/L4-bd-central|L4 - BD Central]] (receptáculo de datos)
- **Input:** [[../../L4-infraestructura-ti/homogenizacion-maestros/L4-homogenizacion-maestros|L4 - Homogenización de Maestros]] (datos limpios)
- **Input:** [[../../L1-portafolio-ti/L1-portafolio-ti|L1 - Portafolio TI]] (definición de proyectos específicos)
- **Habilita:** [[../../L4-infraestructura-ti/nuevas-aplicaciones/L4-nuevas-aplicaciones|L4 - Nuevas Aplicaciones]] (datos transversales disponibles)
- **Habilita:** [[../../L3-gobernanza-ti/L3-gobernanza-ti|L3 - Gobernanza TI]] (reportes consolidados para auditoria)

*Última actualización: 23 marzo 2026*
