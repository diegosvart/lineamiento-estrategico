---
fecha: 2026-03-26
iniciativa: "Carga de tareas y dashboard de horas consumidas"
lineamiento: "L1"
estado: listo-para-ejecutar
ejecutor: workspace/vault
---

## Objetivo

> Coordinar a las ramas `workspace/vault`, `workspace/ms365` y `workspace/dashboard` para ejecutar tres prioridades inmediatas: cargar más información estructurada en el vault, integrar tareas desde MS365/Planner y crear un dashboard para navegar la información y obtener métricas y KPI de horas consumidas. Todo trabajo no alineado a esas tres prioridades queda relegado a segunda prioridad.

## Contexto

> El workspace ya tiene tres capacidades parciales que conviene conectar en vez de rediseñar:
>
> - [ms365-sync/SCOPE.md](C:\Users\dmorales\OneDrive%20-%20Cosemar\PM\Consultoria\repos\plan-lineamiento-estrategico-2026\plan-lineamiento-estrategico-2026\ms365-sync\SCOPE.md) define el flujo de staging `Planner -> ms365-sync/output/*.yaml` con horas inicialmente nulas y tareas mapeadas desde Planner.
> - [SCOPE.md](C:\Users\dmorales\OneDrive%20-%20Cosemar\PM\Consultoria\repos\plan-lineamiento-estrategico-2026\plan-lineamiento-estrategico-2026\SCOPE.md) define que `workspace/vault` consume ese output y mantiene `diario/` y `proyectos/` como fuente documental.
> - [dashboard/SCOPE.md](C:\Users\dmorales\OneDrive%20-%20Cosemar\PM\Consultoria\repos\plan-lineamiento-estrategico-2026\plan-lineamiento-estrategico-2026\dashboard\SCOPE.md) ya establece un frontend React/Vite/TypeScript con lectura local del vault y soporte para gráficos de horas.
>
> La necesidad actual no es solo visualizar datos, sino explicitar el contrato de trabajo entre ramas: qué produce cada una, qué consume, cómo valida y cómo deja memoria útil sin volver a cargar contexto largo en cada sesión.
>
> El foco principal del `vault` en esta etapa es ampliar la base documental útil para gestión y analítica:
>
> - mayor detalle de lineamientos `L*`
> - mayor contexto de proyectos
> - mayor trazabilidad entre tareas, iniciativas, horas y estado
>
> Todo refactor, mejora secundaria o ampliación no necesaria para esos objetivos debe postergarse.

## Tareas

- [ ] Definir el contrato operativo de datos y handoff entre ramas, dejando campos obligatorios, origen de verdad, reglas de actualización, validaciones mínimas y prioridad explícita de ejecución → entregable: `planificacion/memory-contrato-tareas-y-horas.md`
- [ ] Dejar para `workspace/vault` un paquete de trabajo de prioridad 1 para ampliar contenido estructurado del vault: contexto de proyectos, detalle de lineamientos `L*`, vínculos entre iniciativas y mejor base para métricas → entregable: `planificacion/memory-handoff-vault.md`
- [ ] Dejar para `workspace/ms365` un paquete de trabajo de prioridad 1 para integrar tareas desde Planner hacia `ms365-sync/output/`, con mapeo confiable, staging validable y trazabilidad de origen → entregable: `planificacion/memory-handoff-ms365.md`
- [ ] Dejar para `workspace/dashboard` un paquete de trabajo de prioridad 1 para construir navegación, métricas y KPI sobre HH consumidas y estado del trabajo, sin mover lógica de negocio al frontend → entregable: `planificacion/memory-handoff-dashboard.md`
- [ ] Consolidar una memoria índice de sesión que permita a cada rama cargar solo el contexto mínimo necesario al iniciar trabajo y mantener decisiones activas sin repetir contexto largo → entregable: `planificacion/MEMORY.md`

## Priorización

### Prioridad 1

- `workspace/vault`: cargar más información estructurada y útil para gestión.
- `workspace/ms365`: integrar tareas y dejar staging confiable desde Planner.
- `workspace/dashboard`: crear navegación, métricas y KPI sobre HH consumidas.

### Prioridad 2

- Mejoras cosméticas.
- Refactors no necesarios para el flujo principal.
- Automatizaciones o expansiones que no aporten directamente a carga de información, integración MS365 o visualización/KPI.

## Criterios de Aceptación

- [ ] Existe un contrato de datos explícito para tareas y horas que separa extracción, staging, normalización y visualización.
- [ ] Cada rama tiene un handoff propio con objetivo, alcance, entradas, salidas, restricciones de escritura y definición de terminado.
- [ ] El plan deja claro que `workspace/ms365` produce staging, `workspace/vault` normaliza y consolida, y `workspace/dashboard` solo visualiza y transforma para UI.
- [ ] El handoff de `workspace/vault` deja explícito que se debe profundizar en lineamientos `L*` y contexto de proyectos como base documental prioritaria.
- [ ] El handoff de `workspace/dashboard` define un mínimo de métricas y KPI navegables, no solo gráficos genéricos.
- [ ] La estrategia de memoria permite iniciar futuras sesiones leyendo como máximo `planificacion/MEMORY.md` y un archivo temático por rama, evitando reinyectar todo el contexto del proyecto.
- [ ] Las instrucciones incluyen buenas prácticas de desarrollo: contrato antes de UI, cambios pequeños, validación local, no duplicar lógica y trazabilidad de decisiones.

## Archivos a Crear/Modificar

| Acción | Ruta | Descripción |
|--------|------|-------------|
| Crear | `planificacion/MEMORY.md` | Índice corto de memoria operativa para futuras sesiones |
| Crear | `planificacion/memory-contrato-tareas-y-horas.md` | Contrato común de datos entre ramas |
| Crear | `planificacion/memory-handoff-ms365.md` | Instrucciones ejecutables para `workspace/ms365` |
| Crear | `planificacion/memory-handoff-vault.md` | Instrucciones ejecutables para `workspace/vault` |
| Crear | `planificacion/memory-handoff-dashboard.md` | Instrucciones ejecutables para `workspace/dashboard` |

## Dependencias

> Requiere reutilizar la estructura ya definida en `ms365-sync/SCOPE.md`, `dashboard/SCOPE.md` y `SCOPE.md` raíz. No requiere cambios previos en `proyectos/` para que el handoff de ramas quede listo.

## Notas para workspace/vault

> Este plan no pide implementar aún; pide dejar el marco de ejecución y la memoria operativa para las otras ramas.
>
> Mantener un contrato limpio entre capas:
>
> - `workspace/ms365`: extrae y deja staging.
> - `workspace/vault`: normaliza, consolida y enriquece el modelo del vault con mayor contexto de proyectos y lineamientos.
> - `workspace/dashboard`: visualiza datos consolidados y derivados de lectura, con foco en navegación, métricas y KPI.
>
> Si una rama detecta una carencia del contrato, debe actualizar primero el archivo de memoria temático correspondiente antes de cambiar código, para conservar trazabilidad y reducir recontextualización.
