# Configuración del Grafo de Obsidian

**Documento:** Convención de naming y metadatos para mantener el grafo legible mientras crece el proyecto
**Versión:** 1.0
**Última actualización:** 23 marzo 2026
**Responsable:** Claude Code

---

## Problema original

El vault generó un grafo con ~27 nodos donde todos mostraban "README" como nombre.
Esto era ilegible: imposible distinguir un nodo de otro en la vista del grafo.

---

## Solución aplicada

### 1. Archivos principales: Renombrar

Los 4 archivos "índice" de los lineamientos fueron renombrados de `README.md` a nombres descriptivos:

| Linaje | Antes | Ahora |
|---|---|---|
| L1 | `L1-portafolio-ti/README.md` | `L1-portafolio-ti/L1-portafolio-ti.md` |
| L2 | `L2-estructuracion-area/README.md` | `L2-estructuracion-area/L2-estructuracion-area.md` |
| L3 | `L3-gobernanza-ti/README.md` | `L3-gobernanza-ti/L3-gobernanza-ti.md` |
| L4 | `L4-infraestructura-ti/README.md` | `L4-infraestructura-ti/L4-infraestructura-ti.md` |

**Ventaja:** El grafo muestra nombres únicos, legibles (ej: "L3-gobernanza-ti" en lugar de "README")

### 2. Subcarpetas: Aliases en frontmatter YAML

Las 15 subcarpetas (L2 × 3, L3 × 5, L4 × 6) mantienen `README.md` pero tienen aliases.

Cada archivo comienza con:

```yaml
---
aliases:
  - L3-catastro-aplicaciones
  - Catastro de Aplicaciones
---

# Catastro de Aplicaciones
```

**Ventaja:** Obsidian puede mostrar los aliases en el grafo si está configurado (`Settings → Graph → Display → Show aliases`)

---

## Estructura de nombres

### Prefijo de lineamiento

Todos los nodos incluyen su lineamiento como prefijo para contexto instantáneo:

- `L1-portafolio-ti` = Pertenece a L1
- `L3-catastro-aplicaciones` = Pertenece a L3
- `L4-bd-central` = Pertenece a L4

### Formato de archivo principal

```
[Lineamiento]-[nombre-descriptivo]/[Lineamiento]-[nombre-descriptivo].md
```

Ejemplo:
```
L3-gobernanza-ti/L3-gobernanza-ti.md  ← archivo principal de L3
L3-gobernanza-ti/catastro-aplicaciones/README.md  ← subcarpeta (tiene alias)
```

### Nombrado de archivos

- **Sin tildes:** `diseno` no `diseño`, `gobernanza` no `gobernanza`
- **Sin espacios:** guiones para separar palabras
- **Lowercase:** todo en minúsculas
- **Prefijo L#:** archivos principales siempre comienzan con L1, L2, L3 o L4

---

## Links internos — Actualización requerida

Cuando se renombraron los archivos principales, también se actualizaron los links internos:

**Cambio global:**
```
[[../README|...]]  →  [[../L2-estructuracion-area|...]]
[[../../README|...]]  →  [[../../L3-gobernanza-ti|...]]
```

**Aplicación:** En 00-indice.md, contexto-estrategico.md, y todos los archivos de subcarpetas

---

## Cómo mantener esto mientras crece

### Cuando agregues una nueva subcarpeta

1. **Crea la carpeta:** `L3-gobernanza-ti/nueva-categoria/`
2. **Crea README.md con alias:**

```yaml
---
aliases:
  - L3-nueva-categoria
  - Nueva Categoría
---

# Nueva Categoría

**Lineamiento:** [[../L3-gobernanza-ti|L3 - Plan de Gobernanza TI]]
...
```

3. **Actualiza el padre:** En `L3-gobernanza-ti/L3-gobernanza-ti.md`, agrega link:
```markdown
| [[nueva-categoria/README|Nueva Categoría]] | Descripción | Estado |
```

4. **Actualiza 00-indice.md** si es un hijo directo de un lineamiento

### Cuando renombres un archivo

