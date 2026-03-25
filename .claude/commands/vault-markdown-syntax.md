# Skill: /vault-markdown-syntax

## Descripción

Mejora la sintaxis Markdown de Obsidian en archivos existentes: wikilinks avanzados, embeds, callouts, propiedades frontmatter, enlaces internos, y elementos especiales. Basado en Obsidian Flavored Markdown (OFM).

Complementa `/vault-new-note` para **edición y mejora** de archivos ya creados.

## Cuándo usar

- Mejorar sintaxis de archivo existente
- Agregar embeds de notas relacionadas
- Crear callouts de advertencia/nota/éxito
- Vincular archivos con heading/block anchors
- Agregar propiedades YAML adicionales
- Crear comentarios ocultos (metadata)
- Documentación con estructuras complejas

## Uso: Validar sintaxis Markdown

```
/vault-markdown-syntax --validar --archivo "L3-politica-seguridad.md"
```

Verifica que la sintaxis OFM es correcta:

```
✅ MARKDOWN VÁLIDO: L3-politica-seguridad.md

Frontmatter:
├─ YAML válido ✅
├─ Aliases: 1 ✅
├─ Tags: 1 (activo) ✅
└─ Propiedades extra: 3 ✅

Wikilinks: 5
├─ [[L3-gobernanza-ti/...]] ✅ (todas válidas)
├─ Heading anchors: 2 ✅
└─ Block anchors: 0

Embeds: 2
├─ ![[imagen.png]] ✅
└─ ![[L3-subcategoria.md]] ✅

Callouts: 2
├─ > [!warning] ✅
└─ > [!info] ✅

Otros elementos:
├─ Bloques de código: 1 ✅
├─ Ecuaciones LaTeX: 0
├─ Footnotes: 1 ✅
└─ Mermaid diagrams: 0

Problemas encontrados: 0 ✅
```

Parámetros:
- `--validar`: Activar validación
- `--archivo`: Ruta del archivo a validar
- `[--detallado]`: Mostrar línea exacta de cada elemento

## Uso: Agregar wikilink avanzado

```
/vault-markdown-syntax --archivo "L3-politica-seguridad.md" --agregar-wikilink --destino "L3-gobernanza-ti/catastro-aplicaciones/L3-catalogo-apps" --texto "Catálogo de Aplicaciones" --linea 45
```

Inserta wikilink en línea específica con validación:

**Formato correcto para insertar:**
```markdown
[[L3-gobernanza-ti/catastro-aplicaciones/L3-catalogo-apps|Catálogo de Aplicaciones]]
```

Validaciones:
- ✅ Archivo destino existe
- ✅ No es un link a carpeta
- ✅ Spacing correcto (sin espacios alrededor del pipe `|`)
- ✅ Nombre del archivo no tiene tildes (validación correcta)

Parámetros:
- `--archivo`: Archivo a editar
- `--agregar-wikilink`: Activar modo
- `--destino`: Ruta del archivo destino (sin .md)
- `--texto`: Texto visible en el link
- `[--linea]`: Número de línea para insertar (default: final)
- `[--heading]`: Insertar después de heading específico (ej: "## Procesos")

## Uso: Agregar wikilink con anchor a heading

```
/vault-markdown-syntax --archivo "L3-proceso-aprobacion.md" --agregar-wikilink --destino "L3-gobernanza-ti/politicas-procedimientos/L3-politica-seguridad" --heading "Proceso de Aprobación" --texto "Ver procedimiento de aprobación"
```

Crea link a sección específica (heading) del archivo destino:

```markdown
[[L3-gobernanza-ti/politicas-procedimientos/L3-politica-seguridad#Proceso de Aprobación|Ver procedimiento de aprobación]]
```

En Obsidian, el click navega directo al heading especificado.

Parámetros:
- `--destino`: Archivo destino
- `--heading`: Nombre del heading en el archivo destino (ej: "## Mi Sección")
- `--texto`: Texto visible

## Uso: Agregar embed de nota

```
/vault-markdown-syntax --archivo "L1-portafolio-ejecutivo.md" --agregar-embed --embed-archivo "L1-proyectos-activos/L1-proyecto-1" --tipo "completo" --linea 80
```

Incrusta otra nota completamente (o parcial):

**Embed completo:**
```markdown
![[L1-proyectos-activos/L1-proyecto-1]]
```

**Solo una sección:**
```markdown
![[L1-proyectos-activos/L1-proyecto-1#Cronograma]]
```

