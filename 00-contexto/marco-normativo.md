# Marco Normativo Transversal

Todas las tareas, entregables y decisiones del plan operan bajo dos marcos legales vinculantes que crean obligaciones directas para el Holding y sus 11 subsidiarias.

---

## Ley 19.628 — Protección de Datos Personales

**Promulgación:** 1999 · **Estado:** Vigente · **Aplicable a:** Personas naturales chilenas
**Ámbito:** Creación, procesamiento, almacenamiento, transmisión de datos personales

### Obligaciones principales

- **Consentimiento informado:** Toda recopilación de datos requiere consentimiento explícito del titular
- **Seguridad de datos:** Medidas técnicas y administrativas para proteger datos contra acceso no autorizado
- **Finalidad específica:** Los datos se usan SOLO para la finalidad comunicada
- **Derecho de acceso:** Toda persona puede solicitar qué datos se tiene sobre ella
- **Derecho de rectificación:** El titular puede corregir datos inexactos
- **Derecho de eliminación:** El titular puede solicitar borrado bajo ciertas condiciones
- **Delegado de Protección de Datos (DPD):** Designación obligatoria de responsable de cumplimiento

### Multas por infracción

- **5.000–20.000 UTM** por infracción (aproximadamente **$290M–$1.160M CLP** a marzo 2026)
- Aplica **POR EMPRESA**, no al holding consolidado
- **Riesgo multiplicador:** 11 subsidiarias = 11 responsabilidades independientes
- Alcanza a directivos personalmente en casos de negligencia grave

### Aplicación en el plan

El diagnóstico normativo ([[../L3-gobernanza-ti/diagnostico-normativo/README|L3 — Diagnóstico normativo]]) identifica brechas Ley 19.628 por subsidiaria.

Las políticas TI ([[../L3-gobernanza-ti/politicas-procedimientos/README|L3 — Políticas y procedimientos]]) incluyen:
- Política de Protección de Datos Personales (tarea 3.08)
- Procedimiento de consentimiento informado
- Inventario de datos personales por aplicativo y subsidiaria
- Plan de respuesta ante solicitudes de acceso/rectificación/eliminación

**Proyecto asociado:** Ley 19.628 — DPD + procedimientos + inventario datos personales (L1 portafolio)

---

## Ley 21.663 — Marco de Ciberseguridad Nacional / OIV

**Promulgación:** 2023 · **Estado:** Vigente · **Aplicable a:** Operadores de Importancia Vital (OIV)
**Ámbito:** Ciberseguridad y continuidad de servicios críticos

### Aplicabilidad a Grupo EBI

**Bio Energía Los Pinos** (subsidiaria del grupo) fue declarada **OIV** por estar en el sector energético.

Esto **extiende la obligación a todo el grupo** porque:
- Los sistemas corporativos del holding dan soporte a Bio Energía
- La data maestro del grupo consolida información crítica de la OIV
- Las 11 subsidiarias conectan con infraestructura de Bio Energía

### Obligaciones principales

- **Delegado de Ciberseguridad (DC):** Responsable de cumplimiento, reporta a directiva
- **Plan de Ciberseguridad:** Basado en **NIST Cybersecurity Framework (NIST CSF)**
  - Identificar activos críticos y vulnerabilidades
  - Proteger mediante controles técnicos y administrativos
  - Detectar incidentes mediante monitoreo
  - Responder ante incidentes de forma documentada
  - Recuperarse y volver a operar en tiempos máximos (RTO/RPO definidos)
- **Programa de Ciberseguridad:** Estructura, roles, procesos y presupuesto
- **Procedimiento de Respuesta a Incidentes:** Plan formal de escalamiento y comunicación
- **Auditoría externa:** Validación anual del cumplimiento
- **Reporte al Estado:** Comunicación de brechas y incidentes

### Sanciones

- **Multas:** 5.000–20.000 UTA por infracción
- **Suspensión de autorización:** Si no hay remediación en plazo
- **Responsabilidad civil:** Daños y perjuicios por falta de ciberseguridad

### Aplicación en el plan

El diagnóstico normativo ([[../L3-gobernanza-ti/diagnostico-normativo/README|L3 — Diagnóstico normativo]]) identifica brechas NIST CSF por subsidiaria.

Las políticas TI incluyen:
- Política de Seguridad de la Información (tarea 3.07)
- Política de Continuidad Operacional / DRP (tarea 3.09)
- Plan de Respuesta a Incidentes (incluido en DRP, tarea 3.15)
- Habilitación de MFA en sistemas críticos (tarea 3.12)
- Programa de Ciberseguridad formal (proyecto portafolio)

**Proyectos asociados:**
- Ley 21.663 / OIV — Programa Ciberseguridad NIST CSF + respuesta incidentes (L1 portafolio)
- Seguro de ciberseguridad — requiere madurez mínima para cobertura (L1 portafolio)

---

## Deloitte Audit 2026 — 9 Hallazgos activos

Independientemente de marcos legales, la auditoría de Deloitte 2026 identificó **9 hallazgos** en el área TI.

- **1 Deficiencia Significativa A:** Riesgo crítico, requiere remediación inmediata
- **8 hallazgos menores:** Requieren acción correctiva documentada

Todos los hallazgos se cierran mediante:
- Evidencia auditada (políticas, procedimientos, validaciones)
- Aprobación formal por Sponsor y auditores
- Inclusión en programa de ciberseguridad y gobernanza

**Cierre formal:** Gateway G3 (políticas firmadas) + Gateway G4 (normativa validada)

---

## Síntesis de cobertura normativa

| Marco | Entidad responsable | Obligación clave | Abordaje en plan |
|---|---|---|---|
| **Ley 19.628** | 11 subsidiarias + PM | DPD + inventario datos personales | [[../L3-gobernanza-ti/politicas-procedimientos/README|L3 — Tarea 3.08]] |
| **Ley 21.663 / OIV** | Holding + Bio Energía | Programa ciberseguridad NIST CSF | [[../L3-gobernanza-ti/politicas-procedimientos/README|L3 — Tareas 3.07, 3.09, 3.12]] |
| **Deloitte 2026** | Área TI | 9 hallazgos → evidencia auditada | [[../L3-gobernanza-ti/cierre-evidencia/README|L3 — Cierre y evidencia]] |

---

## Documentos relacionados

- [[../L3-gobernanza-ti/README|L3 — Plan de Gobernanza TI]] — dónde se cubre este marco
- [[../L3-gobernanza-ti/diagnostico-normativo/README|Diagnóstico normativo]] — análisis de brechas por ley
- [[../L3-gobernanza-ti/politicas-procedimientos/README|Políticas y procedimientos]] — documentos que dan cobertura
- [[gateways|Gateways]] — G2, G3, G4 incluyen validaciones normativas

---

*Documento hub — todas las categorías de gobernanza enlazan a este documento para visibilidad de requisitos normativos*
*Última actualización: 23 marzo 2026*
