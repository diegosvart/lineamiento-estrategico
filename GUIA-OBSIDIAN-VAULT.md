# Guía de Obsidian — Tu Vault del Plan Gobernanza TI

**Para:** Usuarios sin experiencia previa en Obsidian
**Objetivo:** Entender qué es un vault, cómo está organizado el tuyo y cómo navegarlo
**Tiempo de lectura:** ~15 minutos

---

## PARTE 1: ¿Qué es Obsidian?

### Concepto simple

Obsidian es una aplicación que toma un **directorio de carpetas y archivos de Markdown** (`.md`) en tu computadora y lo convierte en una **base de conocimiento interconectada**.

```
Forma 1 (sin Obsidian):          Forma 2 (con Obsidian):
Carpetas en Windows      →       Los mismos archivos pero
├─ 00-contexto/                  visibles en interfaz especial
├─ L1-portafolio-ti/            con navegación, búsqueda,
├─ L2-estructuracion/           y GRAFO visual
└─ L3-gobernanza-ti/

NO hay interfaz especial         SÍ hay interfaz + grafo
```

### Los 3 conceptos clave

1. **Vault:** Carpeta en tu computadora que contiene archivos `.md`
2. **Notas:** Los archivos `.md` individuales (como `catastro-aplicaciones/README.md`)
3. **Links:** Referencias entre notas usando sintaxis `[[nombre]]` que Obsidian reconoce

---

## PARTE 2: Tu Vault — Estructura General

### Dónde vive tu vault

```
Tu computadora (Windows)
  └─ OneDrive - Cosemar\PM\Consultoria\repos\
     └─ plan-lineamiento-estrategico-2026\
        └─ plan-lineamiento-estrategico-2026\  ← AQUÍ VIVE EL VAULT
           ├─ 00-indice.md
           ├─ CONFIGURACION-GRAFO.md
           ├─ CLAUDE.md
           ├─ GUIA-OBSIDIAN-VAULT.md (este archivo)
           ├─ 00-contexto/
           ├─ L1-portafolio-ti/
           ├─ L2-estructuracion-area/
           ├─ L3-gobernanza-ti/
           ├─ L4-infraestructura-ti/
           └─ docs/
```

### Cómo Obsidian "ve" esto

Cuando abres Obsidian y apuntas a esta carpeta, la aplicación:
1. Indexa todos los archivos `.md` automáticamente
2. Busca links tipo `[[...]]` dentro de cada archivo
3. Crea un grafo que muestra cuáles archivos están conectados
4. Te permite navegar haciendo clic en los links

**TL;DR:** Obsidian = Tu carpeta + interfaz visual + búsqueda + grafo

---

## PARTE 3: Anatomía de tu Vault

Tu vault tiene 5 niveles de organización:

### Nivel 0: Archivos raíz (la entrada)

```
plan-lineamiento-estrategico-2026/
├─ 00-indice.md                 ← EMPIEZA AQUÍ (índice principal)
├─ CONTEXTO-PROYECTO.md         ← Guía de contexto (OBLIGATORIO LEER)
├─ CONFIGURACION-GRAFO.md       ← Cómo está organizado el grafo
└─ CLAUDDE.md                   ← Instrucciones para Claude Code
```

**¿Qué hacen?**
- `00-indice.md` = Tabla de contenidos del plan. Links a los 4 lineamientos
- `CONTEXTO-PROYECTO.md` = Historia del proyecto, quién es quién, qué se espera
- `CONFIGURACION-GRAFO.md` = Por qué los archivos tienen esos nombres
- `CLAUDE.md` = Instrucciones para que Claude Code (AI) sepa cómo trabajar aquí

### Nivel 1: Contexto (la base)

```
00-contexto/
├─ CONTEXTO-PROYECTO.md         ← Quién eres, cuál es el objetivo, qué harás
├─ contexto-estrategico.md       ← Visión ejecutiva del plan
├─ gateways.md                   ← Los 5 "puntos de aprobación" del plan
└─ marco-normativo.md            ← Leyes que aplican (19.628, 21.663)
```

**¿Por qué existe?**
Todos los documentos de trabajo (L1, L2, L3, L4) referencian a estos.
Es como los "cimientos" del proyecto.

### Nivel 2: Los 4 Lineamientos (el corazón)

