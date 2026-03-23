# Lineamientos — Plan de Transformación TI 2026

---

## L1 — Portafolio TI

**12 proyectos en ejecución · 54 horas de gestión**

Administración del conjunto de iniciativas que ejecutan los lineamientos L2, L3, L4. Incluye 3 proyectos normativos (Ley 19.628, Ley 21.663, Deloitte), 3 de gobernanza (catastro, diagnóstico, políticas), y 6 estratégicos (reportes consolidados, PowerBI automático, ciberseguridad, etc.). El PM es responsable de codecisión con JTI, seguimiento semanal en Planner, y escalonamiento de hallazgos a GG.

**Estado:** Activo · **Semanas:** S1–S38 (continuo)
**Responsable:** Diego Morales (PM) · **Input:** GG aprobación G1
**Output:** Portafolio priorizado G2, Proyectos normativos activos G3

---

## L2 — Estructuración del Área TI

**Formalización organizacional · 28 horas**

Construcción formal de la unidad TI: roles, responsabilidades, líneas de reporte, y creación del rol Data Governance Manager. Transferencia estructurada de conocimiento técnico de Alexi (consultor externo) hacia JTI y ARI para lograr autonomía operativa. Sin esta formalización, los otros lineamientos no tienen ejecutor responsable.

**Estado:** Activo · **Semanas:** S1–S3 (30 Mar – 17 Abr)
**Responsable:** PM + JTI (codecisión) · **Input:** Ninguna (arranque)
**Output:** Habilita L3 y L4, Input para G1

---

## L3 — Plan de Gobernanza TI

**Framework normativo y documental · 82 horas**

Cobertura legal y operativa mediante catastro de aplicaciones (3 niveles: A, B, C), diagnóstico de brechas regulatorias (Ley 19.628, Ley 21.663), redacción de 5 políticas TI firmadas, y cierre auditado de 9 hallazgos Deloitte. Sin políticas aprobadas, los hallazgos no se cierran formalmente aunque estén resueltos técnicamente. Es la carga documental y normativa más pesada del plan.

**Estado:** Activo · **Semanas:** S4–S12 (Fases 1+2) y S13–S25 (Fase 3)
**Responsable:** PM (design) + JTI (validación) · **Input:** L2 formalizado
**Output:** Catastro Level A (G2), Políticas firmadas (G3), Cierre auditado (G4–G5)

---

## L4 — Nueva Infraestructura TI

**Arquitectura, BD centralizada, migraciones · Carga técnica alta**

Base técnica de la transformación: diseño de arquitectura escalable, BD central que consolida datos de 11 subsidiarias, homogenización de maestros de datos, artefactos de sincronización automática, migración de soluciones existentes al nuevo modelo, e infraestructura para nuevas aplicaciones transversales (PowerBI, reportes consolidados). Es paralelo con L3 desde S5 en adelante. Carga técnica delegable a equipo externo en fases posteriores, pero diseño siempre en PM.

**Estado:** Activo · **Semanas:** S5–S38 (paralelo con L3)
**Responsable:** PM (diseño arquitectónico) · **Input:** L3 Catastro Level C
**Output:** Infraestructura operativa, Base para nuevas aplicaciones transversales

---

## Flujo de Dependencias

```
G1 (Aprobado GG)
  ├─→ L2 (Formalización TI) S1–S3
  │    └─→ L3 (Gobernanza TI) S4–S12
  │         ├─→ G2 (Catastro A + diagnóstico)
  │         ├─→ G3 (Políticas firmadas)
  │         └─→ L4 (Infraestructura) a partir de L3 Catastro C
  │              ├─→ Diseño arquitectura
  │              ├─→ BD central
  │              ├─→ Migraciones
  │              └─→ Nuevas aplicaciones transversales
  │
  └─→ L1 (Portafolio TI) — ejecución continua de todos
       ├─→ 3 proyectos normativos (Ley 19.628, Ley 21.663, Deloitte)
       ├─→ 3 proyectos gobernanza (catastro, diagnóstico, políticas)
       └─→ 6 proyectos estratégicos (reportes, PowerBI, ciberseguridad, etc.)
```

---

**Horizonte total:** 30 Marzo – 11 Diciembre 2026 (38 semanas)
**Decisor:** Gerencia General · **Sponsor:** Comité Directivo
**PM:** Diego Morales · **JTI:** Gustavo Contreras

---

*Documento de referencia — Estructura de los 4 lineamientos del plan estratégico 2026*
*Última actualización: 23 marzo 2026*
