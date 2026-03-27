// dataTransforms.ts — Agrega y transforma datos vault para gráficos

import type { DailyNote, TimesheetEntry } from '../types/vault'

export interface HorasPorSemana {
  semana: string    // "S12 2026"
  [proyecto: string]: number | string
}

export interface HorasPorProyecto {
  proyecto: string
  horas: number
}

export interface HorasPorIniciativa {
  iniciativa: string
  proyecto: string
  horas: number
}

/**
 * Agrega horas por semana y proyecto (para BarChart apilado).
 */
export function horasPorSemana(notes: DailyNote[]): HorasPorSemana[] {
  const map = new Map<string, HorasPorSemana>()

  for (const note of notes) {
    const semanaKey = `S${note.semana_iso} ${note.fecha.slice(0, 4)}`
    if (!map.has(semanaKey)) {
      map.set(semanaKey, { semana: semanaKey })
    }
    const entry = map.get(semanaKey)!

    for (const e of note.entradas) {
      const horas = e.horas ?? 0
      const prev = typeof entry[e.proyecto] === 'number' ? (entry[e.proyecto] as number) : 0
      entry[e.proyecto] = prev + horas
    }
  }

  return Array.from(map.values()).sort((a, b) =>
    String(a.semana).localeCompare(String(b.semana))
  )
}

/**
 * Agrega horas totales por proyecto.
 */
export function horasTotalesPorProyecto(notes: DailyNote[]): HorasPorProyecto[] {
  const map = new Map<string, number>()

  for (const note of notes) {
    for (const e of note.entradas) {
      map.set(e.proyecto, (map.get(e.proyecto) ?? 0) + (e.horas ?? 0))
    }
  }

  return Array.from(map.entries())
    .map(([proyecto, horas]) => ({ proyecto, horas }))
    .sort((a, b) => b.horas - a.horas)
}

/**
 * Agrega horas por iniciativa con su proyecto padre.
 */
export function horasPorIniciativa(notes: DailyNote[]): HorasPorIniciativa[] {
  const map = new Map<string, HorasPorIniciativa>()

  for (const note of notes) {
    for (const e of note.entradas) {
      const key = `${e.proyecto}::${e.iniciativa}`
      const prev = map.get(key) ?? { iniciativa: e.iniciativa, proyecto: e.proyecto, horas: 0 }
      map.set(key, { ...prev, horas: prev.horas + (e.horas ?? 0) })
    }
  }

  return Array.from(map.values()).sort((a, b) => b.horas - a.horas)
}

/**
 * Extrae proyectos únicos de las daily notes.
 */
export function proyectosUnicos(notes: DailyNote[]): string[] {
  const set = new Set<string>()
  for (const note of notes) {
    for (const e of note.entradas) {
      set.add(e.proyecto)
    }
  }
  return Array.from(set).sort()
}

/**
 * Filtra entradas por proyecto y/o rango de semanas.
 */
export function filtrarEntradas(
  notes: DailyNote[],
  filters: { proyecto?: string; semana?: number; lineamiento?: string }
): TimesheetEntry[] {
  const { proyecto, semana } = filters
  const result: TimesheetEntry[] = []

  for (const note of notes) {
    if (semana !== undefined && note.semana_iso !== semana) continue
    for (const e of note.entradas) {
      if (proyecto && e.proyecto !== proyecto) continue
      result.push(e)
    }
  }

  return result
}
