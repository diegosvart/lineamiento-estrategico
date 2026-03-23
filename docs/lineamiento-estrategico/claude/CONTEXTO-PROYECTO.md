# CONTEXTO-PROYECTO — Plan de Transformacion Area TI Grupo EBI 2026

**Documento de traspaso para Claude Code**
**Generado desde:** claude.ai — Proyecto "Plan Gobernanza TI Grupo EBI"
**Fecha:** 23 de marzo de 2026
**Responsable:** Diego Morales — Project Manager TI

> **IMPORTANTE:** Este documento es el punto de arranque para Claude Code.
> El contexto completo del proyecto sigue siendo trabajado en claude.ai en paralelo.
> Se entregaran actualizaciones periodicas de este archivo con nuevas decisiones,
> ajustes de planificacion y contenido detallado por lineamiento.
> Claude Code debe leer este archivo al inicio de cada sesion antes de modificar el vault.

---

## 1. Quien es Diego Morales

Project Manager del area TI de Grupo EBI. Perfil hibrido: PM con conocimientos tecnicos
profundos en bases de datos, arquitectura de software y desarrollo. Esto es relevante porque
la mayoria de las tareas tecnicas del plan recaen sobre el PM directamente, no sobre perfiles
tecnicos del equipo. Trabaja 4 hh/dia en el plan de gobernanza y 4 hh/dia en el portafolio
en ejecucion (total 8 hh/dia habiles).

---

## 2. Organizacion y contexto

**Grupo EBI:** Holding con 11 subsidiarias. Opera en Chile con vinculo corporativo internacional
(Canada / Costa Rica).

**Estado del area TI:** En construccion activa. Hace pocos meses no existia como unidad formal.
Hoy tiene cinco roles definidos y un portfolio en ejecucion.

**Objetivo estrategico 2026:** Transversalidad entre las 11 companias — homogenizacion de datos,
interoperabilidad de sistemas, reportes consolidados confiables.

---

## 3. Equipo del area TI — Estructura y dominios de responsabilidad

### Modelo estructural oficial

El area TI opera con dos niveles jerarquicos y un vinculo de codecision funcional. El organigrama refleja la realidad operativa — no un modelo aspiracional.

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

### Descripcion de roles

| Rol | Codigo | Responsabilidades principales |
|---|---|---|
| **Gerencia TI** | GG | Estrategia tecnologica alineada al negocio. Gestion presupuesto TI. Representacion ante direccion y comites ejecutivos. Priorizacion portfolio. Aprobacion de Gateways y inversiones |
| **Jefe de Area TI** | JTI | Direccion tecnica del equipo operativo. Decision tecnica en infraestructura, sistemas y seguridad base. Gestion proveedores. Escalamiento incidentes. Codecision con PM en iniciativas. Validacion tecnica antes de Gateway |
| **Adm. Redes e Infraestructura** | ARI | Administracion servidores fisicos y virtuales. Gestion red y conectividad. Administracion sistemas base (AD, SQL Server). Backups y recuperabilidad. Soporte tecnico nivel 2 incidentes infra |
| **Soporte Tecnico** | SPT | Mesa de ayuda nivel 1–2. Gestion ciclo vida activos TI. Onboarding/offboarding cuentas. Registro tickets. Coordinacion con ARI para escalamiento |
| **Project Manager** | PM | Diego Morales. Gobierno y trazabilidad portfolio. Activacion y control Gateway. Levantamiento y documentacion procesos. Codecision con JTI. Reportabilidad a GG. Creacion entornos digitales (Teams + Planner). Control desviaciones riesgos proyecto |
| **Consultor ERP** | CE | Alexi. Fuente de conocimiento historico, NO ejecutor tecnico. Participa en sesiones estructuradas donde PM extrae informacion. Confirma documentacion producida por PM. Consultas puntuales levantamiento |

### Dominios de responsabilidad y escalamiento

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
| Onboarding/offboarding | SPT + JTI | JTI |

### Capacidades del area — inventario

