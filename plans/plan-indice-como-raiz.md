# Plan: Nodo Raíz — Índice como Hub Central del Grafo

**Fecha:** 25 marzo 2026
**Ejecutado en:** Feature branch `feature/indice-como-raiz`
**Commits:** `[commit-hash]`

---

## Qué se hizo

Se implementaron tres estrategias complementarias para posicionar `00-INDICE.md` como nodo raíz visual del grafo Obsidian-Juggl:

### 1. Opción A — Backlinks Naturales ✅

Se agregó un breadcrumb de navegación en cada uno de los 8 archivos principales:

```markdown
**Plan:** [[00-INDICE|Índice del Plan 2026]]
```

Archivos modificados:
- `L1-portafolio-ti/L1-portafolio-ti.md`
- `L2-estructuracion-area/L2-estructuracion-area-ti.md`
- `L3-gobernanza-ti/L3-gobernanza-ti.md`
- `L4-infraestructura-ti/L4-infraestructura-ti.md`
- `L5-integraciones/L5-integraciones.md`
- `00-contexto/contexto-estrategico.md`
- `00-contexto/marco-normativo.md`
- `00-contexto/gateways.md`

**Efecto:** Juggl detecta 8 backlinks → aumenta tamaño del nodo `00-INDICE` proporcionalmente en el grafo.

### 2. Opción B — Canvas Explícito ✅

Se creó `00-mapa-vault.canvas` con layout radial explícito usando JSON Canvas 1.0:

```
- Centro (x=0, y=0): 00-INDICE.md (500×350, el más grande)
- Derecha (x=450): L1–L5 distribuidos verticalmente (380×220 c/u)
- Izquierda (x=-900): contexto-estrategico, gateways, marco-normativo (350×200 c/u)
- Edges: 8 conectores desde INDICE a cada nodo
```

**Efecto:** Canvas proporciona control total sobre posición (x/y) y tamaño (width/height) de cada nodo, independiente de la física de simulación de Juggl.

### 3. Convención `/plans` ✅

Se creó directorio `plans/` en la raíz del vault para documentar planes diseñados e implementados, **fuera del grafo**.

**Archivos creados:**
- `plans/plan-indice-como-raiz.md` (este documento)

---

## Por qué

El grafo inicial mostraba `00-INDICE.md` sin ventaja visual sobre otros nodos (todos del mismo tamaño) porque no tenía backlinks desde el vault — solo links salientes. Para que Juggl lo posicione como hub central:

1. **Opción A** (backlinks) aprovecha la física de la simulación: más conexiones = nodo más grande/central
2. **Opción B** (canvas) da control explícito: útil cuando la física no es suficiente
3. **Convención `/plans`** mantiene limpio el grafo y rastreable el historial de decisiones

---

## Resultado esperado

1. **En el grafo Juggl (Ctrl+G):**
   - `00-INDICE.md` aparece más grande que los demás nodos
   - Posicionado en el centro de la pantalla por física de simulación
   - 8 conexiones entrantes visibles

2. **En el canvas (`00-mapa-vault.canvas`):**
   - Layout radial explícito con INDICE en el centro
   - L1–L5 a la derecha en columna vertical
   - Contexto/Gateways/Marco-Normativo a la izquierda

3. **Directorio `/plans`:**
   - NO aparece en el grafo (excluido de `userIgnoreFilters`)
   - Contiene documentación de planes para auditoría

---

## Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `L1-portafolio-ti/L1-portafolio-ti.md` | + backlink a 00-INDICE |
| `L2-estructuracion-area/L2-estructuracion-area-ti.md` | + backlink |
| `L3-gobernanza-ti/L3-gobernanza-ti.md` | + backlink |
| `L4-infraestructura-ti/L4-infraestructura-ti.md` | + backlink |
| `L5-integraciones/L5-integraciones.md` | + backlink |
| `00-contexto/contexto-estrategico.md` | + backlink |
| `00-contexto/marco-normativo.md` | + backlink |
| `00-contexto/gateways.md` | + backlink |
| `00-mapa-vault.canvas` | **CREADO** — layout radial JSON |
| `plans/` | **DIRECTORIO CREADO** — documentación de planes |
| `.obsidian/app.json` | `userIgnoreFilters` += `"plans/"` |
| `.claude/commands/vault-canvas-layout.md` | **CREADO** — skill para generar canvas |
| `.claude/commands/index.md` | Entrada de nuevo skill agregada |

---

## Verificación

Después de implementar este plan:

1. ✅ Abrir Obsidian → Ctrl+G → `00-INDICE` aparece más grande
2. ✅ Abrir `00-mapa-vault.canvas` → layout radial visible
3. ✅ `/vault-audit` → 0 errores
4. ✅ Directorio `plans/` NO aparece en el grafo

---

## Próximos pasos opcionales

1. **Aumentar backlinks aún más:** si se quiere que INDICE sea aún más dominante, crear links directos desde más archivos internos (no solo los L1-L5 principales)
2. **Canvas adicional:** crear canvas para L1–L5 agrupados por estado (activo, pendiente, completado)
3. **Skill `vault-canvas-layout` automatizado:** expandir para detectar archivos y generar canvas dinámicamente

---

*Documentación de plan conforme a convención establecida: cada plan diseñado e implementado queda en `/plans/` para trazabilidad.*
