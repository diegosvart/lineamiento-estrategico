# Skill: /vault-dataview-setup

## Descripción

Configura y genera bloques Dataview dinámicos en el vault para crear consultas, dashboards y vistas automatizadas basadas en metadatos (YAML frontmatter).

Dataview transforma notas markdown en base de datos consultable.

## Prerequisito

- **Plugin requerido**: Dataview (`dataview`)
- **Instalación**: Obsidian → Community Plugins → Search "Dataview" → Install & Enable
- **Documentación**: https://blacksmithgu.github.io/obsidian-dataview/

## Cuándo usar

- Crear dashboard de progreso del plan por estado
- Generar tabla dinámica de proyectos/tareas
- Crear vista filtrada por responsable
- Crear resumen automatizado sin escribir SQL
- Agregar consultas a notas principales (00-indice, L1-L5, etc.)

## Uso: Crear dashboard de progreso

```
/vault-dataview-setup --crear-dashboard "Progreso Plan Gobernanza"
```

Genera bloque Dataview que muestra estado global del plan:

```
Código Dataview a insertar en archivo:

\`\`\`dataview
LIST
FROM #completado OR #activo OR #en-definicion OR #pendiente OR #backlog
GROUP BY tags
\`\`\`

Resultado en Obsidian:
═══════════════════════════════════════════════════════
Progreso Plan Gobernanza TI 2026

📊 Por Estado:

🟢 COMPLETADO
  - L3-gobernanza-ti/catastro-aplicaciones/L3-catastro-aplicaciones.md
  - L1-portafolio-ti/...

🔵 ACTIVO
  - L3-gobernanza-ti/...
  - [... 17 más ...]

🟠 EN-DEFINICIÓN
  - L1-portafolio-ti/L1-portafolio-ti.md
  - [... 63 más ...]

[... etc ...]
═══════════════════════════════════════════════════════
```

## Uso: Crear tabla de proyectos/tareas

```
/vault-dataview-setup --crear-tabla "Proyectos por Responsable" --group-por "responsable"
```

Genera tabla dinámica agrupada:

```markdown
\`\`\`dataview
TABLE
  file.name AS "Proyecto",
  tags AS "Estado",
  esfuerzo AS "Horas Est.",
  responsable AS "Responsable"
FROM L1 OR L2 OR L3 OR L4 OR L5
SORT responsable
\`\`\`

Resultado:
═══════════════════════════════════════════════════════
Proyectos por Responsable

PM
├─ L1-portafolio-ti | activo | 144 hh
├─ L3-catastro | en-definicion | 45 hh
└─ L3-politicas | en-definicion | 60 hh

JTI
├─ L3-gobernanza | activo | 180 hh
└─ L2-estructuracion | en-definicion | 72 hh

ARI
└─ L4-infraestructura | pendiente | 240 hh

[... más ...]
═══════════════════════════════════════════════════════
```

## Uso: Crear vista filtrada por estado

```
/vault-dataview-setup --crear-vista "Activos Ahora" --filtro-estado "activo"
```

Genera bloque que lista solo archivos en estado específico:

```markdown
\`\`\`dataview
LIST
FROM (L1 OR L2 OR L3 OR L4 OR L5)
WHERE contains(tags, "activo")
SORT file.name
\`\`\`

Resultado:
═══════════════════════════════════════════════════════
TAREAS EN EJECUCIÓN (Estado: Activo)

🔵 L1-portafolio-ti.md
🔵 L3-gobernanza-ti.md
🔵 L3-diagnostico-normativo/L3-diagnostico.md
[... 18 más ...]

Total: 22 lineamientos/subcategorías en ejecución
═══════════════════════════════════════════════════════
```

## Uso: Generar tabla de métricas

```
/vault-dataview-setup --crear-metricas "Dashboard Ejecutivo"
```

Crea vista que muestra KPIs del plan:

```markdown
\`\`\`dataview
TABLE
  length(rows) AS "Cantidad",
  sum(rows.esfuerzo) AS "Horas Total"
FROM L1 OR L2 OR L3 OR L4 OR L5
GROUP BY tags
\`\`\`

Resultado:
═══════════════════════════════════════════════════════
DASHBOARD EJECUTIVO — MÉTRICAS DEL PLAN

Estado          | Cantidad | % del Total | Horas Estimadas
─────────────────────────────────────────────────────
Completado      |        2 |        2%  |        45 hh
Activo          |       22 |       19%  |       480 hh
En-definición   |       64 |       55%  |      1200 hh
Pendiente       |       28 |       24%  |       650 hh
Backlog         |        0 |        0%  |         0 hh
─────────────────────────────────────────────────────
TOTAL           |      117 |      100% |      2375 hh

Progreso:
Completado + Activo = 24 de 117 (20.5% del plan)
═══════════════════════════════════════════════════════
```

