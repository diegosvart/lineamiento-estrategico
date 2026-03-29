---
description: Protocolo de inicio de sesión — sincroniza git, lee contexto y reporta estado del vault en < 1 pantalla
---

Ejecuta el protocolo de inicio de sesión del vault:

1. **Git sync**: Ejecuta los siguientes pasos en orden:
   1. `git branch --show-current` — verificar rama. Si no es `workspace/vault`, cambiar con `git checkout workspace/vault` antes de continuar.
   2. `git fetch origin` — traer cambios remotos sin modificar el working tree.
   3. `git merge origin/desarrollo` — incorporar cambios integrados por otros IDEs desde origin. Si hay conflictos, reportarlos como bloqueante antes de continuar.
   4. `git status` — verificar cambios pendientes en el working tree.
   5. `git log --oneline -3` — revisar últimos commits para entender qué cambió.

2. **Contexto estratégico**: Lee `proyectos/plan-gobernanza-ti/00-contexto/contexto-estrategico.md` para entender el estado actual del proyecto primario.

3. **Memoria y foco visible**: Lee `planificacion/MEMORY.md` y `gestion-trabajo/tablero-maestro.md` si existen. Si alguno falta, repórtalo como gap operativo.

4. **Planes listos para ejecutar**: Lee `planificacion/backlog.md` (si existe) y busca iniciativas con estado `listo-para-ejecutar`. Si el archivo no existe, infórmalo como gap.

5. **Reporte de sesión**: Entrega en formato compacto (máx 1 pantalla):

```
## Sesión iniciada — [fecha actual]

**Branch:** [rama actual] | **Cambios pendientes:** [N archivos modificados / limpio]

**Planes listos para ejecutar:**
- [nombre plan] — [descripción breve]
  (o "Sin planes listos para ejecutar")

**Foco visible del tablero:**
- [flujo o plan activo]
- [siguiente acción sugerida]

**Estado proyecto primario (Plan Gobernanza TI):**
- Gateway activo: [G1-G5] — [fecha target]
- Próximo hito: [descripción]
- Alertas activas: [N alertas o "ninguna"]

**Siguiente acción recomendada:**
[UNA acción concreta: quién hace qué, qué se desbloquea]
```

Si algún archivo crítico no existe (`contexto-estrategico.md`, `backlog.md`, `gestion-trabajo/tablero-maestro.md`), marcarlo como gap y preguntar si crear.