```
L1-portafolio-ti/
├─ L1-portafolio-ti.md           ← Página principal de L1
└─ (sin subcarpetas, todo en una sola nota)

L2-estructuracion-area/
├─ L2-estructuracion-area.md     ← Página principal de L2
├─ formalizacion-organizacional/
│  └─ README.md                   ← Subcategory dentro de L2
├─ reduccion-dependencia/
│  └─ README.md
└─ habilitacion-recursos/
   └─ README.md

L3-gobernanza-ti/
├─ L3-gobernanza-ti.md           ← Página principal de L3
├─ infraestructura-digital/README.md
├─ catastro-aplicaciones/README.md
├─ diagnostico-normativo/README.md
├─ politicas-procedimientos/README.md
└─ cierre-evidencia/README.md

L4-infraestructura-ti/
├─ L4-infraestructura-ti.md      ← Página principal de L4
├─ diseno-arquitectura/README.md
├─ bd-central/README.md
├─ homogenizacion-maestros/README.md
├─ artefactos-sync/README.md
├─ migracion-soluciones/README.md
└─ nuevas-aplicaciones/README.md
```

**¿Qué es cada L#?**
- **L1 (Portafolio TI):** Los 12 proyectos activos del área
- **L2 (Estructuración):** Cómo se organiza el área TI (roles, equipos)
- **L3 (Gobernanza):** Marcos legales, políticas, documentación
- **L4 (Infraestructura):** Nueva plataforma técnica centralizada

**¿Por qué subcarpetas en L2, L3, L4 pero NO en L1?**
- L1 es más simple (solo gestión de proyectos) → una sola nota
- L2, L3, L4 son complejos (muchos temas) → se dividen en subcarpetas

### Nivel 3: Dentro de cada subcarpeta

```
L3-gobernanza-ti/catastro-aplicaciones/
└─ README.md
   (Contiene: descripción, tareas, dependencias, entregas)
```

Cada `README.md` es una nota independiente que:
- Explica qué es esa categoría
- Lista tareas con horas estimadas
- Referencia notas relacionadas usando links `[[...]]`

### Nivel 4: Carpetas de soporte (extras)

```
docs/
├─ lineamiento-estrategico/claude/
│  ├─ CONTEXTO-PROYECTO.md
│  ├─ ACTUALIZACION-CONTEXTO-v1.1.md
│  └─ Plan_Gobernanza_TI_Detalle_WS.md
│
Excalidraw/
└─ Drawing 2026-03-23.excalidraw.md  (Diagramas visuales)

vault/
└─ (Copia espejo del contenido, se ignora normalmente)
```

**¿Para qué?**
- `docs/` = Documentación auxiliar (versiones, actualizaciones)
- `Excalidraw/` = Diagramas (no son Markdown, son imágenes)
- `vault/` = Copia antigua, la ignoras

---

## PARTE 4: Cómo Obsidian Navega Tu Vault

### Vista 1: File Explorer (explorador de archivos)

En el panel izquierdo de Obsidian, ves todas tus carpetas:

```
📁 plan-lineamiento-estrategico-2026
  📄 00-indice.md
  📁 00-contexto
    📄 CONTEXTO-PROYECTO.md
    📄 gateways.md
  📁 L1-portafolio-ti
    📄 L1-portafolio-ti.md
  📁 L2-estructuracion-area
    📁 formalizacion-organizacional
      📄 README.md
```

**Acción:** Haz clic en un archivo → se abre en el editor central

### Vista 2: Links (enlaces internos)

Cuando haces clic en un link tipo `[[L3-gobernanza-ti]]`, Obsidian:
1. Busca el archivo llamado `L3-gobernanza-ti.md`
2. Lo abre en el editor
3. Muestra un panel de "backlinks" (qué otros archivos apuntan aquí)

**Ejemplo:**
```markdown
[[L3-gobernanza-ti|Ver plan de gobernanza]]
```

Si haces clic, Obsidian abre `L3-gobernanza-ti/L3-gobernanza-ti.md`

### Vista 3: Graph View (el grafo)

La característica más visual. Muestra todos los archivos como puntos conectados:

```
                    [L3-gobernanza-ti]
                    /    /    |    \    \
                   /    /     |     \    \
     [infraestructura] [catastro] [diagnóstico] [políticas] [cierre]
                      |              |
                   [L4 Infraestructura]
```

**Cómo abrirlo:**
- Presiona `Ctrl+G` (Windows) o `Cmd+G` (Mac)
- Ves todos los archivos como nodos
- Zoom, arrastra, haz clic para navegar