## Uso: Validar sintaxis Dataview

```
/vault-dataview-setup --validate-queries
```

Chequea que todas las queries Dataview en el vault son sintácticamente válidas:

```
VALIDACIÓN DE QUERIES DATAVIEW
═══════════════════════════════════════════════════════

Total bloques Dataview encontrados: 7

✅ 00-indice.md (línea 45)
   Query: LIST FROM (L1 OR L2 OR L3 OR L4 OR L5)
   Estado: VÁLIDA

✅ L1-portafolio-ti.md (línea 120)
   Query: TABLE file.name, tags, esfuerzo FROM L1
   Estado: VÁLIDA

❌ L3-gobernanza-ti.md (línea 85)
   Query: TABLE nombre FROM L3 WHERE estado = "activo"
   Estado: INVÁLIDA
   Error: "estado" no es un field válido (usar "tags" en lugar de "estado")

[... más ...]

Resumen:
✅ 6 queries válidas
❌ 1 query con error (requiere corrección)

Recomendación: Usar /vault-dataview-setup --fix-queries para corregir automáticamente
```

## Uso: Listar queries disponibles para copiar

```
/vault-dataview-setup --list-queries
```

Muestra biblioteca de queries listas para copiar:

```
QUERIES DATAVIEW DISPONIBLES
═══════════════════════════════════════════════════════

1. LISTA SIMPLE POR ESTADO
   \`\`\`dataview
   LIST FROM (L1 OR L2 OR L3 OR L4 OR L5) WHERE contains(tags, "activo")
   \`\`\`
   Uso: Mostrar archivos en estado específico

2. TABLA CON METADATA
   \`\`\`dataview
   TABLE
     file.name AS Nombre,
     tags AS Estado,
     date AS Fecha
   FROM L1 OR L2 OR L3 OR L4 OR L5
   \`\`\`
   Uso: Mostrar tabla con columnas de YAML

3. MÉTRICAS AGRUPADAS
   \`\`\`dataview
   TABLE
     length(rows) AS Cantidad,
     sum(rows.esfuerzo) AS "Horas"
   FROM L1 OR L2 OR L3 OR L4 OR L5
   GROUP BY tags
   \`\`\`
   Uso: Resumir por estado/responsable

[... más templates ...]

Copiar y pegar en tu nota, reemplazar campos según necesites
```

## Parámetros

| Parámetro | Tipo | Ejemplo | Obligatorio |
|-----------|------|---------|-------------|
| `--crear-dashboard` | string | `"Progreso Plan Gobernanza"` | Sí (uno de) |
| `--crear-tabla` | string | `"Proyectos por Responsable"` | Sí (uno de) |
| `--crear-vista` | string | `"Activos Ahora"` | Sí (uno de) |
| `--crear-metricas` | string | `"Dashboard Ejecutivo"` | Sí (uno de) |
| `--filtro-estado` | enum | `activo` | Con --crear-vista |
| `--group-por` | string | `responsable` | Con --crear-tabla |
| `--validate-queries` | flag | - | No |
| `--list-queries` | flag | - | No |

## Campos disponibles en YAML

Los bloques Dataview pueden acceder a cualquier field en YAML:

```yaml
---
aliases: [...]
tags: [estado-tag]
responsable: PM
esfuerzo: 120
horizonte: H1-H4
estado: activo
---
```

Fields usables en queries:
- `file.name` — Nombre del archivo
- `tags` — Array de tags
- `responsable` — Campo custom
- `esfuerzo` — Campo custom (números)
- `horizonte` — Campo custom (texto)
- `file.mtime` — Última modificación

## Dónde insertar queries

Típicamente en:
- `00-indice.md` — Dashboard global
- Archivos principales (L1-L5) — Tabla de sus subcategorías
- `00-contexto/CONTEXTO-PROYECTO.md` — Resumen ejecutivo con métricas

## Reglas Dataview

1. Bloques dentro de ` ```dataview ... ``` `
2. Queries en minúsculas (LIST, TABLE, FROM, etc.)
3. Campos entre backticks si tienen espacios: ` `field name` `
4. Operadores: WHERE, FROM, SORT, GROUP BY
5. Funciones: length(), sum(), average()

## Instalación de Dataview

Si aún no está instalado:
1. Obsidian → Settings → Community Plugins
2. Search: "Dataview"
3. Install + Enable
4. Reload Obsidian (Ctrl+Shift+R)
5. Las queries aparecerán compiladas automáticamente

## Notas de implementación

- Insertar queries como bloques de código markdown
- No modificar YAML (solo leer)
- Validar sintaxis antes de insertar
- Dataview renderiza automáticamente (no requiere plugin especial en render)
- Las queries son dinámicas: se actualizan cuando cambian los YAML
