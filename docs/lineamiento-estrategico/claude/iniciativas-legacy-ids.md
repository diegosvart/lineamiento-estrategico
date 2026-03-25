# Iniciativas Legacy con IDs — Análisis para Iteración Futura

**Origen:** Extraído de `CLAUDE-2.md` (versión anterior del vault)
**Propósito:** Documentar el modelo de iniciativas con ID único para evaluar en futuras iteraciones si se incorpora al vault actual (que actualmente usa estructura L1-L4).
**Estado:** Referencia histórica — pendiente análisis de aplicabilidad

---

## Iniciativas Activas (GOB-001 a ENV-001)

| ID | Nombre | Estado | Descripción |
|---|---|---|---|
| **GOB-001** | Plan Gobernanza TI — Presentación Gerencia General | En construcción | Artefacto central del plan — presentación ejecutiva a GG |
| **CAT-001** | Catastro de Aplicaciones | En construcción | Schema 78 campos, 16 secciones, 3 niveles de detalle |
| **AUD-001** | Programa compromisos auditoría Deloitte | En ejecución | 9 hallazgos, con mapa de dependencias y deadlines |
| **MAP-001** | Levantamiento instancias Manager SQL | Pendiente inicio | Inventario de 11 instancias independientes (una por filial) |
| **PRO-001** | Mapeo de procesos y sistemas holding | Pendiente inicio | 18 semanas, 3 fases, transversalidad |
| **DGM-001** | Data Governance Manager — definición de rol | En definición | Estructura y responsabilidades del área de gobernanza de datos |
| **ENV-001** | Automatización entorno digital | En desarrollo | Python + Microsoft Graph API — aprovisionamiento de entornos |

---

## Mapa de Dependencias (Hallazgos Deloitte — AUD-001)

Extraído de CLAUDE-2.md como referencia de relaciones entre iniciativas.

```
H7 (Políticas TI)          ──┐
                             ├→ Prerrequisito de → H1, H2, H3, H4, H5
                             │
H4 (Administración Usuarios) ├→ Prerrequisito de → H5 (SoD — matriz de accesos)
                             │
H6 (BD SQL Cuentas) ────────→ Relacionado con → H9 (Migración SQL — infraestructura compartida)
                             │
H9 (SQL Server 2012) ────────→ DEADLINE CRÍTICO (presupuesto pendiente de Gerencia)
```

---

## Análisis para Futuro

### ¿Cómo se mapea a la estructura actual L1-L4?

| Iniciativa | Mapeado a | Notas |
|---|---|---|
| GOB-001 | Contexto general | Es el "paraguas" de todo el plan |
| CAT-001 | L3-gobernanza-ti/catastro-aplicaciones/ | Inventario de aplicaciones |
| AUD-001 | L3-gobernanza-ti/diagnostico-normativo/ | Recomendaciones de auditoría |
| MAP-001 | L4-infraestructura-ti/ | Levantamiento de infraestructura |
| PRO-001 | L1-portafolio-ti/ o L2-estructuracion-area/ | Mapeo de procesos a nivel de holding |
| DGM-001 | L2-estructuracion-area/formalizacion-organizacional/ | Definición de rol y estructura |
| ENV-001 | L4-infraestructura-ti/artefactos-sync/ | Automatización de entorno |

### Ventajas de un sistema de IDs

✅ Rastreabilidad única (GOB-001 es siempre GOB-001)
✅ Mapa de dependencias explícito (H7 → H1, H2, H3, H4, H5)
✅ Lenguaje común con Diego para conversar sobre iniciativas
✅ Facilita referencias cruzadas ("Este hallazgo depende de GOB-001")

### Desventajas vs. estructura L1-L4

❌ Requiere mantener tabla de mapeo adicional
❌ Duplica información ya organizada por lineamiento
❌ Complica navegación en Obsidian (más nodos en el grafo)
❌ El vault actual no usa IDs — requeriría refactor

---

## Decisión Pendiente

**Pregunta:** ¿Vale la pena incorporar el sistema de IDs en una iteración futura?

**Respuesta sugerida:**
- **Sí, si:** Diego quiere usar IDs en reportes ejecutivos o Planner
- **No, si:** La estructura L1-L4 es suficiente para la navegación y Diego no necesita IDs

---

*Documento creado: 25 Marzo 2026*
*Basado en CLAUDE-2.md — Versión anterior del modelo de contexto de Claude Code*
