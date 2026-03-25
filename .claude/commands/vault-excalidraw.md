# Skill: /vault-excalidraw

## Descripción

Vincula, gestiona y valida diagramas Excalidraw dentro del vault. Genera embed syntax de Obsidian, valida que archivos existan, y mantiene referencias actualizadas.

## Cuándo usar

- Incrustar diagrama en una nota
- Renombrar diagrama y actualizar referencias
- Listar todos los diagramas vinculados en el vault
- Crear nueva estructura de diagrama para un lineamiento

## Uso: Incrustar diagrama

```
/vault-excalidraw embed --diagrama "arquitectura-ti-2026" --en-archivo "L4-infraestructura-ti/diseno-arquitectura/L4-diseno-arquitectura.md"
```

Proceso:
1. Valida que archivo `.excalidraw` existe en `/Excalidraw/arquitectura-ti-2026.excalidraw`
2. Genera embed syntax: `![[/Excalidraw/arquitectura-ti-2026.excalidraw]]`
3. Inserta al final del archivo especificado
4. Valida que insert fue exitoso (releer archivo para confirmar)
5. Reporta resultado

Salida:
```
✅ Diagrama incrustado exitosamente

📊 Diagrama: arquitectura-ti-2026.excalidraw
📄 Insertado en: L4-infraestructura-ti/diseno-arquitectura/L4-diseno-arquitectura.md
🔗 Embed syntax: ![[/Excalidraw/arquitectura-ti-2026.excalidraw]]

⚠️ Nota: Si el diagrama se abre en una nota, aparecerá renderizado.
Para verlo en el grafo, el diagrama debe tener un nombre alfanumérico valido.
```

## Uso: Listar diagramas

```
/vault-excalidraw list
```

Escanea la carpeta `/Excalidraw/` y reporta:

```
DIAGRAMAS EN EL VAULT
═══════════════════════════════════════════════════════

Total: 5 diagramas

1. 📊 5-lineamientos-plan-gobernanza
   └─ Vinculado en: 00-indice.md
   └─ Última mod: 24 Mar 2026

2. 📊 L2-estructura-organizacional
   └─ Vinculado en: L2-estructuracion-area/formalizacion-organizacional/L2-formalizacion.md
   └─ Última mod: 20 Mar 2026

3. 📊 L3-procesos-gobernanza
   └─ NO VINCULADO (huérfano)
   └─ Última mod: 18 Mar 2026

4. 📊 L5-flujo-integraciones
   └─ Vinculado en: L5-integraciones/L5-integraciones.md
   └─ Última mod: 25 Mar 2026

[... más ...]

⚠️ DIAGRAMA HUÉRFANO: L3-procesos-gobernanza (no está vinculado en ningún archivo)
```

## Uso: Validar referencias

```
/vault-excalidraw validate
```

Chequea que todos los diagramas incrustados:
- El archivo `.excalidraw` existe
- El embed syntax es correcto
- El diagrama no está vinculado a archivo borrado

Reporta:
```
VALIDACIÓN DE DIAGRAMAS
═══════════════════════════════════════════════════════

✅ 5 referencias válidas
❌ 1 referencia rota:
   - L2-estructuracion-area/README.md: ![[/Excalidraw/viejo-diagrama.excalidraw]]
     → archivo no existe

Recomendación: Eliminar o corregir referencias rotas
```

## Uso: Renombrar diagrama y actualizar referencias

```
/vault-excalidraw rename --de "viejo-nombre" --a "nuevo-nombre"
```

Proceso:
1. Valida que `viejo-nombre.excalidraw` existe
2. Valida que `nuevo-nombre.excalidraw` NO existe
3. Busca TODOS los archivos que referencian `viejo-nombre`
4. Reemplaza en cada uno: `![[/Excalidraw/viejo-nombre.excalidraw]]` → `![[/Excalidraw/nuevo-nombre.excalidraw]]`
5. Valida que reemplazos fueron exitosos

Salida:
```
✅ Diagrama renombrado y referencias actualizadas

📊 Nombre anterior: viejo-nombre.excalidraw
→ Nombre nuevo: nuevo-nombre.excalidraw

🔗 Referencias actualizadas en 3 archivos:
   - L2-estructuracion-area/formalizacion-organizacional/L2-formalizacion.md
   - 00-indice.md
   - L1-portafolio-ti/L1-portafolio-ti.md

⚠️ Nota: El archivo Excalidraw mismo debe renombrarse manualmente en Obsidian
```

## Uso: Crear estructura de diagrama para lineamiento

```
/vault-excalidraw create-for-lineamiento --lineamiento "L4-infraestructura-ti"
```

Crea plantilla de diagrama para un lineamiento nuevo:
- Nombre: `L4-[nombre-del-lineamiento].excalidraw`
- Localización: `/Excalidraw/`
- Incluye: caja de título con nombre del lineamiento, elementos placeholder

Reporta:
```
✅ Diagrama plantilla creado

📊 Archivo: /Excalidraw/L4-infraestructura-ti.excalidraw
🎨 Abierto en: Obsidian Excalidraw plugin

Próximos pasos:
1. Editar diagrama en Obsidian (haz doble-click en la nota)
2. Usar /vault-excalidraw embed para incrustarlo en [archivo]
3. Usar /vault-excalidraw validate después para confirmar referencia
```

## Parámetros

| Parámetro | Obligatorio | Tipo | Ejemplo |
|-----------|-------------|------|---------|
| `embed` | No | opción | - |
| `--diagrama` | Con embed | string | `arquitectura-ti-2026` |
| `--en-archivo` | Con embed | string | `L4-infraestructura-ti/diseno-arquitectura/L4-diseno-arquitectura.md` |
| `list` | No | opción | - |
| `validate` | No | opción | - |
| `rename` | No | opción | - |
| `--de` | Con rename | string | `viejo-nombre` |
| `--a` | Con rename | string | `nuevo-nombre` |
| `create-for-lineamiento` | No | opción | - |
| `--lineamiento` | Con create | string | `L4-infraestructura-ti` |

## Reglas Excalidraw

1. Los archivos van en `/Excalidraw/` (carpeta exclusiva)
2. Nombrar con patrón: `[L1-L5]-[descripcion].excalidraw`
3. Embed syntax: `![[/Excalidraw/nombre.excalidraw]]` (con !)
4. Los diagramas se incrustan en NOTAS, no se crean directamente como notas
5. Validar que carpeta `/Excalidraw/` está en `userIgnoreFilters` en `.obsidian/app.json`

## Notas de implementación

- Usar Glob para buscar `**/*.excalidraw` en la carpeta Excalidraw
- Usar Grep para buscar referencias: `!\[\[/Excalidraw/`
- Edit tool para actualizar referencias
- Validar sintaxis de embed después de cambios
