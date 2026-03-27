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

## Jornada laboral esperada

| Día | Horas esperadas |
|-----|----------------|
| Lunes | 9h |
| Martes | 9h |
| Miércoles | 9h |
| Jueves | 8h |
| Viernes | 8h |
| **Total semanal** | **43h** |

---

## A) Mapa Semanal (semana actual)

> Días hábiles de la semana en curso: horas registradas vs. esperadas (L-Mi: 9h, J-V: 8h).
> `weekday()`: 0=dom, 1=lun, 2=mar, 3=mié, 4=jue, 5=vie

```dataview
TABLE fecha AS "Día",
      horas-total AS "Registradas",
      choice(weekday(date(fecha)) = 4, 8, choice(weekday(date(fecha)) = 5, 8, 9)) AS "Esperadas",
      choice(horas-total >= choice(weekday(date(fecha)) >= 4, 8, 9), "✅", choice(horas-total > 0, "⚠️ Parcial", "❌ Sin registro")) AS "Estado"
FROM "diario"
WHERE fecha AND semana = date(today).week
SORT fecha ASC
```

---

## B) Mapa Mensual (mes actual)

> Horas por semana dentro del mes en curso.

```dataview
TABLE sum(rows.horas-total) AS "Horas",
      length(rows) AS "Días con registro",
      round(sum(rows.horas-total) / length(rows), 1) AS "Promedio/día"
FROM "diario"
WHERE fecha AND fecha.year = date(today).year AND fecha.month = date(today).month
GROUP BY semana AS "Semana"
SORT semana ASC
```

---

## C) Distribución por Tipo de Trabajo

```dataview
TABLE sum(rows.entradas.horas) AS "Horas"
FROM "diario"
WHERE entradas
FLATTEN entradas
GROUP BY entradas.tipo-trabajo AS "Tipo de Trabajo"
SORT sum(rows.entradas.horas) DESC
```

---

## D) Horas por Iniciativa (Plan Gobernanza TI)

```dataview
TABLE sum(rows.entradas.horas) AS "Total Horas"
FROM "diario"
WHERE entradas
FLATTEN entradas
WHERE entradas.iniciativa
GROUP BY entradas.iniciativa AS "Iniciativa"
SORT sum(rows.entradas.horas) DESC
```

---

## E) Horas por Proyecto (período completo)

```dataview
TABLE sum(rows.entradas.horas) AS "Total Horas", length(rows) AS "Días"
FROM "diario"
WHERE entradas
FLATTEN entradas
GROUP BY entradas.proyecto AS Proyecto
SORT sum(rows.entradas.horas) DESC
```

---

## F) Horas por Día (últimas 30 entradas)

```dataview
TABLE fecha AS "Fecha", semana AS "Sem", horas-total AS "Horas"
FROM "diario"
WHERE fecha
SORT fecha DESC
LIMIT 30
```

---

## G) Horas por Actividad

```dataview
TABLE sum(rows.entradas.horas) AS "Total Horas"
FROM "diario"
WHERE entradas
FLATTEN entradas
GROUP BY entradas.actividad AS "Actividad"
SORT sum(rows.entradas.horas) DESC
```

---

## H) Horas por Rol

```dataview
TABLE sum(rows.entradas.horas) AS "Total Horas"
FROM "diario"
WHERE entradas
FLATTEN entradas
GROUP BY entradas.rol AS "Rol"
SORT sum(rows.entradas.horas) DESC
```

---

## I) Horas por Semana

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
