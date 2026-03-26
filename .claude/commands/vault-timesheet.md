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
   - `rol`: uno de los roles del catálogo → mostrar actividades disponibles para ese rol
   - `actividad`: una de las actividades del rol seleccionado (vocabulario controlado)
   - `modalidad`: Presencial | Remoto | Híbrido
   - `horas`: número (0.5, 1, 1.5, 2... hasta 12)
   - `descripcion`: texto libre (qué específicamente se hizo)
   - `estado`: uno de los estados del catálogo (default: Completado)

5. Agregar la entrada al array `entradas` del YAML
6. Recalcular y actualizar `horas-total`
7. Confirmar con resumen de la entrada agregada

### `/vault-timesheet show-week`

Mostrar entradas de la semana actual (o una semana específica si se indica).

1. Leer archivos de `diario/` de los últimos 7 días (o semana indicada)
2. Mostrar tabla: fecha | proyecto | rol | actividad | horas | descripción
3. Total de horas por proyecto y total general

### `/vault-timesheet show-summary`

Resumen del mes actual o rango indicado.

1. Leer todos los archivos de `diario/` en el rango
2. Agrupar por: proyecto, rol, actividad, semana
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
    rol: Project Manager
    actividad: Diseño de flujos de gobernanza
    modalidad: Remoto
    horas: 2
    descripcion: Diseño del proceso de gestión de cambios para G2
    estado: Completado
  - proyecto: Cash Flow
    rol: Project Manager
    actividad: Levantamiento de información
    modalidad: Remoto
    horas: 1.5
    descripcion: Revisión de requerimientos iniciales con contabilidad
    estado: Completado
horas-total: 3.5
---
```

---

## Validaciones

- `proyecto` debe ser exactamente uno de los valores del catálogo (case-sensitive)
- `rol` debe ser exactamente uno de los roles del catálogo
- `actividad` debe pertenecer a las actividades del rol seleccionado
- `horas` debe ser múltiplo de 0.5, entre 0.5 y 12
- `fecha` en formato ISO YYYY-MM-DD
- Si el archivo ya existe, agregar entrada al array existente (NO sobreescribir)
- Siempre recalcular `horas-total` como suma de todas las entradas del día

---

## Notas

- El archivo `diario/RESUMEN-HORAS.md` contiene queries Dataview para reportes dinámicos
- Si Dataview no está instalado, ejecutar `/vault-dataview-setup` primero
- El xlsx `proyectos/plan-gobernanza-ti/00-contexto/Planilla_Imputacion_Horas_GestionTI.xlsx` queda como referencia histórica
