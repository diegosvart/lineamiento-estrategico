# L1 — Portafolio TI en Ejecución

**Horizonte:** Permanente — Mar a Dic 2026
**Esfuerzo estimado:** 144 hh total
  - 72 hh: seguimiento operativo semanal (2 hh/semana × 36 semanas)
  - 18 hh: reporte RAG mensual (2 hh/mes × 9 meses)
  - 54 hh: gestión de proyectos, gateways, cierres formales
**Responsable principal:** PM

---

## Descripción

Gestión y seguimiento de todos los proyectos TI activos bajo responsabilidad del PM. Opera en paralelo
con los demás lineamientos desde el día 1, sin dependencia de ellos. Coordina:
- Portfolio de 12 proyectos (3 normativos + 3 gobernanza + 6 estratégicos)
- Gateways formales del plan (G1–G5)
- Dependencias entre L1, L2, L3, L4
- Reportabilidad a GG + Sponsor

---

## Categorías

### Gestión operativa (72 hh)

| ID | Tarea | Responsable | hh | Frecuencia |
|---|---|---|---|---|
| 4.07 | Ejecutar seguimiento semanal del portafolio — reuniones, estado tareas, riesgos | PM | 2 | 36 semanas |
| 4.08 | Preparar y publicar reporte mensual RAG al Sponsor | PM | 2 | 9 meses |

**Total operación continua:** 90 hh

**Bucle semanal:**
- Lunes: sincronización de estado con JTI y responsables
- Miércoles: actualización en Planner de avances
- Viernes: reporte de desviaciones/riesgos

### Gobierno del portafolio (54 hh)

| ID   | Tarea                                                                                 | Responsable | hh                     | Estado    |           |
| ---- | ------------------------------------------------------------------------------------- | ----------- | ---------------------- | --------- | --------- |
| 4.01 | Completar Fichas de Proyecto para 3 normativos prioritarios                           | PM + JTI    | 6                      | Pendiente |           |
| 4.02 | Gestionar aprobación Sponsors para 3 proyectos normativos                             | PM + JTI    | 2                      | Pendiente |           |
| 4.03 | Crear entornos digitales de 3 proyectos normativos (Teams + Planner + SharePoint)     | PM          | 3                      | Pendiente |           |
| 4.04 | Completar Fichas de Proyecto para proyectos estratégicos de la Matriz (6 proyectos)   | PM + JTI    | 10                     | Pendiente |           |
| 4.05 | Gestionar aprobación presupuesto proyectos estratégicos con GG                        | JTI         | 3                      | Pendiente |           |
| 4.06 | Crear entornos digitales proyectos estratégicos                                       | PM          | 4                      | Pendiente |           |
| 4.09 | Activar Gateway de Desvío D-30 ante vencimiento crítico                               | PM          | 3 × 2 activaciones = 6 | Pendiente |           |
| 4.10 | Mapear dependencias entre hallazgos Deloitte y políticas L3                           | PM          | 2                      | Pendiente |           |
| 4.11 | Ejecutar cierre formal de proyectos normativos con evidencia auditada (× 3)           | PM + JTI    | 3 × 3 = 9              | Pendiente |           |
| 4.12 | Incorporar proyectos estratégicos al seguimiento semanal                              | PM          | 1                      | Pendiente |           |
| 4.13 | Reporte ejecutivo final de cierre Plan Gobernanza 2026 → [[../../00-contexto/gateways | G5]]        | PM + JTI               | 8         | Pendiente |

**Total gobierno portafolio:** 54 hh

---

## Portfolio de 12 Proyectos

### Proyectos Normativos (3 — obligatorios)

| Proyecto | Descripción | Lead | Sponsor | Gateway |
|---|---|---|---|---|
| **Ley 19.628** | DPD + procedimientos + inventario datos personales | PM | Legal | [[../../00-contexto/gateways|G3]] |
| **Ley 21.663 / OIV** | Programa Ciberseguridad NIST CSF + respuesta incidentes | JTI | GG | [[../../00-contexto/gateways|G3]] |
| **Deloitte 2026** | Cierre 9 hallazgos activos (1 Deficiencia Significativa A) | PM | GG | [[../../00-contexto/gateways|G4]] |

### Proyectos de Gobernanza (3 — internos)

| Proyecto | Descripción | Lead | Sponsor | Precondición |
|---|---|---|---|---|
| **Catastro de Aplicaciones** | Level A→B→C (11 subsidiarias, 78 campos) | PM | JTI | [[../../L3-gobernanza-ti/catastro-aplicaciones/README|L3]] |
| **Mapeo ERP Manager** | 11 instancias SQL — configuración, usuarios, integraciones | ARI | JTI | [[../../L3-gobernanza-ti/catastro-aplicaciones/README|L3]] |
| **Seguro Ciberseguridad** | Cobertura formal con madurez mínima validada | PM | GG | Ley 21.663 completo |

### Proyectos Estratégicos de la Matriz (6)

| Proyecto | Descripción | Lead | Estado | L4 Input |
|---|---|---|---|---|
| **PowerBI Automatización** | Reportes consolidados por holding + subsidiarias | PM | Backlog | [[../../L4-infraestructura-ti/nuevas-aplicaciones/README|L4]] |
| **Gestión Documental** | Repositorio centralizado para 11 empresas | PM | Backlog | [[../../L4-infraestructura-ti/nuevas-aplicaciones/README|L4]] |
| **Activo Fijo / Contabilidad** | Integración contable a BD central | PM | Backlog | [[../../L4-infraestructura-ti/bd-central/README|L4]] |
| **SIA / Abastecimiento** | Sistema de información de abastecimiento transversal | PM | Backlog | [[../../L4-infraestructura-ti/nuevas-aplicaciones/README|L4]] |
| **Sitrack (Flota)** | Gestión de flota + combustible + mantenimiento | PM | Backlog | [[../../L4-infraestructura-ti/nuevas-aplicaciones/README|L4]] |
| **Migración SQL Server 2012** | Urgente: sin soporte desde 2023, máximo riesgo técnico | ARI | S1–S3 | [[../../L4-infraestructura-ti/migracion-soluciones/README|L4]] |

---

## Hitos y Gateways

Todos los gateways se coordina desde L1:

- **[[../../00-contexto/gateways|G1]]** (30 Mar): Aprobación GG → autoriza inicio portafolio
- **[[../../00-contexto/gateways|G2]]** (~22 May): Catastro A + diagnóstico + portfolio priorizado
- **[[../../00-contexto/gateways|G3]]** (~26 Jun): Catastro B+C + 5 políticas + normativos activos
- **[[../../00-contexto/gateways|G4]]** (~25 Sep): Normativa validada con Sponsor
- **[[../../00-contexto/gateways|G5]]** (~11 Dic): Cierre plan + roadmap 2027

---

## Dependencias con otros lineamientos

- **L2:** Proporciona estructura organizacional para codecision
- **L3:** Proporciona políticas que habilitan cierre de Deloitte
- **L4:** Consume output catastro Level C para arquitectura y migraciones

---

## Notas operacionales

- **Bucle semanal:** 2 hh fijas — no fluctúan
- **Reporte RAG:** Rojo = riesgo crítico, Ámbar = retraso ≥ 1 semana, Verde = on track
- **Gateway D-30:** Si proyecto vence en 30 días y está en riesgo, escala a GG para decisión de ajuste
- **Documentación:** Todas las fichas, actas y reportes se guardan en [[../../L3-gobernanza-ti/infraestructura-digital/README|SharePoint L1]] para auditoría

---

*Última actualización: 23 marzo 2026*
