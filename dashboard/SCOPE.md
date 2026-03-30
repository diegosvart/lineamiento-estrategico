# SCOPE — workspace/dashboard

**Rol:** Visualizar los datos del vault en un dashboard interactivo local.
**IDE:** Cursor
**Rama:** `workspace/dashboard` (long-lived)
**Área exclusiva:** carpeta `dashboard/`
**Stack:** React 18 + Vite + TypeScript + Recharts

---

## Inicio de Sesión

1. **Git**: verificar rama actual y situarse explícitamente en `workspace/dashboard`
   → Si no estás en `workspace/dashboard`, cambiar a esa rama antes de leer o ejecutar nada
2. **Git sync**: `git checkout workspace/dashboard && git merge desarrollo`
   → Sincroniza cambios integrados (nuevos datos del vault o schemas actualizados)
3. **Abrir**: Cursor apuntando a `dashboard/`
   → `.cursor/rules` carga el contexto del stack y las rutas permitidas automáticamente
4. **Setup** (primera vez o tras cambios en deps): `cd dashboard && npm install`
5. **Primer acto**: `npm run dev` → http://localhost:5173
   → Verificar que HorasChart, **Reporte de horas** y EstadoGrid renderizan datos reales del vault

**Regla de seguridad:** si la rama actual no coincide con este `SCOPE`, detener el trabajo y corregir la rama antes de continuar.

---

## Capacidades

- Leer archivos YAML/Markdown del vault via filesystem (local, sin servidor de datos)
- Parsear frontmatter con **js-yaml** (listas anidadas `entradas`, claves con guion como `tipo-trabajo`)
- Visualizar horas por proyecto, iniciativa, rol y semana (gráficos Recharts)
- **Reporte de asignación de horas** (`ReporteHoras`): filtro por **día**, **semana ISO** (número + año ISO) o **mes calendario**; totales por proyecto; desglose opcional por iniciativa; export CSV (UTF-8 con BOM) y copiar al portapapeles; aviso si `semana` del YAML no coincide con la semana ISO calculada desde `fecha`
- Mostrar estado de iniciativas con colores del sistema
- Panel de alertas activas del vault (8 tipos definidos en CLAUDE.md §6.4)
- Indicador de última sincronización MS365 (lee `ms365-sync/output/`)
- Filtros por proyecto, lineamiento, semana y estado
- Hot-reload al detectar cambios en archivos del vault

---

## Paleta de Colores del Sistema

| Estado | Color | Hex |
|--------|-------|-----|
| `completado` | Verde | `#4caf50` |
| `activo` | Azul | `#2196f3` |
| `en-definicion` | Naranja | `#ff9800` |
| `pendiente` | Gris | `#9e9e9e` |
| `backlog` | Púrpura | `#9c27b0` |

---

## Estructura de Archivos

```
dashboard/
  SCOPE.md                    ← archivo canónico del ámbito (este archivo)
  index.html                  ← entrada Vite
  package.json
  vite.config.ts
  tsconfig.json
  src/
    App.tsx                   ← Componente raíz + routing
    main.tsx                  ← Entry point Vite
    vite-env.d.ts             ← tipos Vite (import.meta.glob)
    components/
      HorasChart.tsx          ← Horas por proyecto/semana (Recharts BarChart)
      ReporteHoras.tsx        ← Reporte por día / semana ISO / mes + CSV
      MonthlyReportPanel.tsx  ← Reporte mensual ejecutivo: preview + descarga .md (bitácora tipo RESUMEN-HORAS J)
      EstadoGrid.tsx          ← Iniciativas con estado coloreado
      AlertasPanel.tsx        ← Alertas activas del vault
      MS365SyncStatus.tsx     ← Estado de última sync con Planner
    lib/
      vaultReader.ts          ← Lee archivos .md del vault via import.meta.glob
      yamlParser.ts           ← Frontmatter con js-yaml
      normalizeTimesheet.ts   ← Normaliza entradas (guiones YAML → modelo TS)
      dateUtils.ts            ← Semana ISO y límites de mes desde fecha YYYY-MM-DD
      dataTransforms.ts       ← Agrega, filtros por período, export plano, payload mensual
      monthlyReportMarkdown.ts ← Markdown ejecutivo del reporte mensual (sin Obsidian)
    types/
      vault.ts                ← Tipos TypeScript del schema YAML
```

