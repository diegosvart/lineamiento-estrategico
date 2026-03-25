---
name: vault-canvas
description: Crear y gestionar Obsidian Canvas files — mapas visuales interactivos que conectan notas, URLs y contenido
type: prompt
---

# /vault-canvas — Gestión de Canvas

Crea y gestiona **Obsidian Canvas** files (`.canvas`) — mapas visuales e interactivos que conectan notas, enlaces externos, y contenido embebido. Basado en especificación JSON Canvas 1.0.

Canvas es ideal para:
- Mapas conceptuales de procesos (L2, L3, L4)
- Roadmaps visuales de proyectos (L1)
- Diagramas de arquitectura (L4)
- Relaciones entre políticas y normativas (L3)

**Diferencia con Excalidraw:**
- **Canvas**: Mapa interactivo de notas/contenido (integrado con vault)
- **Excalidraw**: Diagrama dibujado a mano (sin links a notas)

## Cuándo usar

- Crear visualización de proceso/flujo con nodos interactivos
- Vincular múltiples notas en un mapa visual
- Mostrar roadmap de proyecto con etapas y dependencias
- Mapear arquitectura con componentes conectados
- Crear dashboard visual de gobernanza

## Uso: Crear canvas nuevo

```
/vault-canvas --crear --nombre "Roadmap L1 2026" --donde "L1-portafolio-ti"
```

Genera archivo `.canvas` con estructura base:

**Archivo creado:** `L1-portafolio-ti/L1-roadmap-2026.canvas`

```json
{
  "nodes": [
    {
      "id": "node-001",
      "type": "text",
      "text": "Q1: Planificación",
      "x": 0,
      "y": 0,
      "width": 250,
      "height": 80,
      "color": "#2196f3"
    }
  ],
  "edges": []
}
```

Parámetros:
- `--nombre`: Nombre descriptivo (se convierte a slug)
- `--donde`: Carpeta relativa del vault
- `[--layout]`: Tipo de layout predefinido:
  - `vertical` (default) — Nodos apilados verticalmente
  - `horizontal` — Nodos en fila
  - `grid` — Matriz de nodos
  - `circular` — Nodos en círculo (para relaciones)

## Uso: Agregar nodo de texto

```
/vault-canvas --archivo "L1-roadmap-2026.canvas" --agregar-nodo-texto --texto "Q2: Ejecución" --x 300 --y 0
```

Agrega nuevo nodo de texto con posición y dimensiones automáticas:

```json
{
  "id": "node-002",
  "type": "text",
  "text": "Q2: Ejecución",
  "x": 300,
  "y": 0,
  "width": 250,
  "height": 80,
  "color": "#ff9800"
}
```

Parámetros:
- `--archivo`: Ruta del canvas
- `--agregar-nodo-texto`: Activar modo agregar texto
- `--texto`: Contenido del nodo
- `--x`, `--y`: Posición (coordenadas canvas)
- `[--color]`: Color (ej: "#2196f3" o "azul", "rojo", "verde", "naranja", "morado")
- `[--ancho]`, `[--alto]`: Dimensiones (default: 250x80)

## Uso: Agregar nodo de archivo (nota del vault)

```
/vault-canvas --archivo "L1-roadmap-2026.canvas" --agregar-nodo-archivo --archivo-referencia "L1-portafolio-ti/L1-proyectos-activos" --x 0 --y 100
```

Vincula una nota existente del vault como nodo interactivo:

```json
{
  "id": "node-003",
  "type": "file",
  "file": "L1-portafolio-ti/L1-proyectos-activos",
  "x": 0,
  "y": 100,
  "width": 300,
  "height": 100
}
```

Ventaja: Click en el nodo abre la nota vinculada en Obsidian.

Parámetros:
- `--archivo`: Canvas a modificar
- `--agregar-nodo-archivo`: Activar modo
- `--archivo-referencia`: Ruta de la nota (sin .md)
- `--x`, `--y`: Posición
- `[--ancho]`, `[--alto]`: Dimensiones (default: 300x100)
- `[--subpath]`: Sección específica de la nota (ej: "#Proceso de Aprobación")

## Uso: Agregar nodo de URL externa