**Cubiertas internamente:**
- Seguridad basica (contraseñas, accesos, logs) — JTI
- Continuidad operacional basica — ARI
- Gestion identidades basica (AD, cuentas) — SPT + JTI
- Mesa de ayuda y soporte usuarios — SPT
- Gestion portfolio y proyectos — PM
- Administracion sistemas base — ARI + JTI

**Por proveedor o proyecto (no cubiertas internamente hoy):**
- Ciberseguridad avanzada (SOC, SIEM) — Proveedor externo / Proyecto
- DRP y BCP formales documentados — Proyecto puntual pendiente
- Arquitectura empresarial — Proyecto puntual pendiente

**Brechas conocidas (Fase 2+):**
- Desarrollo y automatizacion interna — Requiere recurso futuro
- QA y gestion calidad formal — Requiere recurso futuro

### Implicancias para asignacion de tareas

**El PM (Diego) es ejecutor directo de:**
- Levantamiento tecnico Level B y Level C del catastro
- Diseno de arquitectura objetivo de nueva infraestructura
- Diseno esquema unificado de BD
- Modelo datos maestros del holding
- Diseno mecanismos sincronizacion y conectores
- Plan migracion por solucion con rollback
- Redaccion 5 politicas TI
- Toda documentacion tecnica del plan

**ARI es ejecutor directo de:**
- Implementacion fisica plataforma BD (servidores, conectividad)
- Habilitacion MFA sistemas criticos
- DRP tecnico (PM lo redacta, ARI lo ejecuta)
- Monitoreo y operacion capa integracion
- Ejecucion fisica migraciones

**SPT es ejecutor directo de:**
- Canal formal soporte TI
- Antivirus corporativo (despliegue y cobertura)
- Instructivos usuario por aplicativo critico
- Onboarding en nueva infraestructura

**JTI participa en:**
- Validaciones formales (organigrama, catastro, politicas)
- Codecision en gateways
- Gestion proveedores
- Decisiones arquitectura con impacto presupuestario

**CE (Alexi) participa como fuente en:**
- Sesiones extraccion conducidas por PM
- Confirmacion documentacion producida por PM
- Consultas puntuales sistemas del holding

### Modelo de madurez del area

El area TI avanza en fases de madurez formales:

| Fase | Estado actual | Descripcion |
|---|---|---|
| **Fase 1 — Operacional** | **ACTIVA** | Control operativo basico, roles definidos, portfolio gestionado |
| **Fase 2 — Visibilidad Portfolio** | Proxima (G5 2026) | Dashboard consolidado, KPIs basicos, reportes automaticos |
| **Fase 3 — KPIs** | Futura | Metricas estandarizadas, reportabilidad automatica, inteligencia operacional |
| **Fase 4 — Predictivo** | Futura | Gobernanza predictiva, inteligencia de datos, automatizacion decisiones |

El plan de gobernanza 2026 opera en Fase 1 con el objetivo de habilitar transicion a Fase 2 al cierre del año (Gateway G5).

---

## 4. Marco normativo (transversal a todo el plan)

Todas las tareas, entregables y decisiones del plan operan bajo:

- **Ley 19.628** — Proteccion de Datos Personales. Multas 5.000–20.000 UTM por infraccion
  aplicables a cada empresa y corporativo internacional. Requiere Delegado de Proteccion
  de Datos (DPD).
- **Ley 21.663** — Marco de Ciberseguridad. Bio Energia Los Pinos declarada OIV (Operador
  de Importancia Vital). Requiere Delegado de Ciberseguridad (DC) y cumplimiento ANCI.

---

## 5. Estructura del plan — 4 lineamientos

El plan se organiza en cuatro lineamientos de trabajo que avanzan en paralelo con
dependencias cruzadas entre fases.

### L1 — Portafolio TI en Ejecucion
Operacion continua. Seguimiento semanal de proyectos activos, reporte RAG mensual,
control de desviaciones, gateway de desvio D-30 ante vencimientos criticos.
**Carga:** 2 hh/semana seguimiento + 2 hh/mes reporte RAG. Opera todo el año.

