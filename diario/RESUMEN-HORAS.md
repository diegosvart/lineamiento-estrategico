---
aliases:
  - Resumen de Horas
tags:
  - diario
---

# Resumen de Horas — Plan Gobernanza TI 2026

> Dashboard dinámico via Dataview. Requiere plugin **Dataview** activo en Obsidian.
> Si no ves las tablas, ejecuta `/vault-dataview-setup` para verificar la configuración.

---

## A) Horas por Proyecto (período completo)

```dataview
TABLE sum(rows.entradas.horas) AS "Total Horas", length(rows) AS "Días"
FROM "diario"
WHERE entradas
FLATTEN entradas
GROUP BY entradas.proyecto AS Proyecto
SORT sum(rows.entradas.horas) DESC
```

---

## B) Horas por Día (últimas 30 entradas)

```dataview
TABLE fecha AS "Fecha", semana AS "Sem", horas-total AS "Horas"
FROM "diario"
WHERE fecha
SORT fecha DESC
LIMIT 30
```

---

## C) Horas por Tipo de Tarea

```dataview
TABLE sum(rows.entradas.horas) AS "Total Horas"
FROM "diario"
WHERE entradas
FLATTEN entradas
GROUP BY entradas.tipo AS "Tipo de Tarea"
SORT sum(rows.entradas.horas) DESC
```

---

## D) Horas por Semana

```dataview
TABLE sum(rows.horas-total) AS "Horas Semana", length(rows) AS "Días trabajados"
FROM "diario"
WHERE semana
GROUP BY semana AS "Semana"
SORT semana DESC
LIMIT 12
```

---

*Actualizado automáticamente por Dataview al abrir esta nota.*
*Para agregar entradas: `/vault-timesheet add`*
