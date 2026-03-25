# Skill: /vault-link-update

## Descripción

Actualiza múltiples wikilinks en masa cuando se renombra un archivo o se reorganiza carpetas. Busca, valida y reemplaza links en todos los archivos sin romper referencias.

## Cuándo usar

- Renombrar un archivo importante (ej: README → L3-catastro-aplicaciones)
- Reorganizar carpetas
- Corregir links rotos detectados por `/vault-audit`
- Migrar archivo a nueva carpeta

## Uso: Actualizar link antiguo a nuevo

```
/vault-link-update --link-antiguo "L3-gobernanza-ti/catastro-aplicaciones/README" --link-nuevo "L3-gobernanza-ti/catastro-aplicaciones/L3-catastro-aplicaciones"
```

Proceso:
1. **Validación**
   - Verifica que `link-antiguo` NO existe (confirmando cambio)
   - Verifica que `link-nuevo` SÍ existe
   - Busca todos los archivos que referencian `link-antiguo`

2. **Búsqueda**
   - Usa Grep: `\[\[.*link-antiguo.*\]\]`
   - Reporta cantidad de referencias y archivos afectados

3. **Confirmación**
   - Muestra vista previa de cambios que se harán
   - Pide confirmación explícita antes de proceder

4. **Reemplazo**
   - Para cada archivo:
     - Localiza pattern: `[[link-antiguo|...]]`
     - Reemplaza por: `[[link-nuevo|...]]`
     - Preserva alias si existe
   - Valida que reemplazo se hizo correctamente

5. **Reporte**

```
✅ Links actualizados exitosamente

🔍 Búsqueda:
   - Pattern: [[L3-gobernanza-ti/catastro-aplicaciones/README|...]]
   - Referencias encontradas: 9

📝 Reemplazos realizados:
   - Archivos modificados: 8
   - Links actualizados: 9
   - Archivos sin cambios: 0

📄 Archivos modificados:
   - 00-indice.md
   - 00-contexto/gateways.md
   - L1-portafolio-ti/L1-portafolio-ti.md
   - L3-gobernanza-ti/L3-gobernanza-ti.md
   - [... 4 más ...]

✅ Validación post-cambio:
   - 0 links rotos nuevos introducidos
   - Archivo destino existe: sí
   - Todos los links actualizados correctamente

Próximo paso: Ejecutar /vault-audit para verificar integridad total
```

## Uso: Corregir links rotos en masa

```
/vault-link-update --fix-broken
```

Automatiza la búsqueda y reparación de links rotos:

1. Ejecuta `/vault-audit` internamente para detectar links rotos
2. Para cada link roto, intenta encontrar el archivo renombrado
3. Si encuentra match (por nombre similar), sugiere reemplazo
4. Pide confirmación para cada reemplazo
5. Ejecuta el reemplazo

Ejemplo:
```
Analizando links rotos...

🔴 LINK ROTO encontrado: [[L3-politicas-procedimientos/README]]
   - Archivo NO existe
   - Búsqueda en carpeta padre: L3-politicas-procedimientos/
   - Archivos en carpeta:
     ✓ L3-politicas-procedimientos.md (Match: 95%)
     ✓ L3-politica-seguridad.md (Match: 40%)

🔧 Sugerencia: ¿Reemplazar por [[L3-politicas-procedimientos/L3-politicas-procedimientos]]?
   [Sí] [No] [Mostrar más opciones]
```

## Uso: Cambiar alias de link sin cambiar destino

```
/vault-link-update --archivo "L1-portafolio-ti/L1-portafolio-ti.md" --en-archivo "Catastro de Aplicaciones" --nuevo-alias "Catastro L3 (Level A-B-C)"
```

Modifica solo el texto mostrado (alias), manteniendo el destino:
- Antes: `[[L3-gobernanza-ti/catastro/L3-catastro|Catastro de Aplicaciones]]`
- Después: `[[L3-gobernanza-ti/catastro/L3-catastro|Catastro L3 (Level A-B-C)]]`

## Uso: Listar todos los links a un archivo

```
/vault-link-update --file-references "L3-gobernanza-ti/politicas-procedimientos/L3-politicas-procedimientos.md"
```

Encuentra TODOS los archivos que enlazan a este archivo:

```
REFERENCIAS A: L3-politicas-procedimientos.md
═══════════════════════════════════════════════════════

Total referencias: 12

Desde:
  1. 00-indice.md (línea 47)
     [[L3-gobernanza-ti/politicas-procedimientos/L3-politicas-procedimientos|Políticas y Procedimientos]]

  2. L1-portafolio-ti/L1-portafolio-ti.md (línea 52)
     [[../../L3-gobernanza-ti/politicas-procedimientos/L3-politicas-procedimientos|Políticas y procedimientos]]

  3. L3-gobernanza-ti/L3-gobernanza-ti.md (línea 31)
     [[politicas-procedimientos/L3-politicas-procedimientos|Políticas y Procedimientos]]

  [... 9 más ...]

⚠️ Si borras o renombras este archivo, afectarías 12 referencias
```

## Parámetros

| Parámetro | Obligatorio | Tipo | Ejemplo |
|-----------|-------------|------|---------|
| `--link-antiguo` | Con actualización | string | `L3-gobernanza-ti/catastro/README` |
| `--link-nuevo` | Con actualización | string | `L3-gobernanza-ti/catastro/L3-catastro` |
| `--fix-broken` | No | flag | - |
| `--archivo` | Con cambio alias | string | `00-indice.md` |
| `--en-archivo` | Con alias | string | `Catastro de Aplicaciones` |
| `--nuevo-alias` | Con alias | string | `Catastro L3 (completo)` |
| `--file-references` | No | string | `L3-politicas-procedimientos.md` |

## Reglas de actualización de links

1. NUNCA cambiar un link sin validar destino existe
2. SIEMPRE mostrar vista previa de cambios antes de ejecutar
3. SIEMPRE pedir confirmación explícita
4. SIEMPRE validar integridad post-cambio
5. PRESERVAR alias existentes (la parte después del `|`)
6. Si hay múltiples matches, pedir cuál reemplazar

## Vista previa de cambios

Antes de ejecutar, mostrar formato:

```
VISTA PREVIA DE CAMBIOS
═══════════════════════════════════════════════════════

Archivo: 00-indice.md
Línea 47:
  ❌ [[L3-gobernanza-ti/catastro/README|Catastro de Aplicaciones]]
  ✅ [[L3-gobernanza-ti/catastro/L3-catastro|Catastro de Aplicaciones]]

Archivo: L1-portafolio-ti/L1-portafolio-ti.md
Línea 52:
  ❌ [[../../L3-gobernanza-ti/catastro/README|Catastro]]
  ✅ [[../../L3-gobernanza-ti/catastro/L3-catastro|Catastro]]

[Continuar: Sí/No]
```

## Notas de implementación

- Usar Grep para encontrar links: `\[\[.*\]\]`
- Edit tool para reemplazos
- Read tool para validación post-cambio
- Si hay errores, REVERTIR cambios (deshacer edits)
- Mantener log de cambios para auditoría
