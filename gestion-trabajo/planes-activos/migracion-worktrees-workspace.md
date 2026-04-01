---
aliases:
  - Migración Worktrees
  - Estándar Admin-Driven
tags:
  - activo
---

# Plan: Migración a Estándar Admin-Driven (Worktrees)

> [!IMPORTANT]
> Este plan habilita el aislamiento físico de los frentes de trabajo para evitar conflictos de entorno y profesionalizar la operación multiagente.

## Estado Operativo

- **Fase:** Ejecución
- **Rama Dueña:** `workspace/planning`
- **Siguiente Acción:** Usuario debe ejecutar `.\planificacion\scripts\setup-worktrees.ps1`

## Tareas Activas

- [x] Plan formal técnico (`planificacion/2026-04-01-migracion-worktrees-frentes-plan.md`)
- [x] Script de setup (`planificacion/scripts/setup-worktrees.ps1`)
- [x] Actualización de Guía Admin
- [x] Actualización de SCOPE
- [ ] Actualización del Tablero Maestro (en progreso)

## Próximos Hitos

1. **G2 (Mayo 2026)**: Todo el catálogo de aplicaciones Nivel A debe estar consolidado bajo el nuevo esquema físico.

## Notas para Administrador

- Una vez creados los worktrees, cada agente debe ser instruido para trabajar **solo** en su carpeta.
- La rama `desarrollo` sigue siendo el punto de integración central.
