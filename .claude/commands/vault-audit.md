# Skill: /vault-audit

## Descripción

Ejecuta un diagnóstico completo del vault Obsidian para detectar problemas de integridad estructural.

## Cuándo usar

- Después de modificaciones masivas a archivos
- Antes de crear un nuevo commit/tag
- Cuando hay sospechas de links rotos o nodos fantasma
- Como chequeo pre-sesión para validar estado del vault

## Qué detecta

1. **Links internos rotos** — Wikilinks que apuntan a archivos que no existen
2. **Links a carpetas** — `[[ruta/carpeta/|texto]]` que crean nodos fantasma
3. **YAML malformado** — Duplicados de tags, sintaxis inválida en frontmatter
4. **Archivos sin tag de estado** — Notas que no tienen uno de: `completado`, `activo`, `en-definicion`, `pendiente`, `backlog`
5. **Config files no filtrados** — Archivos que deberían estar en `userIgnoreFilters` pero no están
6. **Espacios malformados en pipes** — Links con espacios: `[[ path | alias ]]` en lugar de `[[path|alias]]`

## Implementación

### Paso 1: Escanear todos los wikilinks
Usar Grep para encontrar todos los patrones de wikilink:
```
Pattern: \[\[([^\]]+)\|?([^\]]*)\]\]
Modo: files_with_matches
```

Para cada archivo, extraer todos los links internos.

### Paso 2: Validar cada wikilink
Para cada link encontrado:
- Extraer la ruta: `[[ruta/archivo` o `[[ruta/carpeta/`
- Verificar que apunta a un archivo `.md` que existe
- Verificar que NO es una carpeta (terminando en `/`)
- Si no existe → REPORTE: "Link roto en [archivo]:[línea]"
- Si es carpeta → REPORTE: "Link a carpeta en [archivo]:[línea]"

### Paso 3: Validar YAML frontmatter
Para cada archivo:
- Leer primeras líneas (hasta el cierre `---`)
- Verificar que `tags:` aparece una sola vez
- Verificar que contiene exactamente UN tag de estado (los 5 válidos)
- Si no existe → REPORTE: "Sin tag de estado en [archivo]"
- Si tiene múltiples → REPORTE: "Tags duplicados en [archivo]"

### Paso 4: Verificar filtros de configuración
Leer `.obsidian/app.json` y extraer `userIgnoreFilters`.
Listar archivos que deberían estar filtrados pero no están:
- `CLAUDE.md`, `MEMORY.md`, `AGENTS.md`
- Cualquier archivo en `00-contexto/` que sea de configuración
- Si falta alguno → REPORTE: "Config sin filtrar: [archivo]"

### Paso 5: Generar reporte

Formato de salida:

```
═══════════════════════════════════════════════════════
VAULT AUDIT REPORT
═══════════════════════════════════════════════════════

Total archivos analizados: [N]
Total links analizados: [N]

ESTADO: ✅ CLEAN / ⚠️ [N] ISSUES / ❌ CRITICAL

───────────────────────────────────────────────────────
PROBLEMAS ENCONTRADOS
───────────────────────────────────────────────────────

[Si hay cero problemas]
✅ No se detectaron problemas. Vault en buen estado.

[Si hay problemas]
🔴 LINKS ROTOS ([N]):
  - [archivo]:[línea]: [[ruta]] → archivo no existe

🟠 LINKS A CARPETAS ([N]):
  - [archivo]:[línea]: [[ruta/]] → es una carpeta

🟡 YAML MALFORMADO ([N]):
  - [archivo]: tags duplicados o sin estado

🟠 FILES SIN FILTRAR ([N]):
  - [archivo] debería estar en userIgnoreFilters

───────────────────────────────────────────────────────
RECOMENDACIONES
───────────────────────────────────────────────────────

[Listar acciones concretas para cada problema]

1. Usar /vault-link-update para reparar links rotos masivamente
2. Revisar [archivo] manualmente para eliminar folder links
3. Agregar tags de estado con /vault-status
4. Actualizar .obsidian/app.json con archivos faltantes

═══════════════════════════════════════════════════════
```

## Ejemplo de uso

```
User: /vault-audit
Claude: [Ejecuta diagnóstico completo]
Claude: [Genera reporte detallado con recomendaciones]
```

## Notas de implementación

- Usar SOLO herramientas Glob, Grep, Read (no Bash destructivas)
- Si hay más de 5 problemas de un tipo, agrupar con "...y [N] más"
- Incluir siempre el contador de archivos/links para contexto
- Si vault está limpio, celebrar con ✅
- Mantener tono profesional pero amigable
