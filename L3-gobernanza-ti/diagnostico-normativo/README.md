---
aliases:
  - L3-diagnostico-normativo
  - Diagnóstico Normativo
---
# Diagnóstico Normativo

**Lineamiento:** [[../L3-gobernanza-ti|L3 - Plan de Gobernanza TI]]
**Horizonte:** S4–S8 (paralelo con catastro Level B+C)
**Esfuerzo estimado:** 14 hh
**Responsable:** PM + JTI
**Precondición:** [[../catastro-aplicaciones/README|Catastro Level A]] completado

---

## Descripción

Análisis de brechas entre el estado actual del área TI y los requisitos de tres marcos normativos:
- **Ley 19.628** — Protección de Datos Personales (nacional)
- **Ley 21.663** — Marco de Ciberseguridad / OIV (nacional)
- **Deloitte 2026** — 9 hallazgos de auditoría

Identificatodo aquello que **NO está cubierto** y qué acciones son necesarias para remediar.

---

## Tareas (WS-3: 3.01–3.04)

| ID | Tarea | Responsable | hh | Estado |
|---|---|---|---|---|
| 3.01 | Levantar brechas Ley 19.628 por subsidiaria — análisis de dónde No se cumple por 11 empresas | PM + JTI | 5 | Pendiente |
| 3.02 | Determinar aplicabilidad OIV Ley 21.663 y estado actual de cumplimiento NIST CSF | PM + JTI + ARI | 4 | Pendiente |
| 3.03 | Revisar hallazgos Deloitte 2026 y priorizar por criticidad — mapear a qué categoría corresponde | PM + JTI | 2 | Pendiente |
| 3.04 | Consolidar diagnóstico normativo completo — reporte ejecutivo de brechas por marco → Input G2 | PM | 3 | Pendiente |

**Total:** 14 hh

---

## Matriz de brechas Ley 19.628

| Área | Brecha esperada | Remediación |
|---|---|---|
| **Consentimiento** | No hay registro formal de consentimientos datos personales | → [[../politicas-procedimientos/README|Política 19.628 + procedimiento consentimiento]] |
| **DPD** | No designado Delegado Protección Datos | → Proyecto portafolio: nombrar + capacitar DPD |
| **Inventario** | No hay inventario de dónde se guardan datos personales | → Dato en [[../catastro-aplicaciones/README|Catastro]] (campo Level A) |
| **Derecho acceso** | No hay procedimiento para responder solicitudes acceso | → [[../politicas-procedimientos/README|Procedimiento ABM usuarios]] |
| **Seguridad** | No hay encriptación end-to-end en tramos críticos | → Proyecto portafolio: habilitar encriptación |

---

## Matriz de brechas Ley 21.663 / OIV — NIST CSF

| Función NIST | Brecha esperada | Remediación |
|---|---|---|
| **Identificar** | Inventario activos críticos incompleto | → [[../catastro-aplicaciones/README|Catastro Level C]] |
| **Proteger** | No hay MFA en sistemas críticos | → [[../politicas-procedimientos/README|Tarea 3.12: MFA]] |
| **Detectar** | No hay monitoreo centralizado (SIEM/SOC) | → Proyecto portafolio: SOC/SIEM |
| **Responder** | No hay procedimiento formal respuesta incidentes | → [[../politicas-procedimientos/README|Procedure respuesta incidentes]] |
| **Recuperar** | DRP genérico, sin validación | → Proyecto portafolio: validar DRP |

---

## Hallazgos Deloitte 2026

- **1 Deficiencia Significativa A** (riesgo crítico)
- **8 hallazgos menores** (requieren remediación)

Todos se cierran mediante:
1. Política o procedimiento formal (WS-3)
2. Validación auditada (WS-4: tarea 4.11)
3. Aprobación Sponsor + auditores (Gateway G4)

---

## Entregables

- ✓ Matriz de brechas Ley 19.628 (por subsidiaria)
- ✓ Matriz de brechas NIST CSF (por función)
- ✓ Matriz de hallazgos Deloitte (por riesgo)
- ✓ Reporte consolidado con mapeo de remediaciones a tareas de L3/L4/L1

---

## Dependencias

- **Habilita:** [[../politicas-procedimientos/README|Políticas y procedimientos]] (diagnóstico informa qué políticas redactar)
- **Gateway:** [[../../00-contexto/gateways|G2]] (diagnóstico completo es prerequisito)
- **Marco regulatorio:** [[../../00-contexto/marco-normativo|Marco normativo]] (ver detalle de obligaciones)

---

*Última actualización: 23 marzo 2026*
