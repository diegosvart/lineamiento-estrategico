# Plan de Gobernanza TI 2026 — Detalle por Workstream
**PRJ-2026-GOB-001 · Grupo EBI · Diego Morales, PM**
Inicio: 30 marzo 2026 · Horizonte: diciembre 2026

---

## Parámetros de planificación

| Parámetro | Valor |
|---|---|
| Horas disponibles — Plan Gobernanza TI | 4 hh/día · 20 hh/semana |
| Horas disponibles — Portafolio en ejecución | 4 hh/día · 20 hh/semana |
| Días hábiles por semana | 5 |
| Fecha de inicio | 30 marzo 2026 |
| Gateway G1 | ✅ Aprobado — Gerencia General |
| Equipo TI | PM · Jefe TI · Soporte TI · Encargado Redes e Infraestructura |
| Régimen del equipo | Misma disponibilidad de horas para todos los roles |

---

## Equipo y abreviaciones

| Abreviación | Rol |
|---|---|
| PM | Project Manager (Diego Morales) |
| JTI | Jefe de TI |
| SOPORTE | Soporte TI |
| REDES | Encargado Redes e Infraestructura |
| GG | Gerencia General |
| SPONSOR | Sponsor del proyecto |

---

## Consolidado de esfuerzo

| Workstream | Total hh | Naturaleza | Ventana de ejecución |
|---|---|---|---|
| WS-1 Estructuración del Área TI | 28 hh | Puntual | S1–S3 · 30 Mar → 17 Abr |
| WS-2 Infraestructura de Gobernanza | 82 hh | Puntual + Fase 3 | S1–S8 + S10–S12 |
| WS-3 Documentación y Procesos | 82 hh | Puntual + Fase 3 | S4–S9 + S10–S12 |
| WS-4 Portafolio de Proyectos | 144 hh | Puntual + bucle permanente | S5–S38 (todo el año) |
| **Total Plan Gobernanza** | **336 hh** | 90 hh son operación continua | Mar → Dic 2026 |

De las 336 hh totales, **90 hh corresponden a operación continua** del portafolio (seguimiento semanal + reportes RAG). Las **246 hh restantes** son esfuerzo de construcción concentrado principalmente en los primeros 3 meses.

---

## Mapa de ejecución paralela — vista completa

```
         Mar          Abr          May          Jun          Jul→Sep      Oct→Dic
         S1  S2  S3   S4  S5  S6   S7  S8  S9  S10 S11 S12  ...          ...

WS-1  ███████████
WS-2  ██████████████████████████████████░░░░░░░░░░░░             ░░░░░░░░░
WS-3            ░░░░░░░░░████████████████████████████             ░░░░░░░░░
WS-4                    ░░░░░░░█████████████████████████████████████████████

█ Ejecución activa     ░ Espera de precondición o inicio de Fase 3
```

### Ventanas de máximo paralelo

| Ventana | WS activos | Riesgo de carga |
|---|---|---|
| S1–S3 | WS-1 + WS-2 | Manejable — responsables distintos en mayoría de tareas |
| S6–S9 | WS-2 + WS-3 + WS-4 | **Pico de carga** — requiere disciplina de agenda semanal |
| S13–S38 | WS-4 bucle | Operación sostenible — 8–12 hh/semana |

---

## Gateways formales con fecha proyectada

| Gateway | Condición de avance | Fecha proyectada |
|---|---|---|
| **G1** | ✅ Ya aprobado por Gerencia General | 30 Mar 2026 |
| **G2** | Catastro Level A completo + diagnóstico normativo listo + portafolio priorizado con sponsors | ~22 May 2026 |
| **G3** | Catastro B+C completo + 5 políticas TI firmadas + proyectos normativos en ejecución activa | ~26 Jun 2026 |
| **G4** | Avance normativo validado con Sponsor · re-baselining si hay desvíos críticos | ~25 Sep 2026 |
| **G5** | Cierre formal Plan Gobernanza TI 2026 · Roadmap 2027 presentado a GG | ~11 Dic 2026 |

---

## Carga semanal proyectada — PM

| Período | hh/semana gobernanza | Composición principal |
|---|---|---|
| S1–S3 · Mar–Abr | 18–20 hh | WS-1 + WS-2 entorno en paralelo |
| S4–S5 · Abr–May | 18–20 hh | WS-2 catastro + WS-3 diagnóstico |
| S6–S9 · May–Jun | 16–20 hh | WS-2 Level B+C + WS-3 políticas + WS-4 activación |
| S10–S12 · Jun–Jul | 14–18 hh | WS-2+WS-3 Fase 3 + WS-4 bucle |
| S13–S38 · Jul–Dic | 8–12 hh | WS-4 bucle permanente + cierres + G5 |

---

---

# WS-1 — Estructuración del Área TI

**Horizonte:** S1–S3 · 30 Mar → 17 Abr 2026
**Total estimado:** 28 hh
**Cierre:** ~17 Abril 2026
**Precondición:** Ninguna — este WS es el punto de arranque del plan completo

> **Propósito del WS:** Formalizar la estructura del área TI, definir roles con responsabilidades claras y ejecutar la transferencia de conocimiento técnico que hoy reside en el consultor externo. Sin este workstream, los demás tres no tienen un operador formal con autoridad suficiente para ejecutar.

---

## WS-1 · Tareas detalladas

