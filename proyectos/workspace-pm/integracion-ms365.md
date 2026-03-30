---
aliases:
  - Integración MS365 Workspace PM
tags:
  - activo
---

**Proyecto:** [[proyectos/workspace-pm/00-indice|Workspace PM]]

# Integración MS365 — Estado y objetivo

Objetivo: cerrar el ciclo de trazabilidad entre tareas operativas en Microsoft Planner y el registro de horas del vault, pasando por un staging YAML validable en `ms365-sync/output/` antes de consolidarse en `diario/`.

## Ecosistema MS365 activo

| Sistema | Uso actual | Integración con vault |
|---------|-----------|----------------------|
| Microsoft Teams | Decisiones y comunicación de proyecto | Manual — acuerdos se documentan en notas de decisión |
| Microsoft Planner | Tareas operativas con HH planificadas | Via ms365-sync/ (en construcción) |
| SharePoint | Documentos formales aprobados | Pendiente — flujo definido pero no automatizado |

## Flujo de staging: Planner → vault

```
Planner (fuente de verdad de tareas)
  ↓ Script Python + Graph API
ms365-sync/output/*.yaml (staging)
  ↓ workspace/vault normaliza
diario/*.md (consolidación HH)
  ↓ DataviewJS
RESUMEN-HORAS.md (reporting)
```

## Estado actual de la integración

| Componente | Estado | Responsable |
|-----------|--------|-------------|
| Script de extracción Planner → YAML | En construcción | workspace/ms365 |
| Schema YAML de staging | Definido | workspace/ms365 |
| Consumo de staging en diario/ | Pendiente (manual hoy) | workspace/vault |
| Automatización via Microsoft Graph API | En construcción | workspace/ms365 |
| Integración SharePoint | Pendiente | workspace/ms365 |

## Lo que falta para completar el ciclo

- Completar script de extracción Planner → `ms365-sync/output/*.yaml`
- Definir proceso de normalización YAML → entradas de diario/
- Automatizar la transferencia para reducir entrada manual de HH
**Campos mínimos del YAML de staging** (definidos en `planificacion/memory-contrato-tareas-y-horas.md`):

```yaml
fecha:
fuente:
sync_timestamp:
tareas:
  - descripcion:
    iniciativa:
    proyecto:
    rol:
    estado:
    horas:
    planner_task_id:
```
