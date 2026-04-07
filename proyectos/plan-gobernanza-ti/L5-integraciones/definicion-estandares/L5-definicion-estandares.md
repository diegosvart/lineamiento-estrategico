---
aliases:
  - Definición de Estándares de Integración
tags:
  - pendiente
---

# Definición de Estándares de Integración

**Lineamiento:** [[../L5-integraciones|L5 - Integraciones TI]]
**Horizonte:** S12–S18
**Responsable:** PM (diseño), ARI (infraestructura), Vendor (soporte técnico)
**Precondición:** [[../catalogo-integraciones/L5-catalogo-integraciones|Catálogo de Integraciones]] completado


## Descripción

Definición formal de estándares de integración a nivel de protocolo, contrato de datos y operación. Incluye: especificación de APIs REST (versioning, autenticación OAuth2, rate limiting), procedimientos ETL batch (scheduling, reintentos, transformaciones), webhooks para eventos en tiempo real, esquemas JSON/XML validados, SLAs de latencia y consistencia, convenciones de nomenclatura de endpoints, y procedimiento de deprecación de integraciones antiguas. Estos estándares vinculan a todos los proyectos de integración (L1 portafolio).


## Estándares a definir

- **Protocolos autorizados:** REST API v1/v2, GraphQL, ETL batch (nightly), webhooks síncronos
- **Seguridad:** OAuth2 para APIs, mTLS para servidor-a-servidor, API keys versionadas
- **Contrato de datos:** JSON Schema obligatorio, ejemplos de payload, validaciones de negocio
- **Nomenclatura:** Endpoints `/api/v1/holding/{subsidiary}/resource`, versionado en URL
- **Latencia SLA:**
  - APIs síncronas: p99 < 500ms
  - ETL batch: completar antes de 06:00 AM
  - Webhooks: reintentos exponenciales, TTL 24 horas
- **Monitoreo:** Alertas por latencia, fallos HTTP 5xx, validación de esquema


## Dependencias

- **Input:** [[../catalogo-integraciones/L5-catalogo-integraciones|Catálogo de Integraciones]] (establece baseline)
- **Input:** [[../../L4-infraestructura-ti/L4-infraestructura-ti|L4 - Nueva Infraestructura TI]] (infraestructura soporta protocolos)
- **Habilita:** [[../nuevas-integraciones/L5-nuevas-integraciones|Nuevas Integraciones]] (estándares guían diseño)
- **Habilita:** [[../procedimientos-operativos/L5-procedimientos-operativos|Procedimientos Operativos]] (operación monitorea cumplimiento)

*Última actualización: 23 marzo 2026*
