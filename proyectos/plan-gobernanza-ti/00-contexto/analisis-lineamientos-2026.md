---
aliases:
  - Análisis de Lineamientos 2026
tags:
  - activo
---

# Análisis de Lineamientos — Plan TI Grupo EBI 2026

## Glosario

| Término | Definición |
|---------|------------|
| **Deloitte 2026** | Auditoría externa con 9 hallazgos (1 Deficiencia Significativa tipo A, 8 menores) |
| **DPD** | Delegado de Protección de Datos — rol obligatorio bajo Ley 19.628 |
| **ERP Manager** | Sistema ERP con 11 instancias SQL independientes (una por subsidiaria) |
| **GG** | Gerencia General |
| **JTI** | Jefe del Área TI |
| **OIV** | Operador de Infraestructura Vital — clasificación bajo Ley 21.663 |
| **RTO/RPO** | Recovery Time Objective / Recovery Point Objective — métricas de continuidad operacional |
| **Sponsor** | Ejecutivos que financian y dan viabilidad al proyecto |
| **Gateway** | Punto de control donde se valida avance antes de continuar |
| **NIST CSF** | Cybersecurity Framework — estándar de ciberseguridad |

---

## Hitos (Gateways)

| Hito | Condición de éxito |
|------|-------------------|
| **G1** | Aprobación de Gerencia General |
| **G2** | Catastro Level A + Diagnóstico normativo + Portafolio priorizado |
| **G3** | Catastro B+C + 5 políticas firmadas + Proyectos normativos activos |
| **G4** | Avance normativo validado con Sponsor |
| **G5** | Cierre Plan Gobernanza TI 2026 + Roadmap 2027 |

---

## Capa de Datos — Lineamientos

### L1 — Portafolio TI

**Objetivo:** Gestión y seguimiento de los 12 proyectos activos del holding (3 normativos + 3 gobernanza + 6 estratégicos).

| ID | Tarea | Output |
|----|-------|--------|
| L1.01 | Seguimiento operativo semanal del portafolio | Acta semanal de estado |
| L1.02 | Preparar reporte mensual RAG al Sponsor | Reporte RAG mensual (PDF/PPT) |
| L1.03 | Completar fichas de proyecto para 3 normativos | 3 Fichas de proyecto (documento) |
| L1.04 | Gestionar aprobación de sponsors para proyectos normativos | Acta de aprobación |
| L1.05 | Crear entornos digitales para proyectos normativos | Teams + Planner + SharePoint operativos |
| L1.06 | Completar fichas de proyecto para 6 estratégicos | 6 Fichas de proyecto (documento) |
| L1.07 | Gestionar aprobación de presupuesto con GG | Acta de presupuesto aprobado |
| L1.08 | Mapear dependencias hallazgos Deloitte ↔ políticas L3 | Matriz de dependencias |
| L1.09 | Ejecutar cierre formal de proyectos normativos | 3 Actas de cierre con evidencia |
| L1.10 | Reporte ejecutivo final de cierre → G5 | Reporte ejecutivo G5 |

**Proyectos del Portafolio:**

| Proyecto | Output esperado | Estado actual |
|----------|-----------------|---------------|
| Ley 19.628 (DPD + inventario) | Política + procedimientos + inventario aprobados | backlog |
| Ley 21.663 / OIV (NIST CSF) | Programa ciberseguridad + DRP validados | backlog |
| Deloitte 2026 (9 hallazgos) | Matriz de cierre de hallazgos | backlog |
| Catastro de Aplicaciones | Inventario Level A/B/C completo | backlog |
| Mapeo ERP Manager | Documentación 11 instancias SQL | backlog |
| Seguro Ciberseguridad | Documento de cobertura formal | backlog |
| PowerBI Automatización | Dashboard consolidado operativo | backlog |
| Gobernanza TI | Control y estructuración del área TI | en curso |
| Gestión Documental | Repositorio centralizado funcional | en curso |
| Activo Fijo / Contabilidad | Integración contable a BD central | en curso |
| SIA / Abastecimiento | Sistema transversal operativo | en curso |
| Sitrack (Flota) | Sistema de gestión de flota operativo | en curso |
| Cash Flow | Sistema de flujo de caja | en curso |
| Seguros & Siniestros | Sistema de gestión sobre pólizas y activos | en curso |
| Migración SQL Server 2012 | 11 instancias migradas a versión soportada | backlog |

---

### L2 — Estructuración del Área TI

**Objetivo:** Formalizar la estructura organizacional, reducir dependencia del consultor externo y habilitar recursos.

