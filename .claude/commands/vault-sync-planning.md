---
description: Sincroniza desde desarrollo, detecta planes listos de planning y reporta tareas pendientes para workspace/vault
---

Ejecuta la sincronización desde planning y entrega un reporte de tareas accionables:

1. **Git sync**:
   - `git branch --show-current` — verificar que estás en `workspace/vault` o una feature branch válida
   - `git fetch origin`
   - `git merge origin/desarrollo` — si hay conflictos, reportarlos y detener

2. **Leer backlog**: Lee `planificacion/backlog.md` y extrae:
   - Todos los planes con estado `listo-para-ejecutar`
   - Para cada uno: leer el archivo de plan indicado y extraer objetivo, tareas pendientes y criterios de aceptación

3. **Leer tablero**: Lee `gestion-trabajo/tablero-maestro.md` y detecta:
   - Tareas asignadas a `workspace/vault` con estado `delegada` o `nueva`
   - Tareas en estado `reportada` que requieren follow-up

4. **Reporte compacto** (máx 1 pantalla):

```
## Sync planning → vault — [fecha]

**Nuevos commits desde desarrollo:** [N commits | "ninguno"]

**Planes listos para ejecutar:**
| Plan | Lineamiento | Archivo | Tarea siguiente |
|------|-------------|---------|-----------------|
| [nombre] | [L2/L3/L4] | [ruta] | [primera tarea concreta] |
(o "Sin planes nuevos")

**Tareas activas en tablero (workspace/vault):**
| task_id | Estado | Plan | Pendiente |
|---------|--------|------|-----------|
| [T-id] | [estado] | [ruta] | [acción] |
(o "Sin tareas activas")

**Siguiente acción:**
[UNA acción: qué ejecutar primero, qué rama/archivo, qué desbloquea]
```

5. **Si hay planes listos**: preguntar cuál ejecutar primero antes de crear la feature branch.

6. **Si no hay planes nuevos**: reportar "Sin tareas de planning. Revisar backlog o solicitar nuevo plan."