### L2 — Estructuracion del Area TI
**Semanas 1–5 (30 Mar – ~2 May)**. 28 hh estimadas. Sin precondicion — es el punto de arranque.
Tres categorias:
- Formalizacion organizacional (organigrama, roles, DGM)
- Reduccion de dependencia externa (traspaso conocimiento de Alexi)
- Habilitacion de recursos (brechas de capacidad, reclutamiento)

### L3 — Plan de Gobernanza TI
**Semanas 4–12 (~22 Abr – 19 Jun)**. 82 hh estimadas.
Precondicion: catastro Level A completo (WS-2).
Cinco categorias:
- Infraestructura digital del area (M365: Teams + Planner + SharePoint)
- Catastro de aplicaciones (Level A → B → C, 11 subsidiarias, 78 campos)
- Diagnostico normativo (brechas Ley 19.628, OIV Ley 21.663, Deloitte)
- Politicas y procedimientos (5 politicas TI + DRP + MFA + procedimientos)
- Cierre y evidencia (validaciones, evidencia auditada, dashboard)

### L4 — Nueva Infraestructura TI
**Semana 5 en adelante — cierre Dic 2026**. WS nuevo, por dimensionar en detalle.
Requiere catastro Level C como input.
Seis categorias:
- Diseno de arquitectura (PM — conocimiento tecnico directo)
- BD central (esquema unificado para el holding)
- Homogenizacion de maestros de datos (11 empresas)
- Artefactos de sincronizacion (conectores por fuente)
- Migracion de soluciones (input del catastro)
- Nuevas aplicaciones (estandares transversales desde v1)

---

## 6. Gateways formales

| Gateway | Condicion de avance | Fecha proyectada |
|---|---|---|
| G1 | Aprobado — Gerencia General | 30 Mar 2026 |
| G2 | Catastro Level A + diagnostico normativo + portafolio priorizado | ~22 May 2026 |
| G3 | Catastro B+C + 5 politicas firmadas + proyectos normativos activos | ~26 Jun 2026 |
| G4 | Avance normativo validado con Sponsor | ~25 Sep 2026 |
| G5 | Cierre Plan Gobernanza TI 2026 + Roadmap 2027 | ~11 Dic 2026 |

---

## 7. Paralelos y dependencias clave

```
S1–S3  : L1 + L2 + inicio L3 (infraestructura digital M365)
S4–S5  : L1 + L2 cierre + L3 catastro A + L3 diagnostico normativo
S6–S9  : L1 + L3 politicas + L4 arranque (pico de carga)
S10–S12: L1 + L3 fase 3 + L4 construccion
S13–S38: L1 bucle + L4 ejecucion + cierres normativos
```

Dependencias criticas:
- L3 catastro Level C → prerequisito para inventario de migracion en L4
- L3 politicas aprobadas → prerequisito para cerrar hallazgos Deloitte en portafolio
- L2 completado → prerequisito para que L3 y L4 tengan operador formal autonomo

---

## 8. Portafolio de proyectos activos

Doce proyectos identificados, divididos en:

**Normativos (obligatorios):**
- Ley 19.628 — DPD + procedimientos + inventario datos personales
- Ley 21.663 / OIV — Programa Ciberseguridad NIST CSF + respuesta incidentes
- Auditoria Deloitte 2026 — 9 hallazgos activos (1 Deficiencia Significativa A)
- Seguro de ciberseguridad — requiere madurez minima para cobertura

**Gobernanza (internos):**
- Catastro de aplicaciones
- Mapeo ERP Manager (11 instancias SQL)

**Estrategicos de la Matriz:**
- PowerBI automatizacion
- Gestion documental
- Activo Fijo / Contabilidad
- SIA / Abastecimiento
- Sitrack (flota)
- Migracion SQL Server 2012 (sin soporte desde 2023 — mayor riesgo tecnologico)

---

## 9. Principios de diseño que rigen el plan

