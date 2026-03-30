---
name: vault-timesheet
description: Gestionar registro de horas en Daily Notes — agregar entradas, ver resumen semanal, generar reportes
type: prompt
---

# /vault-timesheet — Registro de Horas

Gestiona el sistema de registro de horas en `diario/` (Daily Notes + Dataview).

## Catálogo canónico (fuente: Planilla_Imputacion_Horas_GestionTI.xlsx)

### Proyectos
- Plan Gobernanza TI
- Cash Flow
- Sitrack
- Activo Fijo
- Gestión de documentos
- Seguros & Siniestros

### Iniciativas por proyecto

**Plan Gobernanza TI** — campo `iniciativa` es **obligatorio** para este proyecto:

*Transversales:*
- Gestión del Plan
- Auditoría Deloitte

*L2 — Estructuración del Área TI:*
- Formalización Organizacional
- Reducción de Dependencias
- Habilitación de Recursos

*L3 — Gobernanza TI:*
- Catastro de Aplicaciones
- Diagnóstico Normativo
- Políticas y Procedimientos
- Cierre y Evidencia

*L4 — Infraestructura TI:*
- Diseño de Arquitectura
- BD Central
- Homogenización de Maestros
- Artefactos de Sincronización
- Automatización Entorno Digital
- Migración de Soluciones
- Nuevas Aplicaciones

*L5 — Integraciones:*
- HUB de Integración

**Otros proyectos** — `iniciativa` es opcional (omitir si no aplica):
- Cash Flow, Sitrack, Activo Fijo, Gestión de documentos, Seguros & Siniestros

### Roles
- Project Manager
- Consultor de Gobernanza TI
- Arquitecto / Desarrollador de Software
- DBA / Analista de Infraestructura
- Data Governance Manager
- Analista de Seguridad

### Actividades por rol

**Project Manager**
- Levantamiento de información
- Documentación de fichas y procesos
- Diseño de flujos de gobernanza
- Gestión de gateways
- Seguimiento y control
- Comunicación ejecutiva
- Presentaciones a Gerencia

**Consultor de Gobernanza TI**
- Diagnóstico del estado actual
- Definición de marcos normativos
- Diseño de estructuras organizacionales
- Elaboración de propuestas ejecutivas
- Identificación de riesgos regulatorios

**Arquitecto / Desarrollador de Software**
- Diseño de soluciones técnicas
- Desarrollo y prueba de scripts
- Integración con APIs
- Documentación técnica
- Validación de ambientes

**DBA / Analista de Infraestructura**
- Levantamiento de instancias y sistemas
- Análisis de configuraciones
- Identificación de riesgos técnicos
- Documentación del estado actual

**Data Governance Manager**
- Diseño de instrumentos de recolección
- Definición de estándares y políticas
- Mapeo del paisaje de datos
- Documentación regulatoria

**Analista de Seguridad**
- Revisión de hallazgos de auditoría
- Análisis de controles
- Identificación de brechas
- Documentación de evidencias

### Tipo de trabajo

Campo `tipo-trabajo` — clasifica el tipo de labor realizada (auto-mapeado desde `actividad`):

| Valor | Actividades que tienden a mapearse |
|-------|-----------------------------------|
| `Gestión` | Seguimiento y control · Comunicación ejecutiva · Gestión de gateways · Presentaciones a Gerencia |
| `Planificación y Diseño` | Levantamiento de información · Diagnóstico del estado actual · Definición de marcos normativos · Diseño de estructuras organizacionales · Elaboración de propuestas ejecutivas · Identificación de riesgos regulatorios · Diseño de flujos de gobernanza · Diseño de soluciones técnicas · Levantamiento de instancias y sistemas · Diseño de instrumentos de recolección · Definición de estándares y políticas · Mapeo del paisaje de datos |
| `Ingeniería y Desarrollo` | Desarrollo y prueba de scripts · Integración con APIs · Validación de ambientes · Análisis de configuraciones · Identificación de riesgos técnicos |
| `Ejecución Operativa` | Documentación técnica · Documentación de fichas y procesos · Documentación del estado actual · Documentación regulatoria · Revisión de hallazgos de auditoría · Análisis de controles · Identificación de brechas · Documentación de evidencias |

