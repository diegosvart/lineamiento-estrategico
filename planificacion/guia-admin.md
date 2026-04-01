---
aliases:
  - Guía Admin
  - Guía de Administración del Workspace
tags:
  - activo
---

# Guía Admin 

Documento vivo para operar el sistema sin releer toda la memoria técnica en cada sesión.

## Qué hace el admin

`workspace/planning` actúa como admin del sistema y se encarga de:

- recibir necesidades nuevas
- clasificar el trabajo
- crear o actualizar planes
- asignar follow-ups a otras ramas
- recibir entregas de ejecutores
- separar entregable real de ruido del entorno
- mantener memoria técnica y tablero visible

## Qué haces tú

Tu rol es de administrador visible y aprobador final:

- informar cambios de prioridad, entorno o reglas
- revisar el tablero y esta guía
- decidir si algo va ahora o al backlog
- aprobar o no aprobar merges
- pedir al admin que transforme una necesidad en trabajo oficial

## Cómo ingresar una necesidad nueva

Describe la necesidad en lenguaje simple y, si puedes, indica si se trata de:

- un bloqueo actual
- una mejora futura
- un cambio de contrato o entorno

No necesitas traducirla al formato técnico. El admin hace esa conversión.

## Clasificación rápida

| Tipo | Cuándo usarlo | Resultado normal |
|------|---------------|------------------|
| `bloqueante actual` | algo impide continuar trabajo ya activo | plan inmediato o handoff urgente |
| `mejora futura` | mejora deseable sin urgencia inmediata | backlog |
| `cambio de contrato o entorno` | cambian reglas, carpetas, ramas, configuración o estándares | actualización de memoria/guía + distribución |

## Qué revisar al inicio del día

1. `gestion-trabajo/tablero-maestro.md`
2. `planificacion/MEMORY.md`
3. esta guía
4. el handoff específico si hay un frente activo que requiera seguimiento

## Qué hacer cuando un ejecutor entrega

1. leer el resumen del ejecutor
2. revisar si el admin marcó el trabajo como:
   - listo para merge
   - requiere ajuste
   - genera follow-up
3. decidir si apruebas o no el merge
4. si el trabajo queda aceptado, esperar que el admin actualice tablero y memoria

## Cómo decidir si algo va a backlog, plan, handoff o merge

| Destino | Cuándo corresponde |
|---------|--------------------|
| `backlog` | no bloquea y puede esperar |
| `plan` | necesita alcance, entregables y criterios de aceptación |
| `handoff` | el trabajo ya está definido y solo debe ejecutarlo una rama |
| `merge` | el trabajo ya fue implementado y solo falta tu aprobación final |

## Cómo cambiar una regla de operación

1. informa el cambio al admin
2. el admin evalúa el impacto
3. el admin actualiza esta guía
4. el admin actualiza memoria técnica y `SCOPE` afectados
5. el admin distribuye follow-ups si otras ramas deben adaptarse

## Memorias que se actualizan cuando cambia el sistema

- `planificacion/MEMORY.md`
- `planificacion/memory-procedimiento-sesiones.md`
- `planificacion/memory-asignacion-flujos-por-rama.md`
- `planificacion/memory-operacion-codex-planning.md`
- `planificacion/memory-intake-admin.md`
- `planificacion/SCOPE.md`
- `gestion-trabajo/tablero-maestro.md` si cambia el foco visible

## Estándar vigente de operación

- `workspace/planning` es admin + planning
- `workspace/vault`, `workspace/dashboard` y `workspace/ms365` son ejecutores especializados
- toda necesidad nueva entra primero por admin
- **cada frente trabaja en su propia carpeta física aislada**
- el estándar obligatorio de aislamiento es `git worktree`
- el humano conserva la decisión final visible
- `gestion-trabajo/tablero-maestro.md` es la fuente única de control operativo por tarea
- cada tarea usa una rama temporal propia y no se reutiliza al cierre
- una tarea solo se considera cerrada si su PR fue mergeado y quedó integrado en `desarrollo`

## Gestión de Frentes (Worktrees)

Para mantener la higiene del workspace y evitar ruido entre agentes:

1. **Setup**: Usa `.\planificacion\scripts\setup-worktrees.ps1` para crear las carpetas físicas.
2. **Ubicación**: Se recomienda crear los frentes como carpetas hermanas del repo original.
3. **Acceso**: Cada instancia de IDE (Cursor, VS Code, Claude Code) debe abrir **solo** la carpeta del frente correspondiente.
4. **Sincronización**: Los cambios se comparten vía `git push` a su rama de ámbito y posterior integración en `desarrollo`. Cada frente debe hacer `git merge desarrollo` al inicio de su sesión.
