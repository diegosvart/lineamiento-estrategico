# Especificación Técnica de Proyecto
## Plantilla Base — Área de Tecnología · Grupo EBI

---

> **Instrucciones de uso**
>
> Este documento es la plantilla normativa para toda especificación técnica de nuevos proyectos TI del holding.
> Completar todas las secciones antes de iniciar el proceso de selección de proveedor o desarrollo interno.
> Los textos en *cursiva* son instrucciones al redactor — eliminar antes de emitir el documento.
> Los campos marcados con `[EJEMPLO]` contienen datos del proyecto PRJ-2026-001 (Cash Flow) como referencia.
>
> **Para sistemas legacy existentes:** no usar esta plantilla. Usar el documento **Reporte de Situación Actual**.

---

## Encabezado del Documento

| Campo | Valor |
|---|---|
| Nombre del proyecto | `[EJEMPLO]` Sistema de Cash Flow — Grupo EBI |
| ID del proyecto | `[EJEMPLO]` PRJ-2026-001 |
| Documento fuente | `[EJEMPLO]` Levantamiento Funcional v1.0 · 27/02/2026 |
| Versión | v0.1 (borrador) |
| Fecha | `[EJEMPLO]` 09/03/2026 |
| Autor | `[EJEMPLO]` Diego Morales — PM TI |
| Estado | *Propuesto / En revisión / Aprobado* |
| Aprobadores | *Completar nombre, rol y fecha de aprobación* |

---

## 1. Propósito, Alcance y Relación Documental

### 1.1 Objetivo del sistema

*Describir en 2–4 frases el propósito del sistema, el problema que resuelve y el valor que entrega al negocio.*

`[EJEMPLO]` Reemplazar el proceso manual de consolidación y proyección de Cash Flow de COSEMAR — actualmente basado en Excel descentralizado — por una plataforma centralizada que opere para todas las empresas del holding bajo gestión del área de Finanzas.

### 1.2 Alcance

**Incluye (IN):**

*Listar las funcionalidades y módulos que forman parte del alcance del desarrollo.*

`[EJEMPLO]`
- Consolidación de movimientos y proyecciones de caja para el holding
- Integración con ERP Manager para extracción automática de datos vía API o vista de BD
- Carga estructurada de datos de ingreso manual mediante plantilla CSV provista por el sistema
- Perfilamiento de usuarios por módulo
- Reportería con filtros por empresa, ítem, granularidad temporal y tipo de cambio
- Gestión de notas sobre registros del flujo
- Carga masiva inicial para migración de 1 mes de histórico previo al go-live

**Excluye (OUT):**

*Declarar explícitamente qué no cubre este desarrollo para evitar expansión de alcance.*

`[EJEMPLO]`
- Reemplazo o modificación del ERP Manager
- Integración con portales bancarios externos (sin API disponible — carga CSV manual)
- Módulos de contabilidad, RRHH o nómina
- Cálculo o gestión de remuneraciones más allá de los datos proyectados del flujo

### 1.3 Transversalidad — Requisito Arquitectónico Obligatorio

> ⚠ **Todo nuevo aplicativo desarrollado para Grupo EBI debe ser transversal al holding desde su versión inicial.**
> No se aceptan soluciones mono-empresa que requieran refactoring posterior para escalar al resto de las empresas.

*Describir cómo el sistema cumple este requisito: modelo de datos multi-empresa, configuración por empresa, visibilidad consolidada, etc.*

`[EJEMPLO]` El sistema opera de forma centralizada desde el área de Finanzas, que gestiona el Cash Flow de todas las empresas del holding. Las empresas no acceden al sistema individualmente. El modelo de datos incluye el campo `empresa_id` como atributo obligatorio en todas las entidades core, permitiendo filtrado, consolidación y reporte por empresa o vista holding desde v1.

### 1.4 Supuestos y dependencias

*Listar los supuestos que deben ser verdaderos para que el proyecto resulte, y las dependencias externas o internas.*

`[EJEMPLO]`
- El área de Finanzas opera de forma centralizada para todas las empresas del holding
- El proveedor de desarrollo será seleccionado mediante proceso formal — este documento es el insumo base
- El proveedor del ERP Manager habilitará API o vista de base de datos de solo lectura para la integración
- Existe Azure Active Directory corporativo disponible para integración SSO

