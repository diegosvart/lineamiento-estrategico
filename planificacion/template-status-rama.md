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
```

Comandos minimos:

- `git branch --show-current`
- `git status --short --branch`
- `git log -1 --oneline`
