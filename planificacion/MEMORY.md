# MEMORY — planificación cross-rama

Índice mínimo para continuidad entre sesiones y ahorro de tokens.

## Leer siempre

- `planificacion/guia-admin.md`
- `planificacion/backlog.md`
- `planificacion/2026-03-26-carga-tareas-y-dashboard-horas-plan.md`
- `planificacion/2026-03-30-reporte-mensual-dashboard-y-convencion-workspace-pm-plan.md`
- `planificacion/memory-contrato-tareas-y-horas.md`
- `planificacion/memory-ciclo-vida-planes.md`
- `planificacion/memory-asignacion-flujos-por-rama.md`
- `planificacion/memory-capa-visual-obsidian.md`
- `planificacion/memory-procedimiento-sesiones.md`
- `planificacion/memory-intake-admin.md`
- `planificacion/memory-interfaces-visuales.md`

## Leer según rama

- `workspace/ms365` → `planificacion/memory-handoff-ms365.md`
- `workspace/vault` → `planificacion/memory-handoff-vault.md`
- `workspace/vault` → `planificacion/memory-flujo-intake-tareas-vault.md`
- `workspace/dashboard` → `planificacion/memory-handoff-dashboard.md`
- `workspace/planning` → `planificacion/memory-ciclo-vida-planes.md`
- todas las ramas → `gestion-trabajo/tablero-maestro.md`

## Validación rápida de arranque

- Ejecutar: `powershell -ExecutionPolicy Bypass -File .\planificacion\session-start-check.ps1 -TargetWorkspace <planning|vault|ms365|dashboard>`
- Objetivo: validar rama, scope esperado y archivos mínimos de contexto antes de actuar.


## Punto Cero Operativo (2026-03-31)

- Estado mínimo requerido para operar sin ambigüedad:
  - `workspace/planning` limpio y sincronizado con `origin/workspace/planning`
  - PR de corrección de arranque mergeado a `workspace/planning`
  - `desarrollo` actualizado con ese merge
  - worktrees `workspace/vault`, `workspace/dashboard` y `workspace/ms365` sincronizados desde `desarrollo`
- Regla de operación:
  - si el preflight falla, no se ejecutan tareas
  - si el preflight pasa, se habilita ejecución del plan del frente
## Decisiones activas

- `ms365-sync/output/*.yaml` es staging, no fuente final.
- `diario/*.md` es la fuente consolidada para HH consumidas.
- El frontend no debe reimplementar reglas de negocio de normalización.
- Toda modificación del contrato debe registrarse primero en la memoria temática correspondiente.
- `/vault-task add` es la entrevista oficial para alta manual de tareas hacia `diario/`.
- `/plan add`, `/plan update`, `/plan archive` y `/plan iterate` son las operaciones oficiales del ciclo de vida de planes.
- `workspace/planning` opera como admin + planning del sistema.
- “Eliminar plan” se resuelve como archivado, no como borrado físico.
- `gestion-trabajo/` es la capa visual visible en Obsidian para backlog, foco y planes activos.
- Toda sesión debe leer memoria técnica y luego tablero visible antes de actuar.
- Toda necesidad nueva entra primero por planning/admin.
- El estándar preferido de aislamiento por frente es `git worktree`.

## Próximo objetivo

- Migrar la operación a un modelo admin-driven con un worktree por frente y una guía humana de administración.

## Corrección operativa de Codex (2026-03-28)

- Codex planning trabaja solo en `workspace/planning`.
- El modelo oficial de trabajo de Codex es:
  - base estable: `workspace/planning`
  - cambios nuevos: `feature/planning-[slug]`
  - correcciones: `fix/planning-[slug]`
- Si una sesión de Codex muestra otra rama activa, esa sesión no se usa para planning.
- Se eliminó la rama accidental `codex/preserve-vault-local-state-20260328`; no debe repetirse el patrón de crear ramas `codex/...` en este repo.
- `workspace/planning` local fue alineada con `origin/desarrollo` mediante fast-forward a `93c63ab` antes de continuar con cambios de planning.
- El desfase con `origin/workspace/planning` ya no se interpreta como “commits extra de planning pendientes de push” sin análisis; primero se compara contra `origin/desarrollo`.
- `/vault-task add` ya existe como contrato documental y debe tratarse como capacidad construida, no como tarea pendiente de definición.
- La distribución del trabajo a las otras ramas ocurre después del merge a `workspace/planning`, no directamente desde ramas temporales de Codex.
- Toda tarea terminada y con push en su rama de ámbito debe terminar integrada en `desarrollo` para quedar visible al resto de agentes.

## Estado confirmado de migración (2026-03-30)

- Los PR #16, #17 y #18 están mergeados en GitHub el `2026-03-30`.
- El frente `workspace/dashboard` ya entregó el reporte mensual ejecutivo.
- El modelo actual sigue exponiendo una sola working tree compartida entre frentes.
- `dashboard/node_modules/` y `dashboard/dist/` aparecen como ruido local y deben quedar ignorados.

## Leer también

- `planificacion/memory-operacion-codex-planning.md`
- Implementar o refinar automatizaciones que materialicen los contratos documentados para tareas y planes.
- Consolidar la capa visual de planificación para navegación humana en Obsidian.

## ⚠️ Errores y lecciones aprendidas

### Git workflow — NO hacer push directo a `desarrollo` (2026-03-27)

El flujo correcto para Antigravity (y cualquier agente) es:
1. `git checkout desarrollo && git pull`
2. `git checkout -b feature/[nombre-kebab-case]`
3. Commit en la feature branch
4. `git push origin feature/[nombre-kebab-case]`
5. Informar URL del PR para que el PM decida el merge

**Error cometido:** Se hizo `git push origin desarrollo` directamente, saltándose el PR.  
**Regla:** Los PRs siempre apuntan a `desarrollo`. Nunca commitear directo en `desarrollo` ni en `master`.