---

## 2. Arquitectura y Diseño de Solución

### 2.1 Resumen de la solución

*Describir a alto nivel qué se construirá: tipo de aplicación, modelo de despliegue, características principales.*

`[EJEMPLO]` Aplicación web centralizada, multi-empresa a nivel de datos, operada exclusivamente por el área de Finanzas de Grupo EBI.

### 2.2 Componentes requeridos

*Listar los componentes técnicos que el proveedor debe contemplar. No prescribir tecnologías específicas salvo restricciones justificadas.*

| Componente | Descripción |
|---|---|
| `[EJEMPLO]` Frontend web | `[EJEMPLO]` Interfaz de usuario: carga de datos, visualización, reportería, administración |
| `[EJEMPLO]` Backend / API | `[EJEMPLO]` Lógica de negocio, reglas de validación, orquestación de integraciones |
| `[EJEMPLO]` Base de datos | `[EJEMPLO]` Modelo relacional con soporte multi-empresa (`empresa_id` obligatorio en entidades core) |
| `[EJEMPLO]` Módulo ETL / Carga | `[EJEMPLO]` Procesamiento y validación de archivos CSV con log de errores por fila |
| `[EJEMPLO]` Módulo de integración ERP | `[EJEMPLO]` Conexión a Manager vía API o vista de BD — lectura únicamente |
| `[EJEMPLO]` Módulo de reportería | `[EJEMPLO]` Vistas consolidadas con filtros por empresa, ítem, moneda, período |
| `[EJEMPLO]` Módulo de administración | `[EJEMPLO]` Gestión de usuarios, roles y permisos por módulo |
| `[EJEMPLO]` Logs de auditoría | `[EJEMPLO]` Registro inmutable de acciones sobre datos — obligatorio |

### 2.3 Tecnologías / Stack

*Si no existe restricción tecnológica, indicarlo explícitamente. Si existe (por compatibilidad, infraestructura o política), declararlo aquí.*

`[EJEMPLO]` Stack tecnológico a proponer por el proveedor, sujeto al cumplimiento íntegro de los requisitos de seguridad definidos en la Sección 6. El proveedor debe justificar las elecciones tecnológicas en términos de mantenibilidad, seguridad y soporte a largo plazo.

### 2.4 Diagrama de arquitectura

*Insertar diagrama o referencia al archivo adjunto. Si está pendiente, indicarlo con fecha compromiso.*

`[EJEMPLO]` Pendiente — a producir por el proveedor en fase de diseño, previo a la aprobación del Gateway 2 (Aprobación del Plan).

---

## 3. Requerimientos Funcionales

*Un requerimiento por fila. Prioridad: Alta / Media / Baja. Criterio de aceptación: condición verificable y objetiva.*

