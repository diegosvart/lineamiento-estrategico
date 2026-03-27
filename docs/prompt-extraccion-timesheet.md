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
Si no declaré fecha y no hay señales → agrega la entrada a `diario/PENDIENTES.md`
y emite: `⚠️ Fecha no detectada — entrada agregada a diario/PENDIENTES.md. Reorganizar manualmente.`

---

### PASO 1 — IDENTIFICAR BLOQUES DE TRABAJO

Un bloque = un cambio de proyecto, entregable distinto, o interlocutor diferente.
Agrupa interacciones relacionadas en un solo bloque si forman una unidad de trabajo continua.

---

### PASO 2 — CLASIFICAR CADA BLOQUE

Para cada bloque, determina en orden:

**1. Proyecto** — usar exactamente uno de los 6 proyectos activos:
- Plan Gobernanza TI
- Cash Flow
- Sitrack
- Activo Fijo
- Gestión de Documentos
- Seguros & Siniestros

Regla de clasificación por palabras clave:

| Proyecto | Señales en el texto |
|---|---|
| Cash Flow | flujo de caja, tesorería, conciliación, caja, pagos |
| Sitrack | Sitrack, GPS, flota, vehículos, tracking |
| Activo Fijo | activo fijo, bienes, depreciación, inventario físico |
| Gestión de Documentos | gestión documental, archivo, expediente, ECM |
| Seguros & Siniestros | seguro, siniestro, póliza, cobertura |
| Plan Gobernanza TI | todo lo demás → gobernanza TI, infraestructura, automatización, integraciones, catastro de aplicaciones, auditorías, ciberseguridad, Microsoft 365, gestión del área TI, trabajo transversal al holding |

**2. Iniciativa** — obligatorio si proyecto = Plan Gobernanza TI:

Segunda ronda de keywords para determinar `iniciativa`:

| Iniciativa | Señales en el texto |
|---|---|
| Automatización Entorno Digital | M365, Teams, Planner, Graph API, script Python, aprovisionamiento, GUID, Azure AD, entorno digital |
| Catastro de Aplicaciones | catastro, inventario de aplicaciones, sistemas, levantamiento apps |
| Auditoría Deloitte | Deloitte, hallazgo, finding, auditoría, evidencia |
| HUB de Integración | HUB, integración, ERP, conector, flujo SIA, automatización entre sistemas, BD, bases de datos |
| Políticas y Procedimientos | política, procedimiento, normativa, reglamento |
| Diagnóstico Normativo | Ley 19.628, Ley 21.663, OIV, diagnóstico normativo, cumplimiento |
| Gestión del Plan | gateway, G1-G5, reporte, planilla de horas, ficha de proyecto, sponsor, reunión, coordinación, GANTT, seguimiento |
| Diseño de Arquitectura | arquitectura, diagrama, Excalidraw, topología |

Si no hay señales claras → usar `Gestión del Plan`.

Para otros proyectos (Cash Flow, Sitrack, etc.) → omitir campo `iniciativa`.

**3. Rol** — usar exactamente uno de:
- Project Manager
- Consultor de Gobernanza TI
- Arquitecto / Desarrollador de Software
- DBA / Analista de Infraestructura
- Data Governance Manager
- Analista de Seguridad

Criterio: usa el rol que mejor describe *cómo* se realizó el trabajo,
no el cargo formal. Un PM puede hacer trabajo de Arquitecto en una sesión técnica.

**4. Tipo de trabajo** — auto-mapear desde la actividad usando esta tabla:

| tipo-trabajo | Actividades que se mapean |
|---|---|
| Gestión | Seguimiento y control · Comunicación ejecutiva · Gestión de gateways · Presentaciones a Gerencia |
| Planificación y Diseño | Levantamiento de información · Diagnóstico del estado actual · Definición de marcos normativos · Diseño de estructuras organizacionales · Elaboración de propuestas ejecutivas · Identificación de riesgos regulatorios · Diseño de flujos de gobernanza · Diseño de soluciones técnicas · Levantamiento de instancias y sistemas · Diseño de instrumentos de recolección · Definición de estándares y políticas · Mapeo del paisaje de datos |
| Ingeniería y Desarrollo | Desarrollo y prueba de scripts · Integración con APIs · Validación de ambientes · Análisis de configuraciones · Identificación de riesgos técnicos |
| Ejecución Operativa | Documentación técnica · Documentación de fichas y procesos · Documentación del estado actual · Documentación regulatoria · Revisión de hallazgos de auditoría · Análisis de controles · Identificación de brechas · Documentación de evidencias |

**5. Actividad** — usar exactamente una de las permitidas para el rol elegido:

| Rol | Actividades permitidas |
|-----|----------------------|
| Project Manager | Levantamiento de información · Documentación de fichas y procesos · Diseño de flujos de gobernanza · Gestión de gateways · Seguimiento y control · Comunicación ejecutiva · Presentaciones a Gerencia |
| Consultor de Gobernanza TI | Diagnóstico del estado actual · Definición de marcos normativos · Diseño de estructuras organizacionales · Elaboración de propuestas ejecutivas · Identificación de riesgos regulatorios |
| Arquitecto / Desarrollador de Software | Diseño de soluciones técnicas · Desarrollo y prueba de scripts · Integración con APIs · Documentación técnica · Validación de ambientes |
| DBA / Analista de Infraestructura | Levantamiento de instancias y sistemas · Análisis de configuraciones · Identificación de riesgos técnicos · Documentación del estado actual |
| Data Governance Manager | Diseño de instrumentos de recolección · Definición de estándares y políticas · Mapeo del paisaje de datos · Documentación regulatoria |
| Analista de Seguridad | Revisión de hallazgos de auditoría · Análisis de controles · Identificación de brechas · Documentación de evidencias |

**6. Descripcion** — texto libre, máx. 100 caracteres.
Qué específicamente se produjo, decidió o avanzó en este bloque.
Usar lenguaje ejecutivo: acción + objeto + contexto.
Ejemplo: "Diseño del flujo de aprobación de cambios para gateway G2"

**7. Estado**
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
    iniciativa: [valor — solo si proyecto = Plan Gobernanza TI]
    rol: [valor]
    tipo-trabajo: [Gestión / Planificación y Diseño / Ingeniería y Desarrollo / Ejecución Operativa]
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

| # | Proyecto | Iniciativa | Rol | Tipo Trabajo | Actividad | Horas | Estado |
|---|---|---|---|---|---|---|---|
| 1 | ... | ... | ... | ... | ... | ... | ... |

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

*Prompt versión 3 — schema actualizado 26 Mar 2026*
*Campos eliminados: Tipo de Tarea, Observaciones*
*Campos nuevos: iniciativa (obligatorio para Plan Gobernanza TI), tipo-trabajo (auto-mapeado desde actividad)*
*Fallback sin fecha: → diario/PENDIENTES.md (antes: YYYY-MM-01)*
