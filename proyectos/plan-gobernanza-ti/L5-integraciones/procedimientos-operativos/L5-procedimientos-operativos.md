---
aliases:
  - L5-procedimientos-operativos
  - Procedimientos Operativos
tags:
  - pendiente
---

# Procedimientos Operativos de Integraciones

**Lineamiento:** [[../L5-integraciones|L5 - Integraciones TI]]
**Horizonte:** S16–S22
**Responsable:** ARI (operación), SPT (soporte), PM (escalamiento)
**Precondición:** [[../definicion-estandares/L5-definicion-estandares|Definición de Estándares]] + primeras integraciones en prueba


## Descripción

Procedimientos formales para monitoreo, mantenimiento y remediación de integraciones en producción. Incluye: alertas automáticas por latencia y fallos de conexión, validación de esquema en tiempo real, health checks periódicos, playbooks de troubleshooting por tipo de error, escalamiento a vendor o equipo externo, plan de mantenimiento preventivo y patching de conectores, auditoría de logs de integración para compliance normativo (19.628, 21.663).


## Operaciones cubiertas

- **Monitoreo:** Dashboard centralizado en Grafana/Datadog de latencia, throughput, tasas de error
- **Alertas:** Paging automático por latencia > SLA, fallos HTTP 5xx, validación de esquema
- **Troubleshooting:** Árbol de decisión por síntoma (timeout, auth failure, schema violation, network)
- **Escalamiento:** Cuándo llamar a vendor, a equipo externo, a JTI, a GG
- **Mantenimiento:** Ventana mensual, patching de OAuth2 credentials, renovación de certificados mTLS
- **Auditoría:** Logs de quién accedió qué, cuándo, con qué credencial (requisito 19.628)
- **Disaster recovery:** RTO/RPO por tipo de integración, procedures de recovery manual


## Dependencias

- **Input:** [[../definicion-estandares/L5-definicion-estandares|Definición de Estándares]] (define qué monitorear)
- **Input:** [[../../L4-infraestructura-ti/L4-infraestructura-ti|L4 - Nueva Infraestructura TI]] (infraestructura de monitoreo)
- **Habilita:** [[../../L3-gobernanza-ti/cierre-evidencia/L3-cierre-evidencia|L3 - Cierre y Evidencia]] (auditoría de logs)
- **Habilita:** [[../../L1-portafolio-ti/L1-portafolio-ti|L1 - Portafolio TI]] (ejecución operativa continua)

*Última actualización: 23 marzo 2026*