| ID | Requerimiento | Prioridad | Origen | Criterio de aceptación |
|---|---|---|---|---|
| RF-001 | `[EJEMPLO]` El sistema debe consolidar movimientos bancarios y proyecciones de caja para todas las empresas del holding | Alta | `[EJEMPLO]` Levantamiento Funcional — Pasos 1 y 2 | `[EJEMPLO]` Reporte consolidado por empresa y holding disponible sin intervención manual |
| RF-002 | `[EJEMPLO]` Integración con ERP Manager para extracción automática de las 10 fuentes de datos identificadas | Alta | `[EJEMPLO]` Levantamiento Funcional — Paso 1 | `[EJEMPLO]` Datos disponibles en el sistema sin descarga manual desde Manager |
| RF-003 | `[EJEMPLO]` Carga de datos de ingreso manual vía plantilla CSV con validación de estructura y reporte de errores | Alta | `[EJEMPLO]` Levantamiento Funcional — Paso 2 | `[EJEMPLO]` El sistema valida estructura, rechaza filas con error y genera log de carga descargable |
| RF-004 | `[EJEMPLO]` Perfilamiento de usuarios: asignación de acceso por módulo según rol | Alta | `[EJEMPLO]` Levantamiento Funcional — Paso 3 | `[EJEMPLO]` Un usuario sin permiso a un módulo no puede acceder ni visualizar sus datos |
| RF-005 | `[EJEMPLO]` Gestión de notas sobre registros: texto libre con autor y timestamp | Media | `[EJEMPLO]` Levantamiento Funcional — Paso 4 | `[EJEMPLO]` La nota queda asociada al registro, es visible en la vista y no modifica el valor del registro |
| RF-006 | `[EJEMPLO]` Reportería con filtros: empresa, ítem, granularidad (diario / semanal / mensual / anual / personalizado) y tipo de cambio | Alta | `[EJEMPLO]` Levantamiento Funcional — Paso 5 | `[EJEMPLO]` El usuario genera cualquier combinación de filtros y obtiene vista consistente en ≤ 3 segundos |
| RF-007 | `[EJEMPLO]` Carga masiva inicial desde CSV para migración de 1 mes de histórico previo al go-live | Alta | `[EJEMPLO]` Levantamiento Funcional — Paso 6 | `[EJEMPLO]` Proceso reporta registros procesados, rechazados y log de errores. Totales coinciden con archivo origen |
| RF-008 | `[EJEMPLO]` Las empresas del holding deben estar mapeadas en el modelo de datos desde v1 | Alta | `[EJEMPLO]` Requisito de transversalidad | `[EJEMPLO]` Toda entidad core tiene campo `empresa_id`. Los reportes permiten filtrar por empresa o vista consolidada |
| RF-009 | `[EJEMPLO]` El sistema debe gestionar el estado "pendiente" del input de cobranza como bloqueante del cierre de período | Media | `[EJEMPLO]` Levantamiento Funcional — punto de dolor Paso 1 | `[EJEMPLO]` Si el archivo de cobranza no ha sido cargado, el sistema indica estado de espera e impide el cierre del período |
| RF-010 | `[EJEMPLO]` Distribución del reporte ejecutivo directamente desde la plataforma | Media | `[EJEMPLO]` Levantamiento Funcional — punto de dolor distribución | `[EJEMPLO]` El usuario genera y distribuye el reporte desde la plataforma sin exportar ni adjuntar por correo |
| RF-NNN | *Agregar requerimientos según levantamiento funcional del proyecto* | | | |

---

## 4. Requerimientos No Funcionales

| Categoría | Requisito | Métrica / Validación |
|---|---|---|
| Rendimiento | `[EJEMPLO]` Tiempos de respuesta en reportería y carga | `[EJEMPLO]` Vistas consolidadas: p95 < 3 s. Carga CSV de hasta 10.000 filas: < 60 s. Pruebas de carga obligatorias antes de UAT |
| Disponibilidad | `[EJEMPLO]` El sistema debe estar disponible antes del mediodía de lunes a viernes (proceso crítico diario) | `[EJEMPLO]` SLA ≥ 99,5% mensual en horario hábil. Ventana de mantenimiento: fines de semana fuera de horario operativo |
| Escalabilidad | `[EJEMPLO]` El modelo de datos debe soportar incorporación de nuevas empresas del holding sin cambios de arquitectura | `[EJEMPLO]` Validado mediante revisión de diseño de BD antes de aprobación del Gateway 2 |
| Trazabilidad | Toda modificación sobre datos debe quedar registrada con usuario, acción, timestamp y valor anterior / posterior | Log de auditoría inmutable. Retención mínima: 12 meses en línea + 24 meses en archivo |
| Usabilidad | `[EJEMPLO]` El sistema debe ser operable por usuarios no técnicos del área de Finanzas | `[EJEMPLO]` Validado en sesión de UAT con usuarios clave sin soporte TI requerido para operación diaria |
| *Categoría adicional* | *Agregar según características del proyecto* | |

---

## 5. Integraciones, Interfaces y APIs

*Documentar toda integración con sistemas externos o internos. Indicar tipo, datos involucrados, frecuencia y SLA.*

