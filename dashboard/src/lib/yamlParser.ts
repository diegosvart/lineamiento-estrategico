// yamlParser.ts — Parsea frontmatter YAML de archivos Markdown del vault

import yaml from 'js-yaml'

/** Normaliza inicio del archivo: quita BOM UTF-8 si existe. */
function stripBom(content: string): string {
  return content.charCodeAt(0) === 0xfeff ? content.slice(1) : content
}

/**
 * Extrae el bloque frontmatter YAML de un archivo Markdown.
 * Acepta fin de línea LF o CRLF (Windows / core.autocrlf).
 * Retorna el objeto parseado o null si no hay frontmatter o el YAML es inválido.
 */
export function parseFrontmatter(content: string): Record<string, unknown> | null {
  const text = stripBom(content)
  // --- seguido de CRLF o LF; cierre --- en línea propia
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!match) return null

  try {
    const data = yaml.load(match[1], { schema: yaml.JSON_SCHEMA }) as unknown
    if (data === null || typeof data !== 'object' || Array.isArray(data)) return null
    return data as Record<string, unknown>
  } catch {
    return null
  }
}

/**
 * Extrae el cuerpo del markdown (sin frontmatter).
 */
export function extractBody(content: string): string {
  const text = stripBom(content)
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
}
