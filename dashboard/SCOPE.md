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
   → Verificar que HorasChart y EstadoGrid renderizan datos reales del vault

**Regla de seguridad:** si la rama actual no coincide con este `SCOPE`, detener el trabajo y corregir la rama antes de continuar.

---

## Capacidades

- Leer archivos YAML/Markdown del vault via filesystem (local, sin servidor de datos)
- Parsear frontmatter YAML de daily notes y notas de proyectos
- Visualizar horas por proyecto, iniciativa, rol y semana (gráficos Recharts)
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
  package.json
  vite.config.ts
  tsconfig.json
  src/
    App.tsx                   ← Componente raíz + routing
    main.tsx                  ← Entry point Vite
    components/
      HorasChart.tsx          ← Horas por proyecto/semana (Recharts BarChart)
      EstadoGrid.tsx          ← Iniciativas con estado coloreado
      AlertasPanel.tsx        ← Alertas activas del vault
      MS365SyncStatus.tsx     ← Estado de última sync con Planner
    lib/
      vaultReader.ts          ← Lee archivos .md del vault via import.meta.glob
      yamlParser.ts           ← Parsea frontmatter YAML de notas
      dataTransforms.ts       ← Agrega y transforma datos para gráficos
    types/
      vault.ts                ← Tipos TypeScript del schema YAML
```

---

## Tipos de Datos (schema vault)

```typescript
// src/types/vault.ts
interface DailyNote {
  fecha: string;           // YYYY-MM-DD
  semana_iso: number;      // 1-53
  entradas: TimesheetEntry[];
}

interface TimesheetEntry {
  proyecto: string;
  iniciativa: string;
  descripcion: string;
  horas: number | null;
  rol: string;
  tipo_trabajo: string;
  estado: string;
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
// vaultReader.ts
const diarioFiles = import.meta.glob('../../diario/*.md', { as: 'raw' });
const proyectosFiles = import.meta.glob('../../proyectos/**/*.md', { as: 'raw' });
const ms365Output = import.meta.glob('../../ms365-sync/output/*.yaml', { as: 'raw' });
```

**Rutas permitidas (solo lectura):**
- `../diario/` — daily notes con timesheet
- `../proyectos/` — notas de iniciativas
- `../ms365-sync/output/` — status de sync

**No modificar archivos fuera de `dashboard/`.**

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

*Rama: `workspace/dashboard` — Cursor — Última actualización: 2026-03-28*
