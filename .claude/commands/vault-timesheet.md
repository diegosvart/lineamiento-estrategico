# Skill: vault-timesheet

Gestiona el registro de horas del Plan Gobernanza TI 2026 en Daily Notes markdown.
Reemplaza `00-contexto/Planilla_Imputacion_Horas_GestionTI.xlsx` con un sistema integrado al vault.

---

## Catálogo de referencia (extraído del xlsx histórico)

### Proyectos válidos
- Plan Gobernanza TI
- L1 - Portafolio TI
- L2 - Estructuración Área TI
- L3 - Gobernanza TI
- L4 - Infraestructura TI
- Soporte Operativo
- Administración General TI

### Tipos de tarea válidos
- Elaboracion de Documentos
- Reunion / Coordinacion
- Levantamiento de Información
- Revision y Validacion
- Configuracion / Implementacion
- Capacitacion
- Gestion de Proveedores
- Planificacion

### Roles válidos
- Project Manager (PM)
- Jefe TI (JTI)
- Analista de Red e Infraestructura (ARI)
- Soporte TI (SPT)
- Consultor ERP (CE)

### Modalidades
- Presencial
- Remoto
- Hibrido

### Estados de entrada
- Completado
- En curso
- Pendiente

---

## Comandos disponibles

### `/vault-timesheet add`

Registra una nueva entrada de horas en la nota diaria correspondiente.

**Procedimiento:**
1. Preguntar al usuario (si no se proporcionan como argumento):
   - **Fecha** (default: hoy, formato YYYY-MM-DD)
   - **Proyecto** (mostrar lista del catálogo, validar)
   - **Tipo de tarea** (mostrar lista del catálogo, validar)
   - **Actividad** (descripción libre, máx. 80 chars)
   - **Horas** (número decimal, ej: 1.5)
   - **Estado** (default: Completado)
   - **Observaciones** (opcional, puede quedar vacío)

2. Calcular semana ISO del año para la fecha dada.

3. Verificar si existe `diario/YYYY-MM-DD.md`:
   - **Si existe:** Agregar la nueva entrada al array `entradas` en el frontmatter YAML y recalcular `horas-total`. Actualizar también la tabla en el cuerpo del documento.
   - **Si no existe:** Crear el archivo con la estructura completa (ver Estructura YAML abajo).

4. Confirmar al usuario: "Entrada registrada en `diario/YYYY-MM-DD.md`. Total del día: X horas."

**Estructura YAML completa para nota nueva:**
```yaml
---
aliases:
  - Diario DD-MM-YYYY
tags:
  - diario
fecha: YYYY-MM-DD
semana: [número semana ISO]
entradas:
  - proyecto: [proyecto]
    tipo: [tipo]
    rol: [rol]
    actividad: [actividad]
    modalidad: [modalidad]
    estado: [estado]
    horas: [número]
    observaciones: "[texto o vacío]"
horas-total: [suma de horas]
---

# Diario DD-MM-YYYY

> Registro de actividades y horas del día. Generado via `/vault-timesheet`.

## Entradas del día

| Proyecto | Tipo | Actividad | Horas | Estado |
|---|---|---|---|---|
| [proyecto] | [tipo] | [actividad] | [horas] | [estado] |

**Total horas:** [suma]
```

---

### `/vault-timesheet show-week`

Muestra un resumen de las entradas de la semana actual (lunes a hoy).

**Procedimiento:**
1. Calcular el rango de fechas de la semana actual (ISO: lunes → domingo).
2. Leer todos los archivos `diario/YYYY-MM-DD.md` que caigan en ese rango.
3. Agregar todas las entradas y mostrar tabla:

```
Semana [N] — [fecha lunes] al [fecha domingo]
═══════════════════════════════════════════════
Fecha       Proyecto              Actividad                      Horas
─────────────────────────────────────────────────────────────────────
2026-03-26  Plan Gobernanza TI   Generar planilla imputacion…   3.0
─────────────────────────────────────────────────────────────────────
                                 TOTAL SEMANA                   3.0 h
```

4. Si no hay entradas: "No hay registros para esta semana. Usa `/vault-timesheet add` para agregar."

---

### `/vault-timesheet show-summary`

Muestra totales agrupados por proyecto (todas las notas diarias disponibles).

**Procedimiento:**
1. Leer TODOS los archivos en `diario/` que tengan el tag `diario` y campo `entradas`.
2. Agregar horas por proyecto y por tipo de tarea.
3. Mostrar dos tablas:

```
RESUMEN TOTAL — Plan Gobernanza TI 2026
Período: [fecha más antigua] → [fecha más reciente]
══════════════════════════════════════════════
Por Proyecto:
  Plan Gobernanza TI          ████████████  12.5 h
  L3 - Gobernanza TI          ████           4.0 h
  ...

Por Tipo de Tarea:
  Elaboracion de Documentos   ██████████    10.0 h
  Reunion / Coordinacion      ████           4.0 h
  ...

Total general: XX.X horas en N días registrados
```

4. Indicar: "Para ver dashboard interactivo: abre `diario/RESUMEN-HORAS.md` en Obsidian."

---

## Reglas de la skill

1. **Nunca modificar el xlsx.** Es referencia histórica en `00-contexto/`.
2. **Validar proyectos y tipos** contra el catálogo. Si el usuario escribe algo no reconocido, mostrar opciones y pedir confirmación o corrección.
3. **Calcular horas-total** siempre como suma de todas las entradas del día (no confiar en lo que diga el usuario).
4. **Semana ISO:** semana 1 = semana que contiene el primer jueves de enero. Usar cálculo estándar ISO 8601.
5. **Formato de fecha:** siempre YYYY-MM-DD en YAML, DD-MM-YYYY en aliases y texto visible.
6. **Si falta Dataview:** al ejecutar `show-summary`, advertir que el dashboard en `RESUMEN-HORAS.md` requiere el plugin Dataview activo. Ofrecer ejecutar `/vault-dataview-setup`.
