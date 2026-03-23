# ACTUALIZACION-CONTEXTO — v1.1
## Incorporacion Estructura Organizacional del Area TI

**Fecha:** 23 marzo 2026
**Origen:** Analisis documento `Estructura_Organizacional_TI_v1.docx`
**Autor documento fuente:** Diego Morales — PM TI
**Aplica a:** `00-contexto/CONTEXTO-PROYECTO.md` — reemplaza y amplia seccion 3 (Equipo)

> Incorporar el contenido de este archivo al CONTEXTO-PROYECTO.md antes de continuar
> con cualquier tarea de documentacion del vault.

---

## 1. Modelo estructural oficial del area TI

El area TI opera con dos niveles jerarquicos y un vinculo de codecision funcional.
El organigrama refleja la realidad operativa — no un modelo aspiracional.

```
GERENCIA TI (GG)
Decision estrategica | Presupuesto | Priorizacion ejecutiva | Aprobacion de Gateway
        |
JEFE DE AREA TI (JTI)
Comando tecnico-operativo | Decision tecnica final | Relacion con proveedores
Seguridad base | Administracion de sistemas | Escalamiento tecnico
        |
   _____|_____________________________
   |              |                  |
ARI            SPT                  PM
Infra y Redes  Soporte TI           Project Manager
                                    (rol transversal — codecision)
```

**Nota critica sobre el PM:** El PM reporta jerarquicamente al Jefe TI. Sin embargo,
en el ambito de proyectos e iniciativas del area, ambos ejercen codecision funcional
activa. El JTI aporta autoridad tecnica, el PM aporta gobierno, trazabilidad y
gestion de portfolio. Esto no altera la linea de mando — la complementa.

---

## 2. Descripcion actualizada de roles

### Gerencia TI (GG)
- Definicion de estrategia tecnologica alineada al negocio
- Gestion y aprobacion del presupuesto TI
- Representacion del area ante direccion y comites ejecutivos
- Priorizacion del portfolio con el Jefe TI
- Aprobacion de Gateways formales de proyecto
- Aprobacion de inversiones y contrataciones externas
- **Escala a:** Direccion general para decisiones que impactan al negocio

### Jefe de Area TI (JTI)
- Direccion tecnica de los encargados operativos
- Decision tecnica en infraestructura, sistemas y seguridad base
- Gestion de relacion con proveedores y contratos
- Escalamiento tecnico de incidentes de infra y sistemas
- Codecision con el PM en iniciativas y proyectos del area
- Validacion tecnica del plan de proyectos antes de Gateway
- Supervision de la ejecucion operativa del equipo
- **Escala a:** GG en decisiones de presupuesto o impacto estrategico

### ARI — Encargado de Infraestructura y Redes
- Administracion de servidores fisicos y virtuales
- Gestion de red, conectividad y equipamiento de comunicaciones
- Administracion de sistemas base (Active Directory, SQL Server)
- Ejecucion de backups y verificacion de recuperabilidad
- Mantenimiento de la continuidad operacional basica
- Soporte tecnico de segundo nivel para incidentes de infra
- **Escala a:** JTI para cambios en infraestructura o inversion de activos

### SPT — Encargado de Soporte TI
- Atencion de mesa de ayuda — incidentes de primer y segundo nivel
- Gestion del ciclo de vida de activos TI (inventario, asignacion, baja)
- Ejecucion de onboarding y offboarding de cuentas de usuario
- Registro y seguimiento de tickets de soporte
- Coordinacion con ARI para escalamiento de incidentes
- **Escala a:** JTI cuando el incidente involucra infraestructura o sistemas

### PM — Project Manager (Diego Morales)
- Gobierno y trazabilidad del portfolio de proyectos TI
- Activacion y control de Gateway del ciclo de vida de proyectos
- Levantamiento y documentacion de procesos del area
- Coordinacion con el JTI en la codecision de iniciativas
- Reportabilidad del portfolio al GG
- Creacion y mantenimiento de entornos digitales (Teams + Planner)
- Control de desviaciones y gestion de riesgos de proyecto
- **Escala a:** GG para aprobacion de Gateways formales
- **Escala a:** JTI para validacion tecnica de planes y decisiones de alcance

### CE — Consultor ERP (Alexi)
**Definicion corregida respecto a version anterior:**
- No es un rol tecnico ejecutor — es una fuente de conocimiento historico
- Interlocutor del holding: sabe como estan configurados los sistemas hoy
- Puede documentar bajo guia del PM, pero no de forma autonoma
- Participa en sesiones estructuradas donde el PM extrae la informacion
- Confirma documentacion tecnica producida por el PM
- Disponible para consultas puntuales durante el levantamiento
- **Todo el trabajo tecnico de levantamiento lo ejecuta el PM directamente**

---

## 3. Dominios de responsabilidad y escalamiento

