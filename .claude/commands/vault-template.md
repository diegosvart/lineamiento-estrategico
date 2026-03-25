# Skill: /vault-template

## Descripción

Crea y aplica plantillas parametrizadas para asegurar estructura consistente en nuevos lineamientos, subcategorías y documentos especializados.

## Cuándo usar

- Crear nuevo lineamiento (L1-L5) con estructura completa
- Agregar subcategoría dentro de un lineamiento
- Crear documento de política/procedimiento
- Crear documento de tarea/proyecto
- Estandarizar nuevas secciones del plan

## Uso: Listar plantillas disponibles

```
/vault-template list
```

Reporta todas las plantillas disponibles:

```
PLANTILLAS DISPONIBLES EN EL VAULT
═══════════════════════════════════════════════════════

1. 📋 lineamiento-completo
   Uso: Crear nuevo lineamiento (L1-L5)
   Estructura: Descripción, lineamientos, tareas, gateways, dependencias
   Archivos generados: 1 (archivo principal)
   Parámetros: [nombre] [numero-L] [horizonte] [esfuerzo-hh]

2. 📋 subcategoria-gobernanza
   Uso: Crear subcategoría dentro de L3
   Estructura: Descripción, tareas, tabla de entregables
   Archivos generados: 1
   Parámetros: [nombre] [categoria-padre] [descripcion]

3. 📋 politica-procedimiento
   Uso: Crear documento de política o procedimiento
   Estructura: Marco normativo, descripción, procedimiento paso a paso, responsables
   Archivos generados: 1
   Parámetros: [nombre] [tipo: politica|procedimiento] [normativa-aplica]

4. 📋 tarea-proyecto
   Uso: Crear tarea o proyecto de trabajo
   Estructura: Descripción, tareas, responsables, horas estimadas
   Archivos generados: 1
   Parámetros: [nombre] [lineamiento] [responsable] [horas-estimadas]

5. 📋 documento-decision
   Uso: Crear acta de decisión o documento de decisión
   Estructura: Fecha, participantes, decisión, justificación, próximos pasos
   Archivos generados: 1
   Parámetros: [nombre] [fecha] [participantes] [decisión]

[Usa /vault-template create [numero] para generar]
```

## Uso: Crear plantilla

```
/vault-template create --tipo "lineamiento-completo" --nombre "Transformación Digital" --numero "L6" --horizonte "H1-H4" --esfuerzo "120"
```

Proceso:
1. Valida que parámetros son válidos y completos
2. Genera archivo con estructura completa de la plantilla
3. Pre-llena todos los parámetros en el contenido
4. Crea dentro de la carpeta correcta
5. Agrega a índice si aplica
6. Actualiza YAML frontmatter
7. Reporta archivo creado

Ejemplo de salida para lineamiento:

```markdown
---
aliases:
  - L6 Transformación Digital
tags:
  - pendiente
---

# L6 — Transformación Digital

**Horizonte:** H1–H4 (transformación digital del área)
**Esfuerzo estimado:** 120 hh
**Responsable:** PM
**Precondición:** L1–L5 completados

---

## Descripción

[Placeholder para descripción del lineamiento]

## Categorías

| ID | Categoría | Descripción | Responsable | hh | Estado |
|---|---|---|---|---|---|
| [Categoría 1] | [descripción] | [responsable] | [hh] | Pendiente |

---

## Dependencias

- **Input:** [otros lineamientos necesarios]
- **Habilita:** [qué se habilitará cuando se complete]
- **Gateway:** [control point asociado]

---

*Última actualización: [fecha actual]*
```

## Uso: Ver contenido de una plantilla antes de crear

```
/vault-template preview --tipo "politica-procedimiento"
```

Muestra el contenido completo de la plantilla sin crear archivo:

