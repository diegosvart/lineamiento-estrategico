---
name: vault-canvas-layout
description: Genera un Obsidian Canvas con layout radial del vault, posicionando 00-INDICE como nodo raíz central
type: prompt
---

# /vault-canvas-layout — Generar Canvas de Layout Radial

## Descripción

Automatiza la creación de un Obsidian Canvas (`.canvas`) con un layout radial del vault:

- **Centro:** `00-INDICE.md` (tamaño mayor: 500×350)
- **Derecha:** Todos los lineamientos L1–L5 en columna vertical (380×220 c/u)
- **Izquierda:** Documentos de contexto (gateways, marco-normativo, contexto-estrategico) en columna (350×200 c/u)
- **Conexiones:** 8 edges desde el nodo central a todos los demás

El canvas permite **control explícito** sobre posición (x/y) y tamaño (width/height) de cada nodo — útil cuando la física de simulación de Juggl no es suficiente.

## Cuándo usar

- Después de agregar o renombrar lineamientos principales (L1–L5)
- Cuando se quiere refrescar el layout visual del vault
- Para documentación ejecutiva (compartir captura del canvas como "vista aérea del plan")

## Cuándo NO usar

- Si solo se necesita que el grafo Juggl muestre un nodo más grande → usa backlinks naturales en su lugar (más simple)
- Si se quieren ajustar posiciones x/y manualmente → edita el `.canvas` directamente

## Implementación

### Paso 1: Detectar archivos del vault

Leer el vault para identificar:
- Archivo raíz: `00-INDICE.md` (siempre el centro)
- Lineamientos: `L1-portafolio-ti/L1-*.md`, `L2-estructuracion-area/L2-*.md`, etc.
- Documentos de contexto: `00-contexto/*.md` (excepto config como `definicion-estados.md`)

Usar **Glob** para encontrar archivos:
```
Glob: "**/L[1-5]-*/L[1-5]-*.md"  (lineamientos principales)
Glob: "00-contexto/*.md"         (contexto)
```

### Paso 2: Validar que archivos existen

Para cada archivo identificado:
- Leer primeras líneas para confirmar que el archivo tiene frontmatter con alias
- Si no existe → reportar error y saltarlo
- Si existe → preparar nodo para canvas

### Paso 3: Generar estructura JSON Canvas

Template:

```json
{
  "nodes": [
    {"id": "indice", "type": "file", "file": "00-INDICE.md", "x": -250, "y": -175, "width": 500, "height": 350},
    {"id": "l1", "type": "file", "file": "L1-portafolio-ti/L1-portafolio-ti.md", "x": 450, "y": -400, "width": 380, "height": 220},
    ... (más nodos L2-L5, contexto)
  ],
  "edges": [
    {"id": "e1", "fromNode": "indice", "toNode": "l1", "toSide": "left"},
    ... (8 edges en total: indice → L1,L2,L3,L4,L5,ctx,gw,mn)
  ]
}
```

**Posicionamiento:**
- **INDICE:** x=-250, y=-175 (centro)
- **L1:** x=450, y=-400 (columna derecha, top)
- **L2:** x=450, y=-150
- **L3:** x=450, y=100
- **L4:** x=450, y=350
- **L5:** x=450, y=600 (columna derecha, bottom)
- **Contexto (gw, mn, ctx):** x=-900, y={-250, 0, 250} (columna izquierda)

### Paso 4: Escribir o actualizar `00-mapa-vault.canvas`

Si ya existe `00-mapa-vault.canvas`:
- Leer el archivo existente
- Preguntar: "¿Desea actualizar el canvas existente o crear uno nuevo con sufijo de fecha?"
- Si actualiza: reemplazar la sección `nodes` y `edges`
- Si crea nuevo: usar `00-mapa-vault-[YYYY-MM-DD].canvas`

Si no existe:
- Crear `00-mapa-vault.canvas` directamente

### Paso 5: Verificar filtros de configuración

Leer `.obsidian/app.json` → sección `userIgnoreFilters`:
- Si `"00-mapa-vault.canvas"` NO está en la lista → agregarlo (el canvas no debe aparecer en el grafo Juggl)
- Si `"plans/"` NO está → agregarlo (directorio de documentación de planes)

Escribir back al archivo si hubo cambios.

### Paso 6: Reportar resultado

Mostrar tabla con resumen:

```
═════════════════════════════════════════════════════════════
CANVAS LAYOUT GENERADO: 00-mapa-vault.canvas
═════════════════════════════════════════════════════════════

✅ Nodos creados: 9
   - 1 nodo central (00-INDICE)
   - 5 nodos lineamientos (L1–L5)
   - 3 nodos contexto (gateways, marco-normativo, contexto-estrategico)

✅ Edges: 8 (INDICE → cada nodo)

✅ Posicionamiento:
   - Centro: 00-INDICE (500×350)
   - Derecha: L1–L5 en columna (380×220 c/u)
   - Izquierda: contexto en columna (350×200 c/u)

✅ Archivos actualizados:
   - 00-mapa-vault.canvas (creado/actualizado)
   - .obsidian/app.json (userIgnoreFilters actualizado)

📂 Próximo paso: Abra Obsidian y vaya a 00-mapa-vault.canvas
   (Ctrl+P → "Open 00-mapa-vault.canvas")

═════════════════════════════════════════════════════════════
```

## Validaciones

Antes de escribir el archivo:
- ❌ Error si `00-INDICE.md` no existe
- ⚠️ Advertencia si menos de 5 lineamientos (L1–L5) encontrados
- ⚠️ Advertencia si archivo de contexto falta (pero continúa)
- ✅ OK si el canvas es válido JSON según JSON Canvas 1.0 spec

## Notas

- El archivo `.canvas` es un JSON estándar — puede editarse manualmente con cualquier editor
- Obsidian Canvas solo está disponible en Obsidian >= 1.4 (no requiere plugin)
- Las coordenadas x/y son relativas al viewport del canvas (no a la pantalla)
- Para mover nodos visualmente: abrir el canvas en Obsidian y arrastraes con el ratón (se actualiza el JSON automáticamente)

## Ejemplo de uso

```
User: /vault-canvas-layout
Claude: [Lee archivos del vault]
Claude: [Genera JSON Canvas con layout radial]
Claude: [Escribe 00-mapa-vault.canvas]
Claude: [Actualiza .obsidian/app.json]
Claude: [Muestra reporte de resultado]
```

Usuario abre Obsidian → Ctrl+P → "00-mapa-vault.canvas" → visualiza layout radial interactivo.
