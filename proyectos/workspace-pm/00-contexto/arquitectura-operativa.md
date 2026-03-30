---
aliases:
  - Arquitectura Operativa Workspace PM
tags:
  - activo
---

**Proyecto:** [[proyectos/workspace-pm/00-indice|Workspace PM]]

# Arquitectura Operativa — Sistema de Trabajo del PM

## Las 4 capas del sistema

| Capa | Sistema | Rama Git | Qué contiene | Qué produce |
|------|---------|----------|--------------|-------------|
| Ejecución | Microsoft Planner | (externo) | Tareas, HH planificadas, responsables | YAML de staging via ms365-sync |
| Staging | ms365-sync/ | workspace/ms365 | output/*.yaml con tareas e HH exportadas | Datos normalizados para vault |
| Conocimiento | Obsidian vault | workspace/vault | proyectos/, diario/, gestion-trabajo/ | Documentación, reporting, decisiones |
| Visualización | Dashboard React | workspace/dashboard | src/ con lectores del vault | KPIs y métricas de HH |

## Flujo de datos

```
Planner (ejecución)
  → ms365-sync/output/*.yaml (staging)
    → diario/*.md (consolidación en vault)
      → dashboard (visualización)
```

Regla fundamental: **cada capa lee de la anterior, nunca escribe hacia atrás**.

- `ms365-sync` extrae desde Planner y escribe en `output/*.yaml` — no toca el vault ni el dashboard.
- `workspace/vault` consume el staging YAML y consolida en `diario/*.md` y notas de soporte — no escribe en ms365-sync ni en Planner.
- `dashboard/` lee el vault en modo lectura para visualización local — no normaliza ni persiste datos fuera de su carpeta.

## Separación de responsabilidades por rama

| Rama | IDE | Área de escritura | No escribe en |
|------|-----|-------------------|---------------|
| workspace/vault | Claude Code | proyectos/, diario/, .claude/commands/ | planificacion/, ms365-sync/, dashboard/ |
| workspace/planning | Codex | planificacion/, gestion-trabajo/ | proyectos/, diario/, dashboard/ |
| workspace/ms365 | VS Code | ms365-sync/ | vault, dashboard, planificacion/ |
| workspace/dashboard | Cursor | dashboard/ | vault, ms365-sync, planificacion/ |

## Principios de la arquitectura

- **Planner es la fuente de verdad de ejecución** — las tareas operativas no se duplican en Obsidian; el vault consolida solo lo que ya fue ejecutado y registrado.
- **Obsidian es la fuente de verdad de conocimiento** — el contenido documental no se duplica en SharePoint hasta que un documento alcanza estado aprobado.
- **El dashboard solo lee y transforma para UI** — nunca normaliza ni calcula lógica de negocio; las métricas finales se construyen sobre HH consolidadas en `diario/*.md`, no sobre staging.
- **Cada rama tiene dominio exclusivo** — commits fuera de scope generan conflictos de integración y deben evitarse; cualquier excepción requiere coordinación explícita entre ámbitos.

**Manejo de errores en staging YAML:** Si un archivo `ms365-sync/output/*.yaml` contiene errores de validación, `workspace/ms365` es responsable de corregirlo y re-exportar. `workspace/vault` no consume YAMLs inválidos — el ciclo se detiene en staging hasta que el archivo es válido. El error se reporta como issue en el repo.

**Ámbito de `gestion-trabajo/`:** Pertenece a `workspace/planning` (Codex), que es responsable de mantener `planificacion/` y la capa visual `gestion-trabajo/` sincronizadas. `workspace/vault` puede leer y enlazar desde `gestion-trabajo/`, pero no escribe en esa carpeta.