| ID | Tarea | Explicación y justificación | Responsable | Soporte | Horas est. |
|---|---|---|---|---|---|
| 1.01 | Redactar propuesta de organigrama TI | El área TI no tiene una estructura formal documentada. Sin organigrama, las responsabilidades son difusas y cualquier decisión técnica puede ser cuestionada en su autoridad. Este documento es el primer acto de gobernanza del área y la base de todas las demás definiciones de rol. | PM | JTI | 4 hh |
| 1.02 | Sesión de validación del organigrama con Jefe TI | El organigrama no puede ser una decisión unilateral del PM. El Jefe TI debe validar que refleja la realidad operativa del área, que los roles son ejecutables con el equipo disponible y que la jerarquía es coherente con la estructura del holding. | PM + JTI | — | 1.5 hh |
| 1.03 | Redactar definición formal del rol Data Governance Manager | La Ley 19.628 y la gestión del catastro de aplicaciones requieren un responsable formal de la gobernanza de datos. Este rol no existe hoy. Definirlo formalmente permite que el PM lo absorba transitoriamente con reconocimiento institucional, evitando que las responsabilidades asociadas queden en un vacío de autoridad. | PM | — | 3 hh |
| 1.04 | Validar definición del rol DGM con Jefe TI | El rol DGM debe ser reconocido por el Jefe TI para tener peso dentro del área. Sin esta validación, las acciones de gobernanza de datos que ejecute el PM carecen de respaldo jerárquico interno. | PM + JTI | — | 1 hh |
| 1.05 | ~~Documento ejecutivo para presentación a GG~~ | ~~Eliminado: G1 ya aprobado~~ | — | — | ~~4 hh~~ |
| 1.06 | ~~Presentación y aprobación GG — Gateway G1~~ | ~~Eliminado: G1 ya aprobado~~ | — | — | ~~1.5 hh~~ |
| 1.07 | Documentar inventario de decisiones técnicas activas del consultor | Alexi concentra hoy un volumen crítico de conocimiento técnico no documentado: configuraciones, credenciales, decisiones de arquitectura, contratos con proveedores. Si el consultor sale o reduce su disponibilidad sin un traspaso formal, el área TI queda operacionalmente ciega en aspectos que no puede reconstruir fácilmente. Este inventario es el mapa de lo que se necesita recuperar. | JTI | PM | 4 hh |
| 1.08 | Mapear configuraciones críticas y accesos que gestiona el consultor | Complementa el inventario de decisiones con el detalle técnico: qué sistemas tiene acceso Alexi, con qué credenciales, qué configuraciones mantiene activas. Este mapeo es también el primer paso para normalizar los accesos del consultor hacia un modelo de cuentas nominativas gobernadas. | REDES | JTI | 6 hh |
| 1.09 | Redactar plan formal de transferencia de conocimiento | El inventario y el mapeo por sí solos no transfieren nada — necesitan un plan con hitos, fechas, responsables y formato de validación. Sin este plan, el traspaso queda sujeto a la voluntad y disponibilidad del consultor, que tiene incentivos ambiguos para completarlo. | PM | JTI | 2.5 hh |
| 1.10 | Sesión de transferencia técnica ronda 1 (con Alexi) | Primera sesión estructurada de traspaso, convocada por el Jefe TI y con agenda cerrada. El formato de cuestionario con 48h de anticipación reduce la resistencia pasiva al minimizar la superficie de omisión: las preguntas son específicas, no abiertas. Cada sesión termina con acta firmada. | JTI | REDES | 3 hh |
| 1.11 | Sesión de transferencia técnica ronda 2 — validación interna | Segunda sesión sin el consultor: el equipo TI verifica que el conocimiento transferido en ronda 1 es suficiente para operar de forma autónoma. Si hay brechas, se identifican aquí antes de cerrar el ciclo. Esta sesión es la que determina si el área realmente absorbió el conocimiento o solo lo registró. | JTI | SOPORTE + REDES | 2 hh |
| 1.12 | Validación autonomía técnica del área · G2-input WS-1 | Reunión formal de cierre del workstream. El PM y el Jefe TI validan que el área puede operar decisiones técnicas sin depender del consultor para los casos cubiertos en el traspaso. Este es el input de WS-1 al Gateway G2 del plan completo. | PM + JTI | — | 1 hh |

**Total WS-1: 28 hh**

---

## WS-1 · Mapa de dependencias

```
Semana 1 (30-Mar) — arranque sin precondición
├── 1.01 [PM · 4hh]
├── 1.03 [PM · 3hh]          ← paralelas: PM trabaja en ambas alternando
└── 1.07 [JTI · 4hh]         ← JTI trabaja en paralelo al PM

Semana 1–2
├── 1.02 [PM+JTI · 1.5hh]    ← requiere 1.01
└── 1.04 [PM+JTI · 1hh]      ← requiere 1.03 / puede ir en misma reunión que 1.02

Semana 2
├── 1.08 [REDES+JTI · 6hh]   ← requiere 1.07 / paralela con 1.09
└── 1.09 [PM · 2.5hh]        ← requiere 1.07 / PM redacta mientras REDES levanta

Semana 3
├── 1.10 [JTI+ALEXI · 3hh]   ← requiere 1.08 + 1.09
└── 1.11 [JTI+equipo · 2hh]  ← requiere 1.10

Semana 3 — cierre
└── 1.12 [PM+JTI · 1hh]      ← requiere 1.11 → input G2
```

### Grupos de ejecución paralela

| Grupo | Tareas | Condición |
|---|---|---|
| P1 | 1.01 + 1.03 + 1.07 | Sin precondición — arrancan Semana 1 con responsables distintos |
| P2 | 1.02 + 1.04 | Pueden consolidarse en una única reunión con JTI |
| P3 | 1.08 + 1.09 | Post 1.07 — REDES levanta técnicamente mientras PM redacta plan |
| Secuencial | 1.09 → 1.10 → 1.11 → 1.12 | Estrictamente en orden |

---

## WS-1 · Calendario de ejecución

| Semana | Fecha aprox. | Actividades | Responsables | hh semana |
|---|---|---|---|---|
| S1 | 30 Mar – 4 Abr | 1.01 + 1.03 (PM) · 1.07 (JTI) en paralelo | PM · JTI | PM: 7hh · JTI: 4hh |
| S1–S2 | 31 Mar – 7 Abr | 1.02 + 1.04 en una reunión | PM + JTI | 2.5hh conjuntas |
| S2 | 7–11 Abr | 1.08 (REDES) + 1.09 (PM) en paralelo | PM · REDES + JTI | PM: 2.5hh · REDES: 6hh |
| S3 | 14–17 Abr | 1.10 + 1.11 (JTI lidera) + 1.12 cierre | JTI · REDES · SOPORTE | JTI: 5hh · equipo: 2hh |

**WS-1 cierra: ~17 Abril 2026**

---

## WS-1 · Riesgos y mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Alexi ofrece resistencia pasiva al traspaso | Media | Alto | JTI convoca las sesiones. Cuestionario cerrado con 48h de anticipación. Acta firmada por sesión. Lo no documentado queda registrado como pendiente — visible e institucional. |
| GG solicita ajustes al organigrama post-aprobación | Baja | Medio | El organigrama ya tiene aprobación de G1. Cambios menores se gestionan como ajuste sin reabrir el gateway. |
| Jefe TI no dispone de horas suficientes en S1–S2 | Media | Medio | Tareas 1.01 y 1.03 no requieren JTI — PM puede avanzar sin él durante la primera semana. |

