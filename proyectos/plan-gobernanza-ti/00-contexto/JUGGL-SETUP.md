---
aliases:
  - Juggl Setup
  - Configuración Juggl
tags:
  - configuracion
  - obsidian
---

# Configuración de Juggl para Coloreado de Grafo

## ¿Qué es Juggl?

Juggl es un plugin de Obsidian que permite **colorear nodos del grafo basados en tags**, algo que el grafo nativo de Obsidian NO soporta (ya que usa WebGL, no CSS estándar).

**Fuente oficial:** [Juggl - Interactive Graph Plugin](https://juggl.io/)

---

## Instalación

### Paso 1: Instalar el plugin

1. Abre Obsidian
2. Accede a **Settings (Ctrl+,)**
3. Ve a **Community Plugins**
4. Haz clic en **Search** y busca `Juggl`
5. Selecciona la primera opción: **Juggl - An interactive, stylable and expandable graph view**
6. Haz clic en **Install**
7. Haz clic en **Enable**

### Paso 2: Recargar Obsidian

Cierra y reabre Obsidian para que se cargue el plugin.

---

## Visualizar el Grafo de Juggl

Una vez instalado, puedes acceder al grafo de Juggl de dos formas:

### Opción 1: Vista global
- **Settings → Juggl**
- O abre el navegador de archivos lateral

### Opción 2: Incrustar en una nota
En cualquier nota `.md`, crea un bloque de código:

```juggl
```
```

---

## Coloreado de Nodos por Estado

El archivo **`.obsidian/plugins/juggl/graph.css`** (ya creado en el repositorio) define 5 colores por estado:

| Estado | Color | Hex | Significado |
|---|---|---|---|
| `#completado` | 🟢 Verde | `#4caf50` | Definido, ejecutado, validado |
| `#activo` | 🔵 Azul | `#2196f3` | En ejecución actualmente |
| `#en-definicion` | 🟡 Amarillo | `#ff9800` | Marco definido, aún no ejecutado |
| `#pendiente` | ⚪ Gris | `#9e9e9e` | No iniciado, espera prerequisitos |
| `#backlog` | 🟣 Violeta | `#9c27b0` | Identificado, sin fecha |

**Estos colores ya están configurados en `graph.css`** — No necesitas hacer nada más.

---

## Cómo Actualizar Estados

El sistema de coloreado funciona automáticamente basado en los tags en el frontmatter YAML de cada archivo.

**Ejemplo — archivo L2-formalizacion-organizacional.md:**

```yaml
---
aliases:
  - L2-formalizacion-organizacional
  - Formalización Organizacional
tags:
  - en-definicion
---
```

Cuando cambies el tag, Juggl actualiza automáticamente el color del nodo en el grafo.

**Cambiar de estado:**
- Edita el archivo `.md`
- Cambia `tags: [estado-actual]` a `tags: [nuevo-estado]`
- Guarda
- El grafo se actualiza automáticamente

---

## Transiciones Típicas de Estado

```
pendiente (S < semana inicio)
  ↓ (llega la semana)
en-definicion (estructura lista, aún no ejecutando)
  ↓ (inicia ejecución)
activo (tareas en sprint activo)
  ↓ (completar entregables)
completado (validado y cerrado)
```

---

## Solución de Problemas

### Los colores no aparecen
1. Verifica que Juggl esté habilitado: **Settings → Community Plugins**
2. Recarga Obsidian completamente (Ctrl+Shift+P → "Reload app")
3. Abre el grafo de Juggl (no el grafo nativo de Obsidian)

### El grafo está vacío
- Puede ser que Juggl esté mostrando un grafo local de la nota actual
- Usa **Settings → Juggl → Show global graph** para ver todas las notas

### Los tags no se reconocen
- Verifica que los tags estén exactamente así en YAML:
  ```yaml
  tags:
    - completado
  ```
  (No: `tags: [completado]` ni `tag:` singular)

---

## Personalizar Colores

Si quieres cambiar los colores, edita `.obsidian/plugins/juggl/graph.css`:

```css
node.tag-en-definicion {
  background-color: #ff9800;  /* Cambia este valor hexadecimal */
  border-color: #e65100;      /* Color del borde */
  border-width: 2;
}
```

**Herramienta para encontrar colores:** [Hex Color Picker](https://htmlcolorcodes.com/)

---

## Referencias

- [Juggl Styling Documentation](https://juggl.io/features/styling/css-styling.html)
- [Cytoscape.js Styles](https://js.cytoscape.org/#style) (referencia técnica)
- [Obsidian Plugin Community](https://publish.obsidian.md/hub/02+-+Community+Expansions/02.05+All+Community+Expansions/Plugins/juggl)

---

*Última actualización: 24 marzo 2026*
