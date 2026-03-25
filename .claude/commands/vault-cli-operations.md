---
name: vault-cli-operations
description: Automatizar operaciones del vault via CLI — crear, leer, buscar, exportar, sincronizar propiedades
type: prompt
---

# /vault-cli-operations — Automatización CLI

Interactúa con Obsidian y el vault mediante operaciones CLI cuando Obsidian está abierto. Permite crear, leer, buscar, y gestionar notas automáticamente desde línea de comandos. Basado en Obsidian CLI plugin/API.

**Nota:** Requiere que Obsidian esté abierto y accesible. Para automatización sin GUI, usar con herramientas headless.

## Cuándo usar

- Crear notas automáticamente desde scripts externos
- Buscar y analizar contenido del vault programáticamente
- Sincronizar datos entre systems externos y Obsidian
- Automatizar creación de reportes basados en contenido
- Migrar contenido masivo desde otra fuente
- Generar índices dinámicos
- Exportar contenido a formatos otros (PDF, HTML)

## Uso: Crear nota desde CLI

```
/vault-cli-operations --crear-nota --nombre "Tarea 4.20 Nueva" --contenido "Descripción de la tarea" --carpeta "L1-portafolio-ti"
```

Crea nota nueva usando Obsidian CLI:

```
✅ Nota creada: L1-portafolio-ti/L1-tarea-420-nueva.md
```

Si se pasan datos adicionales:
```
/vault-cli-operations --crear-nota --nombre "Política de Acceso" --carpeta "L3-gobernanza-ti/politicas-procedimientos" --contenido "Contenido..." --propiedades "responsable:PM;estado:en-definicion"
```

Parámetros:
- `--crear-nota`: Activar modo creación
- `--nombre`: Nombre descriptivo
- `--carpeta`: Ruta relativa del vault
- `[--contenido]`: Contenido inicial
- `[--propiedades]`: Propiedades YAML (clave:valor separadas por ;)
- `[--template]`: Aplicar plantilla existente
- `[--abrir]`: Abrir en Obsidian después de crear (default: true)

## Uso: Leer nota

```
/vault-cli-operations --leer --archivo "L3-politica-seguridad.md"
```

Lee contenido completo de una nota:

```
---
aliases:
  - Política de Seguridad
tags:
  - activo
---

# Política de Seguridad

**Estado:** activo
**Última actualización:** 2026-03-25

## Descripción

[contenido]
...
```

Parámetros:
- `--leer`: Activar lectura
- `--archivo`: Ruta del archivo (sin .md)
- `[--solo-contenido]`: Omitir frontmatter
- `[--seccion]`: Leer solo un heading específico
- `[--copiar]`: Copiar contenido al clipboard

## Uso: Buscar en vault

```
/vault-cli-operations --buscar --termino "Ley 19.628" --tipo "contenido"
```

Busca término en todas las notas:

```
RESULTADOS: 12 archivos encontrados

1. 📄 L3-gobernanza-ti/diagnostico-normativo/L3-diagnostico-normativo.md
   Línea 45: ...obligaciones de la Ley 19.628 incluyen...

2. 📄 L3-gobernanza-ti/politicas-procedimientos/L3-politica-seguridad.md
   Línea 78: ...requisitos de Ley 19.628 para protección...
   Línea 156: ...cumplimiento Ley 19.628 verificado...

3. 📄 L3-gobernanza-ti/cierre-evidencia/L3-cierre-dpd.md
   Línea 12: ...implementación de Ley 19.628...

[... más resultados ...]
```

**Tipos de búsqueda:**
- `contenido` — Buscar en cuerpo de archivo
- `titulo` — Buscar en nombres de archivo
- `alias` — Buscar en aliases
- `tag` — Buscar en tags
- `todo` — Buscar en todo (default)

Parámetros:
- `--buscar`: Activar búsqueda
- `--termino`: Texto o regex a buscar
- `--tipo`: contenido|titulo|alias|tag|todo
- `[--carpeta]`: Limitar búsqueda a carpeta
- `[--regex]`: Usar expresión regular
- `[--case-sensitive]`: Búsqueda sensible a mayúsculas

