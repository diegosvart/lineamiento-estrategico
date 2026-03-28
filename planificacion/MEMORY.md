# MEMORY — planificación cross-rama

Índice mínimo para continuidad entre sesiones y ahorro de tokens.

## Leer siempre

- `planificacion/backlog.md`
- `planificacion/2026-03-26-carga-tareas-y-dashboard-horas-plan.md`
- `planificacion/memory-contrato-tareas-y-horas.md`
- `planificacion/memory-ciclo-vida-planes.md`
- `planificacion/memory-asignacion-flujos-por-rama.md`
- `planificacion/memory-capa-visual-obsidian.md`
- `planificacion/memory-procedimiento-sesiones.md`
- `planificacion/memory-interfaces-visuales.md`

## Leer según rama

- `workspace/ms365` → `planificacion/memory-handoff-ms365.md`
- `workspace/vault` → `planificacion/memory-handoff-vault.md`
- `workspace/vault` → `planificacion/memory-flujo-intake-tareas-vault.md`
- `workspace/dashboard` → `planificacion/memory-handoff-dashboard.md`
- `workspace/planning` → `planificacion/memory-ciclo-vida-planes.md`
- todas las ramas → `gestion-trabajo/tablero-maestro.md`

## Decisiones activas

- `ms365-sync/output/*.yaml` es staging, no fuente final.
- `diario/*.md` es la fuente consolidada para HH consumidas.
- El frontend no debe reimplementar reglas de negocio de normalización.
- Toda modificación del contrato debe registrarse primero en la memoria temática correspondiente.
- `/vault-task add` es la entrevista oficial para alta manual de tareas hacia `diario/`.
- `/plan add`, `/plan update`, `/plan archive` y `/plan iterate` son las operaciones oficiales del ciclo de vida de planes.
- “Eliminar plan” se resuelve como archivado, no como borrado físico.
- `gestion-trabajo/` es la capa visual visible en Obsidian para backlog, foco y planes activos.
- Toda sesión debe leer memoria técnica y luego tablero visible antes de actuar.

## Próximo objetivo

- Ejecutar handoff por rama para habilitar carga de tareas y visualización de HH consumidas de extremo a extremo.

## Corrección operativa de Codex (2026-03-28)

- Codex planning trabaja solo en `workspace/planning`.
- El modelo oficial de trabajo de Codex es:
  - base estable: `workspace/planning`
  - cambios nuevos: `workspace/planning/feature/[slug]`
  - correcciones: `workspace/planning/fix/[slug]`
- Si una sesión de Codex muestra otra rama activa, esa sesión no se usa para planning.
- Se eliminó la rama accidental `codex/preserve-vault-local-state-20260328`; no debe repetirse el patrón de crear ramas `codex/...` en este repo.
- `workspace/planning` local fue alineada con `origin/desarrollo` mediante fast-forward a `93c63ab` antes de continuar con cambios de planning.
- El desfase con `origin/workspace/planning` ya no se interpreta como “commits extra de planning pendientes de push” sin análisis; primero se compara contra `origin/desarrollo`.
- `/vault-task add` ya existe como contrato documental y debe tratarse como capacidad construida, no como tarea pendiente de definición.
- La distribución del trabajo a las otras ramas ocurre después del merge a `workspace/planning`, no directamente desde ramas temporales de Codex.

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
