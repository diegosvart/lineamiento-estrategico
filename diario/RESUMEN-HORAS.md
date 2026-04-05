---
aliases:
  - Resumen de Horas
tags:
  - diario
---

# Resumen de Horas — Plan Gobernanza TI 2026

> Dashboard dinámico via Dataview. Requiere plugin **Dataview** activo con DataviewJS habilitado en Obsidian.
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

> Muestra los 5 días hábiles Lun–Vie de la semana en curso. Días sin nota → link para crear desde template `_template-diario`.
> `fecha.weekday` Luxon: 1=Lun...5=Vie. L-Mi: 9h esperadas · J-V: 8h esperadas.

```dataviewjs
const today = dv.date("today");
const monday = today.startOf("week");
const headers = ["Nota", "HH Reg", "HH Esp", "Estado"];
const rows = [];

for (let i = 0; i < 5; i++) {
  const day = monday.plus({ days: i });
  const dateStr = day.toFormat("yyyy-MM-dd");
  const wd = day.weekday; // 1=Lun...5=Vie
  const expected = (wd >= 4) ? 8 : 9;

  const page = dv.pages('"diario"')
    .where(p => p.fecha && !p.file.name.startsWith("_") && p.fecha.toFormat && p.fecha.toFormat("yyyy-MM-dd") === dateStr)
    .first();

  if (page) {
    const reg = [].concat(page?.entradas || []).reduce((s, e) => s + (e?.horas ?? 0), 0);
    const estado = reg >= expected ? "✅" : reg > 0 ? "⚠️ Parcial" : "❌";
    rows.push([page.file.link, reg, expected, estado]);
  } else {
    rows.push([`[[diario/${day.toFormat("yyyy")}/${day.toFormat("MM")}/${dateStr}|📝 ${dateStr}]]`, "—", expected, "❌ Sin nota"]);
  }
}

dv.table(headers, rows);
```

---

## B) Mapa Mensual (mes actual)

> Calendario del mes. ✅ = HH completas · ⚠️ = parcial · ❌ = sin horas · ~~tachado~~ = día pasado sin nota · número sin icono = día futuro. Click en día → abre daily note.

```dataviewjs
const today = dv.date("today");
const year = today.year;
const month = 3;

const pages = dv.pages('"diario"')
  .where(p => p.fecha && p.fecha.year === year && p.fecha.month === month)
  .array();

const byDate = {};
for (const p of pages) {
  const key = p.fecha.toFormat("yyyy-MM-dd");
  byDate[key] = p;
}

const firstDay = today.startOf("month");
const lastDay = today.endOf("month");
const monthName = today.toFormat("MMMM yyyy");

const table = dv.container.createEl("table", { cls: "dataview" });
const thead = table.createEl("thead");
const hr = thead.createEl("tr");
hr.createEl("th", { text: monthName, attr: { style: "text-align:left" } });
["Lun", "Mar", "Mié", "Jue", "Vie"].forEach(h =>
  hr.createEl("th", { text: h, attr: { style: "text-align:center" } })
);

const tbody = table.createEl("tbody");
let cursor = firstDay.startOf("week");

while (cursor <= lastDay) {
  const tr = tbody.createEl("tr");
  tr.createEl("td", { text: `Sem ${cursor.weekNumber}` });
  for (let wd = 1; wd <= 5; wd++) {
    const d = cursor.plus({ days: wd - 1 });
    const td = tr.createEl("td", { attr: { style: "text-align:center" } });
    if (d.month !== month) {
      td.textContent = "—";
    } else {
      const key = d.toFormat("yyyy-MM-dd");
      const p = byDate[key];
      const dayNum = d.day;
      const expected = (wd >= 4) ? 8 : 9;
      if (p) {
        const reg = [].concat(p?.entradas || []).reduce((s, e) => s + (e?.horas ?? 0), 0);
        const icon = reg >= expected ? "✅" : reg > 0 ? "⚠️" : "❌";
        const path = `diario/${d.toFormat("yyyy")}/${d.toFormat("MM")}/${key}`;
        td.createEl("a", {
          cls: "internal-link",
          text: `${dayNum}${icon}`,
          attr: { href: path, "data-href": path, "data-type": "file" }
        });
      } else if (d < today) {
        td.createEl("s", { text: String(dayNum) });
      } else {
        td.textContent = String(dayNum);
      }
    }
  }
  cursor = cursor.plus({ weeks: 1 });
  if (cursor > lastDay) break;
}
```

---

## C) Distribución por Tipo de Trabajo

