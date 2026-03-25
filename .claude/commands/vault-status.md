# Skill: /vault-status

## Descripción

Gestiona el sistema de 5 estados del proyecto: visualiza estado actual, actualiza estados, y genera resumen del progreso del plan.

## Estados válidos

| Estado | Color | Significado |
|--------|-------|-------------|
| `completado` | 🟢 Verde | Fase finalizada, cierre auditado |
| `activo` | 🔵 Azul | En ejecución actualmente |
| `en-definicion` | 🟠 Naranja | Diseño/planificación en progreso |
| `pendiente` | ⚫ Gris | A iniciar, sin avance |
| `backlog` | 🟣 Violeta | En cola, no priorizado |

## Uso: Ver estado actual

```
/vault-status view
```

Genera reporte de estado de todos los lineamientos y subcategorías:

```
═══════════════════════════════════════════════════════
PLAN GOBERNANZA TI 2026 — ESTADO DEL PROGRESO
═══════════════════════════════════════════════════════

LINEAMIENTOS:
🟠 L1 Portafolio TI — en-definicion (9/12 proyectos activos)
🟠 L2 Estructuracion Area — en-definicion (2/6 subcategorías)
🔵 L3 Gobernanza TI — activo (4/5 completadas)
🔵 L4 Infraestructura TI — activo (2/6 completadas)
🟠 L5 Integraciones TI — en-definicion

RESUMEN:
├─ Completado:     2 líneas (13%)
├─ Activo:         2 líneas (27%)
├─ En-definición:  3 líneas (40%)
├─ Pendiente:      2 líneas (20%)
└─ Backlog:        0 líneas (0%)

PROGRESO GENERAL: [████████░░░░░░░░░░░░] 42% → Fase 2 de 5

Próxima revisión: [gateway/hito próximo]
═══════════════════════════════════════════════════════
```

## Uso: Cambiar estado de un archivo

```
/vault-status update --archivo "L3-gobernanza-ti/politicas-procedimientos/L3-politica-seguridad" --nuevo-estado "completado"
```

Proceso:
1. Valida que archivo existe
2. Valida que nuevo-estado es uno de los 5 válidos
3. Lee archivo y localiza tag de estado en YAML
4. Reemplaza tag anterior por nuevo tag
5. Actualiza timestamp "Última actualización"
6. Reporta cambio realizado

Salida:
```
✅ Estado actualizado

📄 Archivo: L3-gobernanza-ti/politicas-procedimientos/L3-politica-seguridad.md
🏷️ Estado anterior: en-definicion
→ Estado nuevo: completado
⏰ Última actualización: 25 Mar 2026

La próxima vez que ejecutes /vault-status view, aparecerá con color 🟢
```

## Uso: Ver estado de una carpeta

```
/vault-status folder "L3-gobernanza-ti"
```

Analiza TODOS los archivos en esa carpeta y genera resumen:

```
CARPETA: L3-gobernanza-ti/
├─ L3-gobernanza-ti.md: 🟠 en-definicion
├─ infraestructura-digital/
│  ├─ L3-infraestructura-digital.md: 🟠 en-definicion
│  ├─ (3 más en en-definicion)
├─ catastro-aplicaciones/
│  ├─ L3-catastro-aplicaciones.md: 🔵 activo
│  └─ (2 más en en-definicion)
├─ diagnostico-normativo/
│  ├─ L3-diagnostico-normativo.md: 🟠 en-definicion
└─ politicas-procedimientos/
   └─ (5 archivos: 2 en-definicion, 1 activo)

TOTAL EN CARPETA:
├─ Completado:    0 (0%)
├─ Activo:        1 (8%)
├─ En-definición: 17 (77%)
├─ Pendiente:     2 (15%)
└─ Backlog:       0 (0%)

Progreso: [███░░░░░░░░░░░░░░░░░░░░] 13%
```

## Uso: Validar tags de estado

```
/vault-status validate
```

Escanea TODOS los archivos del vault y reporta:
- Archivos con tag de estado válido: ✅
- Archivos SIN tag de estado: ⚠️
- Archivos con MÚLTIPLES tags de estado: ❌
- Archivos con tag INVÁLIDO (no es uno de los 5): ❌

```
VALIDACIÓN DE ESTADOS
═══════════════════════════════════════════════════════

✅ 127 archivos con tag válido
⚠️ 3 archivos sin tag de estado:
   - 00-contexto/definicion-estados.md (config)
   - docs/...
❌ 0 archivos con tags inválidos

Recomendación: Agregar tags de estado a los 3 archivos sin tag
usando /vault-status update --archivo [archivo] --nuevo-estado [estado]
```

## Parámetros

| Parámetro | Obligatorio | Tipo | Ejemplo |
|-----------|-------------|------|---------|
| `view` | No (default) | opción | - |
| `--archivo` | Con update | string | `L3-gobernanza-ti/politicas/L3-politica.md` |
| `--nuevo-estado` | Con update | enum | `completado\|activo\|en-definicion\|pendiente\|backlog` |
| `folder` | No | string | `L3-gobernanza-ti` |
| `validate` | No | opción | - |

## Reglas de validación de estado

1. Un archivo debe tener EXACTAMENTE uno de los 5 estados
2. El tag va en el YAML frontmatter, sección `tags:`
3. Archivos de config pueden estar sin estado (van en userIgnoreFilters)
4. Los lineamientos (L1-L5) heredan estado del promedio de sus subcategorías

## Generación de resumen visual

El skill debe generar:
- **Porcentaje de completitud**: Total completado / Total * 100
- **Barra de progreso**: Caracteres `█` llenos y `░` vacíos
- **Gateway próximo**: Referencia al siguiente hito (G1-G5)
- **Cambios desde última auditoría**: Diferencial de estado

## Implementación de cambios de estado

1. Leer archivo con Read tool
2. Ubicar línea que comienza con `  - en-definicion` (u otro estado)
3. Reemplazar con Edit tool: `  - nuevo-estado`
4. Actualizar timestamp: `- Última actualización: [fecha actual]`
5. Reportar cambio

## Notas

- Los archivos filtrados en userIgnoreFilters pueden NO tener tag de estado
- El "estado" del grafo en Juggl se refleja automáticamente via los tags
- El porcentaje de progreso es informativo, no vinculante
- Usar /vault-audit para validación más profunda
