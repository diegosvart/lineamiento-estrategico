# MEMORY — planificación cross-rama

Índice mínimo para continuidad entre sesiones y ahorro de tokens.

## Leer siempre

- `planificacion/backlog.md`
- `planificacion/2026-03-26-carga-tareas-y-dashboard-horas-plan.md`
- `planificacion/memory-contrato-tareas-y-horas.md`

## Leer según rama

- `workspace/ms365` → `planificacion/memory-handoff-ms365.md`
- `workspace/vault` → `planificacion/memory-handoff-vault.md`
- `workspace/dashboard` → `planificacion/memory-handoff-dashboard.md`

## Decisiones activas

- `ms365-sync/output/*.yaml` es staging, no fuente final.
- `diario/*.md` es la fuente consolidada para HH consumidas.
- El frontend no debe reimplementar reglas de negocio de normalización.
- Toda modificación del contrato debe registrarse primero en la memoria temática correspondiente.

## Próximo objetivo

- Ejecutar handoff por rama para habilitar carga de tareas y visualización de HH consumidas de extremo a extremo.

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
