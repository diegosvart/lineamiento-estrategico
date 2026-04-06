---
name: Obsidian Vault Management Skills
description: Registro de comandos y skills para gestionar el vault Plan Gobernanza TI 2026
type: index
---

# Claude Code Skills para Obsidian Vault

**Total: 19 comandos/skills** disponibles para automatizar gestión del Plan Gobernanza TI 2026

---

## Tier 1: Core Skills (Foundational)

### 1. `/vault-audit`
- **Archivo:** `vault-audit.md`
- **Propósito:** Diagnóstico completo del vault (links rotos, nodos fantasma, YAML inválido)
- **Cuándo usar:** Después de cambios masivos, antes de commits, validar estado

### 2. `/vault-new-note`
- **Archivo:** `vault-new-note.md`
- **Propósito:** Crear notas nuevas con estructura YAML correcta, links actualizados automáticamente
- **Cuándo usar:** Agregar documentos, políticas, tareas al vault

### 3. `/vault-status`
- **Archivo:** `vault-status.md`
- **Propósito:** Gestionar y visualizar sistema de 5 estados (completado, activo, en-definicion, pendiente, backlog)
- **Cuándo usar:** Ver progreso, actualizar estados, validar tags

### 3.5. `/vault-task` ✨ NUEVO
- **Archivo:** `vault-task.md`
- **Propósito:** Alta guiada de tareas hacia `diario/` mediante entrevista basada en catálogos
- **Cuándo usar:** Registrar una nueva tarea manual sin editar YAML directamente

### 3.6. `/vault-session-start`
- **Archivo:** `vault-session-start.md`
- **Propósito:** Iniciar sesión leyendo memoria técnica y foco visible del tablero
- **Cuándo usar:** Al comienzo de cada sesión en `workspace/vault`

### 3.7. `/vault-session-end`
- **Archivo:** `vault-session-end.md`
- **Propósito:** Cerrar sesión con handoff técnico y estado visible del flujo
- **Cuándo usar:** Al terminar una sesión en `workspace/vault`

### 3.8. `/vault-sync-planning` ✨ NUEVO
- **Archivo:** `vault-sync-planning.md`
- **Propósito:** Sincronizar desde `desarrollo`, detectar planes `listo-para-ejecutar` de planning y reportar tareas concretas para vault
- **Cuándo usar:** Antes de iniciar trabajo — verificar si planning delegó nuevas tareas

---

## Tier 2: Specialized Operations

### 4. `/vault-excalidraw`
- **Archivo:** `vault-excalidraw.md`
- **Propósito:** Gestionar diagramas Excalidraw (crear, embedear, renombrar, validar referencias)
- **Cuándo usar:** Vincular diagramas a notas, identificar huérfanos

### 5. `/vault-link-update`
- **Archivo:** `vault-link-update.md`
- **Propósito:** Actualizar wikilinks en masa cuando archivos se renombran/mueven
- **Cuándo usar:** Refactorización de estructura, arreglar links rotos

### 6. `/vault-template`
- **Archivo:** `vault-template.md`
- **Propósito:** Crear notas desde plantillas de estructura (lineamiento, subcategoría, política, tarea)
- **Cuándo usar:** Nuevos lineamientos, documentos standarizados

### 7. `/vault-graph-validate`
- **Archivo:** `vault-graph-validate.md`
- **Propósito:** Validar grafo Juggl — verificar colores por estado, detectar nodos aislados
- **Cuándo usar:** Después de actualizar estados, validar salud del grafo, antes de commits

### 8. `/vault-canvas`
- **Archivo:** `vault-canvas.md`
- **Propósito:** Crear y gestionar Obsidian Canvas files — mapas visuales interactivos
- **Cuándo usar:** Roadmaps, procesos, arquitectura, visualizaciones de gobernanza

### 8.5. `/vault-canvas-layout` ✨ NUEVO
- **Archivo:** `vault-canvas-layout.md`
- **Propósito:** Generar Obsidian Canvas con layout radial automático — posiciona 00-INDICE como nodo raíz central
- **Cuándo usar:** Después de agregar lineamientos, refrescar vista aérea del vault, documentación ejecutiva

---

## Tier 3: Plugin Integration & Advanced

### 9. `/vault-dataview-setup`
- **Archivo:** `vault-dataview-setup.md`
- **Propósito:** Configurar queries Dataview para dashboards dinámicos y reportes
- **Cuándo usar:** Crear vistas de estado, generar tablas por responsable, métricas KPI
- **Requiere:** Plugin Dataview instalado

### 10. `/vault-templater-setup`
- **Archivo:** `vault-templater-setup.md`
- **Propósito:** Crear plantillas parametrizadas con variables automáticas (fecha, usuario, IDs)
- **Cuándo usar:** Automatizar creación con metadatos, reutilizar estructura
- **Requiere:** Plugin Templater instalado

### 11. `/vault-tasks-setup`
- **Archivo:** `vault-tasks-setup.md`
- **Propósito:** Convertir tareas markdown a formato Tasks, crear filtros de tracking
- **Cuándo usar:** Gestionar tareas con due dates, filtrar por responsable/estado
- **Requiere:** Plugin Tasks instalado

### 12. `/vault-markdown-syntax`
- **Archivo:** `vault-markdown-syntax.md`
- **Propósito:** Mejorar sintaxis Obsidian Flavored Markdown — wikilinks, embeds, callouts, propiedades
- **Cuándo usar:** Optimizar archivos existentes, agregar callouts para normativa, crear referencias precisas

### 13. `/vault-cli-operations`
- **Archivo:** `vault-cli-operations.md`
- **Propósito:** Automatizar operaciones del vault via CLI — crear, leer, buscar, exportar, sincronizar propiedades
- **Cuándo usar:** Bulk operations, reportes automáticos, integración con scripts externos, migración de datos

