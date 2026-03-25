# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Obsidian vault containing the strategic IT transformation plan for Grupo EBI's IT department (Plan de Transformación del Área TI 2026). It is a project management and documentation repository, NOT a software development project.

**Key dates:**
- Start: 30 March 2026
- Horizon: December 2026
- Project Manager: Diego Morales

**Regulatory framework:**
- Ley 19.628 (Personal Data Protection)
- Ley 21.663 (Cybersecurity Framework / OIV)

## Repository Structure

The vault is organized into four parallel work streams (lineamientos):

```
00-indice.md                              # Main index with Obsidian links
00-contexto/
  CONTEXTO-PROYECTO.md                    # PRIMARY: Read this first before any session
  contexto-estrategico.md                 # Executive summary
L1-portafolio-ti/                         # Portfolio of active projects
L2-estructuracion-area/                   # IT department structuring
  formalizacion-organizacional/
  reduccion-dependencia/
  habilitacion-recursos/
L3-gobernanza-ti/                         # IT governance plan
  infraestructura-digital/
  catastro-aplicaciones/
  diagnostico-normativo/
  politicas-procedimientos/
  cierre-evidencia/
L4-infraestructura-ti/                    # New IT infrastructure
  diseno-arquitectura/
  bd-central/
  homogenizacion-maestros/
  artefactos-sync/
  migracion-soluciones/
  nuevas-aplicaciones/
vault/                                    # Duplicate content (synced from main structure)
Excalidraw/                               # Governance and process flow diagrams
docs/                                     # Additional documentation
```

## Critical Context Before Editing

**READ FIRST:** [docs/lineamiento-estrategico/claude/CONTEXTO-PROYECTO.md](docs/lineamiento-estrategico/claude/CONTEXTO-PROYECTO.md)

This document contains:
- Who is Diego Morales and his role
- IT team structure and responsibilities
- Regulatory obligations
- Detailed breakdown of all 4 lineamientos
- Project gateways and critical dependencies
- Technology ecosystem and tooling
- Key design principles
- Explicit instructions for Claude Code

**Do not skip this file.** Every session should reference it as the source of truth for project context.

## Obsidian Formatting and Links

### Internal Links
Use Obsidian's wikilink syntax for all internal references:
```markdown
[[L1-portafolio-ti/L1-portafolio-ti|L1 — Portafolio TI]]
[[L3-gobernanza-ti/catastro-aplicaciones/L3-catastro-aplicaciones|Catastro de Aplicaciones]]
```

**Do not break existing links** when editing files. Obsidian's linking system is how the vault is navigated.

### Naming Conventions
- File and folder names: Spanish, lowercase, hyphens for spaces, **no tildes** (é, á, ñ → e, a, n)
- Example: `diseno-arquitectura` (not `diseño-arquitectura`)
- All content: Spanish language

## Obsidian Best Practices

### Wikilink Rules (Critical)

1. **Format**: `[[ruta/archivo|display-text]]` — NEVER link to folders
   - ✅ Correct: `[[L3-gobernanza-ti/politicas-procedimientos/L3-politicas|Políticas]]`
   - ❌ Wrong: `[[L3-gobernanza-ti/politicas-procedimientos/|folder link]]`
   - ❌ Wrong: `[[L3-gobernanza-ti/politicas-procedimientos/README]]` (file no longer exists)

2. **Spaces in links**: Remove spaces around pipes
   - ✅ `[[archivo|alias]]`
   - ❌ `[[archivo | alias]]`

3. **Validate before linking**: Always verify target file exists
   - Use `/vault-audit` to detect broken links automatically
   - Use `/vault-link-update` to fix links in bulk

### YAML Frontmatter Rules

Every `.md` file should have this structure:

```yaml
---
aliases:
  - Display Name in Spanish (with tildes OK here)
tags:
  - [exactly-one-status-tag]
---
```

