---
aliases:
  - Dashboard Cosemar
  - Portfolio PM
tags:
  - activo
---

# Cosemar PM Workspace — Dashboard

**PM:** Diego Morales — Consultor Cosemar
**Actualizado:** 2026-03-26

---

## Portafolio de Proyectos Activos

| Proyecto | Estado | Índice |
| --- | --- | --- |
| Plan Gobernanza TI — Grupo EBI | 🔵 Activo | [[proyectos/plan-gobernanza-ti/00-indice\|Ver índice]] |
| Workspace PM | 🟠 En definición | [[proyectos/workspace-pm/00-indice\|Ver índice]] |
| Cash Flow | ⚫ Pendiente | [[proyectos/cash-flow/00-indice\|Ver índice]] |
| Sitrack | ⚫ Pendiente | [[proyectos/sitrack/00-indice\|Ver índice]] |
| Activo Fijo | ⚫ Pendiente | [[proyectos/activo-fijo/00-indice\|Ver índice]] |
| Gestión de Documentos | ⚫ Pendiente | [[proyectos/gestion-documentos/00-indice\|Ver índice]] |
| Seguros & Siniestros | ⚫ Pendiente | [[proyectos/seguros-siniestros/00-indice\|Ver índice]] |

---

## Acceso Rápido

- **Timesheet / Registro de horas:** `diario/` → [[diario/RESUMEN-HORAS|Resumen de horas]]
- **Plan Gobernanza TI (principal):** [[proyectos/plan-gobernanza-ti/00-indice|Índice completo]]
- **Gestión del trabajo:** [[gestion-trabajo/00-indice-gestion-trabajo|Índice visual]] · [[gestion-trabajo/tablero-maestro|Tablero maestro]]
- **Configuración del vault:** [[CONFIGURACION-GRAFO|Configuración del grafo]] · [[GUIA-OBSIDIAN-VAULT|Guía Obsidian]]

---

## Horas por Proyecto — Últimas 4 Semanas

```dataview
TABLE
  sum(rows.horas-total) AS "Horas totales"
FROM "diario"
WHERE date(fecha) >= date(today) - dur(28 days)
FLATTEN entradas AS entrada
GROUP BY entrada.proyecto AS Proyecto
SORT sum(rows.horas-total) DESC
```

---

## Notas Activas por Proyecto

```dataview
TABLE
  file.mtime AS "Última modificación"
FROM "proyectos"
WHERE contains(tags, "activo")
SORT file.mtime DESC
```