## Uso: Listar archivos en carpeta

```
/vault-cli-operations --listar --carpeta "L3-gobernanza-ti"
```

Muestra todos los archivos en carpeta:

```
📁 L3-gobernanza-ti/
├─ 📄 L3-gobernanza.md (4.2 KB, activo)
├─ 📁 infraestructura-digital/
│  ├─ 📄 L3-infraestructura-digital.md (5.1 KB, en-definicion)
│  ├─ 📄 ...
├─ 📁 catastro-aplicaciones/
│  ├─ 📄 L3-catalogo-apps.md (7.3 KB, activo)
│  └─ ...
└─ 📁 politicas-procedimientos/
   ├─ 📄 L3-politica-seguridad.md (6.1 KB, activo)
   └─ ...

Total: 23 archivos, 5 carpetas
```

Parámetros:
- `--listar`: Activar modo lista
- `[--carpeta]`: Carpeta a listar (default: raíz)
- `[--recursivo]`: true|false incluir subcarpetas (default: true)
- `[--ordenar]`: nombre|fecha|tamaño

## Uso: Obtener propiedades de archivo

```
/vault-cli-operations --obtener-propiedades --archivo "L3-politica-seguridad.md"
```

Lee metadatos YAML de un archivo:

```
PROPIEDADES: L3-politica-seguridad.md
═══════════════════════════════════════════════════════
aliases: Política de Seguridad
tags: [activo]
responsable: Diego Morales
fecha-creacion: 2026-03-15
fecha-ultima-actualizacion: 2026-03-25
normativa: Ley 19.628
estado: activo
nivel-confidencialidad: Alta
version: 1.0
═══════════════════════════════════════════════════════
```

Parámetros:
- `--obtener-propiedades`: Activar modo
- `--archivo`: Ruta del archivo
- `[--propiedad]`: Si solo quieres una propiedad específica

## Uso: Actualizar propiedad

```
/vault-cli-operations --actualizar-propiedad --archivo "L3-politica-seguridad.md" --clave "estado" --valor "completado"
```

Modifica propiedad YAML en frontmatter:

```
✅ Actualizado: L3-politica-seguridad.md
   estado: activo → completado
   fecha-actualizacion: 2026-03-25 10:30:00
```

Parámetros:
- `--actualizar-propiedad`: Activar modo
- `--archivo`: Archivo a modificar
- `--clave`: Propiedad a cambiar
- `--valor`: Nuevo valor
- `[--agregar-timestamp]`: Actualizar fecha automáticamente

## Uso: Generar índice de carpeta

```
/vault-cli-operations --generar-indice --carpeta "L3-gobernanza-ti" --formato "markdown"
```

Crea índice automático de contenido con links:

```markdown
# Índice: L3 Gobernanza TI

## Documentos Principales
- [[L3-gobernanza-ti/L3-gobernanza|L3 Gobernanza TI]]

## Subdivisiones

### Infraestructura Digital
- [[L3-gobernanza-ti/infraestructura-digital/L3-infraestructura-digital|Infraestructura Digital]]
- [[L3-gobernanza-ti/infraestructura-digital/L3-conectividad|Conectividad]]

### Catastro de Aplicaciones
- [[L3-gobernanza-ti/catastro-aplicaciones/L3-catalogo-apps|Catálogo de Aplicaciones]]

[... más secciones ...]
```

**Formatos:**
- `markdown` — Índice en Markdown (default)
- `html` — HTML exportable
- `json` — JSON estructurado

Parámetros:
- `--generar-indice`: Activar modo
- `--carpeta`: Carpeta a indexar
- `--formato`: markdown|html|json
- `[--profundidad]`: Niveles a mostrar (default: 3)
- `[--incluir-archivos]`: Incluir archivos o solo carpetas
- `[--guardar]`: Ruta donde guardar índice