---

---

# WS-2 — Infraestructura de Gobernanza

**Horizonte:** S1–S8 (Fases 1+2) · S10–S12 (Fase 3)
**Total estimado:** 82 hh
**Cierre Fases 1+2:** ~22 Mayo 2026
**Cierre Fase 3:** ~Octubre 2026
**Precondición:** Ninguna para entorno M365 (2.01–2.04) · Catastro Level A depende de instrumento validado (2.06)

> **Propósito del WS:** Construir el sistema nervioso del área TI — el entorno digital operativo y el catastro completo de aplicaciones del holding. Sin este workstream, el área TI opera sin visibilidad de su propio paisaje tecnológico y cada proyecto nuevo requiere un levantamiento externo pagado antes de poder planificarse.

---

## WS-2 · Tareas detalladas

| ID | Tarea | Explicación y justificación | Responsable | Soporte | Horas est. |
|---|---|---|---|---|---|
| 2.01 | Crear canal oficial del área TI en Teams | El área TI necesita un espacio formal de comunicación y decisión en el ecosistema M365 del holding. Sin este canal, las comunicaciones del área se pierden en canales generales o en chats informales, y las decisiones no quedan trazadas. Es el primer acto de presencia institucional del área. | PM | — | 1.5 hh |
| 2.02 | Crear estructura Planner del área (plan por proyecto + buckets base) | Planner es la fuente de verdad operativa de la metodología: si no está en Planner, no existe. La estructura base (buckets de inicio, planificación, ejecución, control, cierre, riesgos) debe existir antes de que cualquier proyecto se active. Reutiliza la lógica ya definida en el plan de automatización v3. | PM | — | 2 hh |
| 2.03 | Crear estructura SharePoint del área (repositorio base) | SharePoint es el repositorio de documentación de todos los proyectos. La estructura de carpetas por proyecto y las plantillas base (Ficha de Proyecto, Acta de Inicio) deben estar disponibles desde el primer día. Sin esto, los documentos se dispersan y el área pierde trazabilidad. | PM | SOPORTE | 3 hh |
| 2.04 | Configurar plantilla de proyecto en Planner (script Graph API) | Cada proyecto nuevo requiere crear un canal Teams, un plan Planner, carpetas SharePoint y agregar participantes. Hacerlo manualmente por cada proyecto consume tiempo y genera inconsistencias. El script Python + Graph API automatiza este proceso desde un CSV — un proyecto completo se activa en minutos. Reutiliza el trabajo documentado en plan_automatizacion_v3. | PM | — | 3 hh |
| 2.05 | Diseñar instrumento Catastro Level A (formulario + guía de entrevista) | El catastro es el mayor entregable de conocimiento de todo el plan. Sin un instrumento bien diseñado, las entrevistas producen datos inconsistentes que no se pueden comparar entre subsidiarias. El instrumento cubre 78 campos organizados por nivel de conocimiento, con 12 reglas de alerta automáticas que se activan solo con las declaraciones de las áreas de negocio. Es la mayor inversión de diseño del WS. | PM | — | 8 hh |
| 2.06 | Validar instrumento con Jefe TI antes del despliegue | Gateway interno del catastro: el instrumento no sale a las 11 subsidiarias sin la validación del Jefe TI. Un campo mal formulado o una pregunta ambigua genera respuestas inutilizables que requieren reentrevistas — un costo altísimo con 11 empresas. Esta validación protege la calidad del dato primario. | PM + JTI | — | 1.5 hh |
| 2.07 | Agenda y coordinación de entrevistas Level A con las 11 subsidiarias | Coordinar 11 entrevistas con líderes de área de distintas empresas del holding es una tarea de gestión con alta fricción. Requiere identificar al interlocutor correcto en cada empresa, comunicar el propósito, agendar y confirmar. La calidad de esta coordinación determina la tasa de respuesta y la calidad de los datos. | PM | JTI | 3 hh |
| 2.08 | Ejecución entrevistas Level A — bloque 1 (subsidiarias 1–5) | Primera ronda de entrevistas guiadas de ~20 minutos por empresa, más tiempo de carga y consolidación de respuestas. El bloque de 5 permite aprender del instrumento en producción antes de ajustar para el bloque 2 si fuera necesario. | PM | JTI | 5 hh |
| 2.09 | Ejecución entrevistas Level A — bloque 2 (subsidiarias 6–11) | Segunda ronda con las subsidiarias restantes. Con la experiencia del bloque 1, las entrevistas son más fluidas y los datos más consistentes. Cubre las 11 empresas del holding sin excepción. | PM | JTI | 6 hh |
| 2.10 | Consolidar catastro Level A y activar reglas de alerta | Las respuestas de las 11 subsidiarias se consolidan en el catastro maestro, se revisan inconsistencias, se completan campos deducibles y se activan las 12 reglas de alerta automáticas. El output es el primer mapa completo del paisaje tecnológico del holding. Cierra la condición de G2 por parte de WS-2. | PM | — | 3 hh |
| 2.11 | Levantamiento Level B — investigación autónoma por TI | Con el catastro Level A como base, TI investiga de forma autónoma información complementaria: documentación pública de los sistemas, contratos con proveedores, accesos declarados pero no verificados. No requiere acceso técnico — es investigación y contraste. Se ejecuta en paralelo con Level C porque usa fuentes distintas y responsables distintos. | PM | SOPORTE | 10 hh |
| 2.12 | Levantamiento Level C — mapeo técnico ERP Manager (11 instancias SQL) | La tarea técnica de mayor riesgo y mayor valor del plan. Las 11 instancias SQL del ERP Manager operan de forma completamente independiente entre sí, sin visibilidad consolidada. El mapeo cubre: cuentas de acceso, permisos, integraciones, versiones, estado de respaldo y coherencia de datos. Es el prerequisito técnico para cualquier decisión futura de homologación o consolidación del ERP. | REDES | JTI | 14 hh |
| 2.13 | Levantamiento Level C — sistemas no-ERP (diagnóstico accesos y seguridad) | Completa el Level C para todos los sistemas fuera del ERP: plataformas de gestión, sistemas de flota, herramientas de control, aplicaciones cloud. Cubre estado de seguridad, usuarios activos, integraciones y continuidad. Se ejecuta en paralelo con 2.12 usando el mismo equipo técnico pero sobre sistemas distintos. | REDES | SOPORTE | 8 hh |
| 2.14 | Consolidar catastro B+C y generar informes de situación actual | Cada aplicativo del holding recibe uno de dos outputs: "Gobernanza TI" (cumple condiciones mínimas) o "Informe de Situación Actual" (documenta brechas y propone plan). Este es el entregable más valioso del catastro — convierte el levantamiento en decisiones accionables. Cierra el input de G3 por parte de WS-2. | PM | REDES | 6 hh |
| 2.15 | Diseñar y publicar dashboard de portafolio (Power BI o SharePoint) | El dashboard da al Sponsor visibilidad consolidada del portafolio sin depender de reportes manuales del PM. Estado RAG por proyecto, vencimientos, riesgos activos, avance por workstream. Habilita la transición del área a Phase 2 del modelo de madurez (Portfolio Visibility). Se ejecuta en Fase 3 cuando el catastro ya está maduro. | PM | REDES | 8 hh |

