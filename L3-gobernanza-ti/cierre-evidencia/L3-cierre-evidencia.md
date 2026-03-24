---
aliases:
  - L3-cierre-evidencia
  - Cierre y Evidencia
tags:
  - en-definicion
---

# Cierre y Evidencia

**Lineamiento:** [[../L3-gobernanza-ti|L3 - Plan de Gobernanza TI]]
**Horizonte:** S8–S12 (validación, cierre formal)
**Esfuerzo estimado:** 27 hh
**Responsable:** PM + ARI + JTI
**Precondición:** [[../politicas-procedimientos/L3-politicas-procedimientos|Políticas y procedimientos]] aprobadas

## Descripción

Cierre formal y evidencia auditada del plan de gobernanza 2026. Valida que cada hallazgo Deloitte
fue remediado, que hallazgos normativos fueron cerrados, y que el área TI alcanzó Fase 2 de madurez
(dashboard, KPIs, reportes).

Sin cierre formal auditado, el Sponsor no autoriza avance a L4 completo.

## Tareas

### Documentación técnica (WS-3: 3.19)

| ID | Tarea | Responsable | hh | Estado |
|---|---|---|---|---|
| 3.19 | Documentar diagramas de infraestructura y red (visión general, topología, redundancias) | ARI | 5 | Pendiente |

### Cierre formal de hallazgos (WS-4: 4.09, 4.11, 4.13)

| ID | Tarea | Responsable | hh | Estado | Gateway |
|---|---|---|---|---|---|
| 4.09 | Activar Gateway de Desvio ante vencimiento D-30 en Deloitte | PM | 6 | Pendiente | — |
| 4.11 | Ejecutar cierre formal de proyectos normativos con evidencia auditada (x3 proyectos) | PM + JTI | 9 | Pendiente | G4 |
| 4.13 | Reporte ejecutivo final de cierre Plan Gobernanza TI 2026 → G5 | PM + JTI | 7 | Pendiente | [[../../00-contexto/gateways|G5]] |

**Total:** 27 hh

## Tarea 3.19 — Documentación de Infraestructura (5 hh)

**Entregable:** Diagramas técnicos de la infraestructura del área
- Topología de red (servidores, firewalls, equipos)
- Redundancias (Mbps, failover, desastre)
- Integraciones (cuáles sistemas hablan con cuáles)
- Puntos de fallo críticos
- Backup y recuperación (dónde se resguardan datos)

**Herramienta:** Visio, draw.io, o Excalidraw (ver [[../../Excalidraw/|Excalidraw vault]])

## Tarea 4.09 — Gateway de Desvio D-30 (6 hh)

**Propósito:** Si un proyecto está a menos de 30 días de incumplir, activar alerta ejecutiva

**Proyectos críticos bajo monitoreo D-30:**
- Ley 19.628 — DPD + procedimientos (Deloitte hallazgo crítico)
- Ley 21.663 / OIV — Programa ciberseguridad NIST CSF
- Deloitte 2026 — 9 hallazgos con remediación (Deficiencia Significativa A = máxima urgencia)

**Acción:** Si vence en D-30, activar gateway de escalamiento a GG + Sponsor para ajuste de timeline o recursos

## Tarea 4.11 — Cierre Formal de Hallazgos (9 hh)

**3 Proyectos normativos requieren cierre formal:**
1. **Ley 19.628 — DPD + procedimientos + inventario datos personales**
   - Evidencia: política 3.08, procedimiento ABM, inventario en catastro
   - Validador: Legal + DPD

2. **Ley 21.663 / OIV — Programa ciberseguridad NIST CSF + respuesta incidentes**
   - Evidencia: política seguridad 3.07, DRP 3.15, MFA 3.12, procedimiento respuesta incidentes
   - Validador: Seguridad + Sponsor

3. **Auditoria Deloitte 2026 — 9 hallazgos**
   - Evidencia: mapeo hallazgo → remediación en L3/L4
   - Validador: Auditores Deloitte

**Formato cierre:**
- Por cada hallazgo: acta con descripción, remediación ejecutada, evidencia (link a documento),  fecha cierre
- Firmado por PM, JTI, Sponsor, responsable de remediación
- Enviado a auditores para validación formal

## Tarea 4.13 — Reporte Ejecutivo Final → G5 (7 hh)

**Contenido:**
1. **Resumen ejecutivo:** ¿Qué se logró? ¿Se completó el plan?
2. **Hallazgos y remediaciones:** Matriz hallazgo original → remediación → evidencia → cierre
3. **Estado de cumplimiento normativo:**
   - Ley 19.628: ✓ DPD designado, ✓ inventario datos, ✓ procedimientos
   - Ley 21.663: ✓ Programa NIST CSF activo, ✓ DRP validado, ✓ respuesta incidentes
   - Deloitte: ✓ 9/9 hallazgos cerrados
4. **Métricas de madurez:**
   - Fase 1 ✓ completada
   - Fase 2 ✓ transición habilitada (dashboard, KPIs, reportes automaticos)
5. **Roadmap 2027:** Continuación L4, expansión gobernanza, optimizaciones

**Destinatarios:** GG + Sponsor + Comité directivo

**Gateway:** [[../../00-contexto/gateways|G5]] — Cierre Plan Gobernanza TI 2026 + Roadmap 2027

## Entregables del cierre

- ✓ Documentos de infraestructura técnica
- ✓ Matriz de hallazgos → remediaciones → evidencia
- ✓ Actas de cierre formal (3 proyectos normativos)
- ✓ Validación auditores externos
- ✓ Reporte ejecutivo de cierre
- ✓ Roadmap 2027 aprobado

## Dependencias y transición

- **Input:** Todas las categorías L3 completadas ([[../infraestructura-digital/L3-infraestructura-digital|infraestructura-digital]], [[../catastro-aplicaciones/L3-catastro-aplicaciones|catastro]], [[../diagnostico-normativo/L3-diagnostico-normativo|diagnóstico]], [[../politicas-procedimientos/L3-politicas-procedimientos|políticas]])
- **Habilita:** [[../../L4-infraestructura-ti/L4-infraestructura-ti|L4]] en construcción a full (ya no hay prerequisitos normativos bloqueando)
- **Gateway:** [[../../00-contexto/gateways|G4]] (septiembre — normativa validada) + [[../../00-contexto/gateways|G5]] (diciembre — cierre final)
- **Relacionado:** [[../../../L1-portafolio-ti/L1-portafolio-ti|L1 — Portafolio]] (4.09, 4.11, 4.13 son tareas de L1 que generan evidencia para L3)

tags:
  - pendiente
---

*Última actualización: 23 marzo 2026*
