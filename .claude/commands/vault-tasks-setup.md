# Skill: /vault-tasks-setup

## Descripción

Integra el plugin Tasks para gestionar items ejecutables dentro del vault con due dates, estados, recurrencias y filtros avanzados. Convierte tablas markdown simples en tareas trackables.

Tasks plugin agrega checklist interactivo a Obsidian con capacidad de filtrado global.

## Prerequisito

- **Plugin requerido**: Tasks (`obsidian-tasks-plugin`)
- **Instalación**: Obsidian → Community Plugins → Search "Tasks" → Install & Enable
- **Documentación**: https://publish.obsidian.md/tasks/

## Cuándo usar

- Crear tareas desde tablas markdown del plan
- Filtrar tareas por responsable/vencimiento/estado
- Generar vista global de tareas vencidas o próximas
- Tracking de tareas con due dates
- Crear tareas recurrentes (ej: weekly check-in)

## Uso: Convertir tabla a tareas

```
/vault-tasks-setup --convertir-tabla "L1-portafolio-ti.md"
```

Analiza tabla markdown y la convierte a formato Tasks:

```markdown
ANTES (Tabla):
| ID | Tarea | Responsable | hh | Estado |
|---|---|---|---|---|
| 4.01 | Completar Fichas de Proyecto | PM + JTI | 6 | Pendiente |

DESPUÉS (Tasks format):
- [ ] [4.01] Completar Fichas de Proyecto @PM #Proyecto 🕐 6h
  - [ ] Subtarea: Ficha para normativos
  - [ ] Subtarea: Ficha para estratégicos

- [ ] [4.02] Gestionar aprobación Sponsors @PM #Aprobación 🕐 2h
```

Formato Tasks:
- `[ ]` — Unchecked (pendiente)
- `[x]` — Checked (completado)
- `@responsable` — Asignado a responsable
- `#etiqueta` — Tag para filtrado
- `🕐 Xh` — Horas estimadas
- `⏰ YYYY-MM-DD` — Due date

## Uso: Crear vista global de tareas vencidas

```
/vault-tasks-setup --crear-vista "Tareas Vencidas"
```

Genera bloque que lista TODAS las tareas con deadline pasado:

```markdown
\`\`\`tasks
not done
due before today
sort by due date
\`\`\`

Resultado:
═══════════════════════════════════════════════════════
⚠️ TAREAS VENCIDAS

❌ [4.09] Activar Gateway de Desvio — @PM — Vencida hace 5 días
❌ [3.19] Documentar diagramas de infraestructura — @ARI — Vencida hace 2 días
❌ [4.11] Ejecutar cierre formal de hallazgos — @PM — Vencida hace 1 día

Total: 3 tareas vencidas
═══════════════════════════════════════════════════════
```

## Uso: Vista de tareas por responsable

```
/vault-tasks-setup --crear-vista "Mis Tareas" --asignado-a "PM"
```

Filtra y agrupa tareas de un responsable específico:

```markdown
\`\`\`tasks
assigned to PM
not done
sort by due date
\`\`\`

Resultado:
═══════════════════════════════════════════════════════
TAREAS ASIGNADAS A PM

🔴 CRÍTICAS (Vencidas):
  - [4.09] Activar Gateway D-30 (Vencida: 25 Mar)
  - [4.11] Cierre formal hallazgos (Vencida: 25 Mar)

🟠 PRÓXIMAS (< 7 días):
  - [4.01] Fichas de Proyecto (Vence: 30 Mar)
  - [4.03] Crear entornos digitales (Vence: 02 Abr)

🟢 NORMAL (> 7 días):
  - [4.05] Gestionar presupuesto (Vence: 15 May)

Total tareas: 8 (2 críticas, 2 próximas, 4 normal)
═══════════════════════════════════════════════════════
```

## Uso: Crear tarea nueva con due date

```
/vault-tasks-setup --crear-tarea --nombre "4.20 Nueva tarea crítica" --asignado-a "JTI" --vence "2026-04-15" --horas "8"
```

Crea línea de tarea formateada:

```markdown
- [ ] [4.20] Nueva tarea crítica @JTI #Gobernanza 🕐 8h ⏰ 2026-04-15
```

Inserta automáticamente en el archivo especificado.

## Uso: Crear filtro personalizado

```
/vault-tasks-setup --crear-filtro "Proyectos Normativosatos" --criterio "tag includes 'Normativa' and not done and due before 2026-07-01"
```

Crea bloque con query personalizada:

```markdown
\`\`\`tasks
tag includes Normativa
not done
due before 2026-07-01
sort by due date
\`\`\`

Resultado:
═══════════════════════════════════════════════════════
📋 PROYECTOS NORMATIVOS ACTIVOS

- [ ] [Ley 19.628] DPD + procedimientos — @PM — Vence: 2026-06-26
- [ ] [Ley 21.663] Programa NIST CSF — @JTI — Vence: 2026-06-30
- [ ] [Deloitte 2026] Cierre 9 hallazgos — @PM — Vence: 2026-05-15

Total: 3 proyectos
═══════════════════════════════════════════════════════
```

## Uso: Generar resumen de tasks

```
/vault-tasks-setup --resumen
```

Reporte consolidado del estado de todas las tareas:

```
RESUMEN DE TAREAS EN EL VAULT
═══════════════════════════════════════════════════════

Total tareas: 47
├─ No realizadas: 35 (74%)
└─ Completadas: 12 (26%)

Por estado:
├─ Críticas/Vencidas: 3
├─ Próximas (< 7 días): 8
├─ Normal (≥ 7 días): 24

Por responsable:
├─ PM: 18 tareas (11 pendientes, 7 completadas)
├─ JTI: 14 tareas (10 pendientes, 4 completadas)
├─ ARI: 9 tareas (8 pendientes, 1 completada)
├─ SPT: 4 tareas (4 pendientes, 0 completadas)
└─ SIN ASIGNAR: 2 tareas

Tareas vencidas: 3 (requieren atención)
Tareas próximas a vencer: 8

Próximas vacencias importantes:
  - 2026-03-30: [4.01] Fichas de Proyecto
  - 2026-04-02: [4.03] Crear entornos digitales
  - 2026-04-15: [4.05] Gestionar presupuesto

═══════════════════════════════════════════════════════
```

## Formato Tasks Markdown

Sintaxis completa para una tarea:

```markdown
- [x] Tarea completada
- [ ] Tarea pendiente @asignado #etiqueta 🕐 Nhh ⏰ YYYY-MM-DD (recurrence)
```

| Componente | Símbolo | Ejemplo | Significado |
|-----------|---------|---------|-------------|
| Estado | `[ ]` o `[x]` | `[x]` | Checked (completa) |
| ID/Nombre | Texto | `[4.01]` | ID de tarea |
| Descripción | Texto | `Fichas de Proyecto` | Qué se debe hacer |
| Asignado | `@` | `@PM` | Responsable |
| Etiqueta | `#` | `#Gobernanza` | Categoría/tipo |
| Horas | `🕐` | `🕐 6h` | Estimación de esfuerzo |
| Due Date | `⏰` | `⏰ 2026-04-15` | Fecha vencimiento (YYYY-MM-DD) |
| Recurrencia | `(recurrence)` | `(every Monday)` | Tarea recurrente |

## Queries Tasks disponibles

| Query | Efecto |
|-------|--------|
| `not done` | Solo tareas no completadas |
| `done` | Solo tareas completadas |
| `due today` | Vence hoy |
| `due before today` | Vencidas |
| `due this week` | Vence en los próximos 7 días |
| `assigned to PM` | Asignadas a PM |
| `tag includes Gobernanza` | Con etiqueta Gobernanza |
| `sort by due date` | Ordenar por fecha vencimiento |
| `group by assigned to` | Agrupar por responsable |

## Parámetros

| Parámetro | Tipo | Ejemplo | Obligatorio |
|-----------|------|---------|-------------|
| `--convertir-tabla` | string | `"L1-portafolio-ti.md"` | Sí (uno de) |
| `--crear-vista` | string | `"Tareas Vencidas"` | Sí (uno de) |
| `--asignado-a` | string | `"PM"` | Con --crear-vista |
| `--crear-tarea` | flag | - | Sí (uno de) |
| `--nombre` | string | `"[4.20] Nueva tarea"` | Con --crear-tarea |
| `--vence` | date | `"2026-04-15"` | Con --crear-tarea |
| `--horas` | number | `"8"` | Con --crear-tarea |
| `--crear-filtro` | string | `"Normativos"` | Sí (uno de) |
| `--criterio` | text | `"tag includes X"` | Con --crear-filtro |
| `--resumen` | flag | - | Sí (uno de) |

## Ubicación de vistas Tasks

Generalmente insertar en:
- `00-indice.md` — Vista global de tareas críticas
- `L1-portafolio-ti.md` — Vista de tareas de L1
- `L3-gobernanza-ti.md` — Vista de tareas de L3
- Archivos específicos — Vista de sus subtareas

Ejemplo estructura:

```markdown
# L1 — Portafolio TI

...

## Tareas Activas

\`\`\`tasks
assigned to PM
not done
sort by due date
\`\`\`

## Tareas Próximas a Vencer

\`\`\`tasks
not done
due before 2026-04-30
sort by due date
\`\`\`

## Mi Resumen

[resumen de progreso]
```

## Instalación de Tasks

Si aún no está instalado:
1. Obsidian → Settings → Community Plugins
2. Search: "Tasks"
3. Install + Enable (por "lonni" — el popular)
4. Reload Obsidian
5. Aparecerá logo de checkmark en sidebar

## Integración con Microsoft Planner

- Tasks plugin NO sincroniza automáticamente con Planner
- Se recomienda mantener ambos en paralelo:
  - Planner: ejecución y tracking operativo
  - Tasks: vista de contexto dentro del vault
- Actualizar uno y documentar en el otro

## Mejores prácticas

1. **Nombrar IDs claros**: `[4.01]` sigue patrón del proyecto
2. **Asignar siempre**: Cada tarea debe tener `@responsable`
3. **Etiquetartar**: Usar tags para agrupar por tipo/lineamiento
4. **Estimar horas**: Agregar `🕐` para tracking de esfuerzo
5. **Due dates realistas**: No sobrecargar una fecha
6. **Revisar regularmente**: `/vault-tasks-setup --resumen` semanalmente

## Notas de implementación

- No usar emoji de clock alternativos (usar `⏰` estándar)
- Dates en formato ISO (YYYY-MM-DD) para compatibilidad
- Respetar espacios en sintaxis Tasks
- Las queries se renderizan en vivo (no requieren actualización manual)