```dataviewjs
const pages = dv.pages('"diario"').where(p => p.entradas && !p.file.name.startsWith("_")).array();
const totals = {};
let grand = 0;

for (const p of pages) {
  const entradas = [].concat(p.entradas || []);
  for (const e of entradas) {
    if (!e) continue;
    const tipo = e["tipo-trabajo"] ?? "Sin clasificar";
    totals[tipo] = (totals[tipo] ?? 0) + (e.horas ?? 0);
    grand += (e.horas ?? 0);
  }
}

if (grand === 0) {
  dv.paragraph("> Sin datos registrados.");
} else {
  const bar = (hh) => {
    const filled = Math.round((hh / grand) * 14);
    return "█".repeat(filled) + "░".repeat(14 - filled);
  };

  const rows = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .map(([tipo, hh]) => [tipo, hh, `${Math.round(hh / grand * 100)}%`, bar(hh)]);

  dv.table(["Tipo de Trabajo", "HH", "%", "Proporción"], rows);
}
```

---

## D) Horas por Iniciativa (Plan Gobernanza TI)

```dataviewjs
const pages = dv.pages('"diario"').where(p => p.entradas && !p.file.name.startsWith("_")).array();
const totals = {};
let grand = 0;

for (const p of pages) {
  const entradas = [].concat(p.entradas || []);
  for (const e of entradas) {
    if (!e || !e.iniciativa) continue;
    const key = e.iniciativa;
    totals[key] = (totals[key] ?? 0) + (e.horas ?? 0);
    grand += (e.horas ?? 0);
  }
}

if (grand === 0) {
  dv.paragraph("> Sin datos registrados.");
} else {
  const bar = (hh) => {
    const filled = Math.round((hh / grand) * 14);
    return "█".repeat(filled) + "░".repeat(14 - filled);
  };

  const rows = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .map(([key, hh]) => [key, hh, `${Math.round(hh / grand * 100)}%`, bar(hh)]);

  dv.table(["Iniciativa", "HH", "%", "Proporción"], rows);
}
```

---

## E) Horas por Proyecto (período completo)

```dataviewjs
const pages = dv.pages('"diario"').where(p => p.entradas && !p.file.name.startsWith("_")).array();
const totals = {};
const dias = {};
let grand = 0;

for (const p of pages) {
  const entradas = [].concat(p.entradas || []);
  for (const e of entradas) {
    if (!e) continue;
    const proy = e.proyecto ?? "Sin proyecto";
    totals[proy] = (totals[proy] ?? 0) + (e.horas ?? 0);
    if (!dias[proy]) dias[proy] = new Set();
    dias[proy].add(p.file.name);
    grand += (e.horas ?? 0);
  }
}

if (grand === 0) {
  dv.paragraph("> Sin datos registrados.");
} else {
  const bar = (hh) => {
    const filled = Math.round((hh / grand) * 14);
    return "█".repeat(filled) + "░".repeat(14 - filled);
  };

  const rows = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .map(([proy, hh]) => {
      const d = dias[proy].size;
      const avg = (hh / d).toFixed(1);
      return [proy, hh, d, `${avg}h/día`, `${Math.round(hh / grand * 100)}%`, bar(hh)];
    });

  dv.table(["Proyecto", "HH Total", "Días", "Promedio", "%", "Proporción"], rows);
}
```

---

## F) Horas por Día (últimas 30 entradas)

```dataviewjs
const pages = dv.pages('"diario"')
  .where(p => p.fecha && !p.file.name.startsWith("_") && p.fecha.toFormat)
  .sort(p => p.fecha, "desc")
  .limit(30)
  .array();

if (pages.length === 0) {
  dv.paragraph("> Sin datos registrados.");
} else {
  const maxH = 9;
  const bar = (hh) => {
    if (!hh || hh === 0) return "░".repeat(14);
    const filled = Math.min(Math.round((hh / maxH) * 14), 14);
    return "█".repeat(filled) + "░".repeat(14 - filled);
  };

  const rows = pages.map(p => {
    const wd = p.fecha.weekday;
    const expected = (wd >= 4) ? 8 : 9;
    const reg = [].concat(p?.entradas || []).reduce((s, e) => s + (e?.horas ?? 0), 0);
    const estado = reg >= expected ? "✅" : reg > 0 ? "⚠️" : "❌";
    return [p.file.link, p.semana, reg, expected, estado, bar(reg)];
  });

  dv.table(["Fecha", "Sem", "HH Reg", "HH Esp", "Estado", "Proporción (escala 9h)"], rows);
}
```

---

## G) Horas por Actividad

```dataviewjs
const pages = dv.pages('"diario"').where(p => p.entradas && !p.file.name.startsWith("_")).array();
const totals = {};
let grand = 0;

for (const p of pages) {
  const entradas = [].concat(p.entradas || []);
  for (const e of entradas) {
    if (!e) continue;
    const key = e.actividad ?? "Sin actividad";
    totals[key] = (totals[key] ?? 0) + (e.horas ?? 0);
    grand += (e.horas ?? 0);
  }
}

if (grand === 0) {
  dv.paragraph("> Sin datos registrados.");
} else {
  const bar = (hh) => {
    const filled = Math.round((hh / grand) * 14);
    return "█".repeat(filled) + "░".repeat(14 - filled);
  };

  const rows = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .map(([key, hh]) => [key, hh, `${Math.round(hh / grand * 100)}%`, bar(hh)]);

  dv.table(["Actividad", "HH", "%", "Proporción"], rows);
}
```

