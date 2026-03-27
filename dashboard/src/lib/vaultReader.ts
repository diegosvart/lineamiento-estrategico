// vaultReader.ts — Lee archivos del vault via import.meta.glob
// Solo accede a: diario/, proyectos/, ms365-sync/output/

import { getISOWeekAndYear } from './dateUtils'
import { normalizeEntradas } from './normalizeTimesheet'
import { parseFrontmatter } from './yamlParser'
import type { DailyNote, Iniciativa, MS365SyncStatus } from '../types/vault'

// Glob imports — Vite resuelve en build time
// Rutas relativas desde dashboard/src/lib/ → vault root = ../../../
const diarioGlob = import.meta.glob('../../../diario/[0-9]*.md', { as: 'raw', eager: false })
const proyectosGlob = import.meta.glob('../../../proyectos/**/*.md', { as: 'raw', eager: false })
const ms365Glob = import.meta.glob('../../../ms365-sync/output/*.yaml', { as: 'raw', eager: false })

function numOrUndef(v: unknown): number | undefined {
  if (v === null || v === undefined) return undefined
  const n = typeof v === 'number' ? v : Number(v)
  return Number.isNaN(n) ? undefined : n
}

/**
 * Carga y parsea todas las daily notes con entradas de timesheet.
 */
export async function loadDailyNotes(): Promise<DailyNote[]> {
  const notes: DailyNote[] = []

  for (const [path, loader] of Object.entries(diarioGlob)) {
    try {
      const content = await (loader as () => Promise<string>)()
      const fm = parseFrontmatter(content)
      if (!fm) continue

      const fecha = String(fm['fecha'] ?? '')
      const semanaRaw = fm['semana_iso'] ?? fm['semana']
      const computed = getISOWeekAndYear(fecha)
      const semanaIso =
        typeof semanaRaw === 'number' && !Number.isNaN(semanaRaw)
          ? semanaRaw
          : computed.week

      const entradas = normalizeEntradas(fm['entradas'])
      const horasTotalRaw = fm['horas-total'] ?? fm['horas_total']
      const horas_total_yaml = numOrUndef(horasTotalRaw)

      if (fecha) {
        notes.push({
          fecha,
          semana_iso: semanaIso,
          entradas,
          ...(horas_total_yaml !== undefined ? { horas_total_yaml } : {}),
        })
      }
    } catch {
      console.warn(`Error leyendo ${path}`)
    }
  }

  // Ordenar por fecha descendente
  return notes.sort((a, b) => b.fecha.localeCompare(a.fecha))
}

/**
 * Carga iniciativas (notas de proyectos) con su estado y lineamiento.
 */
export async function loadIniciativas(): Promise<Iniciativa[]> {
  const iniciativas: Iniciativa[] = []

  for (const [path, loader] of Object.entries(proyectosGlob)) {
    try {
      const content = await (loader as () => Promise<string>)()
      const fm = parseFrontmatter(content)
      if (!fm) continue

      const tags = fm['tags']
      const aliases = fm['aliases']

      // Solo incluir notas con tag de estado
      const estadoTags = ['completado', 'activo', 'en-definicion', 'pendiente', 'backlog']
      const tagsArr = Array.isArray(tags) ? tags : (tags ? [tags] : [])
      const hasEstado = tagsArr.some(t => estadoTags.includes(String(t)))
      if (!hasEstado) continue

      const alias = Array.isArray(aliases) ? aliases[0] : (aliases as string ?? path.split('/').pop() ?? '')

      // Inferir lineamiento desde la ruta
      const lineamientoMatch = path.match(/\/(L[2-5])-/)
      const lineamiento = lineamientoMatch ? lineamientoMatch[1] : undefined

      iniciativas.push({
        path,
        alias: String(alias),
        tags: tagsArr as Iniciativa['tags'],
        lineamiento: lineamiento as Iniciativa['lineamiento'],
        title: String(alias),
      })
    } catch {
      console.warn(`Error leyendo ${path}`)
    }
  }

  return iniciativas
}

/**
 * Carga el status de la última sincronización con MS365.
 */
export async function loadMS365SyncStatus(): Promise<MS365SyncStatus | null> {
  const entries = Object.entries(ms365Glob)
  if (entries.length === 0) return null

  // Tomar el más reciente (orden alfabético = cronológico por YYYY-MM-DD)
  const sorted = entries.sort(([a], [b]) => b.localeCompare(a))
  const [, loader] = sorted[0]

  try {
    const content = await (loader as () => Promise<string>)()
    // Parse YAML simple de sync output
    const lines = content.split('\n')
    const obj: Record<string, unknown> = {}
    for (const line of lines) {
      const m = line.match(/^(\w[\w_]*):\s*(.+)$/)
      if (m) obj[m[1]] = m[2].trim()
    }
    return {
      fecha: String(obj['fecha'] ?? ''),
      fuente: 'planner',
      sync_timestamp: String(obj['sync_timestamp'] ?? ''),
      total_tareas: Number(obj['total_tareas'] ?? 0),
      tareas: [],
    }
  } catch {
    return null
  }
}
