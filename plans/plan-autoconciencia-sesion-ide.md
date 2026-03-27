# Plan: Autoconciencia de Sesión por IDE

**Fecha:** 26 marzo 2026
**Branch:** `workspace/vault`
**Estado:** Implementado

## Problema

Cada IDE tiene un mecanismo distinto de auto-carga al iniciar, y no todos apuntaban
al archivo que contiene el protocolo de inicio de sesión. Cursor no arrancaba en el
contexto correcto (rama, estado del dashboard, primer acto).

## Cambios Implementados

### Fix 1 — `.cursor/rules` (Session Protocol)
Agregado bloque `## Session Protocol` al inicio del archivo:
- Branch: `workspace/dashboard`
- Pasos: git merge, npm run dev, leer SCOPE.md, verificar componentes
- Efecto: Cursor sabe su rama y primer acto sin que el PM lo indique

### Fix 2 — `AGENTS.md` (Sección 0: Arranque de Sesión por Agente)
Insertada sección `## 0. ARRANQUE DE SESIÓN POR AGENTE` antes de la sección 1:
- Tabla con los 4 agentes: Codex, Claude Code, Cursor, VS Code
- Rama y primer acto por agente
- Regla de sincronización explícita (git merge desarrollo antes de empezar)
- Efecto: Codex y cualquier agente que lea AGENTS.md saben qué hacer al arrancar

### Fix 3 — `.claude/commands/vault-session-start.md` (nuevo skill)
Nuevo skill `/vault-session-start` que ejecuta el protocolo §6.1 automáticamente:
- git status + últimos commits
- lee contexto-estrategico.md
- busca planes `listo-para-ejecutar` en backlog.md
- reporta estado en < 1 pantalla con gateway activo, alertas, y siguiente acción

## Verificación

- **Cursor:** abrir sesión nueva → modelo cita rama `workspace/dashboard` y ejecuta `npm run dev` sin que el PM lo pida
- **Codex:** abrir sesión nueva → modelo lee backlog.md y propone plan más urgente
- **Claude Code:** escribir `/vault-session-start` → reporta estado del vault en < 1 pantalla

## Archivos Modificados

| Archivo | Tipo de cambio |
|---------|---------------|
| `.cursor/rules` | Agregado Session Protocol al inicio |
| `AGENTS.md` | Agregada sección §0 de arranque por agente |
| `.claude/commands/vault-session-start.md` | Creado (nuevo skill) |
| `plans/plan-autoconciencia-sesion-ide.md` | Creado (este archivo) |
