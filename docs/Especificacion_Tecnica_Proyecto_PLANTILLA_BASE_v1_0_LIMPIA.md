# Especificación Técnica de Proyecto
## Plantilla Base — Área de Tecnología · Grupo EBI

---

## Encabezado del Documento

| Campo | Valor |
|---|---|
| Nombre del proyecto | |
| ID del proyecto | |
| Documento fuente | |
| Versión | v0.1 (borrador) |
| Fecha | |
| Autor | |
| Estado | Propuesto / En revisión / Aprobado |
| Aprobadores | |

---

## 1. Propósito, Alcance y Relación Documental

### 1.1 Objetivo del sistema

### 1.2 Alcance

**Incluye (IN):**

**Excluye (OUT):**

### 1.3 Transversalidad — Requisito Arquitectónico Obligatorio

> ⚠ **Todo nuevo aplicativo desarrollado para Grupo EBI debe ser transversal al holding desde su versión inicial.**
> No se aceptan soluciones mono-empresa que requieran refactoring posterior para escalar al resto de las empresas.

### 1.4 Supuestos y dependencias

---

## 2. Arquitectura y Diseño de Solución

### 2.1 Resumen de la solución

### 2.2 Componentes requeridos

| Componente | Descripción |
|---|---|
| | |
| | |
| | |
| | |

### 2.3 Tecnologías / Stack

### 2.4 Diagrama de arquitectura

---

## 3. Requerimientos Funcionales

| ID | Requerimiento | Prioridad | Origen | Criterio de aceptación |
|---|---|---|---|---|
| RF-001 | | | | |
| RF-002 | | | | |
| RF-003 | | | | |
| RF-NNN | | | | |

---

## 4. Requerimientos No Funcionales

| Categoría | Requisito | Métrica / Validación |
|---|---|---|
| Rendimiento | | |
| Disponibilidad | | |
| Escalabilidad | | |
| Trazabilidad | Toda modificación sobre datos debe quedar registrada con usuario, acción, timestamp y valor anterior / posterior | Log de auditoría inmutable. Retención mínima: 12 meses en línea + 24 meses en archivo |
| Usabilidad | | |

---

## 5. Integraciones, Interfaces y APIs

| Sistema | Tipo de integración | Datos / Operación | Frecuencia / SLA |
|---|---|---|---|
| | | | |
| | | | |

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

### 7.1 Entidades principales identificadas

| Entidad | Descripción | Observación |
|---|---|---|
| | | |
| | | |
| | | |

### 7.2 Reglas de calidad de datos

---

## 8. Despliegue, Operación y Monitoreo

| Elemento | Requisito |
|---|---|
| Ambientes | DEV / QA / UAT / PROD — separación obligatoria (ver Sección 6.6) |
| Infraestructura | |
| Estrategia de despliegue | Requisito mínimo: plan de rollback documentado y probado antes de cada despliegue a PROD |
| Monitoreo | |
| Alertas críticas | |
| SLA de disponibilidad | |
| Backups | |

---

## 9. Pruebas y Criterios de Aceptación

| Tipo | Alcance | Responsable / Evidencia |
|---|---|---|
| Unitarias | | |
| Integración | | |
| UAT | | |
| Seguridad | Validación OWASP Top 10, configuración de autenticación, verificación de logs de auditoría | Proveedor entrega informe de SAST. Jefe TI valida antes de aprobación del Gateway Final |
| Carga masiva inicial | | |

---

## 10. Riesgos, Supuestos y Pendientes Técnicos

| # | Riesgo / Pendiente | Impacto | Mitigación / Próximo paso |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## 11. Preguntas Abiertas y Pendientes

| # | Pregunta / Pendiente | Dirigida a | Fecha compromiso |
|---|---|---|---|
| T-01 | | | |
| T-02 | | | |

---

## 12. Validación y Aprobación

| Nombre | Rol | Firma / Fecha |
|---|---|---|
| | | |
| | | |
| | | |

---

*Especificación Técnica de Proyecto — Plantilla Base v1.0 · Área de Tecnología · Grupo EBI*
*Documento normativo — vigente a partir de marzo 2026*
