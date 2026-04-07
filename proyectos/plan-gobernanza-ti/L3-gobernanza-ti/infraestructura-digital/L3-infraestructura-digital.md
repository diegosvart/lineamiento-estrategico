---
aliases:
  - Infraestructura Digital del Área TI
tags:
  - pendiente
---

# Infraestructura Digital del Área TI

**Lineamiento:** [[../L3-gobernanza-ti|L3 - Plan de Gobernanza TI]]
**Horizonte:** S1–S3 (Fase 1 inicial)
**Responsable:** PM


## Descripción

Creación de la plataforma digital operativa del área TI en Microsoft 365. Define los espacios
donde ocurren decisiones (Teams), se planifica ejecución (Planner) y se almacena documentación
(SharePoint). Sin esta infraestructura, L1, L3 y L4 no pueden operar.

**Precondición:** Ninguna — paralela con L2
**Habilita:** [[../catastro-aplicaciones/L3-catastro-aplicaciones|Catastro de aplicaciones]]


## Tareas (WS-2: 2.01–2.04)

| ID | Tarea | Responsable | Estado |
|---|---|---|---|
| 2.01 | Crear canal oficial del área TI en Teams — configuración, permisos, descripción | PM | Pendiente |
| 2.02 | Crear estructura Planner del área — planes por lineamiento, categorías, campos personalizados | PM | Pendiente |
| 2.03 | Crear estructura SharePoint del área — librerías, accesos, taxonomía de carpetas | PM + SPT | Pendiente |

### Tarea 2.04 (siguiente iteración)
- Configurar plantilla de proyecto en Planner usando Graph API + Python — automatización de creación de entornos por proyecto


## Flujo de uso

```
[Decisiones] → Teams (canal #area-ti)
[Planificación] → Planner (planes L1, L2, L3, L4)
[Documentación] → SharePoint (librerías por categoría)
               ↓
      [Automación Graph API]
      ↓
[Nuevos proyectos] → Crea teams + planner + sharepoint automáticamente
```


## Entregables

- ✓ Canal Teams operativo con descripción, foto, configuración de miembros
- ✓ Planes Planner para L1, L2, L3, L4 con vistas por categoría, responsable, fecha
- ✓ Estructura SharePoint con librerías: Documentos, Políticas, Catastro, Artefactos, Reportes
- [ ] Plantilla automatizada Graph API (S2, iteración siguiente)


## Notas operacionales

- El PM es el dueño inicial de Teams/Planner/SharePoint
- SPT apoya en la configuración de SharePoint (permisos, migración datos si existen)
- JTI valida estructura antes de comenzar a usarla (no necesita aprobación formal, solo feedback)
- Revisión trimestral para agregar nuevas librerías o campos conforme se generan nuevos tipos de artefactos


*Última actualización: 23 marzo 2026*
