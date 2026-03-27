# SCOPE — workspace/vault

**Rol:** Ejecutar el trabajo planificado dentro del vault Obsidian.
**IDE:** Claude Code
**Rama:** `workspace/vault` (long-lived)
**Área principal:** Todo el vault excepto `planificacion/`, `ms365-sync/`, `dashboard/`

---

## Inicio de Sesión

1. **Git**: `git checkout workspace/vault && git merge desarrollo`
   → Sincroniza cambios integrados desde otros ámbitos
2. **Abrir**: `claude` en la raíz del repo
   → Claude Code carga `CLAUDE.md` automáticamente
3. **Leer**: `CLAUDE.md §6.4` (alertas activas) + `planificacion/backlog.md`
   → Identificar si hay planes con estado `listo-para-ejecutar`
4. **Primer acto**: verificar si hay `planificacion/*.md` con estado `listo-para-ejecutar`
   → Si hay: ejecutar el plan. Si no: reportar estado del vault.

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

*Rama: `workspace/vault` — Claude Code — Última actualización: 2026-03-26*
