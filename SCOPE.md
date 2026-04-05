# SCOPE — workspace/vault

> Este SCOPE aplica solo a `workspace/vault`.
> Si la rama activa es otro frente, usar su SCOPE canónico:
> - `workspace/planning` → `planificacion/SCOPE.md`
> - `workspace/ms365` → `ms365-sync/SCOPE.md`
> - `workspace/dashboard` → `dashboard/SCOPE.md`

**Rol:** Ejecutar el trabajo planificado dentro del vault Obsidian.
**IDE:** Claude Code
**Rama:** `workspace/vault` (long-lived)
**Área principal:** Todo el vault excepto `planificacion/`, `ms365-sync/`, `dashboard/`

---

## Inicio de Sesión

1. **Git**: verificar rama actual y situarse explícitamente en `workspace/vault`
   → Si no estás en `workspace/vault`, cambiar a esa rama antes de leer o editar nada
2. **Git sync**: `git checkout workspace/vault && git fetch origin && git merge origin/desarrollo`
   → Sincroniza cambios integrados desde otros ámbitos
3. **Abrir**: `claude` en la raíz del repo
   → Claude Code carga `CLAUDE.md` automáticamente
4. **Leer**: `CLAUDE.md §6.4` (alertas activas) + `planificacion/backlog.md`
   → Identificar si hay planes con estado `listo-para-ejecutar`
5. **Primer acto**: verificar si hay `planificacion/*.md` con estado `listo-para-ejecutar`
   → Si hay: ejecutar el plan. Si no: reportar estado del vault.

**Regla de seguridad:** si la rama actual no coincide con este `SCOPE`, detener el trabajo y corregir la rama antes de continuar.

---

## Capacidades

- Leer planes de `workspace/planning` y ejecutar las tareas listadas
- Crear y actualizar notas en `proyectos/` siguiendo convenciones Obsidian
- Gestionar YAML frontmatter y wikilinks con sintaxis estricta
- Mantener índices (`00-indice.md`) actualizados tras cambios
- Ejecutar los skills disponibles en `.claude/commands/`
- Crear daily notes en `diario/` con schema YAML de timesheet
- Detectar y alertar sobre las 8 señales de riesgo del vault (ver CLAUDE.md §6.4)
- Generar reportes de estado por iniciativa o lineamiento
- Crear `feature/*` branches para trabajo puntual, siempre desde esta rama
- Aplicar regla obligatoria: una rama temporal por tarea y no reutilizar ramas cerradas
- Hacer PR a `desarrollo` cuando el trabajo esté listo

---

## Protocolo de Entrada (lee de)

| Fuente | Ruta | Condición |
|--------|------|-----------|
| workspace/planning | `planificacion/*.md` | estado: `listo-para-ejecutar` |
| workspace/ms365 | `ms365-sync/output/*.yaml` | tras sync exitosa |

## Protocolo de Salida (escribe a)

| Destino | Ruta |
|---------|------|
| Vault principal | `proyectos/`, `diario/` |
| Configuración | `.claude/`, `CLAUDE.md` |
| Índices | `*/00-indice.md` |

---

## Estructura de Áreas

```
proyectos/                              ← Proyectos activos (6 proyectos)
  plan-gobernanza-ti/                   ← Proyecto principal
  cash-flow/ sitrack/ activo-fijo/      ← Proyectos pendientes
  gestion-documentos/ seguros-siniestros/
diario/                                 ← Daily notes + timesheet
  YYYY-MM-DD.md                         ← Una por día (schema YAML)
  RESUMEN-HORAS.md                      ← Dashboard Dataview
.claude/commands/                       ← 13+ skills de Claude Code
```

---

## Convenciones Críticas

- Wikilinks: `[[ruta/archivo|alias]]` — nunca a carpetas, sin espacios en pipes
- YAML frontmatter obligatorio: `aliases`, `tags` (un único tag de estado)
- Tags válidos: `completado` | `activo` | `en-definicion` | `pendiente` | `backlog`
- Siempre actualizar `00-indice.md` del proyecto tras crear/mover notas
- Marcar secciones pendientes: `> ⚠️ PENDIENTE: [descripción]`

---

## Workflow Git (desde este ámbito)

```bash
# Trabajo puntual:
git checkout workspace/vault
git checkout -b feature/[nombre]
# ... cambios ...
git commit -m "tipo: descripción"
git push origin feature/[nombre]
# PR: feature/[nombre] → desarrollo
# Cierre: no reutilizar la rama para una tarea nueva

# Recibir cambios integrados:
git checkout workspace/vault
git merge desarrollo
```

---

## Coordinación con Otros Ámbitos

| Ámbito | SCOPE | Interacción |
|--------|-------|-------------|
| workspace/planning | `planificacion/SCOPE.md` | Lee planes, ejecuta tareas |
| workspace/ms365 | `ms365-sync/SCOPE.md` | Consume output YAML de sync |
| workspace/dashboard | `dashboard/SCOPE.md` | Provee datos (vault es la fuente) |

---

## Ownership de Archivos Compartidos

Archivos que más de una rama podría querer editar. **Solo el dueño modifica estructuralmente.** Los demás pueden hacer append (si tiene `merge=union` en `.gitattributes`) o solicitar cambio vía planning intake.

| Archivo | Dueño | Otros pueden | Merge driver |
|---------|-------|-------------|--------------|
| `CLAUDE.md` | `workspace/vault` | Solo lectura | Manual |
| `SCOPE.md` (este archivo) | `workspace/vault` | Solo lectura | Manual |
| `00-dashboard.md` | `workspace/vault` | Solo lectura | Manual |
| `planificacion/backlog.md` | `workspace/planning` | Solo lectura | Manual |
| `gestion-trabajo/tablero-maestro.md` | `workspace/planning` | Solo lectura | Manual |
| `diario/**/*.md` | `workspace/vault` (estructura) | Append de timesheet entries | `merge=union` |
| `diario/RESUMEN-HORAS.md` | `workspace/vault` | — | `merge=union` |
| `ms365-sync/output/*.yaml` | `workspace/ms365` | Solo lectura | `merge=union` |
| `planificacion/SCOPE.md` | `workspace/planning` | Solo lectura | Manual |
| `ms365-sync/SCOPE.md` | `workspace/ms365` | Solo lectura | Manual |
| `dashboard/SCOPE.md` | `workspace/dashboard` | Solo lectura | Manual |

**Regla:** Si necesitas modificar un archivo que no te pertenece, crea un intake en `planificacion/backlog.md` para que `workspace/planning` lo delegue al dueño.

---

*Rama: `workspace/vault` — Claude Code — Última actualización: 2026-04-04*