| Dominio | Responsable primario | Escala a |
|---|---|---|
| Incidentes de usuario | SPT | JTI (si es infra) |
| Infraestructura fisica y red | ARI | JTI |
| Administracion de sistemas | ARI + JTI | JTI |
| Seguridad base (accesos, logs) | JTI | GG |
| Relacion con proveedores | JTI | GG (presupuesto) |
| Portfolio de proyectos | PM | GG |
| Gateway de proyecto | PM + JTI + GG | — |
| Levantamiento de procesos | PM | JTI (validacion tecnica) |
| Presupuesto y priorizacion | GG + JTI | — |
| Compras y activos TI | JTI | GG (aprobacion) |
| Onboarding/offboarding cuentas | SPT + JTI | JTI |

---

## 4. Capacidades del area — inventario

### Cubiertas internamente
| Capacidad | Responsable |
|---|---|
| Seguridad basica (contraseñas, accesos, logs) | JTI |
| Continuidad operacional basica | ARI |
| Gestion de identidades basica (AD, cuentas) | SPT + JTI |
| Mesa de ayuda y soporte a usuarios | SPT |
| Gestion de portfolio y proyectos | PM |
| Administracion de sistemas base | ARI + JTI |

### Por proveedor o proyecto (no cubiertas internamente hoy)
| Capacidad | Estado |
|---|---|
| Ciberseguridad avanzada (SOC, SIEM) | Proveedor externo / Proyecto |
| DRP y BCP formales documentados | Proyecto puntual pendiente |
| Arquitectura empresarial | Proyecto puntual pendiente |

### Brechas conocidas (Fase 2+)
| Capacidad | Estado |
|---|---|
| Desarrollo y automatizacion interna | Requiere recurso futuro |
| QA y gestion de calidad formal | Requiere recurso futuro |

---

## 5. Implicancias para la asignacion de tareas del plan

Esta seccion corrige y precisa la asignacion de tareas respecto al mapeo anterior:

**El PM (Diego) es ejecutor directo de:**
- Todo el levantamiento tecnico Level B y Level C del catastro
- Diseno de arquitectura objetivo de la nueva infraestructura
- Diseno del esquema unificado de BD
- Modelo de datos maestros del holding
- Diseno de mecanismos de sincronizacion y conectores
- Plan de migracion por solucion con rollback
- Redaccion de las 5 politicas TI
- Toda la documentacion tecnica del plan

**ARI es ejecutor directo de:**
- Implementacion fisica de plataforma de BD (servidores, conectividad)
- Habilitacion MFA en sistemas criticos
- DRP tecnico (PM lo redacta, ARI lo ejecuta)
- Monitoreo y operacion de la capa de integracion
- Ejecucion fisica de migraciones

**SPT es ejecutor directo de:**
- Canal formal de soporte TI
- Antivirus corporativo (despliegue y cobertura)
- Instructivos de usuario por aplicativo critico
- Onboarding en nueva infraestructura

**JTI participa en:**
- Validaciones formales (organigrama, catastro, politicas)
- Codecision en gateways
- Gestion de proveedores
- Decisiones de arquitectura con impacto presupuestario

**CE (Alexi) participa como fuente en:**
- Sesiones de extraccion conducidas por el PM
- Confirmacion de documentacion producida por el PM
- Consultas puntuales sobre sistemas del holding

---

## 6. Modelo de madurez del area

El documento organizacional define explicitamente las fases de madurez:

| Fase | Estado | Descripcion |
|---|---|---|
| Fase 1 — Operacional | **ACTIVA** | Control operativo basico, roles definidos, portfolio gestionado |
| Fase 2 — Visibilidad Portfolio | Proxima | Dashboard consolidado, KPIs basicos |
| Fase 3 — KPIs | Futura | Metricas estandarizadas, reportabilidad automatica |
| Fase 4 — Predictivo | Futura | Gobernanza predictiva, inteligencia de datos |

El plan de gobernanza 2026 opera en Fase 1 con el objetivo de habilitar la transicion
a Fase 2 al cierre del año (Gateway G5).

---

## 7. Proximos pasos segun el documento organizacional

El documento define estos pasos de formalizacion (tareas 1.01–1.04 del WS-1):

| N | Accion | Responsable |
|---|---|---|
| 1 | Revision del documento por Jefe TI — validar dominios | JTI + PM |
| 2 | Ajuste de la estructura segun observaciones | PM |
| 3 | Validacion y firma formal por Gerente TI (GG) | GG |
| 4 | Publicacion en canal Teams del area como referencia operativa | PM |
| 5 | Revision periodica trimestral para ajustar segun evolucion | JTI + PM |
| 6 | Elevacion a organigrama oficial una vez validado en operacion | GG |

---

*Actualizacion generada: 23 marzo 2026 — v1.1*
*Siguiente actualizacion prevista: post-definicion detalle de tareas por WS*