```
/vault-canvas --archivo "L1-roadmap-2026.canvas" --agregar-nodo-url --url "https://www.leychile.cl/Navegar?idNorma=1004" --etiqueta "Ley 19.628" --x 600 --y 0
```

Crea nodo que enlaza a recurso externo:

```json
{
  "id": "node-004",
  "type": "link",
  "url": "https://www.leychile.cl/Navegar?idNorma=1004",
  "displayText": "Ley 19.628",
  "x": 600,
  "y": 0,
  "width": 250,
  "height": 80
}
```

Parámetros:
- `--archivo`: Canvas a modificar
- `--agregar-nodo-url`: Activar modo
- `--url`: URL completa
- `--etiqueta`: Texto visible en el nodo
- `--x`, `--y`: Posición
- `[--color]`: Color del nodo

## Uso: Conectar nodos con edge

```
/vault-canvas --archivo "L1-roadmap-2026.canvas" --conectar --de "node-001" --a "node-002" --etiqueta "Transición"
```

Crea conexión visual entre dos nodos:

```json
{
  "id": "edge-001",
  "fromNode": "node-001",
  "toNode": "node-002",
  "fromSide": "right",
  "toSide": "left",
  "label": "Transición"
}
```

Parámetros:
- `--archivo`: Canvas
- `--conectar`: Activar modo
- `--de`: ID del nodo origen
- `--a`: ID del nodo destino
- `[--etiqueta]`: Texto en la conexión
- `[--lado-origen]`: left|right|top|bottom (default: auto)
- `[--lado-destino]`: left|right|top|bottom (default: auto)
- `[--color]`: Color de la línea

## Uso: Agrupar nodos

```
/vault-canvas --archivo "L1-roadmap-2026.canvas" --crear-grupo --nombre "Q1 Tasks" --nodos "node-001,node-002" --color "azul"
```

Crea contenedor visual que agrupa nodos relacionados:

```json
{
  "id": "group-001",
  "type": "group",
  "label": "Q1 Tasks",
  "nodes": ["node-001", "node-002"],
  "x": -20,
  "y": -20,
  "width": 320,
  "height": 160,
  "color": "2196f3"
}
```

Parámetros:
- `--archivo`: Canvas
- `--crear-grupo`: Activar modo
- `--nombre`: Label del grupo
- `--nodos`: Lista de IDs separados por coma
- `[--color]`: Color del borde

## Uso: Validar canvas

```
/vault-canvas --archivo "L1-roadmap-2026.canvas" --validar
```

Verifica integridad del archivo:

```
✅ CANVAS VÁLIDO: L1-roadmap-2026.canvas

Estructura:
├─ Nodos: 4
│  ├─ Texto: 2
│  ├─ Archivo: 1
│  └─ URL: 1
├─ Edges: 3
├─ Grupos: 1
└─ IDs únicos: ✅ (sin duplicados)

Referencias:
├─ Archivos vinculados: L1-proyectos-activos ✅ (existe)
├─ URLs: 1 ✅ (válidas)
└─ Todos los edges apuntan a nodos válidos ✅

Size: 2.3 KB
Complejidad: Baja (< 50 nodos)
```

Errores detectados (ejemplo si hubiera):
```
❌ Referencia rota: "L1-archivo-inexistente" no existe
❌ ID duplicado: "node-001" aparece 2 veces
❌ Edge huérfano: edge-005 apunta a "node-999" que no existe
```

## Uso: Listar todos los canvas

```
/vault-canvas --listar
```

Muestra todos los canvas files en el vault:

```
CANVAS EN EL VAULT
═══════════════════════════════════════════════════════
1. 📊 L1-roadmap-2026.canvas
   Ubicación: L1-portafolio-ti/
   Nodos: 4 (2 texto, 1 archivo, 1 URL)
   Edges: 3
   Tamaño: 2.3 KB
   Última actualización: 25 Mar 2026

2. 📊 L3-gobernanza-proceso-aprobacion.canvas
   Ubicación: L3-gobernanza-ti/
   Nodos: 8 (4 texto, 3 archivo, 1 URL)
   Edges: 7
   Tamaño: 5.1 KB
   Última actualización: 20 Mar 2026

Total: 2 canvas files
═══════════════════════════════════════════════════════
```

