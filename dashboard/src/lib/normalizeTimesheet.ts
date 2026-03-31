import type { TimesheetEntry } from '../types/vault'

function numOrNull(v: unknown): number | null {
  if (v === null || v === undefined) return null
  const n = typeof v === 'number' ? v : Number(v)
  return Number.isNaN(n) ? null : n
}

function str(v: unknown): string {
  return v === null || v === undefined ? '' : String(v)
}

/**
 * Normaliza el array `entradas` del YAML del diario al modelo interno.
 */
export function normalizeEntradas(raw: unknown): TimesheetEntry[] {
  if (!Array.isArray(raw)) return []
  const out: TimesheetEntry[] = []
  for (const row of raw) {
    if (!row || typeof row !== 'object') continue
    const r = row as Record<string, unknown>
    out.push({
      proyecto: str(r['proyecto']),
      iniciativa: str(r['iniciativa']),
      descripcion: str(r['descripcion']),
      horas: numOrNull(r['horas']),
      rol: str(r['rol']),
      tipo_trabajo: str(r['tipo-trabajo'] ?? r['tipo_trabajo']),
      estado: str(r['estado']),
      actividad: r['actividad'] !== undefined ? str(r['actividad']) : undefined,
      modalidad: r['modalidad'] !== undefined ? str(r['modalidad']) : undefined,
    })
  }
  return out
}