---

## PARTE 5: Los Links — El Corazón de Obsidian

### Sintaxis de links

Hay 2 formas de hacer links en Obsidian:

#### Forma 1: Link a un archivo

```markdown
[[L3-gobernanza-ti]]
```

- Obsidian busca un archivo `L3-gobernanza-ti.md`
- Si lo encuentra, lo linkea
- Si hace clic, abre ese archivo

#### Forma 2: Link con etiqueta

```markdown
[[L3-gobernanza-ti|Plan de Gobernanza TI]]
```

- Mismo que arriba, pero muestra el texto "Plan de Gobernanza TI" en lugar de "L3-gobernanza-ti"
- Cuando haces clic en "Plan de Gobernanza TI", abre el archivo

#### Forma 3: Link a subcarpeta/archivo

```markdown
[[L3-gobernanza-ti/catastro-aplicaciones/README]]
```

- Busca dentro de la carpeta L3-gobernanza-ti
- Luego dentro de catastro-aplicaciones
- Abre el archivo README.md

### Ejemplos reales en tu vault

**Dentro de `L3-gobernanza-ti/catastro-aplicaciones/README.md`:**

```markdown
**Lineamiento:** [[../L3-gobernanza-ti|L3 - Plan de Gobernanza TI]]
**Precondición:** [[../infraestructura-digital/README|Infraestructura digital]]
**Habilita:** [[../../L4-infraestructura-ti/L4-infraestructura-ti|L4]]
```

**¿Qué pasa cuando haces clic?**
- `[[../L3-gobernanza-ti|...]]` → Abre `L3-gobernanza-ti/L3-gobernanza-ti.md`
- `[[../infraestructura-digital/README|...]]` → Abre `L3-gobernanza-ti/infraestructura-digital/README.md`
- `[[../../L4-infraestructura-ti/L4-infraestructura-ti|...]]` → Abre `L4-infraestructura-ti/L4-infraestructura-ti.md`

(Los `../` significan "sube un nivel", `../../` significa "sube dos niveles")

---

## PARTE 6: Los Archivos Principales — Por Dónde Empezar

### Tu flujo de lectura recomendado

```
1. COMIENZA AQUÍ
   └─ 00-indice.md
      (Te muestra los 4 lineamientos + gateways + equipo)

2. ENTIENDE EL CONTEXTO
   └─ 00-contexto/CONTEXTO-PROYECTO.md
      (¿Quién eres? ¿Qué haces? ¿Por qué?)

3. EXPLORA UN LINEAMIENTO
   └─ L1-portafolio-ti/L1-portafolio-ti.md
   └─ L3-gobernanza-ti/L3-gobernanza-ti.md
      (Elige uno, haz clic en los links internos)

4. PROFUNDIZA EN CATEGORÍAS
   └─ L3-gobernanza-ti/catastro-aplicaciones/README.md
      (Ahora ves detalles específicos de tareas, horas, dependencias)

5. ENTIENDE LOS REQUISITOS
   └─ 00-contexto/marco-normativo.md
   └─ 00-contexto/gateways.md
      (Qué leyes aplican, cuáles son los puntos de control)
```

### El flujo de Obsidian cuando lo abres

1. **Abre Obsidian en tu computadora**
2. **File → Open vault** o arrastra la carpeta
3. **Selecciona:** `plan-lineamiento-estrategico-2026`
4. **Haz clic en `00-indice.md`** (aparece en el archivo explorer)
5. **Verás el índice con links a L1, L2, L3, L4**
6. **Haz clic en cualquier link** para navegar

---

## PARTE 7: Conceptos de Obsidian Aplicados a Tu Proyecto

### Los "Aliases" — Nombres alternativos

En tu vault, cada subcarpeta README tiene un "alias":

```yaml
---
aliases:
  - L3-catastro-aplicaciones
  - Catastro de Aplicaciones
---

# Catastro de Aplicaciones
```

**¿Para qué?**
- Permite referir el mismo archivo de 3 formas diferentes:
  1. Por su nombre de archivo: `README.md`
  2. Por su alias: `L3-catastro-aplicaciones`
  3. Por su descripción: `Catastro de Aplicaciones`

**En el grafo:**
- Sin alias: todos los nodos dicen "README" (ilegible)
- Con alias: los nodos dicen `L3-catastro-aplicaciones` (legible)