## Uso: Exportar canvas a PNG

```
/vault-canvas --archivo "L1-roadmap-2026.canvas" --exportar --formato "png" --escala 100
```

Genera imagen PNG del canvas:

**Archivo generado:** `L1-roadmap-2026.png` (en misma carpeta)

Parámetros:
- `--archivo`: Canvas a exportar
- `--exportar`: Activar modo
- `--formato`: png | svg | pdf
- `[--escala]`: Porcentaje (default: 100)

## Plantillas de Canvas Predefinidas

### Template: Roadmap de Proyecto

```
/vault-canvas --template "roadmap" --nombre "Roadmap L1" --hitos "Q1,Q2,Q3,Q4"
```

Genera canvas con estructura de 4 trimestres en horizontal + nodos para hitos.

### Template: Mapa de Procesos

```
/vault-canvas --template "proceso" --nombre "Aprobación Políticas" --pasos "Propuesta,Revisión,Aprobación,Implementación,Cierre"
```

Genera canvas vertical con flujo de pasos + nodos para participantes.

### Template: Arquitectura Sistemas

```
/vault-canvas --template "arquitectura" --nombre "Infraestructura TI"
```

Genera canvas con capas (Presentación, Aplicación, Datos) + nodos de componentes.

### Template: Mapa Mental Lineamiento

```
/vault-canvas --template "mindmap" --nombre "L3 Gobernanza" --centro "L3-gobernanza-ti/L3-gobernanza" --ramas 5
```

Genera canvas radial con nodo central + ramas para subtemas.

## Parámetros Globales

| Parámetro | Tipo | Ejemplo | Obligatorio |
|-----------|------|---------|------------|
| `--archivo` | string | `"L1-roadmap.canvas"` | Con la mayoría de operaciones |
| `--crear` | flag | - | Para crear canvas nuevo |
| `--nombre` | string | `"Roadmap Q1"` | Con --crear |
| `--donde` | string | `"L1-portafolio-ti"` | Con --crear |
| `--agregar-nodo-texto` | flag | - | Para agregar nodo texto |
| `--agregar-nodo-archivo` | flag | - | Para vincular nota |
| `--agregar-nodo-url` | flag | - | Para agregar enlace externo |
| `--conectar` | flag | - | Para crear edge |
| `--crear-grupo` | flag | - | Para agrupar nodos |
| `--validar` | flag | - | Verificar integridad |
| `--listar` | flag | - | Listar todos los canvas |
| `--exportar` | flag | - | Exportar a imagen |
| `--template` | string | `"roadmap"` | Para usar plantilla |

## Mejores Prácticas

1. **Nombrar nodos claramente**: Evitar IDs genéricos, usar nombres descriptivos
2. **Organizar espacialmente**: Agrupar nodos relacionados cerca
3. **Usar colores estratégicamente**: Código de colores por estado/tipo
4. **Etiquetas en edges**: Explicar relación entre nodos
5. **Vincular notas relevantes**: No duplicar contenido, referenciar
6. **Mantener simple**: < 50 nodos para legibilidad
7. **Validar regularmente**: Antes de compartir/presentar

## Diferencias Canvas vs Excalidraw

| Aspecto | Canvas | Excalidraw |
|--------|--------|-----------|
| **Tipo** | Mapa interactivo de contenido | Diagrama dibujado |
| **Nodos** | Notas, URLs, archivos | Figuras geométricas |
| **Interactividad** | Click abre notas, expandible | Estático (para ver) |
| **Mejor para** | Roadmaps, procesos, referencias | Arquitectura, flujos visuales |
| **Integración vault** | Nativa (vincula notas) | Externa (referencia archivos) |

## Instalación

Los canvas files se crean automáticamente como parte de Obsidian (no requieren plugin).
Solo asegurar que:
- Obsidian versión ≥ 1.4 (cuando se introdujo Canvas)
- Carpeta del vault tiene permisos de escritura

---

**Basado en:** [JSON Canvas Spec 1.0](https://jsoncanvas.org/) y Obsidian Canvas feature
