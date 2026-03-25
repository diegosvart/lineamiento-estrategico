# Skill: /vault-graph-validate

## Descripción

Valida la integridad del grafo Juggl: verifica colores de nodos por estado, detecta nodos sin color, valida filtros, y reporta densidad de links. Asegura que la visualización del grafo es correcta y coherente.

## Cuándo usar

- Después de actualizar estados de archivos
- Después de modificar `.obsidian/app.json` (filtros)
- Cuando hay nodos sin color o colores inesperados en el grafo
- Como chequeo pre-sesión para validar estado visual
- Después de agregar nuevos archivos al vault

## Uso: Validación completa del grafo

```
/vault-graph-validate
```

Ejecuta análisis profundo de la configuración Juggl:

```
VALIDACIÓN COMPLETA DEL GRAFO JUGGL
═══════════════════════════════════════════════════════

1. VALIDACIÓN DE COLORES POR ESTADO
───────────────────────────────────────────────────────
✅ 112 nodos con color asignado:
   🟢 Completado (verde #4caf50):      2 nodos
   🔵 Activo (azul #2196f3):           18 nodos
   🟠 En-definición (naranja #ff9800): 64 nodos
   ⚫ Pendiente (gris #9e9e9e):        25 nodos
   🟣 Backlog (violeta #9c27b0):       3 nodos

❌ 5 nodos SIN COLOR:
   - archivos sin tag de estado
   - archivos no en userIgnoreFilters

   Archivos afectados:
   - docs/archivo-sin-estado.md (sin tag)
   - cache/temporal.md (sin tag)
   [... 3 más ...]

2. VALIDACIÓN DE FILTROS
───────────────────────────────────────────────────────
✅ Archivos filtrados en userIgnoreFilters: 11
   - docs/
   - Excalidraw/
   - CLAUDE.md
   - MEMORY.md
   - 00-contexto/definicion-estados.md
   [... 6 más ...]

✅ Filtros coinciden con archivos reales: SÍ
✅ No hay "ruido" en el grafo por config files: correcto

❌ Carpetas en filtros pero sin archivos (innecesarias):
   - none

3. DENSIDAD DE LINKS
───────────────────────────────────────────────────────
📊 Estadísticas de conectividad:
   - Total nodos: 117 (112 activos + 5 sin color)
   - Total links bidireccionales: 156
   - Promedio links por nodo: 1.3
   - Nodos más conectados:
     1. 00-indice.md (18 links)
     2. L1-portafolio-ti.md (14 links)
     3. L3-gobernanza-ti.md (12 links)

🟡 NODOS AISLADOS (sin links entrantes ni salientes):
   Ninguno detectado ✅

🟠 NODOS DÉBILES (solo 1 link):
   8 nodos (considerado normal para nuevas notas)

4. VALIDACIÓN DE ESTRUCTURA JUGGL
───────────────────────────────────────────────────────
✅ Plugin Juggl instalado: SÍ
✅ graph.css presente en `.obsidian/plugins/juggl/`: SÍ
✅ Selectores CSS válidos en graph.css:
   node.tag-completado → válido
   node.tag-activo → válido
   node.tag-en-definicion → válido
   node.tag-pendiente → válido
   node.tag-backlog → válido

❌ Selectores inválidos: NINGUNO

5. RESUMEN RECOMENDACIONES
───────────────────────────────────────────────────────
⚠️ ACCIÓN REQUERIDA:
   Agregr tags de estado a 5 archivos sin color
   Usar: /vault-status update --archivo [archivo] --nuevo-estado [estado]

ℹ️ INFO: Vault está 96% correctamente configurado
   Próximo paso: Recargar Obsidian (Ctrl+Shift+R) para refrescar grafo Juggl
═══════════════════════════════════════════════════════
```

## Uso: Validar solo colores

```
/vault-graph-validate --check-colors
```

Reporte simplificado enfocado solo en colores por estado:

```
VALIDACIÓN DE COLORES
═══════════════════════════════════════════════════════

🟢 Completado:      2 nodos (1.7%)
🔵 Activo:          18 nodos (15.4%)
🟠 En-definición:   64 nodos (54.7%) ← Estado más común
⚫ Pendiente:        25 nodos (21.4%)
🟣 Backlog:         3 nodos (2.6%)
⚪ Sin color:        5 nodos (4.3%) ← Requiere atención

Total: 117 nodos

Recomendación: Asignar estado a 5 nodos sin color
```

## Uso: Validar configuración de filtros

```
/vault-graph-validate --check-filters
```

Verifica que los filtros en `.obsidian/app.json` están correctos:

```
VALIDACIÓN DE FILTROS
═══════════════════════════════════════════════════════

Archivos en userIgnoreFilters:
✅ CLAUDE.md → existe, no aparece en grafo
✅ MEMORY.md → existe, no aparece en grafo
✅ AGENTS.md → existe, no aparece en grafo
✅ docs/ → carpeta existe, contenido filtrado
✅ Excalidraw/ → carpeta existe, contenido filtrado
✅ 00-contexto/definicion-estados.md → existe, no aparece en grafo
✅ 00-contexto/JUGGL-SETUP.md → existe, no aparece en grafo

❌ Sin validar (parámetro incorrecto o ruta no encontrada):
   Ninguno

Estado: ✅ TODOS LOS FILTROS SON VÁLIDOS
```

## Uso: Detectar nodos huérfanos o aislados

```
/vault-graph-validate --check-orphans
```

Busca nodos sin links o con muy pocas conexiones:

```
ANÁLISIS DE NODOS AISLADOS/DÉBILES
═══════════════════════════════════════════════════════

Nodos completamente aislados (0 links):
   ✅ Ninguno

Nodos débiles (1 solo link):
   8 archivos encontrados (considerado normal para notas nuevas):
   - L5-integraciones/L5-integraciones.md → solo enlazado desde 00-indice
   - L3-gobernanza-ti/diagnostico-normativo/L3-diagnostico.md → solo enlazado desde L3
   [... 6 más ...]

Recomendación: Considerar agregar más links hacia estos nodos si son importantes,
o aceptar como "hojas" de la estructura si son terminales.

Densidad de red: 1.3 links promedio por nodo (saludable)
```

## Uso: Reporte de salud visual

```
/vault-graph-validate --health-report
```

Diagnóstico general de la salud visual del grafo:

```
REPORTE DE SALUD DEL GRAFO
═══════════════════════════════════════════════════════

Puntuación general: 96/100 (EXCELENTE)

Desglose:
├─ Colores por estado: 98/100 (5 nodos sin color)
├─ Filtros configurados: 100/100 (todos válidos)
├─ Densidad de links: 95/100 (bien conectado)
├─ Estructura Juggl: 100/100 (CSS válido)
└─ Convenciones respetadas: 92/100 (algunos archivos sin estado)

Puntos fuertes:
✅ Grafo bien coloreado (95.7% de nodos con color)
✅ Estructura clara con hub central (00-indice)
✅ Filtros bien configurados, sin ruido

Áreas a mejorar:
🟡 5 archivos necesitan asignar estado
🟡 Algunos nodos débiles (1 link) podrían conectarse mejor

Acciones prioritarias:
1. /vault-status update para los 5 nodos sin color
2. Revisar estructura general (opcional)

Próximo chequeo recomendado: Después de agregar nuevas notas
═══════════════════════════════════════════════════════
```

## Parámetros

| Parámetro | Tipo | Efecto |
|-----------|------|--------|
| (sin parámetros) | default | Validación completa |
| `--check-colors` | flag | Solo validación de colores |
| `--check-filters` | flag | Solo validación de filtros |
| `--check-orphans` | flag | Solo análisis de nodos aislados |
| `--health-report` | flag | Reporte de salud general |
| `--verbose` | flag | Incluir detalles adicionales en todos los reportes |

## Configuración esperada

Este skill valida:
- **Plugin Juggl**: debe estar instalado en `.obsidian/plugins/juggl/`
- **graph.css**: archivo con selectores para los 5 estados
- **userIgnoreFilters**: en `.obsidian/app.json`
- **YAML frontmatter**: todos los archivos deben tener un tag de estado

## Reglas de validación

1. **Colores válidos**: Cada uno de los 5 estados tiene color definido en graph.css
2. **Filtros válidos**: Todo archivo en `userIgnoreFilters` debe existir
3. **Sin falsos positivos**: No marcar como problema archivos internos legítimos
4. **Reportes claros**: Usar emojis y formato para legibilidad
5. **Recomendaciones accionables**: Siempre sugerir command para corregir

## Casos especiales

- **Archivos sin estado pero filtrados**: Aceptable (son config)
- **Links rotos en el grafo**: Detectar via `/vault-audit` (no este skill)
- **Cambios sin recargar Obsidian**: Advertir que grafo Juggl no refleja cambios hasta reload

## Notas de implementación

- Usar Glob para encontrar archivos `.md`
- Usar Grep para validar tags en YAML
- Leer `.obsidian/app.json` para verificar filtros
- Leer `.obsidian/plugins/juggl/graph.css` para validar selectores CSS
- No modificar archivos (solo leer)
- Si Juggl no está instalado, avisar al usuario
