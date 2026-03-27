---
description: Protocolo de inicio de sesión — sincroniza git, lee contexto y reporta estado del vault en < 1 pantalla
---

Ejecuta el protocolo de inicio de sesión del vault:

1. **Git sync**: Verifica la rama actual con `git branch --show-current`. Si no es `workspace/vault`, infórmalo. Ejecuta `git status` para ver cambios pendientes y revisa los últimos 3 commits con `git log --oneline -3`.

2. **Contexto estratégico**: Lee `proyectos/plan-gobernanza-ti/00-contexto/contexto-estrategico.md` para entender el estado actual del proyecto primario.

3. **Planes listos para ejecutar**: Lee `planificacion/backlog.md` (si existe) y busca iniciativas con estado `listo-para-ejecutar`. Si el archivo no existe, infórmalo como gap.

4. **Reporte de sesión**: Entrega en formato compacto (máx 1 pantalla):

```
## Sesión iniciada — [fecha actual]

**Branch:** [rama actual] | **Cambios pendientes:** [N archivos modificados / limpio]

**Planes listos para ejecutar:**
- [nombre plan] — [descripción breve]
  (o "Sin planes listos para ejecutar")

**Estado proyecto primario (Plan Gobernanza TI):**
- Gateway activo: [G1-G5] — [fecha target]
- Próximo hito: [descripción]
- Alertas activas: [N alertas o "ninguna"]

**Siguiente acción recomendada:**
[UNA acción concreta: quién hace qué, qué se desbloquea]
```

Si algún archivo crítico no existe (`contexto-estrategico.md`, `backlog.md`), marcarlo como gap y preguntar si crear.