---

## Contrato de datos (timesheet en `diario/`)

En el **YAML del vault** el campo es `semana` (semana ISO 1–53). Opcionalmente puede existir `semana_iso` en migraciones. El lector acepta ambos y expone **`semana_iso` en el modelo interno** (`DailyNote`). Si falta, se calcula desde `fecha` con la misma regla ISO que usa `diario/RESUMEN-HORAS.md` (Dataview). Los cortes de **semana** en el reporte usan **año ISO + número de semana** derivados de `fecha`, no solo el número guardado en el archivo.

`horas-total` en el YAML se mapea opcionalmente a `horas_total_yaml` para validación; los totales del reporte suman siempre las **entradas** (`entradas[].horas`).

## Tipos de Datos (schema vault)

```typescript
// src/types/vault.ts
interface DailyNote {
  fecha: string;           // YYYY-MM-DD
  semana_iso: number;      // 1-53 (desde YAML semana / semana_iso o calculado)
  entradas: TimesheetEntry[];
  horas_total_yaml?: number; // opcional, desde horas-total
}

interface TimesheetEntry {
  proyecto: string;
  iniciativa: string;
  descripcion: string;
  horas: number | null;
  rol: string;
  tipo_trabajo: string;    // en YAML: tipo-trabajo
  estado: string;
  actividad?: string;
  modalidad?: string;
}

interface Iniciativa {
  path: string;
  alias: string;
  tags: string[];          // estado del documento
  lineamiento: string;     // L2 | L3 | L4 | L5
}

interface MS365SyncStatus {
  fecha: string;
  sync_timestamp: string;
  total_tareas: number;
}
```

---

## Acceso a Datos

El dashboard lee directamente del filesystem usando `import.meta.glob` de Vite:

```typescript
// vaultReader.ts (rutas relativas desde src/lib → ../../../)
const diarioFiles = import.meta.glob('../../../diario/[0-9]*.md', { as: 'raw' });
const proyectosFiles = import.meta.glob('../../../proyectos/**/*.md', { as: 'raw' });
const ms365Output = import.meta.glob('../../../ms365-sync/output/*.yaml', { as: 'raw' });
```

**Rutas permitidas (solo lectura):**
- `../diario/` — daily notes con timesheet
- `../proyectos/` — notas de iniciativas
- `../ms365-sync/output/` — status de sync

**No modificar archivos fuera de `dashboard/`.**

**Frontmatter:** el parser (`yamlParser.ts`) acepta fin de línea **LF o CRLF** y **BOM UTF-8** opcional al inicio del archivo, para que los daily notes editados en Windows no queden con frontmatter “invisible” al regex.

**Dev server:** en `vite.config.ts`, `server.fs.allow` incluye la **raíz del repo** (carpeta padre de `dashboard/`). Así el servidor de desarrollo puede resolver los globs hacia `diario/`, `proyectos/` y `ms365-sync/` aunque la detección automática de workspace falle (por ejemplo, copia del proyecto sin `.git`).

---

## Setup Inicial

```bash
cd dashboard
npm install
npm run dev     # → http://localhost:5173
npm run build   # → dashboard/dist/
```

---

## Coordinación con Otros Ámbitos

| Ámbito | SCOPE | Interacción |
|--------|-------|-------------|
| workspace/vault | `SCOPE.md` (raíz) | Lee datos del vault (solo lectura) |
| workspace/ms365 | `ms365-sync/SCOPE.md` | Lee output/ para indicador de sync |
| workspace/planning | `planificacion/SCOPE.md` | Sin interacción directa |

---

*Rama: `workspace/dashboard` — Cursor — Última actualización: 2026-03-30*
