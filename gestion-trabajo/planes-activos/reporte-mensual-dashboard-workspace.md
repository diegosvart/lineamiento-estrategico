---
aliases:
  - Workspace Reporte Mensual Dashboard
tags:
  - activo
---

# Workspace Visual — Reporte Mensual Ejecutivo Dashboard

**Plan técnico:** `planificacion/2026-03-30-reporte-mensual-dashboard-y-convencion-workspace-pm-plan.md`
**Estado visible:** `listo-para-ejecutar`
**Rama dueña:** `workspace/dashboard` → `workspace/vault`
**Canvas:** no requerido

## Objetivo

Construir una vista previa simple del reporte mensual dentro del dashboard y permitir su descarga como archivo Markdown enviable por correo, usando `diario/YYYY/MM/*.md` como fuente única del período.

## Tareas clave

- Ajustar lectura de daily notes desde subcarpetas `YYYY/MM`
- Consolidar datos del mes en una estructura exportable
- Renderizar preview ejecutiva dentro del dashboard
- Descargar el reporte en `.md` con nombre fechable
- Dejar handoff a `workspace/vault` para actualizar guía y backlog de `workspace-pm`

## Dependencias

- `diario/YYYY/MM/*.md` como fuente consolidada
- `workspace/dashboard` mantiene lectura solamente sobre el vault

## Entregables

- Panel de reporte mensual en dashboard
- Descarga Markdown del reporte
- Handoff documental para `workspace/vault`

## Siguiente acción

Implementar en `workspace/dashboard` la preview y la descarga del reporte mensual; después actualizar la convención documental del `workspace-pm` desde `workspace/vault`.
