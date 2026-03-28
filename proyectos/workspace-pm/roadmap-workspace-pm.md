---
aliases:
  - Roadmap Workspace PM
tags:
  - en-definicion
---

**Proyecto:** [[proyectos/workspace-pm/00-indice|Workspace PM]]

# Roadmap — Workspace PM 2026

## Fases del proyecto

### Fase 1 — Fundación (activo 🔵)

**Objetivo:** formalizar el proyecto como iniciativa estructurada dentro del vault

**Entregables:**
- `00-indice.md`
- `contexto-workspace-pm.md`
- `arquitectura-operativa.md`
- `fuentes-de-verdad.md`
- `stack-herramientas.md`
- `roadmap-workspace-pm.md`
- `backlog-workspace-pm.md`
- `integracion-ms365.md`

**Criterio de completitud:** proyecto visible y navegable desde `00-dashboard.md` con documentación mínima de contexto

**Progreso estimado:** 70% (5 de 8 documentos creados)

---

### Fase 2 — Reporting (en-definicion 🟠)

**Objetivo:** consolidar el ciclo completo de registro y visualización de horas

**Entregables:**
- `diario/RESUMEN-HORAS.md` con DataviewJS funcional (ya existe)
- integración staging ms365-sync → diario/
- `diario/PENDIENTES.md` actualizado

**Dependencias:** `workspace/ms365` debe completar staging confiable desde Planner

**Criterio de completitud:** ciclo Planner → staging → diario → dashboard funciona sin intervención manual

---

### Fase 3 — Visibilidad ejecutiva (pendiente ⚫)

**Objetivo:** tener un reporting ejecutivo del portafolio que pueda presentarse a gerencia

**Entregables:**
- canvas de portafolio completo
- dashboard web con KPIs navegables por proyecto
- reporte RAG semanal automatizado

**Dependencias:** Fase 2 completada

**Criterio de completitud:** Diego puede entregar un reporte de estado en < 5 minutos desde el vault

---

### Fase 4 — Madurez (pendiente ⚫)

**Objetivo:** el sistema opera de forma autónoma y sirve como patrón para nuevos proyectos

**Entregables:**
- guía de onboarding de nuevos proyectos al workspace
- automatizaciones estables
- revisión anual del stack

**Dependencias:** Fase 3 completada

**Criterio de completitud:** nuevo proyecto puede incorporarse al workspace siguiendo la guía sin asistencia directa

---

## Tabla resumen

| Fase | Estado | Progreso | Criterio |
|------|--------|----------|---------|
| Fase 1 — Fundación | activo 🔵 | 70% | Proyecto visible y navegable desde `00-dashboard.md` con documentación mínima de contexto |
| Fase 2 — Reporting | en-definicion 🟠 | — | Ciclo Planner → staging → diario → dashboard funciona sin intervención manual |
| Fase 3 — Visibilidad ejecutiva | pendiente ⚫ | — | Diego puede entregar un reporte de estado en < 5 minutos desde el vault |
| Fase 4 — Madurez | pendiente ⚫ | — | Nuevo proyecto puede incorporarse al workspace siguiendo la guía sin asistencia directa |
