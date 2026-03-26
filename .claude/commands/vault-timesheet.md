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

### Tipos de tarea
- Planificación
- Gestión de Proyecto
- Reunión Interna
- Reunión con Proveedor / Externo
- Elaboración de Documentos
- Revisión / Validación

### Roles
- Project Manager (PM)
- Consultor de Gobernanza TI
- Administrador de Bases de Datos
- Arquitecto de Soluciones / Fullstack Engineer
- Consultor de Software
- DBA / Analista de Infraestructura

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

### `/vault-timesheet add`

Registrar una nueva entrada de horas. Flujo:

1. Determinar fecha de la entrada (preguntar si no se especifica, default = hoy)
2. Determinar nombre de archivo: `diario/YYYY-MM-DD.md`
3. Si el archivo no existe, crearlo con estructura YAML:

```yaml
---
fecha: YYYY-MM-DD
semana: WW
entradas: []
horas-total: 0
---
```

4. Solicitar/confirmar los campos de la entrada:
   - `proyecto`: uno de los proyectos del catálogo
   - `tipo`: uno de los tipos de tarea del catálogo
   - `rol`: uno de los roles del catálogo
   - `modalidad`: Presencial | Remoto | Híbrido
   - `horas`: número (0.5, 1, 1.5, 2... hasta 12)
   - `descripcion`: texto libre (qué se hizo)
   - `estado`: uno de los estados del catálogo (default: Completado)

5. Agregar la entrada al array `entradas` del YAML
6. Recalcular y actualizar `horas-total`
7. Confirmar con resumen de la entrada agregada

### `/vault-timesheet show-week`

Mostrar entradas de la semana actual (o una semana específica si se indica).

1. Leer archivos de `diario/` de los últimos 7 días (o semana indicada)
2. Mostrar tabla: fecha | proyecto | tipo | horas | descripción
3. Total de horas por proyecto y total general

### `/vault-timesheet show-summary`

Resumen del mes actual o rango indicado.

1. Leer todos los archivos de `diario/` en el rango
2. Agrupar por: proyecto, tipo de tarea, semana
3. Mostrar tabla consolidada con totales
4. Indicar link a `diario/RESUMEN-HORAS.md` para vista Dataview completa

---

## Estructura de archivo diario

```yaml
---
fecha: 2026-03-26
semana: 13
entradas:
  - proyecto: Plan Gobernanza TI
    tipo: Reunión Interna
    rol: Project Manager (PM)
    modalidad: Remoto
    horas: 2
    descripcion: Kickoff con equipo TI — presentación del plan de gobernanza
    estado: Completado
  - proyecto: Cash Flow
    tipo: Elaboración de Documentos
    rol: Project Manager (PM)
    modalidad: Remoto
    horas: 1.5
    descripcion: Revisión de requerimientos iniciales
    estado: Completado
horas-total: 3.5
---
```

---

## Validaciones

- `proyecto` debe ser exactamente uno de los valores del catálogo (case-sensitive)
- `horas` debe ser múltiplo de 0.5, entre 0.5 y 12
- `fecha` en formato ISO YYYY-MM-DD
- Si el archivo ya existe, agregar entrada al array existente (NO sobreescribir)
- Siempre recalcular `horas-total` como suma de todas las entradas del día

---

## Notas

- El archivo `diario/RESUMEN-HORAS.md` contiene queries Dataview para reportes dinámicos
- Si Dataview no está instalado, ejecutar `/vault-dataview-setup` primero
- El xlsx `proyectos/plan-gobernanza-ti/00-contexto/Planilla_Imputacion_Horas_GestionTI.xlsx` queda como referencia histórica