1. **Actualiza el nombre:**
```bash
mv "L3-gobernanza-ti/viejo-nombre/README.md" \
   "L3-gobernanza-ti/nuevo-nombre/README.md"
```

2. **Busca y reemplaza todos los links:**
```bash
grep -r "viejo-nombre" . --include="*.md" | xargs sed -i 's|viejo-nombre|nuevo-nombre|g'
```

3. **Actualiza los aliases en el frontmatter**

### Cuando cambies de Obsidian a otro vault manager

El frontmatter YAML con aliases es estándar Markdown. Cualquier herramienta que soporte frontmatter lo respetará.

---

## Links en tablas — Usar `\|` para escapar pipes

### Problema: Pipes dentro de tablas rompen links

Dentro de una tabla Markdown, el carácter `|` tiene **dos significados:**
- Separador de columna: `| columna1 | columna2 |`
- Separador de link+etiqueta: `[[ruta|Etiqueta]]`

Cuando reformateas un archivo con links dentro de tablas, el formateador interpreta el `|` de los links como separador de columna, **rompiendo los links.**

**Ejemplo incorrecto (roto):**
```markdown
| Lineamiento | Descripcion |
|---|---|
| [[L1-portafolio-ti/L1-portafolio-ti|L1 - Portafolio TI]] | Proyectos activos |
```

Al reformatear → el `|` en el link se interpreta como columna → link inutilizable.

### Solución: Escapar el pipe con `\|`

Dentro de tablas, **siempre escapa el pipe en los links** con una barra invertida:

**Ejemplo correcto (funcional):**
```markdown
| Lineamiento | Descripcion |
|---|---|
| [[L1-portafolio-ti/L1-portafolio-ti\|L1 - Portafolio TI]] | Proyectos activos |
```

El `\|` es interpretado por Markdown como "parte del contenido de la celda", no como separador → el link se mantiene intacto tras reformatear.

### Cuándo aplicar

- ✅ **Links dentro de tablas:** Escapar con `\|`
- ✅ **Links dentro de listas:** Funciona sin escapar, pero no hay daño en escapar
- ❌ **Links en párrafos normales:** NO escapar (no es necesario y se ve incorrecto)

### Precedente en este vault

**Archivo afectado:**
- `00-indice.md` líneas 19–22 (Lineamientos) — convertidos a lista con `\|` escapado para inmunidad ante reformateos futuros

---

## Verificación en Obsidian

1. Abre el grafo: **Ctrl+G** (Windows) o **Cmd+G** (Mac)
2. Verifica que los nodos muestren nombres como:
   - `L1-portafolio-ti`
   - `L3-catastro-aplicaciones`
   - `L4-bd-central`
   (NO "README")

3. Si aún ves "README", habilita aliases:
   - **Settings → Graph → Display**
   - Toggle ON: "Show aliases"

---

## Archivos modificados en esta actualización

**Renombrados:**
- `L1-portafolio-ti/README.md` → `L1-portafolio-ti/L1-portafolio-ti.md`
- `L2-estructuracion-area/README.md` → `L2-estructuracion-area/L2-estructuracion-area.md`
- `L3-gobernanza-ti/README.md` → `L3-gobernanza-ti/L3-gobernanza-ti.md`
- `L4-infraestructura-ti/README.md` → `L4-infraestructura-ti/L4-infraestructura-ti.md`

**Actualizados (links):**
- 00-indice.md (4 links)
- 00-contexto/contexto-estrategico.md (4 links)
- 15 archivos README de subcarpetas (1 link cada uno)

**Nuevos (aliases):**
- 15 archivos README con frontmatter YAML

---

## Notas de mantenimiento

- Esta convención debe aplicarse a **TODOS los nuevos archivos** que se agreguen
- Los alias son opcionales para subcarpetas, pero recomendados para claridad
- Los archivos principales (L1–L4) deben SIEMPRE tener nombres únicos, no README
- El prefijo L# es crítico para que Obsidian agrupe nodos por lineamiento

---

*Documento de referencia para Claude Code. Leer antes de modificar la estructura del vault.*
