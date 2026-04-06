# Memoria — Procedimiento transversal de sesiones

## Objetivo

Hacer que todas las ramas trabajen bajo un mismo arranque corto, con una sola fuente de foco actual y con `workspace/planning` operando como admin del sistema.

## Inicio de sesión obligatorio

Todos los agentes y workspaces deben iniciar con esta secuencia base:

1. Confirmar que la **carpeta física** corresponde al frente correcto.
2. Confirmar que la **rama activa** corresponde al frente correcto.
3. Ejecutar `git merge desarrollo` desde la rama base del ámbito.
4. Leer `planificacion/MEMORY.md`.
5. Leer `gestion-trabajo/tablero-maestro.md`.
6. Leer el `SCOPE.md` del ámbito.
7. Leer el handoff específico de la rama.
8. Recién después ejecutar el “primer acto” propio del frente.

Si la carpeta, la rama o el `SCOPE` no coinciden, la sesión debe detenerse antes de leer, ejecutar o editar cualquier artefacto.

## Cierre de sesión obligatorio

1. Resumir trabajo realizado.
2. Registrar el estado actual del flujo trabajado.
3. Dejar handoff explícito.
4. Actualizar referencia visible si el foco cambió.
5. Señalar cambios fuera de scope detectados.
6. Señalar si quedan cambios locales sin commit.
7. Señalar si el resto de frentes debe consumir cambios desde `desarrollo`.

## Cierre obligatorio por tarea (todos los agentes)

Cada vez que un agente declara una tarea como terminada, debe:

1. Crear commit del trabajo realizado (si hubo cambios).
2. Reportar estado de rama con evidencia mínima:
   - rama actual (`git branch --show-current`)
   - estado local (`git status --short --branch`)
   - relación con remoto si aplica (ahead/behind)
3. Reportar PR asociado y estado de merge.
4. Confirmar explícitamente si el cambio quedó integrado en `desarrollo`.
5. Indicar explícitamente si quedan cambios sin commit.
6. **Volver a la rama workspace base del frente** (`workspace/vault`, `workspace/planning`, etc.) — nunca quedarse en una feature branch cerrada.
7. **Borrar la feature branch** local y remota tras confirmar merge:
   - `git branch -d feature/[nombre]`
   - `git push origin --delete feature/[nombre]`

Sin este reporte, la tarea se considera `incompleta` a nivel operativo.
Sin merge a `desarrollo`, la tarea se considera `reportada` pero no `cerrada`.
Sin volver a la rama workspace base, la siguiente tarea arranca desde una rama obsoleta.

## Regla rama por tarea (todos los agentes)

- Una tarea operativa usa una sola rama temporal.
- La rama temporal no se reutiliza para tareas nuevas.
- Toda tarea debe tener `task_id` en `gestion-trabajo/tablero-maestro.md` dentro de `Control operativo por tarea`.
- El dueño del tablero es `workspace/planning`; los otros frentes reportan evidencia para actualización.

Template oficial:

- `planificacion/template-status-rama.md`

## Rol de `workspace/planning` como admin

`workspace/planning` administra el sistema y es el intake oficial de:

- nuevas necesidades
- cambios de entorno
- cambios de contrato
- dependencias entre ramas
- follow-ups surgidos desde la ejecución

El admin no reemplaza la aprobación final del humano. Su función es:

- clasificar
- ordenar
- convertir necesidades en trabajo oficial
- mantener memoria técnica
- mantener tablero visible

## Clasificación simple de necesidades

Toda necesidad nueva debe clasificarse en uno de estos tipos:

- `bloqueante actual`
- `mejora futura`
- `cambio de contrato o entorno`

Resolución:

- `bloqueante actual` → plan inmediato o handoff urgente
- `mejora futura` → backlog
- `cambio de contrato o entorno` → actualización de memoria/guía + distribución por ramas

## Regla cross-rama

Si una rama necesita algo de otra:

1. registra la necesidad en planning/admin
2. planning/admin decide el destino oficial
3. recién después se distribuye a la rama ejecutora correspondiente

No se usa el pedido directo a otra rama como mecanismo principal del sistema.

## Sincronización de frentes inactivos

Las ramas de frentes que no inician sesión regularmente se desactualizan respecto a `desarrollo`. El admin (`workspace/planning`) o el usuario deben sincronizarlas periódicamente:

```bash
git -C <ruta-worktree> fetch origin && git -C <ruta-worktree> merge origin/desarrollo
```

Si un frente acumula más de 20 commits de atraso, se considera desincronizado y debe resolverse antes de iniciar cualquier tarea.

## Estándar de carpetas y worktrees

- Un frente activo no trabaja sobre la misma carpeta física que otro frente activo.
- El estándar preferido es `git worktree`.
- El clon separado se acepta solo como excepción documentada.
- Cada IDE debe abrir solo la carpeta del frente que le corresponde.

## Rol del repo principal

El checkout principal (`C:/repos/plan-lineamiento-estrategico-2026/plan-lineamiento-estrategico-2026`) se mantiene en la rama `desarrollo` y sirve como base para los worktrees. **No se trabaja directamente ahí.** Si Obsidian o algún IDE lo abre, los cambios locales deben descartarse o commitearse como cleanup antes de que contaminen los worktrees.

## Interfaces documentales

- `/session-start` debe reportar memoria técnica + tablero visible + handoff del frente.
- `/session-end` debe dejar estado de flujo + handoff + impacto visible.
- `/workflow-board refresh` actualiza la capa visible desde el estado técnico.

## Regla operativa

Una tarea no está cerrada si solo cambió el artefacto técnico o solo cambió la vista visible. Deben quedar consistentes ambas capas cuando el flujo siga activo.