Tipos de embed:
- `completo` — Nota entera
- `heading` — Solo un heading específico
- `bloque` — Un bloque identificado con `^block-id`

Parámetros:
- `--embed-archivo`: Archivo a embedeer
- `--tipo`: completo|heading|bloque
- `[--heading]`: Si tipo es heading
- `[--bloque-id]`: Si tipo es bloque
- `[--linea]`: Dónde insertar

## Uso: Agregar callout (advertencia/nota/éxito)

```
/vault-markdown-syntax --archivo "L3-politica-seguridad.md" --agregar-callout --tipo "warning" --titulo "Atención: Normativa crítica" --contenido "Esta política es requerida por Ley 19.628. No omitir." --linea 50
```

Inserta callout (caja de énfasis) con tipo y contenido:

**Formato insertado:**
```markdown
> [!warning] Atención: Normativa crítica
> Esta política es requerida por Ley 19.628. No omitir.
```

**Tipos disponibles:**
- `note` — Información general (azul)
- `abstract` — Resumen (azul claro)
- `info` — Información útil (cian)
- `tip` — Consejo (verde)
- `success` — Éxito/completado (verde oscuro)
- `question` — Pregunta/duda (amarillo)
- `warning` — Advertencia/cuidado (naranja)
- `failure` — Error/fallo (rojo)
- `danger` — Peligro crítico (rojo oscuro)
- `bug` — Bug/problema técnico (rojo)
- `example` — Ejemplo (púrpura)
- `quote` — Cita/referencia (gris)

**Callout colapsable:**
```markdown
> [!warning]- Atención (clickear para expandir)
> Contenido oculto inicialmente
```

Parámetros:
- `--agregar-callout`: Activar modo
- `--tipo`: Tipo de callout
- `--titulo`: Título del callout
- `--contenido`: Contenido dentro
- `[--colapsable]`: true|false para expandir/contraer por defecto
- `[--linea]`: Dónde insertar

## Uso: Agregar propiedad frontmatter

```
/vault-markdown-syntax --archivo "L3-politica-seguridad.md" --agregar-propiedad --clave "responsable" --valor "Diego Morales (PM)" --tipo "text"
```

Agrega propiedad YAML al frontmatter existente:

```yaml
---
aliases:
  - Política de Seguridad
tags:
  - activo
responsable: Diego Morales (PM)
---
```

**Tipos de propiedad:**
- `text` — Texto simple
- `date` — Fecha (YYYY-MM-DD)
- `datetime` — Fecha y hora
- `number` — Número
- `checkbox` — true|false
- `select` — Opción de lista
- `multiselect` — Varias opciones
- `link` — Link a otra nota
- `list` — Lista de valores

Ejemplo con select:
```yaml
impacto: Alta
```

Parámetros:
- `--clave`: Nombre de la propiedad
- `--valor`: Valor
- `--tipo`: Tipo de dato
- `[--opciones]`: Si es select/multiselect (ej: "Alta,Media,Baja")

## Uso: Agregar bloque con ID para referencia

```
/vault-markdown-syntax --archivo "L3-politica-seguridad.md" --agregar-bloque-id --contenido "Proceso de aprobación de cambios de seguridad" --id "proc-aprobacion-cambios"
```

Crea bloque con identificador único para embed/link a nivel de bloque:

```markdown
Proceso de aprobación de cambios de seguridad
^proc-aprobacion-cambios
```

Después, otro archivo puede linkear específicamente a este bloque:
```markdown
[[L3-politica-seguridad#^proc-aprobacion-cambios|Ver proceso de aprobación]]
```

Parámetros:
- `--contenido`: Texto del bloque
- `--id`: Identificador único (lowercase, hyphenated)
- `[--linea]`: Dónde insertar

## Uso: Crear tabla de propiedades

```
/vault-markdown-syntax --archivo "L1-portafolio-ejecutivo.md" --crear-tabla-propiedades --propiedades "Proyecto,Estado,Responsable,Vencimiento,Presupuesto" --filas 5
```

Genera tabla markdown con propiedades del lineamiento:

```markdown
| Proyecto | Estado | Responsable | Vencimiento | Presupuesto |
|----------|--------|-------------|-------------|-------------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
```

Parámetros:
- `--crear-tabla-propiedades`: Activar modo
- `--propiedades`: Columnas (separadas por coma)
- `[--filas]`: Número de filas (default: 5)
- `[--linea]`: Dónde insertar

## Uso: Agregar comentario oculto (metadata)

