---
fecha: 2026-03-28
iniciativa: "Alineación entre ramas e ingreso manual de tareas"
lineamiento: "—"
estado: borrador
ejecutor: workspace/vault
---

# Plan: alineación entre ramas e ingreso manual de tareas

## Objetivo

Formalizar un flujo de trabajo obligatorio entre `workspace/planning`, `desarrollo` y las ramas ejecutoras, reduciendo decisiones locales en los agentes y habilitando como primera capacidad funcional validada el ingreso manual de tareas al vault.

## Contexto

`workspace/planning` ya definió contratos y capa visual para la planificación, mientras `workspace/vault` ya construyó parte del proyecto `workspace-pm`. La integración entre ambas líneas ocurrió correctamente en `desarrollo` mediante el PR #11 y el PR #12, por lo que el problema actual no es un grafo Git roto ni una secuencia inválida de merges.

La brecha operativa aparece porque los agentes todavía pueden iniciar sesiones en una rama incorrecta, o continuar trabajo sin haber reconsumido `desarrollo` después de que se integran cambios relevantes desde otra rama. Además, planning estaba reproponiendo como pendientes capacidades que ya existen como contrato, especialmente `/vault-task add`.

Para corregir esta situación, el primer hito funcional de este frente es validar la capacidad ya existente `puedo ingresar una tarea manualmente` y cerrar las brechas entre contrato, persistencia y handoff visible.

## Tareas atómicas

- [ ] Actualizar `AGENTS.md` para que Codex planning trabaje con base en `workspace/planning` y ramas hijas `workspace/planning/feature/*` o `workspace/planning/fix/*`.
- [ ] Actualizar `planificacion/SCOPE.md` para que el arranque de planning se detenga si la sesión no está en `workspace/planning` o en una rama hija válida del ámbito.
- [ ] Actualizar `planificacion/MEMORY.md` con la convención oficial de branching de planning y la lección aprendida sobre no crear ramas `codex/...`.
- [ ] Documentar en `planificacion/memory-operacion-codex-planning.md` la secuencia obligatoria de inicio, el modelo de ramas y la regla de integración hacia `workspace/planning`.
- [ ] Verificar `/vault-task add` contra `/vault-timesheet` y registrarlo como capacidad existente, no como contrato pendiente de creación.
- [ ] Definir en este frente el criterio de cierre para la capacidad funcional `ingreso manual de tareas`: registro válido en `diario/YYYY-MM-DD.md` o `diario/PENDIENTES.md` con confirmación final y reflejo visible si impacta un flujo activo.
- [ ] Actualizar la capa visible `gestion-trabajo/` cuando esta iniciativa pase a `listo-para-ejecutar`.

## Criterios de aceptación

- [ ] Codex no vuelve a crear ramas `codex/...` en este repositorio.
- [ ] Toda sesión de planning parte desde `workspace/planning` o una rama hija válida `workspace/planning/*`.
- [ ] Toda rama temporal de planning hace PR hacia `workspace/planning`.
- [ ] `/vault-task add` queda reconocido explícitamente como capacidad existente.
- [ ] La capacidad `ingreso manual de tareas` queda definida con entradas, validaciones, salida y criterio de cierre.

## Archivos a crear o modificar

- `AGENTS.md`
- `planificacion/SCOPE.md`
- `planificacion/MEMORY.md`
- `planificacion/memory-operacion-codex-planning.md`
- `gestion-trabajo/tablero-maestro.md`

## Decisiones ya fijadas

- La rama base canónica del agente de planificación es `workspace/planning`.
- Las ramas de trabajo válidas de Codex son `workspace/planning/feature/*` y `workspace/planning/fix/*`.
- El problema principal es operativo, no técnico.
- `/vault-task add` ya existe como contrato funcional/documental y no debe replantearse desde cero.
- La distribución a otras ramas ocurre después del merge a `workspace/planning`.

## Qué revisar antes de ejecutar

- Confirmar que `workspace/planning` está sincronizada con `desarrollo`.
- Confirmar que no existen ramas `codex/...` locales o remotas.
- Confirmar que `/vault-timesheet` sigue siendo la fuente canónica del catálogo para `/vault-task add`.

## Supuestos

- Este plan se mantiene en `workspace/planning`.
- La implementación operativa del ingreso manual de tareas seguirá ocurriendo en `workspace/vault`.
- `gestion-trabajo/` solo se ajustará cuando este frente pase de `borrador` a `listo-para-ejecutar`.
