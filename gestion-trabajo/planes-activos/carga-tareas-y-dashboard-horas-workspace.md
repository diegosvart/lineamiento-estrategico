---
aliases:
  - Workspace Carga de Tareas y Dashboard de Horas
tags:
  - activo
---

# Workspace Visual — Carga de Tareas y Dashboard de Horas

**Plan técnico:** `planificacion/2026-03-26-carga-tareas-y-dashboard-horas-plan.md`
**Estado visible:** `listo-para-ejecutar`
**Rama dueña:** cross-rama
**Canvas:** [[gestion-trabajo/planes-activos/carga-tareas-y-dashboard-horas-workspace.canvas|Abrir canvas]]

## Objetivo

Conectar staging MS365, consolidación en vault y visualización de HH consumidas mediante un flujo coordinado entre ramas.

## Tareas clave

- Mantener contrato común de datos y handoff
- Profundizar contexto del vault
- Asegurar staging confiable desde Planner
- Construir navegación, métricas y KPI en dashboard
- Mantener memoria mínima por rama

## Dependencias

- `ms365-sync/output/*.yaml` como staging válido
- `diario/*.md` como fuente consolidada

## Entregables

- Memorias cross-rama
- Contrato de tareas y horas
- Dashboard sobre HH consumidas

## Siguiente acción

Ejecutar los handoffs pendientes por rama y mantener la visualización sincronizada con el progreso real.