```
/vault-markdown-syntax --archivo "L3-politica-seguridad.md" --agregar-comentario --comentario "Revisar con abogado antes de publicar - Ley 19.628" --linea 60
```

Inserta comentario invisible en lectura (solo visible en editor):

```markdown
%% Revisar con abogado antes de publicar - Ley 19.628 %%
```

Útil para:
- Notas internas de revisión
- Referencias privadas
- Tareas pendientes para editor

Parámetro:
- `--comentario`: Texto del comentario (sin los %%)
- `[--linea]`: Dónde insertar

## Uso: Reemplazar links rotos

```
/vault-markdown-syntax --archivo "L3-politica-seguridad.md" --reparar-links
```

Detecta y sugiere correcciones para links rotos:

```
❌ LINKS ROTOS DETECTADOS: 2

1. Línea 45: [[L3-gobernanza-ti/politicas-procedimiento]]
   ❌ No existe archivo
   ✅ Sugerencia: [[L3-gobernanza-ti/politicas-procedimientos/L3-politica-seguridad]]
   ✅ Usar /vault-link-update para cambiar automáticamente

2. Línea 78: [[L3-archivo-inexistente|Texto]]
   ❌ No existe archivo
   📍 Verificar si se renombró recientemente
   📍 Usar /vault-audit para análisis completo
```

Parámetro:
- `--reparar-links`: Detectar y listar

## Uso: Agregar inline tags

```
/vault-markdown-syntax --archivo "L3-politica-seguridad.md" --agregar-tags-inline --tags "Normativa,Crítica,DPD" --linea 10
```

Inserta tags inline (hashtags dentro del contenido):

```markdown
Información sobre protección de datos. #Normativa #Crítica #DPD
```

Los inline tags se indexan en Obsidian como tags normales.

Parámetros:
- `--tags`: Tags separados por coma
- `[--linea]`: Dónde insertar
- `[--antes-de-titulo]`: Insertar antes del título

## Uso: Limpiar archivo (formato automático)

```
/vault-markdown-syntax --archivo "L3-politica-seguridad.md" --limpiar --formato "estandar"
```

Aplica formateo automático:

- Normaliza spacing en wikilinks
- Standardiza indentación
- Corrige saltos de línea
- Valida YAML

**Formato opciones:**
- `estandar` — Aplicar todas las reglas
- `espaciado` — Solo arreglar espacios en links
- `indentacion` — Solo estandarizar indentación
- `yaml` — Solo validar y limpiar YAML

Parámetro:
- `--limpiar`: Activar modo
- `--formato`: estandar|espaciado|indentacion|yaml

## Parámetros Globales

| Parámetro | Tipo | Ejemplo | Obligatorio |
|-----------|------|---------|------------|
| `--archivo` | string | `"L3-politica.md"` | Sí |
| `--validar` | flag | - | Operación |
| `--agregar-wikilink` | flag | - | Operación |
| `--agregar-embed` | flag | - | Operación |
| `--agregar-callout` | flag | - | Operación |
| `--agregar-propiedad` | flag | - | Operación |
| `--agregar-bloque-id` | flag | - | Operación |
| `--crear-tabla-propiedades` | flag | - | Operación |
| `--agregar-comentario` | flag | - | Operación |
| `--reparar-links` | flag | - | Operación |
| `--agregar-tags-inline` | flag | - | Operación |
| `--limpiar` | flag | - | Operación |

## Mejores Prácticas

1. **Validar antes de hacer cambios grandes**: Usar `--validar` primero
2. **Links con display text claro**: Nunca hacer `[[archivo]]`, siempre `[[archivo|Texto claro]]`
3. **Usar embeds para evitar duplicación**: No copiar contenido, embedear
4. **Callouts para información crítica**: Highlighted warnings/notes para normativa
5. **Propiedades para metadata**: Usar propiedades frontmatter en lugar de hardcoding
6. **Block IDs para precisión**: Linkear a secciones específicas, no archivos enteros
7. **Comentarios para notas internas**: Marcar tareas pendientes/revisiones privadas

## Complementación con otros skills

| Skill | Relación |
|-------|----------|
| `/vault-new-note` | Crea archivo; `/vault-markdown-syntax` lo mejora |
| `/vault-link-update` | Repara links en masa; `/vault-markdown-syntax` valida |
| `/vault-template` | Crea estructura; `/vault-markdown-syntax` mejora contenido |
| `/vault-audit` | Detecta problemas; `/vault-markdown-syntax` los arregla |

---

**Basado en:** Obsidian Flavored Markdown (OFM) y [Obsidian Help - Markdown basics](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown)