## Uso: Exportar a PDF/HTML

```
/vault-cli-operations --exportar --archivo "L3-politica-seguridad.md" --formato "pdf" --incluir-embeds true
```

Exporta nota a PDF o HTML:

```
✅ Exportado: L3-politica-seguridad.pdf
   Tamaño: 248 KB
   Ubicación: [ruta del vault]/exports/
```

**Opciones:**
- `pdf` — Documento PDF (con formato)
- `html` — Página HTML (con CSS)
- `markdown` — Markdown plano (sin Obsidian syntax)

Parámetros:
- `--exportar`: Activar modo
- `--archivo`: Archivo a exportar
- `--formato`: pdf|html|markdown
- `[--incluir-embeds]`: true|false embedear contenido
- `[--incluir-links]`: true|false mantener links
- `[--tema]`: light|dark (para PDF/HTML)
- `[--guardar-en]`: Carpeta de destino

## Uso: Obtener estadísticas del vault

```
/vault-cli-operations --estadisticas
```

Genera reporte de salud del vault:

```
ESTADÍSTICAS DEL VAULT
═══════════════════════════════════════════════════════

Contenido:
├─ Total archivos: 87
├─ Total palabras: 145,230
├─ Promedio por archivo: 1,671 palabras
├─ Archivos vacíos: 0
└─ Archivo más grande: L3-diagnostico-normativo.md (12 KB)

Estructura:
├─ Carpetas: 18
├─ Profundidad máxima: 4 niveles
└─ Carpeta más poblada: L3-gobernanza-ti/ (23 archivos)

Conectividad:
├─ Wikilinks totales: 142
├─ Embeds totales: 8
├─ Orphan files (sin links): 3
│  - L4-documento-temp.md
│  - vault/archivo-backup.md
│  - docs/obsoleto.md
└─ Dead links (rotos): 0 ✅

Estado (tags):
├─ completado: 12 (14%)
├─ activo: 34 (39%)
├─ en-definicion: 28 (32%)
├─ pendiente: 10 (11%)
└─ backlog: 3 (3%)

Plugins:
├─ Dataview queries: 2
├─ Templater templates: 5
├─ Canvas files: 2
└─ Excalidraw diagrams: 4

Última actualización: 2026-03-25 14:35 UTC
═══════════════════════════════════════════════════════
```

Parámetro:
- `--estadisticas`: Generar reporte

## Uso: Sincronizar propiedades masivamente

```
/vault-cli-operations --sincronizar --carpeta "L3-gobernanza-ti" --operacion "actualizar-timestamp" --para "todos"
```

Actualiza propiedades en múltiples archivos:

```
✅ Sincronización completada

Actualizado: 23 archivos
├─ fecha-ultima-actualizacion: 2026-03-25 ← Todos
├─ version bumped: L3-politica-seguridad.md (1.0 → 1.1)
└─ responsable actualizado: 5 archivos

Error: 0
Advertencia: 2 (archivos sin propiedades de versión)
```

**Operaciones disponibles:**
- `actualizar-timestamp` — Poner fecha/hora actual
- `bump-version` — Incrementar versión (x.y → x.y+1)
- `agregar-propiedad` — Agregar propiedad faltante
- `validar-propiedades` — Verificar que todas tengan propiedades requeridas

Parámetros:
- `--sincronizar`: Activar modo
- `--carpeta`: Carpeta a actualizar
- `--operacion`: Tipo de sincronización
- `--para`: todos|con-tag [tag]|sin-propiedad [clave]
- `[--propiedad]`: Si agregar-propiedad
- `[--valor]`: Valor a agregar

## Uso: Crear reporte de contenido

```
/vault-cli-operations --reporte --tipo "normativa" --filtro "tags contains 'Normativa'"
```

Genera reporte consolidado:

