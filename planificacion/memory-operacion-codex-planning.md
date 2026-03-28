# Memory — operación de Codex en planning

Reglas mínimas para que Codex no vuelva a generar trabajo extra por desalineación de rama o entorno.

## Branching válido

- Rama base estable:
  `workspace/planning`
- Rama de trabajo para cambios nuevos:
  `workspace/planning/feature/[nombre-kebab-case]`
- Rama de trabajo para correcciones:
  `workspace/planning/fix/[nombre-kebab-case]`

## Secuencia obligatoria de inicio

1. Ejecutar `git branch --show-current`
2. Ejecutar `git status`
3. Si la rama actual es `workspace/planning` y habrá cambios, crear una rama hija del ámbito antes de editar
4. Si la rama no es `workspace/planning` ni `workspace/planning/*`, detener la sesión de planning
5. Verificar sincronización con `origin/desarrollo` y `origin/workspace/planning`
6. Recién después leer `planificacion/backlog.md`

## Prohibiciones

- No cambiar de ámbito dentro de la misma sesión
- No crear ramas `codex/...`
- No trabajar cambios a medio terminar directamente en `workspace/planning`
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

## Regla de integración

- Toda rama `workspace/planning/feature/*` o `workspace/planning/fix/*` hace PR hacia `workspace/planning`
- Solo después del merge a `workspace/planning` se distribuye el trabajo a `desarrollo` y al resto de ramas
- Un `push` a `workspace/planning` no publica el cambio al resto de agentes por sí solo; la publicación efectiva ocurre cuando el cambio queda integrado en `desarrollo`