### El Grafo — Tu mejor herramienta

`Ctrl+G` abre la vista gráfica. Aquí ves:

```
Cada archivo = un punto
Cada link = una línea conectando puntos
```

**Cómo usarlo:**
1. **Zoom:** Rueda del mouse
2. **Arrastra:** Click + arrastra para mover
3. **Click en un punto:** Abre ese archivo
4. **Arrastra un punto:** Lo mueves para mejor visualización
5. **Settings (esquina sup-der):** Muestra opciones (show aliases, etc.)

---

## PARTE 8: El Lado Técnico — Estructura de Carpetas

### Por qué los nombres NO tienen tildes

```
✓ CORRECTO               ✗ INCORRECTO
└─ diseno-arquitectura   └─ diseño-arquitectura
└─ politicas             └─ políticas
└─ gobernanza            └─ gobernanza
```

**Razón:** Obsidian y sistemas web funcionan mejor sin tildes. Evita caracteres especiales.

### Por qué usan guiones, no espacios

```
✓ CORRECTO                    ✗ INCORRECTO
└─ L3-catastro-aplicaciones   └─ L3 Catastro Aplicaciones
└─ diseno-arquitectura        └─ diseno arquitectura
```

**Razón:** Los nombres de archivo con espacios causan problemas en links. Los guiones son más seguros.

### Estructura de carpetas = Jerarquía visual

```
La estructura en carpetas:
plan-lineamiento-estrategico-2026/
└─ L3-gobernanza-ti/
   └─ catastro-aplicaciones/

Se convierte EN:
- L3 es el "padre"
- Catastro-aplicaciones es el "hijo"

En Obsidian ves esto como:
[L3-gobernanza-ti] ──→ [L3-catastro-aplicaciones]
```

---

## PARTE 9: Flujo Práctico — Lo Que Haces Todos Los Días

### Caso 1: Encontrar información

```
1. Abres Obsidian
2. Haces Ctrl+F (buscar)
3. Escribes "catastro"
4. Obsidian te muestra todos los archivos donde aparece "catastro"
5. Haces clic en el resultado → te lleva a ese archivo
```

### Caso 2: Navegar por links

```
1. Abres 00-indice.md
2. Ves: "[[L3-gobernanza-ti/L3-gobernanza-ti|L3 - Plan de Gobernanza TI]]"
3. Haces clic en "L3 - Plan de Gobernanza TI"
4. Obsidian abre L3-gobernanza-ti.md
5. Ahí ves subcategorías, haces clic en "catastro-aplicaciones"
6. Se abre catastro-aplicaciones/README.md
7. Ahí ves tareas, horas, dependencias
```

### Caso 3: Entender dependencias

```
Dentro de catastro-aplicaciones/README.md verás:
"**Habilita:** [[../diagnostico-normativo/README|Diagnóstico normativo]]"

Esto significa:
- Catastro debe completarse PRIMERO
- Después, Diagnóstico normativo puede empezar
- El link te muestra exactamente dónde está esa dependencia

Puedes seguir los links → entender el flujo completo
```

---

## PARTE 10: Resumen Visual

### Tu vault en 1 imagen

```
                     ┌─ CONTEXTO ──────────────────────┐
                     │  00-contexto/                   │
                     │  - CONTEXTO-PROYECTO.md (INICIO)│
                     │  - gateways.md                  │
                     │  - marco-normativo.md           │
                     └─────────────────────────────────┘
                              ↓
                     ┌─ 00-indice.md ─────────────────┐
                     │  (Tu tabla de contenidos)       │
                     │  Links a L1, L2, L3, L4         │
                     └─────────────────────────────────┘
                        ↓    ↓    ↓    ↓
         ┌──────────┬───────────┬──────────┬──────────┐
         │          │           │          │          │
         L1         L2          L3         L4        docs/
         │       (3 sub)      (5 sub)   (6 sub)    (extra)
         │         │           │          │
      Proyectos Form  Inf-dig  Arq
                Reduc Cat-app  BD
                Hab   Diagnós  Maestros
                      Políticas Sync
                      Cierre    Migraciones
                                Nuevas-apps
```

### El ciclo de lectura

```
1. Abre 00-indice.md → VES la estructura
2. Lee CONTEXTO-PROYECTO.md → ENTIENDES el "por qué"
3. Haz clic en L3 → VES los 5 subcapítulos
4. Haz clic en "catastro" → VES tareas, horas, dependencias
5. Presiona Ctrl+G → VES el grafo visual conectando todo
```

