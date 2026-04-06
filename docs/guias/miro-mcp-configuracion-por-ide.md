# Guía de Configuración — Miro MCP por IDE

> Documento para habilitar Miro MCP Server en cada agente/IDE del workspace.

---

## Claude Code ✅ (ya configurado)

```bash
claude mcp add --transport http miro https://mcp.miro.com
/mcp auth
```

**Estado:** Autenticado y funcionando.

---

## Método 1: Agent Skills (Recomendado para todos los IDEs)

> Funciona en: Claude Code, Cursor, VSCode + Copilot, Codex, Windsurf

```bash
npx skills add miroapp/miro-ai
```

O instalación específica:
```bash
npx skills add miroapp/miro-ai --skill=miro-mcp
```

---

## Método 2: MCP Manual (Configuración por IDE)

### Cursor

**Opción A: Marketplace**
1. Ir a [Cursor Marketplace - Miro](https://cursor.com/marketplace/miro)
2. Click "View in Editor" → "Add to Cursor"
3. Click "Authenticate" → OAuth Miro

**Opción B: Configuración manual**
1. `Settings` → `Cursor Settings` → `MCP` → `Add a Custom MCP Server`
2. Agregar JSON:

```json
{
  "mcpServers": {
    "miro": {
      "url": "https://mcp.miro.com/"
    }
  }
}
```

---

### VSCode + GitHub Copilot

1. Agregar al archivo de configuración MCP:
   - Windows: `%APPDATA%\Code\User\globalStorage\github.copilot-chat\cf5c29d6-2b13-49c4-9afd-4a10fc5b3e58\mcp-servers.json`
   - O ir a Settings → Extensions → Copilot → Configure MCP Servers

2. Agregar:

```json
{
  "mcpServers": {
    "miro": {
      "url": "https://mcp.miro.com/"
    }
  }
}
```

3. OAuth con: `/mcp auth` o click en "Authenticate"

---

### Windsurf (Codeium / antigravity)

1. `Settings` → `Windsurf Settings` → `Cascade` → `Manage MCPs` → `Configure`
2. Agregar JSON:

```json
{
  "mcpServers": {
    "miro-mcp": {
      "url": "https://mcp.miro.com/",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

3. OAuth Miro

---

### Lovable

1. Login en [lovable.dev](https://lovable.dev)
2. Profile → Settings → Integrations
3. En "Your MCP Servers" buscar Miro → click "Set up"
4. Click "Connect" → OAuth Miro

---

### Replit

1. Click: [Add Miro MCP to Replit](https://replit.com/integrations?mcp=eyJkaXNwbGF5TmFtZSI6Ik1pcm8iLCJiYXNlVXJsIjoiaHR0cHM6Ly9tY3AubWlyby5jb20vIiwiaGVhZGVycyI6W119)
2. Click "Test & Save"
3. Click "Authorize with OAuth"

---

## Verificación

Para verificar que MCP funciona en cada IDE:

| Herramienta | Preguntar |
|-------------|-----------|
| `diagram_create` | "Create a flowchart showing user login flow" |
| `doc_create` | "Create a document on this board [URL]" |
| `table_create` | "Create a table with columns: Task, Owner, Status" |
| `context_get` | "What's on my board [URL]?" |

---

## Notas

- **OAuth es por equipo Miro**: Solo boards del equipo autorizado son accesibles
- **Enterprise**: Si tienes Miro Enterprise, el admin debe habilitar MCP primero
- **Una sesión = un equipo**: No se puede cambiar de equipo sin re-autenticar
- **Evitar duplicados**: No agregar manualmente si usas plugin/extension oficial

---

*Última actualización: 2026-04-01*