| Sistema | Tipo de integración | Datos / Operación | Frecuencia / SLA |
|---|---|---|---|
| `[EJEMPLO]` ERP Manager | `[EJEMPLO]` API REST o vista de BD de solo lectura — habilitación confirmada por proveedor ERP | `[EJEMPLO]` 10 fuentes: CxP, conciliación bancaria, cheques, inversiones, CxC, provisión, factoring, rendiciones, créditos, leasing | `[EJEMPLO]` Viernes antes de 09:00 AM. Ejecución manual o job programado |
| `[EJEMPLO]` Archivos CSV manuales | `[EJEMPLO]` Carga estructurada por interfaz web mediante plantilla provista por el sistema | `[EJEMPLO]` 9 categorías de ingreso manual: leasing, créditos, deuda relacionadas, arriendos, backlog, compras proyectadas, remuneraciones, seguros, impuestos | `[EJEMPLO]` Semanal / mensual según fuente. Validación de estructura previa al procesamiento |
| `[EJEMPLO]` Portal bancario | `[EJEMPLO]` Sin integración automática — carga manual CSV por el usuario | `[EJEMPLO]` Extractos bancarios diarios | `[EJEMPLO]` Diario. El sistema valida formato del CSV bancario antes de procesar |
| *Sistema adicional* | | | |

> *Si existe una integración cuya viabilidad técnica no ha sido confirmada, indicarlo explícitamente y declararlo como riesgo activo en la Sección 10.*

---

## 6. Seguridad, Auditoría y Cumplimiento

> ⚠ **Esta sección es obligatoria y no negociable para todo proveedor de desarrollo contratado por Grupo EBI.**
> El cumplimiento de estos requisitos es condición de aprobación del Gateway Final. No existen excepciones.

### 6.1 Marco Normativo Aplicable

| Normativa | Aplicabilidad | Exigencia al proveedor |
|---|---|---|
| **Ley Marco de Ciberseguridad (Ley 21.663)** | Aplica a todos los aplicativos del holding | El desarrollo debe ser consistente con los principios de esta ley. El detalle de cumplimiento y registro operativo se gestiona en el aplicativo de Ciberseguridad del portfolio TI |
| **Ley de Protección de Datos Personales (Ley 19.628 y modificaciones vigentes)** | Aplica cuando el sistema procesa datos asociados a personas naturales (empleados, proveedores, clientes) | El proveedor debe garantizar que el tratamiento de datos personales cumple los principios de finalidad, proporcionalidad y seguridad. Datos personales no pueden ser procesados fuera del territorio nacional sin autorización explícita de Grupo EBI |

### 6.2 Autenticación y Autorización

- Autenticación multifactor (MFA) obligatoria para todos los usuarios
- Integración con Azure Active Directory corporativo (SSO) — **requerido como estándar, no opcional**
- Control de acceso basado en roles (RBAC) con principio de mínimo privilegio
- Sesiones con tiempo de expiración configurable por el administrador del sistema
- Cualquier acceso externo (soporte del proveedor) debe estar controlado, auditado y ser revocable por Grupo EBI en cualquier momento

### 6.3 Seguridad del Código y del Desarrollo

- El proveedor debe entregar el **código fuente completo** como parte del contrato — sin dependencia de custodia exclusiva por el proveedor
- Análisis de vulnerabilidades estático (**SAST**) obligatorio antes de cada despliegue a PROD
- Sin dependencias de librerías con vulnerabilidades conocidas de severidad **alta o crítica (CVE)** al momento de entrega
- Gestión de secrets: **prohibido hardcodear credenciales** en código fuente, scripts o archivos de configuración versionados
- **OWASP Top 10** como estándar mínimo de referencia para el desarrollo de aplicaciones web

### 6.4 Cifrado y Protección de Datos

- Datos en tránsito: **TLS 1.2 o superior** — obligatorio en todos los endpoints
- Datos en reposo: cifrado de columnas sensibles en base de datos (datos financieros, identificadores de personas naturales)
- Prohibición de almacenamiento o procesamiento de datos fuera del territorio nacional salvo autorización explícita y documentada de Grupo EBI

### 6.5 Auditoría y Trazabilidad

- Log de auditoría **inmutable**: toda creación, modificación o eliminación de registros debe quedar registrada con usuario, timestamp, acción y valor previo / posterior
- Los logs **no deben poder ser eliminados ni modificados** por usuarios operativos, incluyendo administradores del sistema
- Retención mínima de logs: **12 meses en línea + 24 meses en archivo**
- El sistema debe permitir exportar logs de auditoría ante requerimiento de auditoría interna o externa

### 6.6 Entornos y Despliegue Seguro

- Ambientes separados obligatorios: **DEV / QA / UAT / PROD**
- **Ningún dato productivo real** en ambientes de desarrollo, QA ni UAT
- El proveedor debe entregar un **plan de rollback documentado** antes de cada despliegue a PROD
- El acceso del proveedor a PROD debe estar controlado, auditado y revocable por Grupo EBI en cualquier momento