| ID | Tarea | Output |
|----|-------|--------|
| L2.01 | Definición de roles y responsabilidades | Documento de roles (PDF) |
| L2.02 | Validación de organigrama con JTI | Acta de validación |
| L2.03 | Definición formal del rol DGM (Data Governance Manager) | Perfil de cargo DGM |
| L2.04 | Sesiones de extracción de conocimiento con Consultor TI Interno | Actas de sesiones (×n) |
| L2.05 | Documentación de inventario técnico | Documento de inventario técnico |
| L2.06 | Redacción del plan formal de transferencia | Plan de transferencia |
| L2.07 | Sesión de transferencia técnica Ronda 1 | Acta de transferencia |
| L2.08 | Sesión de transferencia técnica Ronda 2 (sin CE) | Acta de validación |
| L2.09 | Validación de autonomía técnica del área | Informe de autonomía |
| L2.10 | Identificación de brechas de capacidad | Matriz de brechas |
| L2.11 | Definición de perfiles a incorporar | Perfiles de cargo |
| L2.12 | Incorporación progresiva de nuevos roles | Contratos/incorporaciones |

---

### L3 — Plan de Gobernanza TI

**Objetivo:** Framework normativo que da cobertura legal y operativa al área TI.

| ID | Tarea | Output |
|----|-------|--------|
| L3.01 | Crear canal oficial del área TI en Teams | Canal Teams operativo |
| L3.02 | Crear estructura Planner del área | Planes configurados |
| L3.03 | Crear estructura SharePoint del área | Librerías creadas |
| L3.04 | Diseñar instrumento Catastro Level A (78 campos) | Formulario + guía |
| L3.05 | Validar instrumento con JTI | Instrumento aprobado |
| L3.06 | Agenda y coordinación de entrevistas Level A | Calendario de entrevistas |
| L3.07 | Ejecución entrevistas Level A — bloque 1 (subsidiarias 1–5) | Datos consolidaciones |
| L3.08 | Ejecución entrevistas Level A — bloque 2 (subsidiarias 6–11) | Datos consolidados |
| L3.09 | Consolidar catastro Level A + alertas + reportes | Dashboard Level A |
| L3.10 | Levantamiento Level B (investigación autónoma) | Registro Level B |
| L3.11 | Levantamiento Level C — mapeo ERP Manager (11 instancias) | Documento técnico |
| L3.12 | Levantamiento Level C — sistemas no-ERP | Registro técnico |
| L3.13 | Consolidar catastro B+C + informes de situación | Informe consolidado |
| L3.14 | Diseñar dashboard de portafolio | Dashboard operativo |
| L3.15 | Levantar brechas Ley 19.628 por subsidiaria | Matriz de brechas 19.628 |
| L3.16 | Determinar aplicabilidad OIV + estado NIST CSF | Evaluación OIV/NIST |
| L3.17 | Revisar hallazgos Deloitte 2026 y priorizar | Matriz de hallazgos |
| L3.18 | Consolidar diagnóstico normativo completo | Reporte de brechas |
| L3.19 | Redactar Política de Acceso y Cuentas Nominativas | Política aprobada |
| L3.20 | Redactar Política de Gestión de Cambios | Política aprobada |
| L3.21 | Redactar Política de Seguridad de la Información | Política aprobada |
| L3.22 | Redactar Política de Protección de Datos Personales | Política aprobada |
| L3.23 | Redactar Política de Continuidad Operacional y DRP | Política aprobada |
| L3.24 | Validación cruzada entre políticas | Informe de consistencia |
| L3.25 | Aprobación y firma de 5 políticas por Sponsor | Acta de aprobación |
| L3.26 | Habilitación MFA en sistemas críticos | MFA habilitado |
| L3.27 | Activar antivirus corporativo | Antivirus desplegado |
| L3.28 | Establecer canal formal de soporte TI | Mesa de ayuda operativa |
| L3.29 | Redactar DRP formal | DRP aprobado |
| L3.30 | Documentar procedimiento ABM usuarios | Procedimiento aprobado |
| L3.31 | Redactar instructivos de usuario | Instructivos publicados |
| L3.32 | Redactar plan corporativo de comunicaciones TI | Plan aprobado |
| L3.33 | Documentar diagramas de infraestructura | Diagramas técnicos |
| L3.34 | Activar Gateway de Desvío D-30 | Registro de activaciones |
| L3.35 | Ejecutar cierre formal de proyectos normativos | Actas de cierre |
| L3.36 | Reporte ejecutivo final → G5 | Reporte G5 |

---

### L4 — Nueva Infraestructura TI

**Objetivo:** Nueva infraestructura base del área TI: BD centralizada, homogenización de maestros, migraciones.

| ID | Tarea | Output |
|----|-------|--------|
| L4.01 | Diseño de arquitectura técnica | Documento de arquitectura |
| L4.02 | Diseño de BD central | Esquema de BD central |
| L4.03 | Homogenización de maestros de datos | Catálogo de maestros |
| L4.04 | Desarrollo de artefactos de sincronización | Scripts/API operativos |
| L4.05 | Migración de soluciones existentes | Servicios migrados |
| L4.06 | Despliegue de nuevas aplicaciones | Aplicaciones operativas |

