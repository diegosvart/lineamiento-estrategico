# Memory — operación de Codex en planning

Reglas mínimas para que Codex no vuelva a generar trabajo extra por desalineación de rama o entorno.

## Entorno válido

- Worktree exclusivo de planning:
  `C:\repos\plan-lineamiento-estrategico-2026\plan-lineamiento-estrategico-2026\.worktrees\planning-fix`
- Rama válida:
  `workspace/planning`

## Secuencia obligatoria de inicio

1. Ejecutar `git branch --show-current`
2. Ejecutar `git status`
3. Verificar que la sesión está abierta en el worktree de planning
4. Si la rama no es `workspace/planning`, detener la sesión de planning
5. Verificar sincronización con `origin/desarrollo` y `origin/workspace/planning`
6. Recién después leer `planificacion/backlog.md`

## Prohibiciones

- No usar la raíz del repo como entorno de planning si muestra otra rama activa
- No cambiar de ámbito dentro de la misma sesión
- No crear ramas `codex/...`
- No reproponer como pendiente una capacidad ya construida sin revisar primero sus archivos reales

## Capacidades ya construidas que deben reconocerse

- `/vault-task add`
- memorias de intake de tareas del vault
- capa visible `gestion-trabajo/`
- proyecto `workspace-pm`

## Criterio de salida de planning

Todo plan debe dejar tareas atómicas con:

- artefacto exacto de salida
- ubicación exacta
- dependencia explícita
- criterio de cierre observable
