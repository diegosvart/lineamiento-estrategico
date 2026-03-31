# SCOPE — workspace/planning

**Rol:** Administrar el sistema y definir qué trabajo se hará, cuándo, por qué rama y con qué criterios de aceptación.
**IDE:** Codex (agente con acceso al repo)
**Rama:** `workspace/planning` (long-lived)
**Área exclusiva:** carpeta `planificacion/`

---

## Inicio de Sesión

1. **Git**: verificar rama actual y situarse explícitamente en `workspace/planning`
   → Si no estás en `workspace/planning`, cambiar a esa rama antes de leer o editar nada
2. **Git sync**: `git checkout workspace/planning && git fetch origin && git merge origin/desarrollo`
   → Sincroniza cambios integrados (planes completados, actualizaciones de estado)
3. **Preflight**: `powershell -ExecutionPolicy Bypass -File .\planificacion\session-start-check.ps1 -TargetWorkspace planning`
   → Si falla, detener sesión y cambiar al workspace/rama correcta antes de operar
4. **Validar carpeta**: confirmar que la carpeta abierta corresponde al frente planning y no es una carpeta compartida con otro frente activo
5. **Branch de trabajo**: si vas a cambiar archivos, crear una rama hija desde `workspace/planning`
   → `feature/planning-[nombre-kebab-case]` o `fix/planning-[nombre-kebab-case]`
6. **Validar sesión**: si la rama actual no es `workspace/planning`, `feature/planning-*` o `fix/planning-*`, declarar la sesión inválida para planning y detenerse
7. **Leer**: `planificacion/MEMORY.md` + `gestion-trabajo/tablero-maestro.md`
8. **Leer**: `planificacion/backlog.md` + estado actual de `proyectos/`
   → ¿Qué iniciativas están pendientes de planificar? ¿Hay planes en borrador?
9. **Primer acto**: clasificar intake nuevo, crear o continuar plan usando `planificacion/templates/plan-iniciativa.md`
   → Próxima iniciativa prioritaria según backlog

**Regla de seguridad:** si la carpeta o la rama actual no coincide con este `SCOPE`, detener el trabajo antes de continuar.

---

## Capacidades

- Crear planes de trabajo por iniciativa en formato estructurado
- Actuar como admin del sistema: intake, triage, distribución de trabajo y recepción de entregas
- Designar tareas con entregables concretos (archivos en vault)
- Establecer criterios de aceptación medibles por tarea
- Gestionar el ciclo de vida del plan vía entrevistas guiadas: `/plan add`, `/plan update`, `/plan archive`, `/plan iterate`
- Marcar estado del plan: `borrador` → `listo-para-ejecutar` → `en-ejecucion` → `completado` → `archivado`
- Leer estado actual del vault (qué existe, qué está pendiente) para planificar
- Crear y mantener el backlog de planificación en `planificacion/backlog.md`
- Mantener el contrato cross-rama entre intake de tareas del vault y ejecución de planes
- Mantener sincronizada la representación visible en `gestion-trabajo/` para backlog, tablero y planes activos

---

## Estructura de Archivos

```
planificacion/
  SCOPE.md                              ← archivo canónico del ámbito (este archivo)
  YYYY-MM-DD-[iniciativa]-plan.md       ← un plan por sesión/iniciativa
  memory-ciclo-vida-planes.md           ← contrato de operaciones add/update/archive/iterate
  memory-flujo-intake-tareas-vault.md   ← contrato del intake guiado de tareas hacia diario/
  memory-asignacion-flujos-por-rama.md  ← dueños por rama de cada flujo
  memory-capa-visual-obsidian.md        ← contrato entre la capa técnica y la capa visible
  memory-procedimiento-sesiones.md      ← protocolo transversal de inicio/cierre de sesión
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
| `estado` | `borrador` \| `listo-para-ejecutar` \| `en-ejecucion` \| `completado` \| `archivado` |
| `ejecutor` | `workspace/vault` (siempre) |

---

## Ciclo de Vida de un Plan

```
/plan add → crea plan (borrador)
  → /plan update completa secciones o ajusta alcance
    → estado: listo-para-ejecutar
      → Claude Code lee y ejecuta → estado: en-ejecucion
        → Claude Code completa todas las tareas → estado: completado
          → /plan archive conserva trazabilidad cuando el plan se cierra o reemplaza
```

**Handoff a workspace/vault:**
Cuando un plan alcanza `listo-para-ejecutar`, Codex notifica a Claude Code
indicando la ruta del archivo: `planificacion/YYYY-MM-DD-[iniciativa]-plan.md`

**Iteración controlada:**
Cuando cambia el enfoque, alcance o estrategia de ejecución, usar `/plan iterate`
para crear una nueva iteración enlazada al plan previo. La versión anterior debe
quedar referenciada como reemplazada o archivada, nunca borrada.

**Capa visual obligatoria:**
Todo plan activo o listo para ejecutar debe tener representación visible en
`gestion-trabajo/` mediante una nota operativa y, cuando aplique, un `.canvas`.

---

## Protocolo de Salida

- Planes en estado `listo-para-ejecutar` son consumibles por `workspace/vault`
- No modificar archivos fuera de `planificacion/`
- Para leer estado del vault, usar solo lectura (no escribir en `proyectos/`)
- Los cambios de contrato deben registrarse en las memorias temáticas antes de ampliar automatizaciones
- La planificación visible en `gestion-trabajo/` debe mantenerse consistente con `planificacion/`
- La guía humana del admin debe mantenerse consistente con la memoria técnica cuando cambien reglas permanentes
- No volver a planificar como pendiente capacidades que ya existen como contrato, incluyendo `/vault-task add`, memorias de intake y la capa visible `gestion-trabajo/`
- Todo cambio de planning debe cerrar en PR hacia `workspace/planning` antes de distribuirse a `desarrollo`
- Toda tarea terminada y pusheada en planning solo se considera publicada para las demás ramas cuando queda integrada en `desarrollo`
- Toda necesidad cross-rama entra primero por planning/admin

---

## Coordinación con Otros Ámbitos

| Ámbito | SCOPE | Interacción |
|--------|-------|-------------|
| workspace/vault | `SCOPE.md` (raíz) | Consume planes y es dueño de `/vault-task add` para intake de tareas hacia `diario/` |
| workspace/ms365 | `ms365-sync/SCOPE.md` | Recibe datos de Planner para planificar |
| workspace/dashboard | `dashboard/SCOPE.md` | Consume en lectura la capa visible si luego se requiere visualización web |

---

*Rama: `workspace/planning` — Codex — Última actualización: 2026-03-28*