---

## PREGUNTAS FRECUENTES

### P: ¿Cuál es la diferencia entre carpetas y notas?

**R:**
- **Carpeta:** Contenedor en tu disco (ej: `L3-gobernanza-ti/`)
- **Nota:** Archivo individual `.md` (ej: `L3-gobernanza-ti.md` o `README.md`)

Obsidian muestra ambas en el explorador, pero solo las NOTAS (`.md`) puedes editar.

### P: ¿Por qué algunos links dicen `[[../README]]` y otros `[[L3-gobernanza-ti]]`?

**R:**
- `[[../README]]` = Link relativo (desde la subcarpeta, sube un nivel, busca README)
- `[[L3-gobernanza-ti]]` = Link directo (desde cualquier lugar, busca ese nombre)

Ambos funcionan, es solo estilo.

### P: ¿Qué pasa si cambio un nombre de archivo?

**R:**
- Obsidian detecta que hay un archivo con ese nombre
- Te avisa que hay links rotos
- Ofrece una opción para actualizar automáticamente

### P: ¿El "vault/" es lo mismo que el directorio raíz?

**R:**
- Sí, son copias exactas
- Originalmente eran dos repos sincronizados
- Ahora ignoras `vault/`, todo está en la raíz

### P: ¿Puedo editar archivos en Obsidian?

**R:**
- SÍ, Obsidian es un editor
- Escribes en el panel central
- Se guarda automáticamente en tu disco
- Los cambios aparecen en Windows explorer también

---

## RESUMEN FINAL

| Concepto | Qué es | Dónde lo ves |
|---|---|---|
| **Vault** | Tu carpeta del proyecto | Cuando abres Obsidian |
| **Nota** | Un archivo `.md` | En el explorador o al hacer clic |
| **Link** | Referencia a otro archivo | `[[nombre\|etiqueta]]` en el texto |
| **Alias** | Nombre alternativo | Al inicio del archivo en `---` YAML `---` |
| **Grafo** | Visualización de conexiones | `Ctrl+G` |
| **00-indice** | Tabla de contenidos | Punto de entrada recomendado |
| **CONTEXTO-PROYECTO** | Historia del proyecto | Lectura obligatoria |
| **L1, L2, L3, L4** | Los 4 lineamientos | Contenido principal |

---

## PARTE 11: Complementos y Skills Avanzados

### Claude Code Skills — Automatización inteligente

**¿Qué son?** Comandos especializados que Claude Code ejecuta dentro de tu vault para mantenerlo saludable, validar links, crear notas con estructura correcta, y más.

**Disponibles ahora:** 10 skills organizados en 3 tiers

#### Tier 1: Auditoría y Gestión Base (Comenzar aquí)

```
/vault-audit
  ├─ Detecta links rotos (apuntan a archivos que no existen)
  ├─ Detecta links a carpetas (crean nodos fantasma en grafo)
  ├─ Valida YAML frontmatter (tags duplicados, sintaxis)
  ├─ Reporta archivos sin tag de estado
  └─ Verifica que config files están en filtros

Cuándo: Después de cambios masivos, antes de commits

/vault-new-note
  ├─ Crea nueva nota con YAML correcto automáticamente
  ├─ Genera nombre de archivo limpio (sin tildes, hyphens)
  ├─ Actualiza índices y links automáticamente
  └─ Agrega a filtros si es archivo de configuración

Ejemplo: /vault-new-note --nombre "Política de Seguridad" --estado "en-definicion"

/vault-status
  ├─ Ver estado actual de todos los lineamientos (view)
  ├─ Cambiar estado de un archivo (update)
  ├─ Ver estado de una carpeta completa (folder)
  ├─ Validar que todos los archivos tienen estado válido (validate)
  └─ Generar resumen visual del progreso del plan

Ejemplo: /vault-status view (muestra qué está completado, en progreso, pendiente)
```

#### Tier 2: Operaciones Especializadas