---

## H) Horas por Rol

```dataviewjs
const pages = dv.pages('"diario"').where(p => p.entradas && !p.file.name.startsWith("_")).array();
const totals = {};
let grand = 0;

for (const p of pages) {
  const entradas = [].concat(p.entradas || []);
  for (const e of entradas) {
    if (!e) continue;
    const key = e.rol ?? "Sin rol";
    totals[key] = (totals[key] ?? 0) + (e.horas ?? 0);
    grand += (e.horas ?? 0);
  }
}

if (grand === 0) {
  dv.paragraph("> Sin datos registrados.");
} else {
  const bar = (hh) => {
    const filled = Math.round((hh / grand) * 14);
    return "█".repeat(filled) + "░".repeat(14 - filled);
  };

  const rows = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .map(([key, hh]) => [key, hh, `${Math.round(hh / grand * 100)}%`, bar(hh)]);

  dv.table(["Rol", "HH", "%", "Proporción"], rows);

  // Nota al pie: % PM vs técnico
  const pmRoles = ["PM", "Project Manager", "Gerencia", "Coordinación"];
  const techRoles = ["Técnico", "Desarrollo", "Arquitectura", "Infraestructura", "Ingeniería"];
  let pmH = 0, techH = 0;
  for (const [rol, hh] of Object.entries(totals)) {
    if (pmRoles.some(r => rol.toLowerCase().includes(r.toLowerCase()))) pmH += hh;
    else if (techRoles.some(r => rol.toLowerCase().includes(r.toLowerCase()))) techH += hh;
  }
  if (pmH > 0 || techH > 0) {
    const pmPct = Math.round(pmH / grand * 100);
    const techPct = Math.round(techH / grand * 100);
    dv.paragraph(`> **Mix PM/Técnico:** PM ${pmPct}% (${pmH}h) · Técnico ${techPct}% (${techH}h) · Otro ${100 - pmPct - techPct}%`);
  }
}
```

---

## I) Horas por Semana

```dataviewjs
const pages = dv.pages('"diario"')
  .where(p => p.semana && p.fecha && !p.file.name.startsWith("_") && typeof p.semana === 'number')
  .array();

if (pages.length === 0) {
  dv.paragraph("> Sin datos registrados.");
} else {
  const bySemana = {};
  for (const p of pages) {
    const sem = p.semana;
    if (!bySemana[sem]) bySemana[sem] = [];
    bySemana[sem].push(p);
  }

  const bar = (hh, max) => {
    if (!hh || hh === 0) return "░".repeat(10);
    const filled = Math.min(Math.round((hh / max) * 10), 10);
    return "█".repeat(filled) + "░".repeat(10 - filled);
  };

  const hhTotal = (p) => [].concat(p?.entradas || []).reduce((s, e) => s + (e?.horas ?? 0), 0);

  const semanas = Object.keys(bySemana).sort((a, b) => b - a).slice(0, 12);
  const allTotals = semanas.map(s => bySemana[s].reduce((acc, p) => acc + hhTotal(p), 0));
  const maxHH = Math.max(...allTotals, 1);

  const rows = semanas.map((sem, i) => {
    const ps = bySemana[sem];
    const dias = ps.filter(p => hhTotal(p) > 0).length;
    const total = allTotals[i];
    const esperado = dias * 8.6; // promedio ponderado ~43h / 5 días
    const delta = total - esperado;
    const deltaStr = delta >= 0 ? `+${delta.toFixed(1)}h ✅` : `${delta.toFixed(1)}h ⚠️`;
    return [`Sem ${sem}`, total, dias, `${(total / Math.max(dias, 1)).toFixed(1)}h`, deltaStr, bar(total, maxHH)];
  });

  dv.table(["Semana", "HH Total", "Días", "Prom/día", "Δ vs Objetivo", "Proporción"], rows);
}
```

---

## J) Bitácora de Actividades

> Todas las entradas con descripción. Usa `Ctrl+F` para buscar por palabra clave en esta tabla, o `Ctrl+Shift+F` para buscar en todo el vault.

```dataview
TABLE file.link AS "Día",
      entradas.proyecto AS "Proyecto",
      entradas.iniciativa AS "Iniciativa",
      entradas.actividad AS "Actividad",
      entradas.descripcion AS "Descripción",
      entradas.horas AS "HH"
FROM "diario"
WHERE entradas
FLATTEN entradas
SORT fecha DESC
```

---

*Actualizado automáticamente por Dataview al abrir esta nota.*
*Para agregar entradas: `/vault-timesheet add`*
