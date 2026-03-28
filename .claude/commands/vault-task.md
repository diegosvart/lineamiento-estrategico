---
name: vault-task
description: Entrevista guiada para agregar nuevas tareas al vault usando catálogos canónicos y persistencia en diario/
type: prompt
---

# /vault-task — Alta guiada de tareas

Gestiona el alta manual de nuevas tareas operativas en el vault usando una entrevista guiada basada en catálogo.

## Objetivo

Permitir que el usuario agregue una tarea nueva sin editar YAML manualmente, reutilizando los mismos catálogos canónicos de `/vault-timesheet`.

## Comando disponible

### `/vault-task add`

Crear una nueva tarea mediante entrevista guiada y persistirla en `diario/YYYY-MM-DD.md` o `diario/PENDIENTES.md`.

## Fuente canónica de catálogos

Reutilizar exactamente los catálogos definidos en `/vault-timesheet` para:

- proyectos
- iniciativas
- roles
- actividades por rol
- tipos de trabajo
- modalidades
- estados

No duplicar ni redefinir catálogos si `/vault-timesheet` ya cubre el valor requerido.

## Reglas de interacción (UX)

- NUNCA usar "Enter para confirmar" ni "presiona Enter" — la interfaz no soporta mensajes vacíos
- Toda pregunta debe aceptar respuesta explícita: número, texto, o keyword (`ok`, `hoy`, `si`)
- Cuando un valor se auto-deriva (ej: tipo-trabajo desde actividad), mostrarlo y pedir `ok` o el valor correcto
- Cuando hay default sugerido, nombrarlo explícitamente (ej: "escribe `hoy` o una fecha YYYY-MM-DD")
- Para campos con catálogo: usar listas numeradas, el usuario responde con el número

## Flujo de entrevista

Solicitar o confirmar estos campos en este orden:

1. `fecha` — preguntar siempre; el usuario escribe `hoy` o una fecha YYYY-MM-DD
2. `proyecto` — lista numerada; el usuario responde con número
3. `iniciativa` si `proyecto = Plan Gobernanza TI` — lista numerada
4. `rol` — lista numerada
5. `actividad` — lista numerada según rol seleccionado
6. `tipo-trabajo` — mostrar valor derivado + pedir `ok` o número de override (mostrar opciones)
7. `modalidad` — lista numerada
8. `horas` — número libre (múltiplo de 0.5)
9. `descripcion` — texto libre
10. `estado` — lista numerada; default sugerido: `Completado` (el usuario puede escribir el número o el nombre)

## Reglas de persistencia

1. Si hay `fecha`, usar `diario/YYYY/MM/YYYY-MM-DD.md` (crear subdirectorios si no existen)
2. Si el archivo no existe, crearlo con el schema completo (mismo formato que vault-timesheet):
   - YAML: `aliases`, `tags: [diario]`, `fecha`, `semana`, `entradas: []`, `horas-total: 0`
   - Cuerpo markdown: heading `# Diario DD-MM-YYYY`, quote de contexto, tabla de entradas, total
3. Agregar la tarea al array `entradas` del YAML
4. Agregar fila correspondiente a la tabla markdown
5. Recalcular `horas-total` y `**Total horas:**` en markdown
6. Si no hay `fecha`, escribir en `diario/PENDIENTES.md`
7. Confirmar al usuario con un resumen de lo agregado

## Validaciones

- `proyecto` debe existir en catálogo
- `iniciativa` es obligatoria para `Plan Gobernanza TI`
- `rol` debe existir en catálogo
- `actividad` debe pertenecer al rol seleccionado
- `tipo-trabajo` debe coincidir con catálogo si se sobreescribe
- `modalidad` debe ser uno de los valores válidos
- `horas` debe ser múltiplo de 0.5 entre 0.5 y 12
- `estado` debe ser uno de los valores válidos

## Respuesta esperada

El cierre debe informar:

- archivo destino
- proyecto
- iniciativa si aplica
- rol
- actividad
- horas
- estado

## Relación con gestión del trabajo

Si la tarea corresponde a un flujo activo o a un plan visible en `gestion-trabajo/`,
la sesión debe dejar explícito el impacto en el tablero maestro o en el canvas del plan.

## No alcance

- No editar tareas existentes
- No eliminar tareas existentes
- No crear notas separadas de tarea en esta versión
- No agregar lógica específica de dashboard
