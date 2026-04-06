# Template — Status de rama (cierre de tarea)

Usar este bloque textual al cerrar cualquier tarea en cualquier frente.

```text
Status de rama (cierre de tarea)
- Task ID: <T-YYYY-MM-DD-XXX>
- Plan o ruta: <ruta del plan o entregable principal>
- Rama actual: <salida de `git branch --show-current`>
- Estado git: <salida de `git status --short --branch`>
- Ultimo commit: <sha corto + mensaje de `git log -1 --oneline`>
- PR: <url o pendiente>
- Merge: <mergeado | pendiente>
- Integrado en desarrollo: <si | no>
- Cambios sin commit: <No | Si, listar rutas>
- Publicacion: <push realizado / pendiente>
- Evidencia de cierre: <archivos/rutas/resultado de validacion>
- Retorno a rama base: <si, workspace/[frente] | no, motivo>
- Cleanup de feature branch: <local borrada | remota borrada | pendiente, motivo>
```

Comandos minimos:

- `git branch --show-current`
- `git status --short --branch`
- `git log -1 --oneline`

Post-cierre obligatorio (ejecutar tras confirmar merge):

- `git checkout workspace/[frente]` — volver a la rama base
- `git merge origin/desarrollo` — incorporar el trabajo recién mergeado
- `git branch -d feature/[nombre]` — borrar feature branch local
- `git push origin --delete feature/[nombre]` — borrar feature branch remota
