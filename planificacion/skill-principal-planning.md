# Skill principal — workspace/planning

## Objetivo

Operar `workspace/planning` como admin del sistema: intake unico, ciclo de vida de planes y sincronizacion entre memoria tecnica y capa visible.

## Alcance

- Clasificar necesidades nuevas (`bloqueante actual`, `mejora futura`, `cambio de contrato o entorno`).
- Ejecutar operaciones `/plan add`, `/plan update`, `/plan archive`, `/plan iterate`.
- Mantener consistentes:
  - `planificacion/*.md`
  - `gestion-trabajo/*.md` y planes visibles
  - handoffs por rama
- Asignar trabajo a `workspace/vault`, `workspace/dashboard` y `workspace/ms365` con entregables claros.

## No alcance

- No ejecutar trabajo operativo de otros frentes.
- No cargar HH en `diario/` desde planning.
- No reimplementar procesos que ya existen como contrato.

## Entradas

- `planificacion/MEMORY.md`
- `gestion-trabajo/tablero-maestro.md`
- `planificacion/SCOPE.md`
- handoff segun rama objetivo

## Salidas

- Planes listos para ejecutar con criterios de aceptacion observables.
- Handoffs actualizados por rama.
- Capa visible sincronizada con el estado tecnico.

## Checklist minimo

- [ ] Rama valida (`workspace/planning`, `feature/planning-*` o `fix/planning-*`)
- [ ] Preflight ejecutado y en verde
- [ ] Memoria + tablero + scope + handoff leidos
- [ ] Plan/handoff actualizado con entregables y criterio de cierre
- [ ] Capa visible actualizada si cambia foco/estado
