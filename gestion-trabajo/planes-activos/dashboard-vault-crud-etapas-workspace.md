---
aliases:
  - Workspace Dashboard-Vault CRUD
tags:
  - activo
---

# Workspace Visual — Dashboard-Vault CRUD de Tareas

**Plan técnico:** `planificacion/2026-04-06-dashboard-vault-crud-etapas-plan.md`
**Estado visible:** `listo-para-ejecutar`
**Rama dueña:** cross-rama

## Objetivo

Implementar por etapas un mantenedor de tareas en dashboard que permita crear, editar y cancelar logicamente tareas del vault sin romper el contrato canónico.

## Etapas activas

- Etapa 0: planning y handoff operativo
- Etapa 1: API local Node para escritura en frontmatter
- Etapa 2: UI de mantenedor (alta, edicion, cancelacion logica)
- Etapa 3: trazabilidad e id estable en vault
- Etapa 4: adaptador ms365 con repo `C:\repos\Planner_Import`

## Entregables por frente

- `workspace/dashboard`: API client + UI mantenedor + validaciones
- `workspace/vault`: contrato de persistencia, id estable y compatibilidad retroactiva
- `workspace/ms365`: adaptador liviano paralelo sin bloqueo del MVP
- `workspace/planning`: control operativo por task_id y coherencia de memoria/tablero

## Siguiente accion

Distribuir handoffs por frente y ejecutar etapa 1-2 desde `workspace/dashboard`.

