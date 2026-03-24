# Sistema de Estados — Seguimiento del Plan

**Propósito:** Definir y documentar el ciclo de vida de cada categoría del plan.
Este es un **sistema de definición documental**, no un gestor de proyectos.
Los estados se reflejan visualmente en el grafo de Obsidian mediante colores.

---

## Vocabulario de estados

### 🟢 Completado
**Color:** Verde (`#4caf50`)
**Tag:** `#completado`

**Significado:** Definido, ejecutado y validado. Se cumplieron todos los entregables, se cierra el sprint.

**Criterios de transición:**
- Todos los entregables aprobados y documentados
- Validación formal completada (PM + JTI)
- Caso de uso: Gateway alcanzado, fase cerrada

**Ejemplo:** L2-formalizacion-organizacional después de que JTI aprobó el organigrama.

---

### 🔵 Activo
**Color:** Azul (`#2196f3`)
**Tag:** `#activo`

**Significado:** En ejecución actualmente. Tareas en el sprint actual, avance semanal en Planner.

**Criterios de transición:**
- Semana de inicio alcanzada
- Equipo asignado, tareas visibles en Planner
- Bloqueadores resueltos
- Caso de uso: Lineamientos L1–L4 en semanas S1–S36

**Ejemplo:** L2-reduccion-dependencia entre S2–S3 cuando se ejecutan sesiones con Alexi.

---

### 🟡 En-definición
**Color:** Amarillo/Naranja (`#ff9800`)
**Tag:** `#en-definicion`

**Significado:** Marco y estructura definidos, pero no en ejecución. Documento creado, aún sin tareas ejecutándose.

**Criterios de transición:**
- Estructura del documento presente
- Descripción y entregables documentados
- Precondiciones claras
- Aún no iniciado (semana > semana actual)
- Caso de uso: Nuevas líneas o subcategorías recién creadas (ej: L5)

**Ejemplo:** L5-integraciones el 23 de marzo: estructura creada, tareas no iniciadas hasta S10+.

---

### ⚪ Pendiente
**Color:** Gris (`#9e9e9e`)
**Tag:** `#pendiente`

**Significado:** No iniciado. Prerequisitos no completos o bloqueadores activos.

**Criterios de transición:**
- Precondición no satisfecha (ej: espera a otra categoría)
- Semana aún no llega (ej: L4 espera a L3 completado)
- Bloqueador de negocio o recurso
- Caso de uso: Mayoría de categorías antes de su semana de inicio

**Ejemplo:** L3-catastro-aplicaciones antes de S4; L3-diagnostico-normativo esperando Catastro Level A.

---

### 🟣 Backlog
**Color:** Violeta (`#9c27b0`)
**Tag:** `#backlog`

**Significado:** Identificado pero sin fecha. Proyecto en L1 que no entra en esta ejecución 2026 o está en "nice to have".

**Criterios de transición:**
- Requisito documentado pero sin RFC oficial
- No alineado a gatekeep ni dependencia crítica
- Se puede ejecutar después de 2026
- Caso de uso: Proyectos L1 estratégicos con presupuesto pendiente

**Ejemplo:** "PowerBI Avanzado — inteligencia de datos" (roadmap 2027, no 2026).

---

## Cómo actualizar estados

### 1. En la UI de Obsidian

Edita el archivo `.md` y agrega el tag en el frontmatter YAML:

**Antes:**
```yaml
---
aliases:
  - L3-catastro-aplicaciones
  - Catálogo de Aplicaciones
---
```

**Después (en definición):**
```yaml
---
aliases:
  - L3-catastro-aplicaciones
  - Catálogo de Aplicaciones
tags:
  - en-definicion
---
```

**Después (activo):**
```yaml
---
aliases:
  - L3-catastro-aplicaciones
  - Catálogo de Aplicaciones
tags:
  - activo
---
```

### 2. Cambiar de estado

Reemplaza el tag anterior con el nuevo en el frontmatter. Obsidian refrescará el grafo automáticamente.

### 3. Verificar en el grafo

- Abre Vista Gráfica (`Ctrl+G`)
- Busca el nodo en el grafo
- Verifica que el color coincida con la leyenda

---

## Leyenda de colores en el grafo

| Color | Estado | Significado |
|---|---|---|
| 🟢 Verde | `#completado` | Definido, ejecutado, validado |
| 🔵 Azul | `#activo` | En ejecución ahora |
| 🟡 Amarillo | `#en-definicion` | Estructura lista, aún no ejecutando |
| ⚪ Gris | `#pendiente` | No iniciado, espera prerequisitos |
| 🟣 Violeta | `#backlog` | Identificado, sin fecha |

**Nota:** Los nodos SIN tag aparecerán en el color default de Obsidian (blanco/gris neutral).

---

## Transiciones típicas de un lineamiento

```
pendiente (S < semana inicio)
  ↓ (llega la semana)
en-definicion (si es nuevo, estructura lista)
  ↓ (inicio semana)
activo (ejecución en curso)
  ↓ (completar entregables)
completado (validado)
```

### Ejemplo: L3-catastro-aplicaciones

| Fecha | Estado | Razón |
|---|---|---|
| 23 Mar | `en-definicion` | Estructura creada, archivo nuevo |
| 30 Mar | `pendiente` | Espera L3-infraestructura-digital |
| 07 Abr | `pendiente` | Espera L2 completado |
| 14 Abr (S4) | `activo` | Inicia S4, PM asigna tareas |
| 22 May (G2) | `completado` | Catastro Level A validado |

---

## Decisiones de diseño

- **Minimal:** 5 estados cubrirán 99% de los casos
- **Coherente:** Léxico alineado con términos existentes (Activo, Pendiente, Completado)
- **Visual:** Los colores del grafo permiten lectura rápida del estado global
- **Editable:** Cambiar el tag en YAML es transparente; sin herramientas externas requeridas

---

## Próximas iteraciones

- Agregar `completion_date` al frontmatter si se requiere histórico
- Crear vistas Dataview que listenresumiesen por estado
- Integrar con L1 portafolio para sincronizar progreso

---

*Documento de referencia — Sistema de seguimiento del Plan de Transformación TI 2026*
*Última actualización: 24 marzo 2026*