**Total WS-2: 82 hh**

---

## WS-2 · Mapa de dependencias

```
Semana 1 — arranque sin precondición (paralelo con WS-1)
├── 2.01 [PM · 1.5hh]
├── 2.02 [PM · 2hh]           ← paralelas entre sí
└── 2.03 [PM+SOPORTE · 3hh]

Semana 2 — post entorno base
├── 2.04 [PM · 3hh]            ← paralela con 2.05
└── 2.05 [PM · 8hh]            ← mayor tarea de diseño del WS

Semana 2 cierre
└── 2.06 [PM+JTI · 1.5hh]     ← requiere 2.05

Semana 3
└── 2.07 [PM · 3hh]            ← requiere 2.06 (instrumento validado)

Semana 3–4 — entrevistas
├── 2.08 [PM · 5hh]            ← bloque 1 · requiere 2.07
└── 2.09 [PM · 6hh]            ← bloque 2 · requiere 2.08

Semana 4–5
└── 2.10 [PM · 3hh]            ← requiere 2.09 → G2

Post G2 — Semana 5–7 (máximo paralelo, responsables distintos)
├── 2.11 [PM+SOPORTE · 10hh]   ← Level B: investigación autónoma
├── 2.12 [REDES+JTI · 14hh]    ← Level C: ERP Manager SQL
└── 2.13 [REDES+SOPORTE · 8hh] ← Level C: sistemas no-ERP

Semana 7–8
└── 2.14 [PM+REDES · 6hh]      ← requiere 2.11 + 2.12 + 2.13 → G3

Semana 10–12 (Fase 3)
└── 2.15 [PM+REDES · 8hh]      ← requiere catastro maduro
```

### Grupos de ejecución paralela

| Grupo | Tareas | Condición |
|---|---|---|
| P1 | 2.01 + 2.02 + 2.03 | Sin precondición — arrancan S1 con WS-1 simultáneamente |
| P2 | 2.04 + 2.05 | Post entorno base — responsable único (PM) alterna entre ambas |
| P3 | 2.11 + 2.12 + 2.13 | Post-G2 — tres responsables distintos ejecutan en paralelo real |

---

## WS-2 · Calendario de ejecución

| Semana | Fecha aprox. | Actividades | Responsables | hh semana |
|---|---|---|---|---|
| S1 | 30 Mar – 4 Abr | 2.01 + 2.02 + 2.03 (entorno M365) | PM + SOPORTE | PM: 6.5hh |
| S2 | 7–11 Abr | 2.04 + 2.05 en paralelo (plantilla + instrumento) | PM | PM: 11hh (distribuidas) |
| S2 cierre | 10–11 Abr | 2.06 validación instrumento | PM + JTI | 1.5hh conjuntas |
| S3 | 14–17 Abr | 2.07 coordinación agenda subsidiarias | PM | PM: 3hh |
| S3–S4 | 14–25 Abr | 2.08 + 2.09 entrevistas Level A | PM + JTI | PM: 11hh |
| S4–S5 | 22–2 May | 2.10 consolidación → **G2 input WS-2** | PM | PM: 3hh |
| S5–S7 | 4–22 May | 2.11 + 2.12 + 2.13 **en paralelo real** | PM+SOPORTE / REDES+JTI | 32hh distribuidas |
| S7–S8 | 18–29 May | 2.14 consolidación B+C → **G3 input WS-2** | PM + REDES | PM: 6hh |
| S10–S12 | Oct | 2.15 dashboard portafolio | PM + REDES | 8hh |

**WS-2 Fases 1+2 cierra: ~22 Mayo 2026**
**WS-2 Fase 3 cierra: ~Octubre 2026**

---

## WS-2 · Riesgos y mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Subsidiarias no responden o postergan entrevistas Level A | Alta | Alto | JTI convoca formalmente. Se envía el instrumento con 48h de anticipación para reducir fricción en la reunión. Se trabaja con bloques de 5 para detectar problemas antes de completar las 11. |
| Levantamiento Level C ERP Manager toma más de lo estimado | Media | Alto | 14 hh estimadas incluyen buffer. Si una instancia requiere más tiempo, las otras 10 corren en paralelo parcial. El Jefe TI participa como soporte técnico en las instancias más complejas. |
| Acceso técnico a sistemas bloqueado por áreas de negocio | Media | Alto | El catastro Level A (declarativo) no requiere acceso técnico — eso lo hace autónomo. Level C se gestiona con autorización formal desde la Gerencia General post-G1. |
| Instrumento de catastro requiere rediseño post bloque 1 | Baja | Medio | La validación 2.06 con JTI reduce este riesgo. El bloque 1 de 5 subsidiarias sirve como piloto antes de escalar a las 6 restantes. |

---

---

# WS-3 — Documentación y Procesos

**Horizonte:** S4–S9 (Fases 1+2) · S10–S12 (Fase 3)
**Total estimado:** 82 hh
**Cierre Fases 1+2:** ~29 Mayo 2026
**Cierre Fase 3:** ~19 Junio 2026
**Precondición:** Catastro Level A completo (WS-2 · 2.10) para arrancar diagnóstico normativo. Políticas 3.06 y 3.09 requieren mapa de infraestructura (WS-2 · 2.12+2.13).