```
REPORTE: Documentos Normativos Activos
═══════════════════════════════════════════════════════

Resumen:
├─ Total documentos: 8
├─ Completos: 2
├─ En ejecución: 5
└─ Pendientes: 1

Documentos por Ley:

Ley 19.628 (DPD):
├─ L3-politica-seguridad.md ✅ Activo
├─ L3-politica-acceso.md ✅ Activo
└─ L3-cierre-dpd.md 🟠 En-definicion

Ley 21.663 (OIV):
├─ L3-diagnostico-normativo.md ✅ Activo
├─ L3-nist-csf-programa.md ✅ Activo
└─ [... más ...]

Deuda Técnica:
├─ L3-cierre-hallazgos.md ⚫ Pendiente (Vence: 2026-05-15)

═══════════════════════════════════════════════════════
```

Parámetros:
- `--reporte`: Activar modo
- `--tipo`: normativa|proyectos|estado|custom
- `[--filtro]`: Criterio de filtrado
- `[--agrupar-por]`: Campo para agrupar
- `[--guardar-en]`: Exportar reporte a archivo

## Parámetros Globales

| Parámetro | Tipo | Ejemplo | Obligatorio |
|-----------|------|---------|------------|
| `--crear-nota` | flag | - | Operación |
| `--leer` | flag | - | Operación |
| `--buscar` | flag | - | Operación |
| `--listar` | flag | - | Operación |
| `--obtener-propiedades` | flag | - | Operación |
| `--actualizar-propiedad` | flag | - | Operación |
| `--generar-indice` | flag | - | Operación |
| `--exportar` | flag | - | Operación |
| `--estadisticas` | flag | - | Operación |
| `--sincronizar` | flag | - | Operación |
| `--reporte` | flag | - | Operación |
| `--archivo` | string | `"L3-politica.md"` | Con muchas operaciones |
| `--carpeta` | string | `"L3-gobernanza-ti"` | Con muchas operaciones |

## Casos de Uso Reales

### 1. Migrar contenido desde Excel

```bash
# Leer datos de Excel
# Generar notas para cada fila
/vault-cli-operations --crear-nota --nombre "Proyecto XYZ" --carpeta "L1-portafolio-ti" --propiedades "responsable:PM;presupuesto:$50K"

# Repetir para cada fila...
```

### 2. Generar reportes automáticos

```bash
# Cada semana, generar reporte de estado
/vault-cli-operations --reporte --tipo "estado" --filtro "tags contains 'activo'" --guardar-en "reportes/reporte-semanal.md"
```

### 3. Sincronizar cambios de estado

```bash
# Cuando Gateway se completa, marcar todas las tareas relacionadas
/vault-cli-operations --sincronizar --carpeta "L3-gobernanza-ti" --operacion "actualizar-propiedades" --propiedad "gateway-completado" --valor "G2"
```

### 4. Exportar para presentación

```bash
# Generar PDF limpio de documento clave
/vault-cli-operations --exportar --archivo "L3-gobernanza-ti/L3-gobernanza" --formato "pdf" --tema "light" --guardar-en "exports/Gobernanza-TI-v1.pdf"
```

## Mejores Prácticas

1. **Siempre usar rutas relativas**: `/vault-cli-operations` está consciente del vault
2. **Validar antes de hacer cambios masivos**: Usar `--listar` o `--buscar` primero
3. **Crear backups**: Git commit antes de `--sincronizar` masivo
4. **Documentar cambios**: Agregar comentarios explicando cambios automáticos
5. **Usar propiedades consistentes**: Estandarizar nombres de propiedades en toda la carpeta

## Integración con otros skills

- Complementa `/vault-new-note` para automatización sin GUI
- Integra con `/vault-status` para actualizaciones en masa
- Compatible con `/vault-template` para creación programada
- Se coordina con `/vault-audit` para validación post-automatización

---

**Basado en:** Obsidian CLI y [Obsidian API](https://docs.obsidian.md/) capabilities

**Nota:** Este skill requiere Obsidian abierto o acceso a través de Remote API. Para automatización sin GUI, considerar configurar hook de git con scripts en Python/Node.js.