```
PLANTILLA: politica-procedimiento
═══════════════════════════════════════════════════════

---
aliases:
  - [NOMBRE]
tags:
  - en-definicion
---

# [NOMBRE]

**Marco normativo:** [NORMATIVA-APLICA]
**Responsable:** [RESPONSABLE]
**Vigencia:** [FECHA-VIGENCIA]
**Versión:** 1.0

## Descripción

[Descripción de la política/procedimiento]

## Procedimiento paso a paso

### Paso 1: [Descripción]
[Detalles]

### Paso 2: [Descripción]
[Detalles]

### Paso 3: [Descripción]
[Detalles]

## Responsabilidades

| Rol | Responsabilidad |
|-----|-----------------|
| [ROL] | [Responsabilidad] |

## Evidencia y auditoría

- Cómo se valida cumplimiento: [descripción]
- Registro de cambios: [enlace a archivo control]

---

*Última actualización: [fecha]*

═══════════════════════════════════════════════════════

¿Deseas crear un archivo basado en esta plantilla? (/vault-template create --tipo politica-procedimiento [parámetros])
```

## Uso: Personalizar plantilla

```
/vault-template customize --tipo "lineamiento-completo" --agregar-seccion "Riesgos identificados"
```

Modifica una plantilla para agregar/eliminar secciones:
- Agregar nueva sección a la plantilla
- Eliminar sección no utilizada
- Reordenar secciones

## Plantillas especiales incluidas

### 1. Lineamiento completo (L1-L5)
Estructura estándar para cada lineamiento:
- Descripción
- Categorías (si aplica)
- Tareas (tabla con ID, descripción, responsable, hh, estado)
- Dependencias y transición
- Gateway asociado

### 2. Subcategoría dentro de gobernanza
Estructura para archivos dentro de L3:
- Descripción
- Tareas
- Tabla de entregables
- Dependencias

### 3. Política o Procedimiento
Estructura legal/normativa:
- Marco normativo
- Descripción ejecutiva
- Procedimiento paso a paso
- Responsables
- Evidencia de cumplimiento

### 4. Tarea o Proyecto
Estructura para items ejecutables:
- Descripción
- Horas estimadas
- Responsable
- Hitos
- Dependencias

### 5. Documento de Decisión
Estructura para decisiones importantes:
- Fecha, participantes
- Decisión + justificación
- Próximos pasos
- Revisor/Aprobador

## Parámetros comunes

| Parámetro | Tipo | Ejemplo | Obligatorio |
|-----------|------|---------|-------------|
| `--tipo` | enum | `lineamiento-completo` | Sí |
| `--nombre` | string | `Transformación Digital` | Sí |
| `--numero` | string | `L6` | Solo L-tipo |
| `--horizonte` | string | `H1-H4` | Solo L-tipo |
| `--esfuerzo` | number | `120` | Algunos tipos |
| `--responsable` | string | `PM` | Algunos tipos |
| `--agregar-seccion` | string | `Riesgos identificados` | No |

## Reglas de plantillas

1. Toda plantilla debe incluir YAML frontmatter con alias, tags, estado
2. Parámetros van entre `[BRACKETS EN MAYUSCULA]`
3. Placeholder para contenido: `[descripción aquí]`
4. Links internos: usar paths relativos correctos
5. Tablas deben seguir formato markdown estándar
6. Título principal: `# [NOMBRE]` basado en parámetro

## Almacenamiento de plantillas

Las plantillas no se guardan como archivos (excepto dentro de notas creadas).
Se definen en la memoria/documentación del skill.

Para crear plantilla nueva:
- Documentar en `/vault-template list`
- Incluir estructura completa
- Incluir instrucciones de parámetros

## Notas de implementación

- Usar Write tool para crear archivo desde plantilla
- Reemplazar `[PARAMETRO]` con valores reales
- Generar timestamp automático para "Última actualización"
- Validar que archivo destino no existe (no sobrescribir)
- Auto-actualizar índice si es primer nivel
- Mantener convenciones: español, sin tildes en filenames, hyphens
