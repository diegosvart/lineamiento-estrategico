// yamlParser.ts — Parsea frontmatter YAML de archivos Markdown del vault

import yaml from 'js-yaml'

/**
 * Extrae el bloque frontmatter YAML de un archivo Markdown.
 * Retorna el objeto parseado o null si no hay frontmatter o el YAML es inválido.
 */
export function parseFrontmatter(content: string): Record<string, unknown> | null {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
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
  return content.replace(/^---\n[\s\S]*?\n---\n?/, '')
}