**Valid status tags** (choose ONE):
- `completado` — Phase complete, audited closure ✅
- `activo` — Currently executing 🔵
- `en-definicion` — Design/planning in progress 🟠
- `pendiente` — Not started, queued ⚫
- `backlog` — Lower priority, not scheduled 🟣

**Rules**:
- Every file except config files MUST have one status tag
- DO NOT use multiple status tags on same file
- Config files (CLAUDE.md, MEMORY.md) in `userIgnoreFilters` can skip tags

### Configuration File Filtering

Files that should NOT appear in the graph must be in `.obsidian/app.json` → `userIgnoreFilters`:

Current filters (example):
```json
"userIgnoreFilters": [
  "docs/",
  "Excalidraw/",
  "CLAUDE.md",
  "MEMORY.md",
  "00-contexto/definicion-estados.md",
  "00-contexto/JUGGL-SETUP.md"
]
```

**Important**: Use full relative paths from vault root, not just filenames.
- ✅ `"00-contexto/mi-config.md"`
- ❌ `"mi-config.md"` (won't match nested files)

### Graph Visualization (Juggl Plugin)

The vault uses **Juggl** plugin (not native Obsidian graph) for colored node visualization:

1. **Colors are automatic**: Based on YAML `tags` field
2. **Five state colors**:
   - `#completado` → Green (#4caf50)
   - `#activo` → Blue (#2196f3)
   - `#en-definicion` → Orange (#ff9800)
   - `#pendiente` → Gray (#9e9e9e)
   - `#backlog` → Purple (#9c27b0)

3. **To see colors**:
   - Open Obsidian graph view (Ctrl+G)
   - Use "Juggl" view button (if available) instead of native graph
   - Colors appear automatically when you reload Obsidian

4. **Troubleshooting**:
   - Colors not showing? → Reload Obsidian (Ctrl+Shift+R)
   - Reload didn't work? → Check that tag is spelled exactly right
   - Still broken? → Run `/vault-graph-validate` to diagnose

### Active Plugins

| Plugin | ID | Purpose | Usage |
|--------|-----|---------|-------|
| **Juggl** | `juggl` | Interactive graph with colored nodes by status | Automatic (open graph view) |
| **Excalidraw** | `obsidian-excalidraw-plugin` | Draw diagrams | Double-click `.excalidraw` files |
| **Git** | `obsidian-git` | Version control + auto-backup | Automatic (don't modify settings) |

### Recommended Plugins (Optional)

These plugins add powerful capabilities if installed:

| Plugin | ID | When to install | What it does |
|--------|-----|-----------------|--------------|
| **Dataview** | `dataview` | Need dynamic dashboards | Query notes like a database: `LIST FROM L1 WHERE tags contains "activo"` |
| **Templater** | `templater-obsidian` | Need variable-expansion templates | Create notes with `<% tp.date.now() %>` → auto-fills date |
| **Tasks** | `obsidian-tasks-plugin` | Need due dates & filtering for tasks | Convert markdown tasks to trackable items with `⏰ 2026-04-15` |

**Setup**: Use `/vault-dataview-setup`, `/vault-templater-setup`, `/vault-tasks-setup` respectively.

## Claude Code Skills for Vault Management

Ten specialized skills available to optimize vault operations:

### Tier 1: Core Skills (Recommended)
- `/vault-audit` — Diagnose vault health (broken links, phantom nodes, config issues)
- `/vault-new-note` — Create note with correct YAML, links, and index updates
- `/vault-status` — View/update progress status of lineamientos

### Tier 2: Specialized Operations
- `/vault-excalidraw` — Link and manage Excalidraw diagrams
- `/vault-link-update` — Bulk update wikilinks when files rename/move
- `/vault-template` — Create notes from structure templates
- `/vault-graph-validate` — Validate Juggl graph health and node colors

### Tier 3: Plugin Integration
- `/vault-dataview-setup` — Configure dynamic queries (requires Dataview plugin)
- `/vault-templater-setup` — Create parametrized templates (requires Templater plugin)
- `/vault-tasks-setup` — Convert markdown tasks to trackable items (requires Tasks plugin)

**First time?** Start with `/vault-audit` and `/vault-status` to understand vault state.

## Key Principles for This Plan

These principles were established in planning and should guide all content decisions:

1. **Planner as source of truth:** If it's not in Microsoft Planner, it doesn't exist
2. **Gateway-driven:** No phase advances without conscious decision at control points
3. **Minimal friction:** Sufficient structure for maximum clarity, no unnecessary layers
4. **Consequences over problems:** Executive language focuses on impact, not difficulties
5. **Knowledge by level:** The catalog segments by what each actor knows today, not by ideal role
6. **Transversality from v1:** Every new application must be transversal to the holding from its first version
7. **Investment framing:** Infrastructure initiatives are framed as preventive investment, not administrative cost

## Working with Content

### When Adding or Modifying Documentation

- Do not create detailed content without explicit instruction from Diego
- Structure is iterated gradually — ask before adding new sections
- Respect existing file and folder names; they are part of Obsidian's internal linking system
- Never overwrite content that Diego has manually edited — ask first
- When receiving context updates from claude.ai: incorporate them into CONTEXTO-PROYECTO.md and notify Diego of changes

### Gatekeeping

| Gateway | Condition | Target Date |
|---------|-----------|-------------|
| G1 | Approved by General Management | 30 Mar 2026 |
| G2 | Catalog Level A + normative diagnostic + prioritized portfolio | ~22 May 2026 |
| G3 | Catalog B+C + 5 signed policies + active normative projects | ~26 Jun 2026 |
| G4 | Normative progress validated with sponsor | ~25 Sep 2026 |
| G5 | IT Governance Plan 2026 closure + 2027 roadmap | ~11 Dec 2026 |

## Technology and Tools

The IT area uses:
- **Microsoft 365:** Teams (decisions) + Planner (execution) + SharePoint (documentation)
- **Microsoft Graph API + Python:** Automation for environment provisioning
- **ERP Manager:** 11 independent SQL instances (one per subsidiary, no native consolidation)
- **Obsidian:** Documentation vault (this repository)
- **Excalidraw:** Governance and process diagrams

## Team Context

| Role | Code | Responsibility |
|------|------|-----------------|
| Project Manager | PM | Diego Morales — cross-functional, co-decision with JTI |
| IT Area Chief | JTI | Technical-operational command, final technical decisions |
| Network & Infrastructure Admin | ARI | Servers, network, SQL Server, AD, backups |
| Technical Support | SPT | Help desk, IT assets, account onboarding/offboarding |
| ERP Consultant | CE | Alexi — historical knowledge source (interviewed, not executor) |

Diego is a hybrid PM with deep technical knowledge in databases, software architecture, and development. Most technical tasks fall directly to the PM, not to technical team members.

## Updating CONTEXTO-PROYECTO.md

When receiving updates from claude.ai sessions:
1. Incorporate changes into the corresponding sections of CONTEXTO-PROYECTO.md
2. Update the "Última actualización" timestamp at the end of the file
3. Notify Diego of what changed and why
4. Do not modify sections 1-9 (project definition) without explicit permission — they define the plan's foundation

## Common Tasks

**To reference a section:**
Use Obsidian links with clear text labels. Example:
```markdown
See [[L3-gobernanza-ti/catastro-aplicaciones/L3-catastro-aplicaciones|the applications catalog guide]]
```

**To add project details:**
Add to the appropriate lineamiento's README.md or subsection. Always link from the main [00-indice.md](00-INDICE.md).

**To track decisions or changes:**
Use the CONTEXTO-PROYECTO.md "Próximas iteraciones" section to log what's pending or in progress.

---

**Last updated:** 23 March 2026 — Initial version aligned with CONTEXTO-PROYECTO.md v1.0
