# Skill: /vault-templater-setup

## Descripción

Configura y aplica plantillas parametrizadas usando el plugin Templater. Permite crear notas con variables automáticas (fecha, usuario, nombre aleatorio) y ejecutar scripts en JavaScript para automatización avanzada.

**Nota**: Este skill es para Templater plugin, complementa a `/vault-template` (que es skill puro de Claude Code).

## Prerequisito

- **Plugin requerido**: Templater (`templater-obsidian`)
- **Instalación**: Obsidian → Community Plugins → Search "Templater" → Install & Enable
- **Documentación**: https://silentvoid13.github.io/Templater/

## Cuándo usar

- Crear plantilla de nota que se expande con variables dinámicas (fecha, hora, usuario)
- Generar nombre de archivo automáticamente
- Ejecutar código JS personalizado al crear nota
- Crear notas con timestamps automáticos
- Generar snippets reutilizables

## Uso: Crear plantilla básica de lineamiento

```
/vault-templater-setup --crear-plantilla "lineamiento" --donde "L1-portafolio-ti"
```

Crea archivo plantilla (template) que Templater puede expandir:

```markdown
# <% tp.file.title %>

**Creada:** <% tp.date.now() %>
**Usuario:** <% tp.user.username %>
**Estado:** en-definicion

---

## Descripción

[Placeholder]

---

*Última actualización: <% tp.date.now() %>*
```

Variables:
- `<% tp.file.title %>` — Nombre del archivo (se reemplaza auto)
- `<% tp.date.now() %>` — Fecha/hora actual
- `<% tp.user.username %>` — Usuario de Obsidian
- Más variables disponibles en documentación Templater

## Uso: Crear plantilla de tarea con auto-increment ID

```
/vault-templater-setup --crear-plantilla "tarea-proyecto" --auto-increment
```

Crea plantilla que genera ID secuencial automáticamente:

```markdown
---
aliases:
  - <% tp.file.title %>
tags:
  - pendiente
id: <% tp.system("powershell -Command \"Get-Random -Minimum 4000 -Maximum 4999\"") %>
asignado-a:
fecha-creacion: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

**ID Tarea:** <% tp.variables.id %>
**Responsable:** [Vacío]
**Fecha Creación:** <% tp.date.now("YYYY-MM-DD") %>
**Estado:** Pendiente

## Descripción

[Placeholder para descripción de la tarea]

## Próximos pasos

- [ ] Paso 1
- [ ] Paso 2
- [ ] Paso 3

---

*Creada automáticamente por plantilla Templater*
```

## Uso: Crear plantilla con lógica condicional

```
/vault-templater-setup --crear-plantilla "politica-con-normativa" --condicional
```

Crea plantilla que muestra/oculta secciones según input:

```markdown
---
aliases:
  - <% tp.file.title %>
tags:
  - en-definicion
normativa-aplica: <% tp.system("powershell -Command 'Read-Host \"Ley/Normativa (ej: 19.628)\"'") %>
---

# <% tp.file.title %>

**Normativa:** <% tp.variables.normativa %>
**Vigencia:** <% tp.date.now("YYYY-MM-DD") %>

<% tp.user.firstname %>: Revisa el siguiente contenido...

## Requisitos Normativos

<% tp.if(tp.variables.normativa != "", "Aplica: " + tp.variables.normativa, "Sin normativa específica") %>

## Descripción

[Contenido]

---
```

## Uso: Aplicar plantilla al crear archivo

```
/vault-templater-setup --aplicar-plantilla "lineamiento" --archivo "nuevo-lineamiento.md"
```

Abre el diálogo Templater para:
1. Seleccionar plantilla
2. Confirmar variables
3. Generar archivo con expansión

Resultado: Archivo nuevo con todas las variables expandidas

## Uso: Listar plantillas disponibles

```
/vault-templater-setup --listar-plantillas
```

Muestra todas las plantillas Templater creadas:

```
PLANTILLAS TEMPLATER DISPONIBLES
═══════════════════════════════════════════════════════

1. 📋 lineamiento
   Ubicación: Templates/lineamiento.md
   Variables: file.title, date.now, user.username
   Descripción: Plantilla básica para crear lineamiento

2. 📋 tarea-proyecto
   Ubicación: Templates/tarea-proyecto.md
   Variables: id (auto), date.now, asignado-a (input)
   Descripción: Tarea con ID secuencial automático

3. 📋 politica-con-normativa
   Ubicación: Templates/politica-con-normativa.md
   Variables: normativa (input), date.now
   Descripción: Política con lógica condicional por normativa

4. 📋 documento-decision
   Ubicación: Templates/documento-decision.md
   Variables: fecha, participantes, decisión
   Descripción: Acta de decisión con timestamp

[... más ...]

Usar: /vault-templater-setup --aplicar-plantilla [nombre]
```

## Uso: Crear plantilla personalizada

```
/vault-templater-setup --crear-personalizada --nombre "reporte-mensual" --contenido "[markdown con variables Templater]"
```

Crea plantilla custom con contenido especificado:

```
✅ Plantilla creada

📋 Nombre: reporte-mensual
📁 Ubicación: Templates/reporte-mensual.md
📊 Variables detectadas: 3
   - <% tp.date.now %>
   - <% tp.file.title %>
   - <% tp.user.username %>

Próximos pasos:
1. Usar /vault-templater-setup --aplicar-plantilla "reporte-mensual"
   para crear una nueva nota basada en esta plantilla
```

## Variables Templater disponibles

| Variable | Tipo | Ejemplo | Descripción |
|----------|------|---------|-------------|
| `tp.date.now()` | Función | `"2026-03-25 10:30"` | Fecha y hora actual |
| `tp.date.now("YYYY-MM-DD")` | Función | `"2026-03-25"` | Fecha con formato custom |
| `tp.file.title` | Variable | `"Nueva Política"` | Nombre del archivo (sin ext) |
| `tp.file.path` | Variable | `"L3/.../Nueva Política"` | Ruta completa |
| `tp.user.firstname` | Variable | `"Diego"` | Nombre usuario (si configurado) |
| `tp.user.lastname` | Variable | `"Morales"` | Apellido usuario |
| `tp.user.email` | Variable | `"diego@empresa.com"` | Email usuario |
| `tp.system()` | Función | PowerShell commands | Ejecutar comando sistema |

## Parámetros

| Parámetro | Tipo | Ejemplo | Obligatorio |
|-----------|------|---------|-------------|
| `--crear-plantilla` | string | `"lineamiento"` | Sí (uno de) |
| `--donde` | string | `"L1-portafolio-ti"` | Con --crear |
| `--auto-increment` | flag | - | Optional |
| `--condicional` | flag | - | Optional |
| `--aplicar-plantilla` | string | `"lineamiento"` | Sí (uno de) |
| `--archivo` | string | `"nuevo-archivo.md"` | Con --aplicar |
| `--listar-plantillas` | flag | - | Optional |
| `--crear-personalizada` | flag | - | Sí (uno de) |
| `--nombre` | string | `"reporte-mensual"` | Con --crear-personal |
| `--contenido` | text | `"# <% tp.file.title %>"` | Con --crear-personal |

## Mejores prácticas

1. **Mantener plantillas simples**: No mezclar demasiada lógica JS
2. **Documentar variables**: Agregar comentarios sobre qué variables se usan
3. **Testing**: Probar plantilla con casos típicos
4. **Organización**: Guardar plantillas en carpeta `Templates/`
5. **Nombres claros**: Nombrar plantillas para que sea obvio cuándo usarlas

## Localización de plantillas

En Obsidian, las plantillas Templater se buscan en:
- Carpeta configurada en Templater settings (default: `Templates/`)
- O en la raíz del vault si no está configurada

Ejemplo estructura:
```
Templates/
├─ lineamiento.md
├─ tarea-proyecto.md
├─ politica-con-normativa.md
└─ documento-decision.md
```

## Instalación de Templater

Si aún no está instalado:
1. Obsidian → Settings → Community Plugins
2. Search: "Templater"
3. Install + Enable
4. Settings → Templater → Configure template folder (ej: `Templates`)
5. Reload Obsidian

## Integración con Claude Code

- `/vault-template` — Claude Code crea notas directas (sin Templater)
- `/vault-templater-setup` — Configura Templater para expansión automática
- Pueden usarse juntos: crear plantilla con Claude, expandir con Templater

## Notas de implementación

- Validar sintaxis Templater antes de guardar
- No modificar archivos de plantilla existentes (solo crear nuevas)
- Asegurar que carpeta `Templates/` existe
- Documentar variables nuevas en comentarios
