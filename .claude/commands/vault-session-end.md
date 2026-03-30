---
description: Protocolo de cierre de sesión — resume trabajo, deja handoff y sincroniza el estado visible del flujo
---

Ejecuta el protocolo de cierre de sesión del vault:

1. **Contexto git**: Verifica la rama actual, revisa `git status` y detecta cambios fuera de scope.

2. **Trabajo realizado**: Resume qué flujo, plan o tarea fue trabajado y qué archivos relevantes se tocaron.

3. **Estado del flujo**: Lee `planificacion/backlog.md` y `gestion-trabajo/tablero-maestro.md` si existen para indicar en qué estado queda el flujo tras la sesión.

4. **Handoff**: Deja próximos pasos concretos para la siguiente sesión o la siguiente rama dueña.

5. **Reporte de cierre**: Entrega en formato compacto:

```
## Cierre de sesión — [fecha actual]

**Branch:** [rama actual] | **Estado del flujo:** [estado visible o técnico]

**Trabajo realizado**
- [cambio 1]
- [cambio 2]

**Handoff**
- [próxima acción concreta]
- [bloqueo o dependencia]

**Impacto visible**
- [qué debe reflejarse en tablero/canvas]

**Cambios fuera de scope**
- [si aplica]
```

Si falta `gestion-trabajo/tablero-maestro.md`, reportarlo como gap para la capa visual.
