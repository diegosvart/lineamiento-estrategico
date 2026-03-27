# SCOPE — workspace/planning

**Rol:** Definir qué trabajo se hará, cuándo, y con qué criterios de aceptación.
**IDE:** Codex (agente con acceso al repo)
**Rama:** `workspace/planning` (long-lived)
**Área exclusiva:** carpeta `planificacion/`

---

## Inicio de Sesión

1. **Git**: `git checkout workspace/planning && git merge desarrollo`
   → Sincroniza cambios integrados (planes completados, actualizaciones de estado)
2. **Abrir**: Codex apuntando a la raíz del repo
   → Leer este SCOPE.md para cargar contexto del ámbito
3. **Leer**: `planificacion/backlog.md` + estado actual de `proyectos/`
   → ¿Qué iniciativas están pendientes de planificar? ¿Hay planes en borrador?
4. **Primer acto**: crear o continuar plan usando `planificacion/templates/plan-iniciativa.md`
   → Próxima iniciativa prioritaria según backlog

---

## Capacidades

- Crear planes de trabajo por iniciativa en formato estructurado
- Designar tareas con entregables concretos (archivos en vault)
- Establecer criterios de aceptación medibles por tarea
- Marcar estado del plan: `borrador` → `listo-para-ejecutar` → `en-ejecucion` → `completado`
- Leer estado actual del vault (qué existe, qué está pendiente) para planificar
- Crear y mantener el backlog de planificación en `planificacion/backlog.md`

---

## Estructura de Archivos

```
planificacion/
  SCOPE.md                              ← archivo canónico del ámbito (este archivo)
  YYYY-MM-DD-[iniciativa]-plan.md       ← un plan por sesión/iniciativa
  templates/
    plan-iniciativa.md                  ← template obligatorio para nuevos planes
  backlog.md                            ← tareas pendientes de planificar
```

---

## Template de Plan (contrato hacia workspace/vault)

Ver `planificacion/templates/plan-iniciativa.md`.

El template es el contrato de comunicación entre este ámbito (planning) y `workspace/vault` (ejecución). Todo plan debe seguirlo sin excepción.

**Campos obligatorios del YAML frontmatter:**

| Campo | Valores válidos |
|-------|----------------|
| `fecha` | YYYY-MM-DD |
| `iniciativa` | nombre exacto del catálogo canónico |
| `lineamiento` | L2, L3, L4 o L5 |
| `estado` | `borrador` \| `listo-para-ejecutar` \| `en-ejecucion` \| `completado` |
| `ejecutor` | `workspace/vault` (siempre) |

---

## Ciclo de Vida de un Plan

```
Codex crea plan (borrador)
  → Codex completa secciones → estado: listo-para-ejecutar
    → Claude Code lee y ejecuta → estado: en-ejecucion
      → Claude Code completa todas las tareas → estado: completado
        → PR workspace/planning → desarrollo
```

**Handoff a workspace/vault:**
Cuando un plan alcanza `listo-para-ejecutar`, Codex notifica a Claude Code
indicando la ruta del archivo: `planificacion/YYYY-MM-DD-[iniciativa]-plan.md`

---

## Protocolo de Salida

- Planes en estado `listo-para-ejecutar` son consumibles por `workspace/vault`
- No modificar archivos fuera de `planificacion/`
- Para leer estado del vault, usar solo lectura (no escribir en `proyectos/`)

---

## Coordinación con Otros Ámbitos

| Ámbito | SCOPE | Interacción |
|--------|-------|-------------|
| workspace/vault | `SCOPE.md` (raíz) | Entrega planes; consume actualizaciones de estado |
| workspace/ms365 | `ms365-sync/SCOPE.md` | Recibe datos de Planner para planificar |
| workspace/dashboard | `dashboard/SCOPE.md` | Sin interacción directa |

---

*Rama: `workspace/planning` — Codex — Última actualización: 2026-03-26*
