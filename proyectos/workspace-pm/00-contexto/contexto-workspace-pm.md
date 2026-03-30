---
aliases:
  - Contexto Workspace PM
tags:
  - activo
---

**Proyecto:** [[proyectos/workspace-pm/00-indice|Workspace PM]]

# Contexto Workspace PM

---

## Por qué existe este proyecto

El repositorio comenzó como documentación del Plan Gobernanza TI para Grupo EBI. Con el tiempo, acumuló capacidades que van más allá de ese proyecto:

- **Reporting de trabajo:** `diario/*.md` como fuente consolidada de horas consumidas por proyecto e iniciativa
- **Gestión de portafolio:** `proyectos/` con índices, estados y dependencias de 6 proyectos activos
- **Documentación del lineamiento 2026:** estructura `L1`–`L5` del Plan Gobernanza TI
- **Integración MS365:** `ms365-sync/` como puente entre Planner y el vault (rama `workspace/ms365`)
- **Capa visual:** `dashboard/` React con KPIs y métricas de HH, y `gestion-trabajo/` como capa visual dentro de Obsidian

Esa capacidad combinada funciona hoy como el **sistema de trabajo del PM** — pero opera de forma implícita, sin backlog formal, sin roadmap, sin fuentes de verdad documentadas. Este proyecto lo modela como iniciativa formal dentro del vault.

---

## El problema que resuelve

| Necesidad | Sin este proyecto | Con este proyecto |
|-----------|-------------------|-------------------|
| Modelar el sistema de trabajo del PM como proyecto formal | El sistema existe pero no está definido — caos implícito, deuda estructural acumulada | Backlog, roadmap y fuentes de verdad explícitas; el sistema puede mantenerse y evolucionar |
| Trazabilidad entre capas (Planner, Obsidian, SharePoint, dashboard) | Duplicación de datos, conflictos entre capas, lógica de integración en lugares incorrectos | Contrato explícito entre capas: quién produce, quién consume, quién persiste |
| Escalabilidad del sistema a múltiples proyectos | Cada proyecto nuevo re-inventa la estructura de integración y documentación | Patrón reutilizable validado en el proyecto primario, replicable al resto del portafolio |

---

## Capacidades que integra

| Capa | Sistema | Rol | Estado actual |
|------|---------|-----|---------------|
| Ejecución | Microsoft Planner | Fuente de verdad de tareas operativas | Activo |
| Staging | ms365-sync/ (repo) | Puente Planner → Obsidian; exporta YAML de tareas e HH | En construcción |
| Conocimiento | Obsidian (este vault) | Documentación, reporting, decisiones, catálogos | Activo |
| Visualización | Dashboard React | KPIs y métricas de HH consumidas | Activo |
| Formal | SharePoint | Documentos aprobados para registro corporativo | Pendiente integración |

---

## Stakeholders

| Rol | Nombre | Responsabilidad |
|-----|--------|-----------------|
| PM / Dueño del sistema | Diego Morales | Diseño, mantenimiento y uso diario del sistema de trabajo |
| Jefe TI (JTI) | (no nombrar) | Codecisión en el Plan Gobernanza TI; consumidor indirecto del sistema |
| Sponsor GG | N/A | Este proyecto es una herramienta operativa del PM — no requiere aprobación de Sponsor GG. Si en el futuro se solicita presupuesto para iniciativas del workspace, se designará Sponsor en ese momento. |

---

## Alcance

**Incluye:**
- Documentación del sistema de trabajo del PM (flujos, contratos entre capas, fuentes de verdad)
- Backlog y roadmap del workspace como proyecto formal
- Definición y mantenimiento de fuentes de verdad por capa (`ms365-sync/output/`, `diario/`, `proyectos/`, `dashboard/`)
- Integración MS365: contrato de staging, campos mínimos, reglas de calidad
- Reporting de horas consumidas por proyecto e iniciativa

**Excluye:**
- Reemplazar Microsoft Planner como herramienta de ejecución de tareas operativas
- Gestión de proyectos corporativos (cada proyecto vive en su propia carpeta `proyectos/[nombre]/`)
- Lógica de negocio en el frontend (el dashboard consume datos; no normaliza ni calcula)
