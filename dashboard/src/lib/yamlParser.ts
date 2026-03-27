// yamlParser.ts — Parsea frontmatter YAML de archivos Markdown del vault

/**
 * Extrae el bloque frontmatter YAML de un archivo Markdown.
 * Retorna el objeto parseado o null si no hay frontmatter.
 */
export function parseFrontmatter(content: string): Record<string, unknown> | null {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return null

  const yaml = match[1]
  return parseSimpleYaml(yaml)
}

/**
 * Parser YAML mínimo para frontmatter del vault.
 * Soporta: strings, numbers, booleans, arrays de strings, null.
 * Para YAML complejo, usar js-yaml.
 */
function parseSimpleYaml(yaml: string): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  const lines = yaml.split('\n')
  let currentKey: string | null = null
  let currentArray: string[] | null = null

  for (const line of lines) {
    // Array item
    if (line.match(/^  - /)) {
      const value = line.replace(/^  - /, '').trim()
      if (currentArray !== null) {
        currentArray.push(value)
      }
      continue
    }

    // Key: value
    const kvMatch = line.match(/^(\w[\w-]*)\s*:\s*(.*)$/)
    if (kvMatch) {
      // Guardar array anterior
      if (currentKey && currentArray !== null) {
        result[currentKey] = currentArray
      }

      currentKey = kvMatch[1]
      const rawValue = kvMatch[2].trim()

      if (rawValue === '' || rawValue === null) {
        // Posible inicio de array o valor null
        currentArray = []
        result[currentKey] = null
      } else {
        currentArray = null
        result[currentKey] = parseScalar(rawValue)
      }
    }
  }

  // Guardar último array si aplica
  if (currentKey && currentArray !== null && currentArray.length > 0) {
    result[currentKey] = currentArray
  }

  return result
}

function parseScalar(value: string): string | number | boolean | null {
  if (value === 'null' || value === '~') return null
  if (value === 'true') return true
  if (value === 'false') return false
  const num = Number(value)
  if (!isNaN(num) && value !== '') return num
  // Quitar comillas si las tiene
  return value.replace(/^["'](.*)["']$/, '$1')
}

/**
 * Extrae el cuerpo del markdown (sin frontmatter).
 */
export function extractBody(content: string): string {
  return content.replace(/^---\n[\s\S]*?\n---\n?/, '')
}
