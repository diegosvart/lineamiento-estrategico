# Skill: /vault-new-note

## Descripción

Crea una nueva nota en el vault con estructura correcta: YAML frontmatter, wikilinks válidos, convenciones aplicadas, y actualización automática del índice.

## Cuándo usar

- Agregar nueva tarea, política, o documento al vault
- Crear subcategoría nueva dentro de un lineamiento
- Agregar documento de configuración
- Agregar nota de decisión o acta

## Parámetros de entrada

```
/vault-new-note
  --nombre: Nombre descriptivo en español (se convierte a slug)
  --carpeta: Ruta relativa donde crear el archivo (ej: L3-gobernanza-ti/politicas-procedimientos)
  --estado: Estado inicial (pendiente|activo|en-definicion|completado|backlog)
  [--alias: Alias opcional para el archivo]
  [--contenido: Contenido inicial si se proporciona]
```

## Proceso de creación

### Paso 1: Validar inputs
- Nombre no vacío y sin caracteres especiales (excepto espacios)
- Carpeta existe (si no existe, sugerir crear)
- Estado es uno de los 5 válidos
- Nombre no entra en conflicto con archivo existente

### Paso 2: Generar nombre de archivo
De `nombre: "Política de Seguridad"`:
1. Convertir a minúsculas: `política de seguridad`
2. Remover tildes: `politica de seguridad`
3. Cambiar espacios por hyphens: `politica-de-seguridad`
4. Resultado: `politica-de-seguridad.md`

Si la carpeta es `L3-gobernanza-ti/politicas-procedimientos/`:
- Nombre final del archivo: `L3-politica-de-seguridad.md`

### Paso 3: Crear estructura YAML

```yaml
---
aliases:
  - Política de Seguridad
tags:
  - en-definicion
---
```

Reglas:
- `aliases`: Nombre descriptivo original (con tildes permitidas)
- `tags`: Exactamente UNO de los 5 estados
- El cierre debe ser `---` solo (sin caracteres extra)

### Paso 4: Escribir contenido inicial

Estructura base si no se proporciona contenido:

```markdown
# [Nombre descriptivo]

**Estado:** `en-definicion`
**Última actualización:** [fecha actual]

## Descripción

[Placeholder para descripción]

## Contenido

[Placeholder para contenido]

```

Si se proporciona contenido, insertar después de los placeholders.

### Paso 5: Actualizar índices y links

Después de crear el archivo:

1. **Identificar índices relevantes** (buscar `00-indice.md` o README en la carpeta padre)
2. **Agregar link a la nota**:
   - Si es Tier 1 (dentro de L1-L5): agregar a `00-indice.md`
   - Si es Tier 2 (subcategoría): agregar al README de su lineamiento
   - Si es config: NO agregar a índices

3. **Link format**: `[[ruta/archivo|Alias o nombre descriptivo]]`

### Paso 6: Actualizar filtros si es config

Si la nota es de configuración (ej: JUGGL-SETUP.md, definicion-estados.md):
- Agregar a `.obsidian/app.json` en `userIgnoreFilters`
- Usar la ruta completa desde raíz: `"00-contexto/mi-config.md"`
- Validar que JSON sigue siendo válido

### Paso 7: Validar e informar

```
✅ Nota creada exitosamente

📄 Archivo: L3-gobernanza-ti/politicas-procedimientos/L3-politica-de-seguridad.md
🏷️ Alias: Política de Seguridad
📊 Estado: en-definicion
🔗 Links actualizados:
   - L3-gobernanza-ti/README.md
   - 00-indice.md

Próximos pasos:
1. Editar contenido de la nota
2. Agregar tags adicionales si es necesario (ej: #urgente, #normativa)
3. Usar /vault-link-update si necesitas actualizar wikilinks después
```

## Ejemplo de uso

```
User: /vault-new-note --nombre "Plan de Acción 2027" --carpeta "L1-portafolio-ti" --estado "pendiente"

Claude: [Valida inputs, crea archivo con YAML correcto, actualiza índice]
Claude: [Reporta archivo creado con confirmación visual]
```

## Reglas especiales

### Para notas de política/procedimiento
- Agregar sección "Marco normativo" si es normativa
- Agregar sección "Responsable" y "Vigencia"

### Para notas de tarea
- Agregar tabla con: ID | Tarea | Responsable | hh | Estado

### Para notas de decisión
- Agregar: Fecha, Participantes, Decisión, Justificación, Próximos pasos

## Notas de implementación

- Usar Write tool para crear archivo, Edit para actualizar índices
- Validar JSON después de modificar .obsidian/app.json
- No sobrescribir archivos existentes (pedir confirmación)
- Mantener convenciones del vault: español, sin tildes en filenames, hyphens
