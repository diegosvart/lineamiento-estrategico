# Prompt: Extracción de actividades para planilla de imputación

Copia este prompt completo y pégalo junto al contenido que quieres analizar
(conversación, lista de mensajes, resumen del día, etc.).

---

## EXTRACCIÓN DE ACTIVIDADES PARA PLANILLA DE IMPUTACIÓN

Analiza el contenido adjunto y extrae las actividades realizadas
para registrarlas en mi planilla de imputación de horas.

### CONTEXTO

- Profesional: Diego Morales — PM Consultor, Grupo EBI
- Fecha de la sesión: [COMPLETAR: YYYY-MM-DD]
- Modalidad: [Remoto / Presencial / Híbrido]
- Duración total declarada: [COMPLETAR: X horas]
  Distribuye ese total entre los bloques identificados proporcionalmente
  a la extensión e iteraciones de cada parte del contenido.

---

### PASO 0 — DETECTAR FECHA

Antes de cualquier extracción, busca señales de fecha en el contenido:
- Timestamps explícitos (ej: "martes 4 de marzo", "2026-03-04", "04/03")
- Marcas de tiempo en mensajes (ej: "ayer", "esta mañana", referencias a días)
- Metadatos del canal o conversación

Si encuentras una fecha → úsala como `fecha` en el YAML de salida.
Si NO encuentras fecha → usa exactamente el valor que declaré en "Fecha de la sesión" arriba.
Si no declaré fecha y no hay señales → usa el primer día del mes en curso (YYYY-MM-01)
y agrega una nota al inicio del YAML: `# ⚠️ Fecha no detectada — asignada al 01 del mes. Reorganizar manualmente.`

---

### PASO 1 — IDENTIFICAR BLOQUES DE TRABAJO

Un bloque = un cambio de proyecto, entregable distinto, o interlocutor diferente.
Agrupa interacciones relacionadas en un solo bloque si forman una unidad de trabajo continua.

---

### PASO 2 — CLASIFICAR CADA BLOQUE

Para cada bloque, determina en orden:

**1. Proyecto / Iniciativa** — usar exactamente uno de:
- Plan Gobernanza TI
- Catastro de Aplicaciones
- Auditoría Deloitte
- Levantamiento Instancias Manager
- Mapeo de Procesos Holding
- Gestión de Datos (Data Governance)
- Automatización Entorno Digital
- Programa Ciberseguridad
- Cash Flow
- Sitrack
- Activo Fijo
- Gestión de Documentos
- Seguros & Siniestros
- Administración General TI

Si no hay proyecto claro → clasificar como "Administración General TI".

**2. Rol** — usar exactamente uno de:
- Project Manager
- Consultor de Gobernanza TI
- Arquitecto / Desarrollador de Software
- DBA / Analista de Infraestructura
- Data Governance Manager
- Analista de Seguridad

Criterio: usa el rol que mejor describe *cómo* se realizó el trabajo,
no el cargo formal. Un PM puede hacer trabajo de Arquitecto en una sesión técnica.

**3. Actividad** — usar exactamente una de las permitidas para el rol elegido:

| Rol | Actividades permitidas |
|-----|----------------------|
| Project Manager | Levantamiento de información · Documentación de fichas y procesos · Diseño de flujos de gobernanza · Gestión de gateways · Seguimiento y control · Comunicación ejecutiva · Presentaciones a Gerencia |
| Consultor de Gobernanza TI | Diagnóstico del estado actual · Definición de marcos normativos · Diseño de estructuras organizacionales · Elaboración de propuestas ejecutivas · Identificación de riesgos regulatorios |
| Arquitecto / Desarrollador de Software | Diseño de soluciones técnicas · Desarrollo y prueba de scripts · Integración con APIs · Documentación técnica · Validación de ambientes |
| DBA / Analista de Infraestructura | Levantamiento de instancias y sistemas · Análisis de configuraciones · Identificación de riesgos técnicos · Documentación del estado actual |
| Data Governance Manager | Diseño de instrumentos de recolección · Definición de estándares y políticas · Mapeo del paisaje de datos · Documentación regulatoria |
| Analista de Seguridad | Revisión de hallazgos de auditoría · Análisis de controles · Identificación de brechas · Documentación de evidencias |

**4. Descripcion** — texto libre, máx. 100 caracteres.
Qué específicamente se produjo, decidió o avanzó en este bloque.
Usar lenguaje ejecutivo: acción + objeto + contexto.
Ejemplo: "Diseño del flujo de aprobación de cambios para gateway G2"

**5. Estado**
- `Completado` — el entregable quedó listo en la sesión
- `En curso` — quedó trabajo pendiente para continuar

---

### FORMATO DE SALIDA

Produce primero el frontmatter YAML completo de la nota diaria, listo para pegar
(incluyendo fecha y número de semana ISO — la semana ISO se calcula desde la fecha):

```yaml
---
aliases:
  - Diario DD-MM-YYYY
tags:
  - diario
fecha: YYYY-MM-DD
semana: [número de semana ISO de la fecha]
entradas:
  - proyecto: [valor]
    rol: [valor]
    actividad: [valor]
    modalidad: [Remoto / Presencial / Híbrido]
    horas: [número múltiplo de 0.5]
    descripcion: [texto libre]
    estado: [Completado / En curso]
  - proyecto: ...
horas-total: [suma de todas las horas]
---
```

Luego, una tabla resumen para revisión rápida:

| # | Proyecto | Rol | Actividad | Horas | Estado |
|---|---|---|---|---|---|
| 1 | ... | ... | ... | ... | ... |

**Total horas:** X

---

### RESUMEN DE SESIÓN

Después de la tabla, agrega:

```
RESUMEN EJECUTIVO (2-3 líneas para informe mensual):
[síntesis del trabajo realizado, logros concretos, decisiones tomadas]

DEPENDENCIAS / SEGUIMIENTO:
[si aplica: qué quedó pendiente, quién debe actuar, fecha límite]
```

---

*Prompt versión 2 — schema actualizado 26 Mar 2026*
*Campos eliminados: Tipo de Tarea, Observaciones*
*Campos nuevos: rol (por bloque), actividad (vocabulario controlado por rol)*
