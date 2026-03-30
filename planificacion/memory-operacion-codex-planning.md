# Memory — operación de Codex en planning/admin

Reglas mínimas para que Codex opere como admin + planning sin reintroducir desorden de ramas, carpetas o contexto.

## Identidad operativa

- `workspace/planning` es dueño de planning y de la administración del sistema.
- Codex recibe necesidades, clasifica, crea planes, asigna follow-ups y mantiene memoria + tablero.
- Codex no reemplaza la aprobación final del humano.

## Branching válido

- Rama base estable:
  `workspace/planning`
- Rama de trabajo para cambios nuevos:
  `feature/planning-[nombre-kebab-case]`
- Rama de trabajo para correcciones:
  `fix/planning-[nombre-kebab-case]`

## Secuencia obligatoria de inicio

1. Ejecutar `git branch --show-current`
2. Ejecutar `git status`
3. Confirmar que la carpeta abierta corresponde al frente planning
4. Si la rama actual es `workspace/planning` y habrá cambios, crear una rama hija válida del frente antes de editar
5. Si la rama no es `workspace/planning`, `feature/planning-*` o `fix/planning-*`, detener la sesión de planning
6. Verificar sincronización con `origin/desarrollo` y `origin/workspace/planning`
7. Leer `planificacion/MEMORY.md`
8. Leer `gestion-trabajo/tablero-maestro.md`
9. Recién después leer `planificacion/backlog.md`

## Prohibiciones

- No cambiar de ámbito dentro de la misma sesión
- No crear ramas `codex/...`
- No trabajar cambios a medio terminar directamente en `workspace/planning`
- No reproponer como pendiente una capacidad ya construida sin revisar primero sus archivos reales
- No aceptar como válido el patrón `workspace/planning/feature/*` o `workspace/planning/fix/*`; esa convención es incompatible con Git en este repo

## Intake oficial de planning/admin

Toda necesidad nueva entra por Codex/planning y se clasifica en:

- `bloqueante actual`
- `mejora futura`
- `cambio de contrato o entorno`

Codex debe decidir si la necesidad se convierte en:

- plan nuevo
- actualización de plan existente
- handoff a otra rama
- backlog futuro
- observación sin acción inmediata

## Capacidades ya construidas que deben reconocerse

- `/vault-task add`
- memorias de intake de tareas del vault
- capa visible `gestion-trabajo/`
- proyecto `workspace-pm`
- reporte mensual ejecutivo entregado por `workspace/dashboard`

## Criterio de salida de planning

Todo plan debe dejar tareas atómicas con:

- artefacto exacto de salida
- ubicación exacta
- dependencia explícita
- criterio de cierre observable

Toda actualización administrativa debe dejar:

- memoria técnica consistente
- tablero visible consistente
- handoff claro para la rama ejecutora o para el humano

## Regla de integración

- Toda rama `feature/planning-*` o `fix/planning-*` hace PR hacia `workspace/planning`
- Solo después del merge a `workspace/planning` se distribuye el trabajo a `desarrollo` y al resto de ramas
- Un `push` a `workspace/planning` no publica el cambio al resto de agentes por sí solo; la publicación efectiva ocurre cuando el cambio queda integrado en `desarrollo`
