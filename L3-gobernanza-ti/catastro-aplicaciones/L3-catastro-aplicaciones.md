---
aliases:
  - L3-catastro-aplicaciones
  - Catastro de Aplicaciones
---
# Catastro de Aplicaciones

**Lineamiento:** [[../L3-gobernanza-ti|L3 - Plan de Gobernanza TI]]
**Horizonte:** S2–S9 (Fases 1, 2 y 3)
**Esfuerzo estimado:** 60 hh
**Responsable:** PM
**Precondición:** [[../infraestructura-digital/L3-infraestructura-digital|Infraestructura digital]] operativa

---

## Descripción

Levantamiento progresivo del inventario de aplicaciones del holding (11 subsidiarias, ~78 campos por registro).
Valida qué sistemas operan, dónde, quién los usa, qué datos contienen y qué riesgos representan.

**3 niveles de detalle:**
- **Level A:** Cuestionario de 20 campos → visión ejecutiva, riesgos críticos (S2–S3, 15 hh)
- **Level B:** Investigación autónoma TI → llena campos adicionales (S4–S5, 10 hh)
- **Level C:** Mapeo técnico ERP Manager → 11 instancias SQL, conectores, flujos (S5–S7, 35 hh)

---

## Tareas (WS-2: 2.05–2.15)

### Fase 1 — Level A (15 hh)

| ID | Tarea | Responsable | hh | Estado | Gateway |
|---|---|---|---|---|---|
| 2.05 | Diseñar instrumento Catastro Level A: formulario + guía de entrevista (78 campos) | PM | 8 | Pendiente | Pre-G2 |
| 2.06 | Validar instrumento con Jefe TI antes despliegue — ajustes finales | PM + JTI | 1.5 | Pendiente | — |
| 2.07 | Agenda y coordinación de entrevistas Level A con 11 subsidiarias | PM | 3 | Pendiente | — |
| 2.08 | Ejecución entrevistas Level A — bloque 1 (subsidiarias 1–5) | PM | 5 | Pendiente | — |
| 2.09 | Ejecución entrevistas Level A — bloque 2 (subsidiarias 6–11) | PM | 6 | Pendiente | → [[../../00-contexto/gateways|G2]] |
| 2.10 | Consolidar catastro Level A, activar reglas de alerta, reportes iniciales | PM | 3 | Pendiente | → [[../../00-contexto/gateways|G2]] |

### Fase 2 — Level B + C (45 hh)

| ID | Tarea | Responsable | hh | Estado | Gateway |
|---|---|---|---|---|---|
| 2.11 | Levantamiento Level B — investigación autónoma por TI, llenado de campos de contexto | PM + SPT | 10 | Pendiente | — |
| 2.12 | Levantamiento Level C — mapeo técnico ERP Manager: 11 instancias SQL, tablas críticas, usuarios, accesos | ARI | 14 | Pendiente | — |
| 2.13 | Levantamiento Level C — sistemas no-ERP: terceros, integradores, aplicativos puntuales | ARI | 8 | Pendiente | — |
| 2.14 | Consolidar catastro B+C, generar informes de situación actual, análisis de riesgos | PM + ARI | 6 | Pendiente | → [[../../00-contexto/gateways|G3]] |
| 2.15 | Diseñar y publicar dashboard de portafolio (Power BI o SharePoint) — KPIs operacionales | PM + ARI | 8 | Pendiente | — |

**Total fase 2:** 45 hh (a ejecutar S4–S7)

---

## Entregables por nivel

### Level A (formulario estructurado)
- Nombre, sigla, descripción funcional
- Dueño de negocio, dueño técnico, responsable operación
- Plataforma, versión, año de instalación
- Datos personales ¿SÍ/NO? → links a [[../politicas-procedimientos/L3-politicas-procedimientos|L3 políticas]]
- Criticidad (Alta/Media/Baja), RTO/RPO
- Integraciones con otros sistemas (lista)
- Regulaciones aplicables (19.628, 21.663, otras)
- Brechas conocidas

### Level B (investigación complementaria)
- Usuarios activos, volumen de datos
- Frecuencia de cambios y versioning
- Certificaciones o cumplimientos (ISO, SOC2, etc.)
- Proveedor/soporte, contrato, costo anual
- Roadmap de cambios (planificado para 2026–2027)

### Level C (mapeo técnico)
- Servidores/instancias (IP, SO, recursos)
- BD primaria, BD backup, esquema
- Integradores/conectores activos (cuáles y a dónde)
- Usuarios técnicos con acceso privilegiado
- Procedimiento de backup/recuperación
- Incidentes históricos y resoluciones

---

## Dependencias y enablers

- **Habilita:** [[../diagnostico-normativo/L3-diagnostico-normativo|Diagnóstico normativo]] (necesita catastro A para identificar brechas)
- **Habilita:** [[../../L4-infraestructura-ti/L4-infraestructura-ti|L4 — Infraestructura TI]] (Level C es input para arquitectura y migraciones)
- **Gateway:** [[../../00-contexto/gateways|G2]] (catastro Level A es prerequisito)
- **Gateway:** [[../../00-contexto/gateways|G3]] (catastro B+C es prerequisito)
- **Regulaciones:** [[../../00-contexto/marco-normativo|Marco normativo]] — Ley 19.628 requiere inventario de datos personales por aplicativo

---

## Notas de ejecución

- Las 11 subsidiarias se abordan en **bloques geográficos/timing** — no todas a la vez
- PM es conductor del proceso (entrevistas, consolidación) — los dueños de negocio aportan datos
- ARI (Infraestructura) realiza Level C sin participación de dueños — investigación autónoma en sistemas
- Dashboard se actualiza mensualmente conforme avanza L1 (portafolio) para visibilidad ejecutiva

---

*Última actualización: 23 marzo 2026*
