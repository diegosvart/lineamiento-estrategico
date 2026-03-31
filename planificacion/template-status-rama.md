# Template — Status de rama (cierre de tarea)

Usar este bloque textual al cerrar cualquier tarea en cualquier frente.

```text
Status de rama (cierre de tarea)
- Rama actual: <salida de `git branch --show-current`>
- Estado git: <salida de `git status --short --branch`>
- Ultimo commit: <sha corto + mensaje de `git log -1 --oneline`>
- Cambios sin commit: <No | Si, listar rutas>
- Publicacion: <push realizado / pendiente>
```

Comandos minimos:

- `git branch --show-current`
- `git status --short --branch`
- `git log -1 --oneline`
