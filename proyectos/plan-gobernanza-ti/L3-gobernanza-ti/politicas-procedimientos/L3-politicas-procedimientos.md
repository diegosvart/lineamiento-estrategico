---
aliases:
  - Políticas y Procedimientos TI
tags:
  - pendiente
---

# Políticas y Procedimientos

**Lineamiento:** [[../L3-gobernanza-ti|L3 - Plan de Gobernanza TI]]
**Horizonte:** S5–S9 (redacción y aprobación)
**Responsable:** PM + ARI + SPT
**Precondición:** [[../diagnostico-normativo/L3-diagnostico-normativo|Diagnóstico normativo]] completo


## Descripción

Redacción y aprobación de 5 políticas TI vinculantes + 6 procedimientos operativos que traducen los
requisitos de [[../../00-contexto/marco-normativo|marco normativo]] en documentos formales.

Sin políticas aprobadas, los hallazgos Deloitte no cierran y Sponsor no autoriza avance a L4.


## Las 5 Políticas TI

| ID | Nombre | Redacta | Estado | Aprobación |
|---|---|---|---|---|
| 3.05 | Política de Acceso y Cuentas Nominativas | PM + JTI | Pendiente | G3 |
| 3.06 | Política de Gestión de Cambios | PM + ARI | Pendiente | G3 |
| 3.07 | Política de Seguridad de la Información | PM + JTI | Pendiente | G3 |
| 3.08 | Política de Protección de Datos Personales (Ley 19.628) | PM | Pendiente | G3 |
| 3.09 | Política de Continuidad Operacional y DRP | ARI + PM | Pendiente | G3 |


## Procedimientos Operativos

| ID | Nombre | Ejecuta | Estado |
|---|---|---|---|
| 3.12 | Habilitación MFA en sistemas críticos | ARI + SPT | Pendiente |
| 3.13 | Activar y gestionar antivirus corporativo con cobertura transversal | SPT | Pendiente |
| 3.14 | Establecer canal formal de soporte TI (mesa de ayuda, tickets, SLA) | SPT + PM | Pendiente |
| 3.15 | Redactar y publicar DRP (Disaster Recovery Plan) formal | ARI + JTI | Pendiente |
| 3.16 | Documentar procedimiento ABM usuarios con RRHH | PM + SPT | Pendiente |
| 3.17 | Redactar instructivos de usuario para aplicativos críticos | SPT + PM | Pendiente |
| 3.18 | Redactar plan corporativo de comunicaciones TI | PM + JTI | Pendiente |


## Tareas detalladas (WS-3: 3.05–3.18)

### Políticas (Tareas 3.05–3.11)

#### 3.05 — Política de Acceso y Cuentas Nominativas
- Define: accesos por rol, principio de menor privilegio, auditoría de accesos
- Cubre: Active Directory, sistemas SAP, bases de datos, aplicaciones críticas
- Remedia: hallazgos Deloitte sobre seguridad de accesos

#### 3.06 — Política de Gestión de Cambios
- Define: proceso de cambio (solicitud, aprobación, prueba, implementación, reversión)
- Cubre: cambios infraestructura, sistemas, configuración, datos críticos
- Remedia: brechas OIV sobre control de cambios

#### 3.07 — Política de Seguridad de la Información
- Define: clasificación de datos, manejo de información sensitiva, cifrado, logs
- Cubre: protección en tránsito, almacenamiento, destrucción segura
- Remedia: brechas NIST CSF — función "Proteger"

#### 3.08 — Política de Protección de Datos Personales
- Define: consentimiento, derecho acceso/rectificación/eliminación, DPD, notificación brechas
- Cubre: cumplimiento Ley 19.628
- Remedia: brechas críticas sobre datos personales

#### 3.09 — Política de Continuidad Operacional y DRP
- Define: RTO/RPO por servicio crítico, escenarios desastre, responsables, validación anual
- Cubre: recuperación de datos, infraestructura, comunicaciones
- Remedia: brechas OIV sobre continuidad

#### 3.10 — Validación y alineación entre sí
- Revisa que no haya contradicciones entre políticas
- Verifica consistencia terminológica y referencias cruzadas
- Estado: Análisis cruzado por PM+JTI

#### 3.11 — Aprobación y firma por Sponsor
- Las 5 políticas son presentadas a GG / Sponsor para aprobación formal
- Generan acta de aprobación y publicación oficial
- **Gateway:** Habilitador de [[../../00-contexto/gateways|G3]]


### Procedimientos (Tareas 3.12–3.18)

#### 3.12 — Habilitación MFA
- Implementación: autenticación multifactor en sistemas críticos (ERP, Active Directory, VPN)
- Rollout por fases: Personal TI → Personal ejecutivo → Resto

#### 3.13 — Antivirus corporativo
- Desplegado en todas las máquinas
- Actualización automática de firmas
- Reporte semanal de detecciones

#### 3.14 — Canal soporte TI formal
- Define: horario respuesta, SLA por severidad, escalamiento
- Herramienta: Planner / ServiceNow / ticketing system

#### 3.15 — DRP (Disaster Recovery Plan)
- Detalla: procedimiento paso a paso para cada escenario (fallo BD, fallo red, etc.)
- RTO: máximo tiempo de caída permitido
- RPO: máximo volumen de datos que se pierde
- Validación anual: simulacro

#### 3.16 — Procedimiento ABM Usuarios
- Coordina con RRHH: onboarding (dar accesos) y offboarding (revocar accesos)
- Define: plazos, formularios, validaciones

#### 3.17 — Instructivos usuario
- Por cada aplicativo crítico: cómo usar, contraseña segura, reporte incidentes
- Publicado en Teams / SharePoint

#### 3.18 — Plan comunicaciones TI
- Define: cómo comunica el área TI cambios, incidentes, nuevas políticas
- Canales: Teams, correo, reuniones periódicas


## Entregables

- ✓ 5 políticas TI redactadas, validadas, firmadas, publicadas
- ✓ 6 procedimientos operativos documentados y socializados
- ✓ MFA habilitado en sistemas críticos
- ✓ Antivirus corporativo desplegado
- ✓ Canal soporte TI con SLA definido
- ✓ DRP validado y socializado


## Dependencias

- **Input:** [[../diagnostico-normativo/L3-diagnostico-normativo|Diagnóstico normativo]] (qué brechas remediar)
- **Habilita:** [[../cierre-evidencia/L3-cierre-evidencia|Cierre y evidencia]] (políticas son evidencia)
- **Gateway:** [[../../00-contexto/gateways|G3]] (5 políticas firmadas son prerequisito)
- **Marcos:** [[../../00-contexto/marco-normativo|Marco normativo]] (cumplen Ley 19.628, Ley 21.663, Deloitte)


*Última actualización: 23 marzo 2026*
