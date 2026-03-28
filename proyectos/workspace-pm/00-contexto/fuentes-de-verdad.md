---
aliases:
  - Fuentes de Verdad Workspace PM
tags:
  - en-definicion
---

**Proyecto:** [[proyectos/workspace-pm/00-indice|Workspace PM]]

# Fuentes de Verdad — Reglas entre sistemas

## Tabla de fuentes de verdad

| Dominio | Fuente de verdad | Sistema | Regla |
|---------|-----------------|---------|-------|
| Tareas operativas | Microsoft Planner | MS365 | Lo que no está en Planner no existe como tarea asignada |
| Horas consumidas | `diario/*.md` (frontmatter YAML) | Obsidian | El campo `horas-total` y la lista `entradas` son la fuente — la tabla markdown es solo visualización |
| Documentación de proyectos | `proyectos/[nombre]/` | Obsidian | Las notas en vault son la fuente de conocimiento activo |
| Documentos formales aprobados | SharePoint | MS365 | Solo migra a SharePoint cuando un documento llega a estado `completado` |
| Visualización y KPIs | `diario/RESUMEN-HORAS.md` + dashboard | Obsidian + React | El dashboard lee el vault — nunca al revés |
| Decisiones de proyecto | Notas en `proyectos/*/00-contexto/` | Obsidian | Toda decisión queda documentada antes de ejecutarse |

## Reglas de no-duplicación

- NO copiar tareas de Planner a Obsidian — solo referenciar con descripción y HH
- NO guardar versiones de documentos en Obsidian cuando ya están en SharePoint — solo enlazar
- NO calcular HH en el dashboard — solo leer de `diario/*.md`
- NO commitear cambios fuera del scope de la rama — ver arquitectura operativa
- NO marcar como completado en vault sin evidencia en Planner o SharePoint

## Flujo de aprobación documental

Obsidian (borrador) → revisión PM+JTI → aprobado → export a SharePoint → nota en Obsidian con `> 📁 Versión aprobada en SharePoint: [ruta]`