> **Propósito del WS:** Producir el framework documental y normativo que da cobertura legal y operativa al área TI. Sin políticas aprobadas, los hallazgos de Deloitte no pueden cerrarse formalmente aunque estén resueltos técnicamente. Sin el diagnóstico normativo, el portafolio de proyectos no tiene base de priorización.

---

## WS-3 · Tareas detalladas

| ID | Tarea | Explicación y justificación | Responsable | Soporte | Horas est. |
|---|---|---|---|---|---|
| 3.01 | Levantar brechas Ley 19.628 por subsidiaria | La Ley de Protección de Datos Personales aplica a cada empresa del holding de forma independiente. Las multas van de 5.000 a 20.000 UTM por infracción y son aplicables también al corporativo internacional. El levantamiento contrasta el estado actual de cada subsidiaria contra las obligaciones de la ley para identificar exactamente qué falta, en qué empresa y con qué urgencia. | PM | JTI | 5 hh |
| 3.02 | Determinar aplicabilidad OIV Ley 21.663 y estado actual | Bio Energía Los Pinos ya está declarada OIV (Operador de Importancia Vital), pero el universo de empresas del holding que califican puede ser mayor. Esta tarea confirma el alcance real de la obligación, el estado actual frente a los estándares ANCI y las acciones mínimas exigidas. Sin este análisis, la exposición regulatoria del holding es desconocida. | PM + JTI | REDES | 4 hh |
| 3.03 | Revisar hallazgos Deloitte y priorizar por criticidad | El dashboard de auditoría ya tiene los 9 hallazgos catalogados. Esta tarea los revisa desde la perspectiva del plan de gobernanza para establecer qué política o procedimiento de WS-3 es prerequisito de qué hallazgo. Sin este mapeo, WS-3 y WS-4 trabajan sin alineación y se puede cerrar un hallazgo sin tener el prerequisito resuelto. | PM | JTI | 2 hh |
| 3.04 | Consolidar diagnóstico normativo completo | Sintetiza los outputs de 3.01, 3.02 y 3.03 en un único documento: mapa de brechas por ley y por empresa, priorización por impacto y urgencia, e identificación de los prerrequisitos documentales para WS-4. Este documento es el input formal de G2 por parte de WS-3 y la base de priorización del portafolio. | PM | — | 3 hh |
| 3.05 | Redactar Política de Acceso y Cuentas Nominativas | Directamente vinculada a los hallazgos Deloitte #3 (privilegios elevados) y #4 (administración de usuarios). Sin esta política aprobada, los procedimientos de cuentas y accesos no tienen marco normativo y Deloitte no los valida como resueltos aunque estén implementados técnicamente. | PM | JTI | 5 hh |
| 3.06 | Redactar Política de Gestión de Cambios | Vinculada al hallazgo Deloitte #1. Sin ambiente de pruebas segregado ni política de cambios, las actualizaciones al ERP y sistemas críticos se aplican directamente en producción con riesgo de interrupción de servicio. Esta política establece el proceso mínimo antes de que cualquier cambio llegue a producción. | PM | REDES | 4 hh |
| 3.07 | Redactar Política de Seguridad de la Información | Es el marco general que da coherencia a las demás políticas. Sin una política de seguridad corporativa, cada empresa del holding toma decisiones de seguridad de forma autónoma e inconsistente. Esta política también es el documento base para el Programa de Ciberseguridad (WS-4) y para la Ley 21.663. | PM | JTI | 5 hh |
| 3.08 | Redactar Política de Protección de Datos Personales | Directamente exigida por la Ley 19.628. Define el tratamiento de datos personales, el rol del Delegado DPD, los procedimientos de respuesta ante brechas y los derechos de los titulares. Sin esta política no hay cumplimiento formal de la ley, independientemente de las medidas técnicas que se hayan implementado. | PM | — | 4 hh |
| 3.09 | Redactar Política de Continuidad Operacional (base DRP) | Sin un plan de continuidad operacional, ante un incidente mayor el área TI no tiene un protocolo de respuesta definido. Esta política establece los objetivos de recuperación, los sistemas críticos y las responsabilidades mínimas. Es la base conceptual del DRP técnico (3.15) y un requisito de la Ley 21.663 para OIV. Requiere el mapa de infraestructura de WS-2 Level C. | REDES | PM | 5 hh |
| 3.10 | Revisión y alineación de las 5 políticas entre sí | Cinco políticas redactadas en paralelo por distintos responsables tienen alto riesgo de incoherencia interna: terminología distinta, referencias cruzadas rotas, contradicciones de alcance. Esta tarea las revisa como un sistema y las alinea antes de llevarlas a la firma del Sponsor. | PM + JTI | — | 3 hh |
| 3.11 | Aprobación y firma de las 5 políticas por Sponsor | Gateway formal: las políticas solo tienen vigencia corporativa con la firma del Sponsor. Sin firma, son documentos sin autoridad. Esta aprobación es también el prerequisito para cerrar los hallazgos Deloitte que dependen de políticas existentes — Deloitte valida la existencia de la política firmada, no solo la implementación técnica. | PM | JTI | 1 hh |
| 3.12 | Habilitar MFA en sistemas críticos | El MFA es el control de seguridad de mayor impacto relativo por esfuerzo de implementación. Reduce drásticamente el riesgo de acceso no autorizado por credenciales comprometidas. Requiere el inventario de sistemas de WS-2 para saber exactamente en qué sistemas activarlo y con qué prioridad. | REDES | SOPORTE | 6 hh |
| 3.13 | Activar y gestionar antivirus corporativo con cobertura transversal | Un antivirus sin cobertura unificada deja puntos ciegos que invalidan el control completo. Esta tarea asegura despliegue, configuración y validación de cobertura en toda la holding, no solo en las subsidiarias que ya tienen solución. | SOPORTE | REDES | 4 hh |
| 3.14 | Establecer canal formal de soporte TI | Sin un canal formal, el soporte TI llega por teléfono, WhatsApp, email personal o presencia física — sin trazabilidad ni priorización. Un canal formal (Teams o ticketing básico) permite medir la demanda, priorizar y evidenciar la capacidad de respuesta del área. | SOPORTE | PM | 2 hh |
| 3.15 | Redactar y publicar DRP (Plan de Recuperación ante Desastres) | El DRP formaliza los procedimientos técnicos de recuperación ante incidentes de interrupción de servicio: qué sistemas se recuperan primero, en qué orden, con qué RTO y RPO, y quién hace qué. Sin DRP el área no califica para seguro de ciberseguridad y no cumple Ley 21.663 OIV. Requiere mapa de infraestructura de WS-2 Level C completamente terminado. | REDES | JTI | 8 hh |
| 3.16 | Documentar procedimiento ABM usuarios con RRHH | La gestión de altas, bajas y modificaciones de usuarios es el control que Deloitte valida mensualmente (hallazgo #4). Sin un procedimiento formal con RRHH como interlocutor, la validación mensual no ocurre o ocurre sin evidencia. Esta tarea establece el nexo formal TI–RRHH y el flujo exacto del proceso. | PM | SOPORTE | 3 hh |
| 3.17 | Redactar instructivos de usuario para aplicativos críticos | Los aplicativos sin documentación de usuario generan soporte reactivo constante y baja adopción de los controles de seguridad. Los instructivos reducen la carga del equipo TI y evidencian que el área gestiona activamente los sistemas que gobernanza. Se estiman 5 aplicativos críticos a ~2 hh cada uno. | SOPORTE | PM | 10 hh |
| 3.18 | Redactar plan corporativo de comunicaciones TI | TI necesita una voz institucional en el holding: cómo comunica cambios de sistemas, incidentes, nuevas políticas, mantenimientos programados. Sin un plan de comunicaciones, cada evento se gestiona de forma ad hoc con mensajes inconsistentes que generan desconfianza en el área. | PM | JTI | 3 hh |
| 3.19 | Documentar diagramas de infraestructura y red | Los diagramas son la representación visual del levantamiento Level C de WS-2. Son indispensables para el DRP, para la respuesta a incidentes, para la auditoría y para cualquier decisión de cambio de infraestructura. Sin diagramas actualizados, el área opera sobre supuestos no verificados. | REDES | — | 5 hh |

**Total WS-3: 82 hh**

---

## WS-3 · Mapa de dependencias

```
PRECONDICIÓN EXTERNA: Catastro Level A (WS-2 · 2.10) para iniciar diagnóstico
PRECONDICIÓN EXTERNA: Mapa infraestructura (WS-2 · 2.12+2.13) para 3.06, 3.09, 3.15, 3.19

Fase 1 — Diagnóstico normativo (S4–S5) — paralelo entre sí
├── 3.01 [PM+JTI · 5hh]
├── 3.02 [PM+JTI+REDES · 4hh] ← paralelas con responsables parcialmente distintos
└── 3.03 [PM+JTI · 2hh]
         ↓
    3.04 [PM · 3hh] → G2-input WS-3

Fase 2 — Políticas (S6–S8) — máximo paralelo posible
├── 3.05 [PM+JTI · 5hh]       ← paralelas: distintos responsables principales
├── 3.06 [PM+REDES · 4hh]
├── 3.07 [PM+JTI · 5hh]
├── 3.08 [PM · 4hh]
└── 3.09 [REDES+PM · 5hh]     ← bloqueada hasta tener mapa infra WS-2

Fase 2 — Operacionales (S6–S8) — paralelas con políticas
├── 3.12 [REDES+SOPORTE · 6hh] ← requiere inventario WS-2
├── 3.13 [SOPORTE+REDES · 4hh] ← sin precondición técnica fuerte
└── 3.14 [SOPORTE+PM · 2hh]   ← sin precondición

         ↓ (todas las políticas completas)
    3.10 [PM+JTI · 3hh] → 3.11 [SPONSOR · 1hh] → G3-input WS-3

Fase 3 — Documentación final (S10–S12) — paralelas, distintos responsables
├── 3.15 [REDES+JTI · 8hh]    ← requiere Level C WS-2 completo
├── 3.16 [PM+SOPORTE · 3hh]
├── 3.17 [SOPORTE+PM · 10hh]
├── 3.18 [PM+JTI · 3hh]
└── 3.19 [REDES · 5hh]        ← output del levantamiento técnico WS-2
```

### Grupos de ejecución paralela

| Grupo | Tareas | Condición |
|---|---|---|
| P1 | 3.01 + 3.02 + 3.03 | Post catastro Level A (WS-2) — responsables parcialmente distintos |
| P2 | 3.05 + 3.06 + 3.07 + 3.08 | Políticas sin dependencia entre sí — distintos responsables principales |
| P3 | 3.12 + 3.13 + 3.14 | Operacionales — corren en paralelo con P2 con equipo distinto |
| P4 | 3.15 + 3.16 + 3.17 + 3.18 + 3.19 | Fase 3 — máximo paralelo real, 4 responsables distintos |

---

## WS-3 · Calendario de ejecución

| Semana | Fecha aprox. | Actividades | Responsables | hh semana |
|---|---|---|---|---|
| S4–S5 | 22 Abr – 2 May | 3.01 + 3.02 + 3.03 en paralelo (diagnóstico) | PM + JTI + REDES | ~11hh distribuidas |
| S5 | 28 Abr – 2 May | 3.04 consolidación → **G2-input WS-3** | PM | 3hh |
| S6–S8 | 4–22 May | 3.05 + 3.06 + 3.07 + 3.08 en paralelo (políticas) | PM + REDES | ~18hh PM / ~10hh REDES |
| S6–S8 | 4–22 May | 3.12 + 3.13 + 3.14 en paralelo (operacionales) | SOPORTE + REDES | ~12hh equipo |
| S8 | 18–22 May | 3.09 política continuidad (post mapa infra WS-2) | REDES | 5hh |
| S8–S9 | 22–29 May | 3.10 alineación + 3.11 firma Sponsor → **G3-input WS-3** | PM + JTI | 4hh conjuntas |
| S10–S12 | Jun | 3.15 + 3.16 + 3.17 + 3.18 + 3.19 en paralelo (Fase 3) | Todo el equipo | ~29hh distribuidas |

**WS-3 Fases 1+2 cierra: ~29 Mayo 2026**
**WS-3 Fase 3 cierra: ~19 Junio 2026**

---

## WS-3 · Riesgos y mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Sponsor posterga la firma de políticas | Media | Alto | Las políticas se presentan de a una o en bloque según preferencia del Sponsor. Se gestionan con fecha límite vinculada al deadline Deloitte — el costo de no firmar es visible y concreto. |
| Efecto cascada: políticas bloqueadas esperando mapa infra WS-2 | Media | Medio | Solo 3.06 y 3.09 dependen del mapa de infraestructura. Las otras 3 políticas (3.05, 3.07, 3.08) pueden avanzar en paralelo sin esa precondición. |
| RRHH no colabora en procedimiento ABM (3.16) | Media | Medio | El procedimiento se enmarca como un beneficio para RRHH (no solo para TI): reduce el riesgo de usuarios activos con acceso a sistemas después de desvinculaciones. |
| DRP toma más horas de lo estimado | Media | Bajo | 8 hh incluyen buffer. Si el mapa de infraestructura de WS-2 está bien documentado, el DRP es sistematización — no levantamiento desde cero. |

---

---

# WS-4 — Portafolio de Proyectos

**Horizonte:** S5–S38 (todo el año 2026)
**Total estimado:** 144 hh (90 hh operación continua + 54 hh puntual)
**Arranca:** ~4 Mayo 2026 (post diagnóstico normativo WS-3)
**Cierre:** ~11 Diciembre 2026 — Gateway G5
**Precondición:** Diagnóstico normativo WS-3 (3.04) para fichas · Plantilla M365 WS-2 (2.04) para entornos

> **Propósito del WS:** Activar y operar el portafolio de proyectos del área TI con la metodología formal de gestión. Incluye los proyectos normativos obligatorios (Ley 19.628, Ley 21.663, Deloitte) y los proyectos estratégicos de la Matriz. El WS-4 es el workstream que opera de forma continua durante todo el año — los demás workstreams construyen las condiciones, este las mantiene vivas y produce los resultados medibles.

---

## WS-4 · Tareas detalladas

| ID | Tarea | Explicación y justificación | Responsable | Soporte | Horas est. |
|---|---|---|---|---|---|
| 4.01 | Completar Fichas de Proyecto para los 3 normativos prioritarios | La Ficha de Proyecto es el documento que formaliza la iniciativa antes de crearla en Planner. Sin ficha aprobada por Sponsor, el proyecto no existe formalmente — es un wishlist. Los tres normativos (Ley 19.628, Ley 21.663, Deloitte) son obligatorios y tienen deadline regulatorio: no pueden quedar sin estructura formal. | PM | JTI | 6 hh |
| 4.02 | Gestionar aprobación de Sponsors para los 3 proyectos normativos | El Sponsor es quien aprueba los gateways, libera recursos y valida el cierre. Sin Sponsor declarado, el proyecto no tiene quién tome las decisiones clave. Esta gestión incluye la reunión de alineación con cada Sponsor para que entienda exactamente qué se le está pidiendo aprobar. | PM | JTI | 2 hh |
| 4.03 | Crear entornos digitales de los 3 proyectos normativos (M365) | Con el script de automatización de WS-2 (2.04), crear los tres entornos es una tarea de bajo esfuerzo. Pero es la acción que transforma la ficha aprobada en un proyecto real: canal Teams, plan Planner, carpetas SharePoint, participantes agregados. Sin entorno, el proyecto no tiene dónde vivir. | PM | — | 3 hh |
| 4.04 | Completar Fichas de Proyecto para proyectos estratégicos de la Matriz | Los proyectos estratégicos (PowerBI, Gestión Documental, SIA, Activo Fijo, Sitrack, etc.) tienen mayor complejidad que los normativos porque involucran a la Matriz corporativa (Canadá / Costa Rica / Chile) y requieren alineación con roadmaps externos. Las fichas deben capturar estas dependencias antes de presentarlas a GG. | PM | JTI | 10 hh |
| 4.05 | Gestionar aprobación de presupuesto proyectos estratégicos con GG | A diferencia de los normativos (donde la obligación legal justifica el gasto), los proyectos estratégicos requieren aprobación de presupuesto explícita. Esta gestión incluye la preparación del caso de negocio, la presentación a GG y el seguimiento hasta la decisión. Es la variable externa de mayor incertidumbre del portafolio. | JTI | PM | 3 hh |
| 4.06 | Crear entornos digitales proyectos estratégicos | Post-aprobación de presupuesto, se activan los entornos digitales de los proyectos estratégicos con el mismo proceso automatizado. La secuencia es idéntica a 4.03 pero para el conjunto de proyectos estratégicos aprobados. | PM | — | 4 hh |
| 4.07 | Ejecutar seguimiento semanal del portafolio (bucle permanente) | El seguimiento semanal es el corazón operativo del PM. 15–30 minutos por proyecto, revisión del tablero Planner, identificación de bloqueos, ajuste de fechas si aplica, registro de acuerdos en Teams. Sin este bucle, los desvíos se detectan tarde — cuando ya afectan los deadlines regulatorios. | PM | — | 2 hh/sem × 36 sem = 72 hh |
| 4.08 | Preparar y publicar reporte mensual RAG al Sponsor | El Sponsor necesita visibilidad del portafolio sin tener que asistir a cada reunión de seguimiento. El reporte RAG (Rojo/Amarillo/Verde) mensual le da el estado consolidado en un formato diseñado para la toma de decisiones, no para el seguimiento operativo. Se publica el último día hábil de cada mes con mención en el canal Teams del área. | PM | — | 2 hh/mes × 9 meses = 18 hh |
| 4.09 | Activar Gateway de Desvío ante vencimiento D-30 Deloitte | Si un proyecto normativo está en riesgo de no cumplir su deadline Deloitte con 30 días de anticipación, el Gateway de Desvío se activa automáticamente: reunión urgente PM + JTI + Sponsor, evaluación de opciones y decisión formal. Este protocolo existe para evitar que un hallazgo pase de "vigente" a "reincidente" — lo que impacta estados financieros. Se estiman 2 activaciones durante el año. | PM | JTI | 3 hh × 2 = 6 hh |
| 4.10 | Mapear dependencias entre hallazgos Deloitte y políticas WS-3 | Varios hallazgos Deloitte no pueden cerrarse formalmente aunque estén resueltos técnicamente si la política que los enmarca no está firmada. Este mapa establece qué política es prerequisito de qué hallazgo, en qué secuencia deben cerrar y cuál es el riesgo de efecto cascada si una política se demora. | PM | — | 2 hh |
| 4.11 | Ejecutar cierre formal de proyectos normativos con evidencia auditada | Cada proyecto normativo cierra con un protocolo formal: validación de entregables con Sponsor, documentación de evidencia en SharePoint, lecciones aprendidas registradas en Planner, comunicación de cierre en Teams. Deloitte requiere evidencia auditada — la resolución técnica sin documento de cierre no es suficiente. | PM | JTI | 3 hh × 3 proyectos = 9 hh |
| 4.12 | Incorporar proyectos estratégicos al seguimiento semanal | Cuando los proyectos estratégicos tienen entorno activo, se incorporan al bucle de seguimiento semanal de 4.07. Esta tarea es la configuración inicial: agregar los proyectos al tablero consolidado y definir el ritmo de reporte específico para cada uno. | PM | — | 1 hh |
| 4.13 | Reporte ejecutivo final de cierre Plan Gobernanza TI 2026 → G5 | El cierre del plan no es administrativo — es estratégico. El reporte ejecutivo para GG documenta qué se construyó, qué resultados se lograron, qué brechas quedan y cuál es el roadmap 2027 recomendado. Es el documento que determina si el área TI consigue los recursos para la siguiente fase de madurez. | PM + JTI | — | 8 hh |

**Total WS-4: 144 hh**
_(72 hh seguimiento semanal + 18 hh reportes RAG + 54 hh esfuerzo puntual)_

---

## WS-4 · Mapa de dependencias

```
PRECONDICIÓN: Diagnóstico normativo WS-3 (3.04) para 4.01
              Plantilla M365 WS-2 (2.04) para 4.03 + 4.06
              Políticas firmadas WS-3 (3.11) para 4.10 + cierres de hallazgos Deloitte

Fase 1 — Activación portafolio (S5–S6)
├── 4.01 [PM+JTI · 6hh]  ──► 4.02 [PM+JTI · 2hh] ──► 4.03 [PM · 3hh] → normativos activos
└── 4.04 [PM+JTI · 10hh] ──► 4.05 [JTI+GG · 3hh] ──► 4.06 [PM · 4hh] → estratégicos activos
    (4.04 arranca en paralelo con 4.01 — comparten responsable PM pero son tareas distintas)

Fase 2 — Bucle permanente (S6 → Dic 2026)
├── 4.07 [PM] ─── semanal sin fecha de término hasta G5
├── 4.08 [PM] ─── mensual sin fecha de término hasta G5
├── 4.09 [PM] ─── trigger por condición de riesgo (no por calendario)
└── 4.10 [PM] ─── puntual: una vez que 3.11 está firmado

Fase 3 — Cierres y G5 (S9–S38)
├── 4.11 [PM+JTI] ─── por proyecto · cuando objetivo del proyecto cumplido
├── 4.12 [PM]     ─── cuando entornos estratégicos estén activos
└── 4.13 [PM+JTI] ─── G5 · Diciembre 2026
```

### Grupos de ejecución paralela

| Grupo | Tareas | Condición |
|---|---|---|
| P1 | 4.01 + 4.04 | Post diagnóstico WS-3 — fichas normativos y estratégicos corren en paralelo |
| P2 | 4.02 + 4.05 | Gestiones de aprobación con actores distintos (Sponsors vs. GG) |
| Bucle | 4.07 + 4.08 | Permanentes desde S6 hasta G5 — no tienen fecha de término |
| P3 | 4.11 + 4.12 | Cierres y activaciones que corren según cumplimiento de condiciones |

---

## WS-4 · Calendario de ejecución

| Semana | Fecha aprox. | Actividades | Responsables | hh semana |
|---|---|---|---|---|
| S5 | 28 Abr – 2 May | 4.01 + 4.04 en paralelo (fichas normativos y estratégicos) | PM + JTI | PM: 8hh |
| S5–S6 | 28 Abr – 8 May | 4.02 + 4.05 (aprobaciones Sponsors y presupuesto GG) | PM + JTI | PM: 2.5hh |
| S6 | 4–8 May | 4.03 + 4.06 (crear entornos) · **portafolio activo** | PM | PM: 7hh |
| S6 → Dic | 4 May – 11 Dic | **4.07 bucle semanal permanente** | PM | 2hh/sem |
| S6 → Dic | último día hábil c/mes | **4.08 reporte RAG mensual** | PM | 2hh/mes |
| S9 | post firma políticas 3.11 | 4.10 mapa dependencias Deloitte | PM | 2hh |
| S9–S36 | según cumplimiento | 4.11 cierres proyectos normativos (×3) | PM + JTI | 3hh × proyecto |
| Post 4.06 | cuando entornos listos | 4.12 incorporar estratégicos al bucle | PM | 1hh |
| S36–S38 · Dic | ~Nov–Dic | 4.13 reporte G5 + roadmap 2027 → **G5** | PM + JTI | 8hh |

**WS-4 arranca: ~4 Mayo 2026**
**WS-4 opera hasta: ~11 Diciembre 2026**

---

## WS-4 · Riesgos y mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| GG posterga aprobación de presupuesto proyectos estratégicos | Alta | Medio | Los proyectos normativos no dependen del presupuesto de los estratégicos — siguen su propio curso. Los estratégicos se presentan con caso de negocio vinculado al lineamiento 2026 ya aprobado. |
| Un proyecto normativo entra en riesgo D-30 | Media | Alto | El Gateway de Desvío (4.09) existe exactamente para este caso. El seguimiento semanal 4.07 es el sistema de alerta temprana. Si el RAG pasa a rojo, se activa el protocolo antes de D-30. |
| Hallazgo Deloitte se cierra sin prerequisito de política WS-3 | Baja | Alto | El mapa de dependencias (4.10) previene este error. No se inicia cierre de un hallazgo sin verificar que su política prerequisito está firmada. |
| PM satura con bucle semanal de múltiples proyectos simultáneos | Media | Medio | El seguimiento semanal está diseñado para 15–30 min por proyecto usando el tablero Planner directamente. No requiere preparación previa. El reporte RAG mensual se genera desde el mismo tablero — no es un trabajo paralelo. |

---

---

*Documento generado el 30 de marzo de 2026*
*Versión 1.0 — sujeta a revisión post-validación de los cuatro workstreams*
*Próximo paso: consolidar en entorno Planner y activar seguimiento semanal*
