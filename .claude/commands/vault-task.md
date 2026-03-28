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

## Flujo de entrevista

Solicitar o confirmar estos campos en este orden:

1. `fecha`
2. `proyecto`
3. `iniciativa` si `proyecto = Plan Gobernanza TI`
4. `rol`
5. `actividad`
6. `tipo-trabajo` autoderivado desde `actividad`, con opción de override
7. `modalidad`
8. `horas`
9. `descripcion`
10. `estado`

## Reglas de persistencia

1. Si hay `fecha`, usar `diario/YYYY-MM-DD.md`
2. Si el archivo no existe, crearlo con el schema diario vigente
3. Agregar la tarea al array `entradas`
4. Recalcular `horas-total`
5. Si no hay `fecha`, escribir en `diario/PENDIENTES.md`
6. Confirmar al usuario con un resumen de lo agregado

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