### Modalidad
- Presencial
- Remoto
- Híbrido

### Estado de tarea
- En curso
- Completado
- Bloqueado
- Cancelado
- Pendiente

---

## Comandos disponibles

## Reglas de interacción (UX)

- NUNCA usar "Enter para confirmar" ni "presiona Enter" — la interfaz no soporta mensajes vacíos
- Toda pregunta debe aceptar respuesta explícita: número, texto, o keyword (`ok`, `hoy`, `si`)
- Cuando un valor se auto-deriva (ej: tipo-trabajo desde actividad), mostrarlo y pedir `ok` o el valor correcto
- Cuando hay default sugerido, nombrarlo explícitamente (ej: "escribe `hoy` o una fecha YYYY-MM-DD")
- Para campos con catálogo: usar listas numeradas, el usuario responde con el número

### `/vault-timesheet add`

Registrar una nueva entrada de horas. Flujo:

1. Determinar fecha de la entrada — preguntar siempre; el usuario escribe `hoy` o una fecha YYYY-MM-DD
2. Determinar ruta del archivo: `diario/YYYY/MM/YYYY-MM-DD.md` (crear subdirectorios si no existen)
3. Si el archivo no existe, crearlo con la estructura completa:

````
---
aliases:
  - Diario DD-MM-YYYY
tags:
  - diario
fecha: YYYY-MM-DD
semana: WW
entradas: []
---

# Diario DD-MM-YYYY

> Registro de actividades y horas del día. Generado via `/vault-timesheet`.

## Entradas del día

```dataviewjs
const entradas = dv.current().file.frontmatter.entradas || [];
if (entradas.length === 0) {
  dv.paragraph("> Sin entradas registradas.");
} else {
  const rows = [].concat(entradas).map(e => [
    e?.proyecto ?? "—",
    e?.iniciativa ?? "—",
    e?.rol ?? "—",
    e?.["tipo-trabajo"] ?? "—",
    e?.actividad ?? "—",
    e?.horas ?? 0,
    e?.estado ?? "—"
  ]);
  dv.table(["Proyecto", "Iniciativa", "Rol", "Tipo Trabajo", "Actividad", "Horas", "Estado"], rows);
  const total = [].concat(entradas).reduce((s, e) => s + (e?.horas ?? 0), 0);
  dv.paragraph(`**Total horas:** ${total}`);
}
```
````

Al agregar entradas: solo agregar la entrada al array `entradas` del YAML. El body (tabla y total) se auto-genera via DataviewJS — no tocar el body.

4. Solicitar/confirmar los campos de la entrada:
   - `proyecto`: uno de los proyectos del catálogo
   - `iniciativa`: obligatorio si proyecto = Plan Gobernanza TI → mostrar catálogo de iniciativas
   - `rol`: uno de los roles del catálogo → mostrar actividades disponibles para ese rol
   - `tipo-trabajo`: auto-mapeado desde `actividad` usando tabla de mapeo; el usuario puede sobreescribir
   - `actividad`: una de las actividades del rol seleccionado (vocabulario controlado)
   - `modalidad`: Presencial | Remoto | Híbrido
   - `horas`: número (0.5, 1, 1.5, 2... hasta 12)
   - `descripcion`: texto libre (qué específicamente se hizo)
   - `estado`: uno de los estados del catálogo (default: Completado)

5. Agregar la entrada al array `entradas` del YAML — no modificar el body del archivo
6. Si no se detecta fecha → agregar a `diario/PENDIENTES.md` en lugar de un archivo diario
   y emitir aviso: `⚠️ Fecha no detectada — entrada agregada a diario/PENDIENTES.md`
8. Confirmar con resumen de la entrada agregada

### `/vault-timesheet edit`

Editar una entrada existente en una Daily Note. Flujo:

1. Pedir fecha del día a editar — el usuario escribe `hoy` o una fecha YYYY-MM-DD
2. Leer el archivo y mostrar las entradas numeradas con sus campos actuales
3. El usuario elige el número de la entrada a editar
4. Mostrar los campos de la entrada. El usuario indica qué campo cambiar y el nuevo valor
5. Actualizar **solo el YAML frontmatter** con el nuevo valor
6. El body no se modifica — la tabla se auto-actualiza via DataviewJS al reabrir en Obsidian
7. Confirmar con resumen del cambio aplicado

### `/vault-timesheet show-week`

Mostrar entradas de la semana actual (o una semana específica si se indica).

1. Leer archivos de `diario/YYYY/MM/` de los últimos 7 días (o semana indicada)
2. Mostrar tabla: fecha | proyecto | iniciativa | rol | actividad | horas | descripción
3. Total de horas por proyecto y total general

### `/vault-timesheet show-summary`

Resumen del mes actual o rango indicado.

1. Leer todos los archivos de `diario/YYYY/MM/` en el rango
2. Agrupar por: proyecto, iniciativa, rol, actividad, semana
3. Mostrar tabla consolidada con totales
4. Indicar link a `diario/RESUMEN-HORAS.md` para vista Dataview completa

---

## Estructura de archivo diario

```yaml
---
aliases:
  - Diario 26-03-2026
tags:
  - diario
fecha: 2026-03-26
semana: 13
entradas:
  - proyecto: Plan Gobernanza TI
    iniciativa: Gestión del Plan
    rol: Project Manager
    tipo-trabajo: Gestión
    actividad: Diseño de flujos de gobernanza
    modalidad: Remoto
    horas: 2
    descripcion: Diseño del proceso de gestión de cambios para G2
    estado: Completado
  - proyecto: Cash Flow
    rol: Project Manager
    tipo-trabajo: Planificación y Diseño
    actividad: Levantamiento de información
    modalidad: Remoto
    horas: 1.5
    descripcion: Revisión de requerimientos iniciales con contabilidad
    estado: Completado
---
```

> El body de la nota contiene un bloque DataviewJS que renderiza la tabla y total automáticamente. No hay tabla estática ni campo `horas-total` — el único punto de edición es el array `entradas` en el YAML frontmatter.

> Nota: `iniciativa` es obligatorio cuando `proyecto: Plan Gobernanza TI`. Para otros proyectos, se omite.

---

## Validaciones

- `proyecto` debe ser exactamente uno de los valores del catálogo (case-sensitive)
- `iniciativa` debe pertenecer al catálogo de iniciativas si proyecto = Plan Gobernanza TI
- `rol` debe ser exactamente uno de los roles del catálogo
- `actividad` debe pertenecer a las actividades del rol seleccionado
- `tipo-trabajo` debe ser uno de: Gestión, Planificación y Diseño, Ingeniería y Desarrollo, Ejecución Operativa
- `horas` debe ser múltiplo de 0.5, entre 0.5 y 12
- `fecha` en formato ISO YYYY-MM-DD
- Si el archivo ya existe, agregar entrada al array existente (NO sobreescribir)
- No existe campo `horas-total` — el total se calcula en runtime via DataviewJS
- No modificar el body de la nota al agregar o editar entradas

---

## Entradas sin fecha — diario/PENDIENTES.md

Si no se puede determinar la fecha de una entrada:
1. Agregar la entrada a `diario/PENDIENTES.md` (misma estructura YAML, sin campo `fecha`)
2. Emitir aviso: `⚠️ Fecha no detectada — entrada agregada a diario/PENDIENTES.md`
3. El usuario asigna fecha manualmente moviendo la entrada al archivo `YYYY-MM-DD.md` correcto

---

## Notas

- El archivo `diario/RESUMEN-HORAS.md` contiene queries Dataview para reportes dinámicos
- Si Dataview no está instalado, ejecutar `/vault-dataview-setup` primero
- El xlsx `proyectos/plan-gobernanza-ti/00-contexto/Planilla_Imputacion_Horas_GestionTI.xlsx` queda como referencia histórica