---

## Matriz de Decisión Rápida

| Necesito... | Usar skill | Modo |
|-------------|-----------|------|
| Encontrar problemas | `/vault-audit` | Sin parámetros |
| Crear nota nueva | `/vault-new-note` | Con --nombre, --carpeta, --estado |
| Agregar tarea al diario | `/vault-task` | `add` |
| Iniciar sesión del vault | `/vault-session-start` | Sin parámetros |
| Cerrar sesión del vault | `/vault-session-end` | Sin parámetros |
| Ver tareas nuevas de planning | `/vault-sync-planning` | Sin parámetros |
| Ver progreso del plan | `/vault-status` | `view` o `folder [carpeta]` |
| Mejorar archivo existente | `/vault-markdown-syntax` | `--validar` o `--agregar-[elemento]` |
| Crear mapa visual | `/vault-canvas` | `--crear --nombre "..." --template [tipo]` |
| Reparar links rotos | `/vault-link-update` | `--fix-broken` o especificar antiguo/nuevo |
| Validar salud del grafo | `/vault-graph-validate` | `--health-report` |
| Generar dashboard dinámico | `/vault-dataview-setup` | `--crear-dashboard [nombre]` |
| Crear plantillas | `/vault-templater-setup` | `--crear-plantilla [tipo]` |
| Gestionar tareas | `/vault-tasks-setup` | `--crear-vista [nombre]` o `--resumen` |
| Automatizar masivamente | `/vault-cli-operations` | `--crear-nota`, `--buscar`, `--exportar`, etc. |

---

## Flujos de Trabajo Típicos

### Workflow 1: Crear Nueva Política Completa
```
1. /vault-new-note --nombre "Nueva Política" --carpeta "L3-gobernanza-ti/politicas-procedimientos" --estado "en-definicion"
   → Archivo creado con estructura

2. /vault-markdown-syntax --validar --archivo "L3-nueva-politica.md"
   → Validar sintaxis

3. /vault-markdown-syntax --agregar-callout --tipo "warning" --titulo "Normativa crítica"
   → Agregar advertencias para normativa

4. /vault-audit
   → Verificar que no hay problemas

5. /vault-status update --archivo "L3-nueva-politica.md" --nuevo-estado "activo"
   → Marcar como activo
```

### Workflow 2: Crear Mapa Visual de Roadmap
```
1. /vault-canvas --crear --nombre "Roadmap L1 2026" --donde "L1-portafolio-ti" --template "roadmap"
   → Canvas creado con estructura de trimestres

2. /vault-canvas --agregar-nodo-archivo --archivo "L1-roadmap-2026.canvas" --archivo-referencia "L1-proyectos-activos"
   → Vincular nota de proyectos

3. /vault-canvas --conectar --de "node-Q1" --a "node-Q2" --etiqueta "Secuencia"
   → Crear flujo temporal

4. /vault-canvas --validar --archivo "L1-roadmap-2026.canvas"
   → Verificar integridad
```

### Workflow 3: Generar Reporte Semanal
```
1. /vault-status view
   → Ver estado general

2. /vault-dataview-setup --crear-dashboard "Progreso Semanal"
   → Crear dashboard dinámico

3. /vault-cli-operations --estadisticas
   → Generar estadísticas del vault

4. /vault-cli-operations --reporte --tipo "normativa"
   → Generar reporte de documentos normativos
```

---

## Instalación de Plugins Recomendados

Para máxima funcionalidad, instala estos plugins en Obsidian:

| Plugin | Skill que lo usa | Instalación |
|--------|-----------------|-------------|
| **Juggl** | `/vault-graph-validate` | Obsidian → Community Plugins → Search "Juggl" |
| **Dataview** | `/vault-dataview-setup` | Obsidian → Community Plugins → Search "Dataview" |
| **Templater** | `/vault-templater-setup` | Obsidian → Community Plugins → Search "Templater" |
| **Tasks** | `/vault-tasks-setup` | Obsidian → Community Plugins → Search "Tasks" |
| **Excalidraw** | `/vault-excalidraw` | Obsidian → Community Plugins → Search "Excalidraw" |
| **Git** | Opcional (auto-backup) | Obsidian → Community Plugins → Search "Git" |

---

## Integración con Kepano Obsidian Skills

Este conjunto de comandos y skills está diseñado para ser **complementario** con [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills):

- **Nuestros skills:** Gestión de proyecto, auditoría, automatización estructural
- **Kepano skills:** Sintaxis Markdown, Canvas files, operaciones CLI técnicas

**Ver:** `memory/kepano-integration.md` para análisis comparativo completo

---

## Notas Importantes

1. **Skills son instrucciones para Claude, no auto-ejecución**
   - Cuando invocas `/vault-audit`, le das instrucciones detalladas a Claude sobre qué hacer
   - Claude ejecuta las acciones (Grep, Read, Edit) basadas en las instrucciones

2. **Validación siempre primero**
   - Antes de cambios masivos, usa `/vault-audit` para establecer baseline
   - Después de cambios, ejecuta `/vault-audit` nuevamente para verificar

3. **Git commits después de cambios**
   - Siempre hacer commit después de bulk operations
   - Usar mensajes descriptivos que expliquen qué cambió

4. **Orden recomendado de aprendizaje**
   - Tier 1: Aprende audit, new-note, status primero
   - Tier 2: Agrega link-update, template según necesidad
   - Tier 3: Configura plugins cuando los necesites

---

**Índice actualizado:** 28 Marzo 2026
**Total de comandos/skills documentados:** 19
**Basado en:** Obsidian Flavored Markdown + JSON Canvas + CLI patterns + Kepano obsidian-skills
