---
aliases:
  - Nuevas Aplicaciones Transversales
# Nuevas Aplicaciones Transversales

**Lineamiento:** [[../L4-infraestructura-ti|L4 - Nueva Infraestructura TI]]
**Horizonte:** S5–S38 (iniciativas en paralelo con migraciones)
**Esfuerzo estimado:** ~180 hh (por dimensionar según roadmap 2026)
**Responsable:** PM (arquitectura), equipos especializados (desarrollo)
**Precondición:** [[../diseno-arquitectura/L4-diseno-arquitectura|Estándares de arquitectura]] aprobados


## Descripción

Construcción de nuevas aplicaciones que explotan la nueva infraestructura centralizada.
Todas las nuevas aplicaciones son **transversales** desde v1 — no silo-por-empresa.


## Aplicaciones en roadmap 2026

| Aplicación | Propósito | Usuarios | Prioridad |
|---|---|---|---|
| **PowerBI Automatizado** | Reportes consolidados holding + subsidiarias | Ejecutivos | Crítica |
| **Gestión Documental** | Repositorio centralizado de documentos | 11 empresas | Alta |
| **Activo Fijo / Contabilidad** | Gestión integrada activos y contabilidad | Contadores | Alta |
| **SIA / Abastecimiento** | Abastecimiento transversal para el grupo | Compradores | Alta |
| **Sitrack Mejorado** | Gestión flota con analytics | Logística | Media |
| **Portal RH** | Autoservicio de empleados | 11 empresas | Media |


## Estándares transversales

Todas las nuevas aplicaciones deben cumplir:
- Arquitectura multi-tenant (una instancia, 11 tenants)
- Datos en BD central (no silos)
- Seguridad: RBAC, auditoría, cifrado
- Performance: <2s response time
- Disponibilidad: 99.5% uptime
- Documentación: API, usuario, técnica


## Entregables

- ✓ Especificación funcional y técnica
- ✓ Código fuente (repositorio Git)
- ✓ Tests unitarios y de integración
- ✓ Documentación de usuario
- ✓ Plan de rollout (training, soporte, feedback)


## Dependencias

- **Input:** [[../diseno-arquitectura/L4-diseno-arquitectura|Estándares arquitectura]]
- **Input:** [[../bd-central/L4-bd-central|BD central]] operativa
- **Related:** [[../../L1-portafolio-ti/L1-portafolio-ti|L1 Portafolio]] — PowerBI Automatizado es proyecto estratégico

*Última actualización: 23 marzo 2026*
