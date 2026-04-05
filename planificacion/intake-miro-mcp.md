# Intake — Integración Miro MCP

**Fecha de solicitud:** 2026-04-01
**Solicitado por:** workspace/vault
**Prioridad:** Media
**Tipo:** Cross-rama (afecta todos los frentes)

---

## Objetivo

Habilitar el Miro MCP Server en todos los IDEs del workspace para que cada frente pueda crear diagramas y gráficas en Miro directamente desde el contexto de sus tareas (sin salir del IDE).

---

## Contexto técnico

El Miro MCP Server es oficial (Miro lo mantiene, lanzado Feb 2026). Usa OAuth 2.1 — sin API key manual. Expone 13 herramientas + 2 prompts:

- `diagram_create` — flowchart, UML, secuencia, ERD desde DSL
- `doc_create / doc_update` — documentos estructurados en boards
- `table_create / table_sync_rows` — tablas con sync por clave
- `context_get / context_explore` — leer contenido de boards hacia el IDE

**Casos de uso para este workspace:**
- Generar diagramas de gobernanza, flujos y arquitectura directamente en Miro
- Leer boards de Miro existentes y volcar contenido al vault como documentación
- Crear tablas de portafolio/RAG en boards desde Claude Code

---

## Alcance por frente

| Frente | IDE | Config requerida | Responsable |
|--------|-----|-----------------|-------------|
| `workspace/vault` | Claude Code | `claude mcp add --transport http miro https://mcp.miro.com` + `/mcp auth` | workspace/vault |
| `workspace/planning` | Codex CLI | Config MCP de Codex (archivo a determinar por planning) | workspace/planning |
| `workspace/dashboard` | Cursor | Settings → MCP → agregar URL `https://mcp.miro.com/` | workspace/dashboard |
| `workspace/ms365` | VS Code | `.vscode/mcp.json` con entrada HTTP | workspace/ms365 |

---

## Config JSON (mismo bloque para todos, adaptado por IDE)

```json
{
  "mcpServers": {
    "miro": {
      "type": "http",
      "url": "https://mcp.miro.com/",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Para Claude Code vía CLI:
```bash
claude mcp add --transport http miro https://mcp.miro.com
```

---

## Prerequisito crítico

Verificar con el admin del equipo Miro (Grupo EBI) que MCP esté **habilitado para el equipo**. En planes Enterprise, MCP no está activo por defecto — requiere habilitación explícita por equipo.

---

## Tareas para workspace/planning

1. **Verificar** si el equipo Miro de Grupo EBI es plan Free/Team o Enterprise
2. **Si Enterprise:** escalar al admin para habilitar MCP en el equipo
3. **Planificar** la configuración por frente (coordinar con cada workspace)
4. **Documentar** la configuración definitiva en `docs/mcp-configuracion.md`
5. **Validar** que cada frente puede ejecutar `diagram_create` sobre un board de prueba

---

## Dependencias

- Acceso al equipo Miro de Grupo EBI (o cuenta personal del PM para prueba inicial)
- Permisos admin si el equipo es Enterprise

---

*Generado por workspace/vault — 2026-04-01*