### 6.7 Entregables de Seguridad Obligatorios al Cierre del Proyecto

- [ ] Informe de análisis de vulnerabilidades (resultado de SAST)
- [ ] Documentación del modelo de roles y permisos
- [ ] Manual de operación de seguridad: gestión de accesos, rotación de credenciales, respuesta a incidentes
- [ ] Evidencia de pruebas de penetración básicas (pentest interno o externo — alcance a definir en contrato)

---

## 7. Datos — Modelo, Diccionario y Calidad

> *Esta sección debe completarse antes de iniciar el desarrollo. Si el modelo de datos depende de sesiones técnicas pendientes, declararlo explícitamente con fecha compromiso.*

### 7.1 Entidades principales identificadas

| Entidad | Descripción | Observación |
|---|---|---|
| `[EJEMPLO]` `empresa` | `[EJEMPLO]` Empresas del holding | `[EJEMPLO]` Campo transversal obligatorio desde v1 |
| `[EJEMPLO]` `periodo` | `[EJEMPLO]` Período del flujo (diario / semanal / mensual) | `[EJEMPLO]` Define granularidad de los registros |
| `[EJEMPLO]` `item_flujo` | `[EJEMPLO]` Categorías del flujo de caja (ingresos / egresos por tipo) | `[EJEMPLO]` Mapear desde estructura del archivo maestro |
| `[EJEMPLO]` `movimiento` | `[EJEMPLO]` Registro individual del flujo | `[EJEMPLO]` FK a empresa, período, ítem |
| `[EJEMPLO]` `nota_gestion` | `[EJEMPLO]` Comentario asociado a un movimiento | `[EJEMPLO]` FK a movimiento, usuario, timestamp |
| `[EJEMPLO]` `usuario` | `[EJEMPLO]` Usuarios del sistema | `[EJEMPLO]` Roles y permisos por módulo |
| `[EJEMPLO]` `log_auditoria` | `[EJEMPLO]` Registro inmutable de acciones | `[EJEMPLO]` Sin UPDATE ni DELETE permitidos |
| `[EJEMPLO]` `carga_csv` | `[EJEMPLO]` Registro de procesos de carga masiva | `[EJEMPLO]` Log de resultado por carga: procesados, rechazados, errores |
| *Entidad adicional* | | |

### 7.2 Reglas de calidad de datos

*Declarar reglas de validación obligatorias para los datos que ingresan al sistema, especialmente en cargas CSV.*

`[EJEMPLO]`
- Toda fila del CSV debe incluir `empresa_id`, `fecha`, `item_flujo` y `monto` — campos obligatorios
- El campo `monto` debe ser numérico. Filas con valor no numérico son rechazadas con descripción de error
- Fechas deben estar en formato `YYYY-MM-DD`. Otros formatos son rechazados
- El sistema no acepta filas duplicadas (mismo `empresa_id` + `fecha` + `item_flujo` + `monto` + `origen`)

---

## 8. Despliegue, Operación y Monitoreo

| Elemento | Requisito |
|---|---|
| Ambientes | DEV / QA / UAT / PROD — separación obligatoria (ver Sección 6.6) |
| Infraestructura | *On-premise / nube / híbrido — definir según política de infraestructura del holding. Si es nube, región Chile o equivalente con cumplimiento Ley 19.628* |
| Estrategia de despliegue | A definir con el proveedor. Requisito mínimo: plan de rollback documentado y probado antes de cada despliegue a PROD |
| Monitoreo | `[EJEMPLO]` Disponibilidad del servicio, tiempo de respuesta y errores de integración con Manager deben ser monitoreados activamente con alertas configuradas |
| Alertas críticas | `[EJEMPLO]` Alerta automática si el job de integración con Manager falla antes de las 09:00 AM del día hábil (proceso bloqueante para el reporte ejecutivo) |
| SLA de disponibilidad | `[EJEMPLO]` El reporte ejecutivo debe estar disponible antes del mediodía del día hábil — condición de aceptación del sistema |
| Backups | `[EJEMPLO]` RPO máximo: 24 horas. RTO máximo: 4 horas. Estrategia de respaldo a confirmar con proveedor según infraestructura seleccionada |

---

