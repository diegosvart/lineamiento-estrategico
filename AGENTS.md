# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

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

**READ FIRST:** [docs/lineamiento-estrategico/Codex/CONTEXTO-PROYECTO.md](docs/lineamiento-estrategico/Codex/CONTEXTO-PROYECTO.md)

This document contains:
- Who is Diego Morales and his role
- IT team structure and responsibilities
- Regulatory obligations
- Detailed breakdown of all 4 lineamientos
- Project gateways and critical dependencies
- Technology ecosystem and tooling
- Key design principles
- Explicit instructions for Codex

**Do not skip this file.** Every session should reference it as the source of truth for project context.

## Obsidian Formatting and Links

### Internal Links
Use Obsidian's wikilink syntax for all internal references:
```markdown
[[L1-portafolio-ti/README|L1 - Portafolio TI]]
[[L3-gobernanza-ti/catastro-aplicaciones/README|Catastro de Aplicaciones]]
```

**Do not break existing links** when editing files. Obsidian's linking system is how the vault is navigated.

### Naming Conventions
- File and folder names: Spanish, lowercase, hyphens for spaces, **no tildes** (é, á, ñ → e, a, n)
- Example: `diseno-arquitectura` (not `diseño-arquitectura`)
- All content: Spanish language

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
- When receiving context updates from Codex.ai: incorporate them into CONTEXTO-PROYECTO.md and notify Diego of changes

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

When receiving updates from Codex.ai sessions:
1. Incorporate changes into the corresponding sections of CONTEXTO-PROYECTO.md
2. Update the "Última actualización" timestamp at the end of the file
3. Notify Diego of what changed and why
4. Do not modify sections 1-9 (project definition) without explicit permission — they define the plan's foundation

## Common Tasks

**To reference a section:**
Use Obsidian links with clear text labels. Example:
```markdown
See [[L3-gobernanza-ti/catastro-aplicaciones/README|the applications catalog guide]]
```

**To add project details:**
Add to the appropriate lineamiento's README.md or subsection. Always link from the main [00-indice.md](00-indice.md).

**To track decisions or changes:**
Use the CONTEXTO-PROYECTO.md "Próximas iteraciones" section to log what's pending or in progress.

---

**Last updated:** 23 March 2026 — Initial version aligned with CONTEXTO-PROYECTO.md v1.0