---

### L5 — Integraciones TI

**Objetivo:** Framework de integración tecnológica entre los 11 ERPs, BD central, PowerBI y sistemas externos.

| ID | Tarea | Output |
|----|-------|--------|
| L5.01 | Catálogo de integraciones existentes | Inventario de integraciones |
| L5.02 | Definición de estándares (REST API, ETL, webhooks) | Estándares documentados |
| L5.03 | Procedimientos operativos de monitoreo | Procedimientos operativos |
| L5.04 | Hoja de ruta de nuevas integraciones | Roadmap de integraciones |

---

## Mapa Mental — Estructura de Lineamientos

```
                        ┌─────────────────────────────────────┐
                        │     PLAN TI GRUPO EBI 2026          │
                        │   Diego Morales — PM                │
                        │   5 Hitos (G1 → G5)                 │
                        └─────────────────┬───────────────────┘
                                          │
           ┌──────────────────────────────┼──────────────────────────────┐
           │                              │                              │
           ▼                              ▼                              ▼
┌─────────────────────┐      ┌─────────────────────┐      ┌─────────────────────┐
│ L1: PORTAFOLIO TI  │      │ L2: ESTRUCTURACIÓN  │      │ L3: GOBERNANZA TI   │
│                     │      │    ÁREA TI          │      │                     │
├─────────────────────┤      ├─────────────────────┤      ├─────────────────────┤
│ 12 PROYECTOS:      │      │ 12 TAREAS:          │      │ 36 TAREAS:          │
│ ───────────────    │      │ ───────────────    │      │ ───────────────    │
│ 3 Normativos       │      │ Definición roles   │      │ Infraestructura    │
│   • Ley 19.628     │      │ Responsabilidades  │      │ Catastro (A/B/C)    │
│   • Ley 21.663/OIV │      │ Estructura jerárqu. │      │ Diagnóstico norm.   │
│   • Deloitte 2026  │      │ Transferencia CE   │      │ 5 Políticas         │
│                     │      │ Autonomía técnica  │      │ 6 Procedimientos    │
│ 3 Gobernanza        │      │ Brechas capacidad  │      │ Cierre y evidencia  │
│   • Catastro Apps   │      │ Perfiles nuevos    │      │                     │
│   • Mapeo ERP      │      └─────────────────────┘      └─────────────────────┘
│   • Seguro Ciberseg│                   
│                     │           ┌─────────────────────┐           ┌─────────────────────┐
│ 6 Estratégicos     │           │ L4: INFRAESTRUCTURA │           │ L5: INTEGRACIONES  │
│   • PowerBI        │           │    TI               │           │    TI               │
│   • Gestión Doc   │           ├─────────────────────┤           ├─────────────────────┤
│   • Activo Fijo    │           │ 6 TAREAS:           │           │ 4 TAREAS:           │
│   • SIA            │           │ ───────────────    │           │ ───────────────    │
│   • Sitrack        │           │ Arquitectura       │           │ Catálogo            │
│   • Migración SQL  │           │ BD central          │           │ Estándares          │
└─────────────────────┘           │ Maestros           │           │ Procedimientos     │
                                  │ Sincronización     │           │ Roadmap             │
                                  │ Migraciones        │           └─────────────────────┘
                                  │ Nuevas apps         │
                                  └─────────────────────┘
```

---

## Dependencias entre Lineamientos

```
L2 → Estructura organizacional
     └─→ Habilita codecisión para todos los lineamientos

L1 ← Consume output de L2, L3, L4
     └─→ Coordina los 5 hitos (G1→G5)

L3 → Políticas y procedimientos
     └─→ Habilita cierre de hallazgos Deloitte

L4 ← Requiere L3 Catastro C
     └─→ BD central + Arquitectura → Habilita L5

L5 ← Requiere L4 Arquitectura + BD central
     └─→ Integraciones transversales
```

---

## Resumen de Outputs por Lineamiento

| Lineamiento | Total tareas | Outputs clave |
|-------------|--------------|---------------|
| L1 — Portafolio TI | 10 | Acta semanal, Reporte RAG, Fichas proyecto, Actas cierre |
| L2 — Estructuración | 12 | Documento roles, Perfil DGM, Plan transferencia, Matriz brechas |
| L3 — Gobernanza TI | 36 | Teams/Planner/SharePoint, Catastro A/B/C, 5 Políticas, 6 Procedimientos, Actas cierre |
| L4 — Infraestructura | 6 | Documento arquitectura, Esquema BD, Catálogo maestros, Scripts sync |
| L5 — Integraciones | 4 | Inventario integraciones, Estándares, Procedimientos, Roadmap |

**Total: 68 tareas definidas con output concreto**