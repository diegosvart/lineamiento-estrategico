---
aliases:
  - Guía de Uso Workspace PM
tags:
  - activo
---

**Proyecto:** [[proyectos/workspace-pm/00-indice|Workspace PM]]

# Guía de Uso — Workspace PM

---

## ¿Qué es el Workspace PM?

Sistema de trabajo formal de Diego Morales como PM consultor. Integra Microsoft Planner (ejecución de tareas), el vault Obsidian (conocimiento, decisiones, reporting), ms365-sync (staging de datos) y el dashboard React (visualización de KPIs) en un modelo operativo explícito. El objetivo es que cada capa tenga un rol definido y que no haya duplicación de lógica ni de datos entre sistemas.

---

## Flujo de trabajo diario

1. **Abrir Obsidian** → entrar por `00-dashboard.md` (punto de entrada del portafolio)
2. **Revisar foco del día** → `gestion-trabajo/tablero-maestro.md` — alertas activas, planes en curso, handoffs pendientes
3. **Registrar horas** → `diario/YYYY/MM/YYYY-MM-DD.md` — manual o usando `/vault-timesheet`
4. **Consultar estado de proyectos** → índices en `proyectos/[nombre]/00-indice.md`
5. **Actualizar estados** → cambiar tags YAML y secciones de estado en las notas correspondientes

---

## Dónde encontrar cada cosa

| Necesito... | Ir a... |
|-------------|---------|
| Estado del portafolio | [[00-dashboard\|00-dashboard.md]] |
| Horas consumidas / resumen | [[diario/RESUMEN-HORAS\|diario/RESUMEN-HORAS.md]] |
| Plan Gobernanza TI (principal) | [[proyectos/plan-gobernanza-ti/00-indice\|plan-gobernanza-ti/00-indice.md]] |
| Backlog de iniciativas (vista humana) | [[gestion-trabajo/backlog-iniciativas\|gestion-trabajo/backlog-iniciativas.md]] |
| Planes activos y handoffs | [[gestion-trabajo/tablero-maestro\|gestion-trabajo/tablero-maestro.md]] |
| Tarjetas de planes activos | `gestion-trabajo/planes-activos/` |
| Decisiones del workspace | `proyectos/workspace-pm/00-contexto/` |
| Backlog técnico de planificación | `planificacion/backlog.md` |

---

## Cómo agregar trabajo nuevo

### Tarea operativa (asignada a alguien, con fecha)
→ Crear en **Microsoft Planner** (fuente de verdad de ejecución). No duplicar en Obsidian.

### Registro de horas del día
→ Agregar entrada en `diario/YYYY/MM/YYYY-MM-DD.md` manualmente, o invocar `/vault-timesheet` en Claude Code.

### Nueva tarea documental del vault
→ Usar `/vault-task add` en Claude Code — entrevista guiada que genera la entrada en `diario/` con los campos correctos.

### Nueva iniciativa o proyecto
→ Agregar al `planificacion/backlog.md` (sección "Por Planificar"). Workspace/planning (Codex) genera el plan técnico. Cuando el plan está `listo-para-ejecutar`, workspace/vault lo ejecuta.

---

## Reglas clave del sistema

| Regla | Detalle |
|-------|---------|
| **Planner = ejecución** | Las tareas operativas viven en Planner. Obsidian no las duplica — solo referencia y consolida HH. |
| **Obsidian = conocimiento** | Documentación, decisiones, contexto y reporting viven aquí. |
| **SharePoint = formal** | Un documento migra a SharePoint solo cuando llega a estado `completado` y es aprobado. |
| **Las capas solo leen hacia adelante** | ms365-sync extrae de Planner. Vault consume staging. Dashboard lee vault. Nunca al revés. |
| **Cada rama tiene dominio exclusivo** | `workspace/vault` escribe en `proyectos/` y `diario/`. `workspace/planning` escribe en `planificacion/` y `gestion-trabajo/`. No cruzar dominios sin coordinación explícita. |

---

## Skills de Claude Code disponibles

| Skill | Cuándo usarlo |
|-------|--------------|
| `/vault-session-start` | Siempre al inicio de sesión — sincroniza git y reporta estado del vault |
| `/vault-session-end` | Al cerrar sesión — resume trabajo y deja handoff |
| `/vault-status` | Ver o actualizar el estado de una iniciativa del lineamiento |
| `/vault-new-note` | Crear una nota nueva con estructura y links correctos |
| `/vault-task` | Entrevista guiada para agregar tareas al diario con campos canónicos |
| `/vault-timesheet` | Gestionar registro de horas en Daily Notes |
| `/vault-audit` | Diagnóstico del vault — links rotos, YAML inválido, gaps |
| `/vault-canvas` | Crear o actualizar un Obsidian Canvas |
| `/vault-excalidraw` | Enlazar y gestionar diagramas Excalidraw |
| `/vault-link-update` | Corregir wikilinks en bulk |
| `/vault-markdown-syntax` | Mejorar sintaxis OFM en archivos existentes |