Estos principios fueron establecidos en la planificacion y deben respetarse en toda
documentacion generada:

- **Minima friccion:** suficiente estructura para producir maxima claridad, sin capas innecesarias
- **Planner como fuente de verdad:** si no esta en Planner, no existe
- **Gateway-driven:** ninguna fase avanza sin decision consciente en el punto de control
- **Consecuencias sobre problemas:** el lenguaje ejecutivo habla de impacto, no de dificultades
- **Conocimiento por nivel:** el catastro segmenta por lo que cada actor sabe hoy, no por rol ideal
- **Transversalidad desde v1:** toda nueva aplicacion debe ser transversal al holding desde su primera version
- **Framing de inversion:** las iniciativas de infraestructura se enmarcan como inversion preventiva, no costo administrativo

---

## 10. Ecosistema tecnologico del area

- **Microsoft 365:** Teams (comunicacion y decisiones) + Planner (ejecucion) + SharePoint (documentacion)
- **Microsoft Graph API + Python:** automatizacion de creacion de entornos digitales por proyecto
- **ERP Manager:** 11 instancias SQL independientes, una por subsidiaria. Sin consolidacion nativa
- **Claude Code:** herramienta de automatizacion y scripting para el PM
- **Obsidian:** vault de documentacion del plan (este repositorio)
- **Excalidraw:** diagramas de gobernanza y flujos de proceso

---

## 11. Estructura del vault Obsidian

```
00-indice.md                          <- indice principal con links internos
00-contexto/
  contexto-estrategico.md             <- resumen ejecutivo de la presentacion GG
  CONTEXTO-PROYECTO.md                <- este archivo (leer primero)
L1-portafolio-ti/
  README.md
L2-estructuracion-area/
  README.md
  formalizacion-organizacional/README.md
  reduccion-dependencia/README.md
  habilitacion-recursos/README.md
L3-gobernanza-ti/
  README.md
  infraestructura-digital/README.md
  catastro-aplicaciones/README.md
  diagnostico-normativo/README.md
  politicas-procedimientos/README.md
  cierre-evidencia/README.md
L4-infraestructura-ti/
  README.md
  diseno-arquitectura/README.md
  bd-central/README.md
  homogenizacion-maestros/README.md
  artefactos-sync/README.md
  migracion-soluciones/README.md
  nuevas-aplicaciones/README.md
```

---

## 12. Instrucciones para Claude Code

1. **Leer este archivo primero** en cada sesion antes de modificar cualquier archivo del vault
2. **No crear contenido de detalle** sin instruccion explicita de Diego — la estructura se itera gradualmente
3. **Respetar los nombres de carpetas y archivos** ya definidos — son parte del sistema de links internos de Obsidian
4. **Los links internos de Obsidian** usan formato `[[ruta/archivo|Texto visible]]`
5. **Idioma:** todo el contenido en español, sin tildes en nombres de archivo
6. **Cuando llegue una actualizacion de contexto desde claude.ai:** incorporarla a este archivo en la seccion correspondiente y notificar a Diego los cambios realizados
7. **Nunca sobreescribir** contenido que Diego haya editado manualmente en el vault — preguntar antes

---

## 13. Proximas iteraciones previstas (desde claude.ai)

Las siguientes areas de planificacion estan en desarrollo activo en claude.ai y
llegaran como actualizaciones a este vault:

- [ ] Tabla de tareas detalladas por categoria (todas las L)
- [ ] Estimaciones de esfuerzo revisadas post-incorporacion de Alexi como CE
- [ ] Flujo de dependencias entre lineamientos en formato Mermaid
- [ ] Fichas de proyecto para los 3 normativos prioritarios
- [ ] Definicion detallada del rol Data Governance Manager
- [ ] Instrumento de catastro Level A (estructura de campos y alertas)
- [ ] Mapa de brechas normativas Ley 19.628 / Ley 21.663

---

*Ultima actualizacion: 23 marzo 2026 — v1.1 — Incorporacion estructura organizacional formal + modelo de madurez*