```
/vault-excalidraw
  ├─ Incrustar diagramas Excalidraw en notas
  ├─ Validar que diagramas existen
  ├─ Renombrar diagramas y actualizar todas las referencias
  └─ Listar diagramas huérfanos (no vinculados)

/vault-link-update
  ├─ Actualizar links en masa (útil cuando renombras archivo)
  ├─ Corregir links rotos automáticamente
  ├─ Cambiar alias de links sin cambiar destino
  └─ Listar todos los archivos que referencian un archivo

/vault-template
  ├─ Crear nuevos lineamientos con estructura completa
  ├─ Crear subcategorías dentro de lineamientos
  ├─ Crear documentos de política/procedimiento
  ├─ Crear documentos de decisión/acta
  └─ Personalizar plantillas

/vault-graph-validate
  ├─ Validar que todos los nodos tienen color (Juggl plugin)
  ├─ Detectar nodos aislados o débilmente conectados
  ├─ Verificar que filtros en app.json son correctos
  ├─ Validar sintaxis de graph.css (selectores CSS para colores)
  └─ Generar reporte de salud del grafo
```

#### Tier 3: Integración con Plugins Externos

Estos skills requieren instalar plugins adicionales (opcionales pero poderosos):

```
/vault-dataview-setup (requiere plugin: Dataview)
  ├─ Crear dashboards dinámicos que se actualizan automáticamente
  ├─ Generar tabla de proyectos con metadatos (responsable, estado, horas)
  ├─ Crear vista filtrada por estado/responsable
  ├─ Generar métricas consolidadas del plan
  └─ Validar que todas las queries Dataview son válidas

Ejemplo output: Tabla que muestra automáticamente todos los archivos "activos"

/vault-templater-setup (requiere plugin: Templater)
  ├─ Crear plantillas parametrizadas con variables dinámicas
  ├─ Auto-generar fecha/hora al crear nota
  ├─ Auto-generar ID secuencial para tareas
  ├─ Plantillas con lógica condicional
  └─ Aplicar plantilla al crear archivo nuevo

Ejemplo: Crear nota que auto-llena "<% tp.date.now() %>" con la fecha actual

/vault-tasks-setup (requiere plugin: Tasks)
  ├─ Convertir tablas markdown a tareas trackables
  ├─ Crear vista de tareas vencidas
  ├─ Filtrar tareas por responsable/estado/vencimiento
  ├─ Generar resumen de progreso de tareas
  └─ Crear filtros personalizados

Ejemplo: Mostrar todas las tareas que vence en los próximos 7 días
```

### Plugins Recomendados (Opcionales)

| Plugin | ID | Para qué | Complejidad |
|--------|-----|----------|------------|
| **Juggl** | `juggl` | Grafo interactivo con colores por estado | ⭐ (ya instalado) |
| **Excalidraw** | `obsidian-excalidraw-plugin` | Diagramas visuales | ⭐ (ya instalado) |
| **Git** | `obsidian-git` | Versionamiento + backup automático | ⭐ (ya instalado) |
| **Dataview** | `dataview` | Consultas dinámicas (dashboards) | ⭐⭐ |
| **Templater** | `templater-obsidian` | Plantillas con variables | ⭐⭐ |
| **Tasks** | `obsidian-tasks-plugin` | Tareas con due dates | ⭐⭐ |

**Instalación:**
1. Obsidian → Settings → Community Plugins
2. Search plugin name
3. Install + Enable
4. Reload Obsidian

### Cuándo usar cada Skill

**Primera vez explorando el vault:**
- `/vault-status view` — Ver estado actual
- Lee GUIA-OBSIDIAN-VAULT.md (este archivo)
- Lee CONTEXTO-PROYECTO.md

**Agregando contenido nuevo:**
- `/vault-new-note` — Crear archivo con estructura correcta
- `/vault-template create` — Usar plantilla si es lineamiento completo

**Después de cambios:**
- `/vault-audit` — Verificar integridad
- `/vault-graph-validate` — Verificar grafo (colores, nodos)

**Mantenimiento regular:**
- `/vault-audit` — Semanal (o después de cambios)
- `/vault-status view` — Quincenal (seguimiento de progreso)
- `/vault-graph-validate` — Mensual (salud del grafo)

**Operaciones especiales:**
- `/vault-link-update` — Cuando renombras archivo importante
- `/vault-excalidraw list` — Cuando agregues diagrama nuevo
- `/vault-dataview-setup --create-dashboard` — Para dashboard ejecutivo

---

**Próximo paso:** Abre Obsidian, apunta a tu vault, haz clic en `00-indice.md` y comienza a navegar.

Una vez familiarizado, prueba `/vault-status view` para ver el estado del plan.

*Guía actualizada: 25 marzo 2026 — Adición de skills y plugins*