## 9. Pruebas y Criterios de Aceptación

| Tipo | Alcance | Responsable / Evidencia |
|---|---|---|
| Unitarias | `[EJEMPLO]` Lógica de validación de CSV, reglas de negocio del flujo, control de acceso por rol | `[EJEMPLO]` Proveedor — cobertura mínima 70% en lógica crítica. Evidencia: reporte de cobertura entregado como artefacto |
| Integración | `[EJEMPLO]` Conexión ERP Manager (API / vista BD), procesamiento de CSV, logs de auditoría | `[EJEMPLO]` Proveedor + Jefe TI — evidencia: resultado de ejecución en QA con datos reales de Manager |
| UAT | `[EJEMPLO]` Escenarios del proceso semanal completo: extracción Manager → carga CSV → consolidación → reporte ejecutivo | `[EJEMPLO]` Tesorera Ivette Valdéz + Jefa Finanzas Evelyn Brown — evidencia: acta de aprobación firmada por ambas |
| Seguridad | Validación OWASP Top 10, configuración de autenticación, verificación de logs de auditoría | Proveedor entrega informe de SAST. Jefe TI valida antes de aprobación del Gateway Final |
| Carga masiva inicial | `[EJEMPLO]` Migración de 1 mes de histórico desde archivo maestro .xls — validación de integridad de datos | `[EJEMPLO]` PM + Jefa Finanzas — evidencia: comparación de totales por período entre archivo origen y sistema |

---

## 10. Riesgos, Supuestos y Pendientes Técnicos

| # | Riesgo / Pendiente | Impacto | Mitigación / Próximo paso |
|---|---|---|---|
| 1 | `[EJEMPLO]` Lógica de cálculo del archivo maestro Excel no está documentada — puede haber dependencias implícitas entre hojas | Alto | `[EJEMPLO]` Sesión técnica dedicada con Analista de Tesorería antes de aprobar diseño de BD — **pendiente** |
| 2 | `[EJEMPLO]` El holding tiene 11 instancias independientes de Manager — la integración puede requerir 11 configuraciones de conexión separadas | Alto | `[EJEMPLO]` Confirmar con Jefe TI cuántas instancias participan en el proceso y si existe una instancia consolidada |
| 3 | `[EJEMPLO]` La selección del proveedor puede extender el cronograma del proyecto | Medio | `[EJEMPLO]` Iniciar proceso de búsqueda en paralelo con la validación de este documento |
| 4 | `[EJEMPLO]` Carga masiva inicial genera errores de validación por calidad de datos del archivo .xls legacy | Medio | `[EJEMPLO]` Prototipo de carga en DEV con datos reales antes del go-live. No condicionar el lanzamiento a datos históricos perfectos |
| *N* | *Descripción del riesgo* | Alto / Medio / Bajo | *Acción y responsable* |

---

## 11. Preguntas Abiertas y Pendientes

*Eliminar filas una vez respondidas. Este registro debe estar vacío al momento de aprobación del Gateway 2.*

| # | Pregunta / Pendiente | Dirigida a | Fecha compromiso |
|---|---|---|---|
| T-01 | `[EJEMPLO]` ¿Existen macros o lógica de cálculo embebida en el archivo Excel maestro que deba documentarse y replicarse en la plataforma? | `[EJEMPLO]` Analista de Tesorería / Jefa de Finanzas | |
| T-02 | `[EJEMPLO]` ¿Cuántas instancias de Manager participan en el proceso y requieren configuración de conexión? | `[EJEMPLO]` Jefe TI | |
| *T-NN* | *Pregunta pendiente* | | |

---

## 12. Validación y Aprobación

*Con la firma de los aprobadores se autoriza el inicio del proceso de selección de proveedor o desarrollo interno.*

| Nombre | Rol | Firma / Fecha |
|---|---|---|
| `[EJEMPLO]` Diego Morales | `[EJEMPLO]` Project Manager TI | |
| `[EJEMPLO]` Evelyn Brown | `[EJEMPLO]` Jefa de Finanzas | |
| `[EJEMPLO]` René Gutiérrez | `[EJEMPLO]` Director Financiero | |

---

*Especificación Técnica de Proyecto — Plantilla Base v1.0 · Área de Tecnología · Grupo EBI*
*Documento normativo — vigente a partir de marzo 2026*
