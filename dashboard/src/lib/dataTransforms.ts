// dataTransforms.ts — Agrega y transforma datos vault para gráficos

import { getISOWeekAndYear, monthBounds, todayYMDLocal } from './dateUtils'
import type { BitacoraRow, DailyNote, MonthlyReportPayload, TimesheetEntry } from '../types/vault'

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

/** Fila plana para export CSV / detalle */
export interface FilaHorasDetalle {
  fecha: string
  proyecto: string
  iniciativa: string
  horas: number
  rol: string
  tipo_trabajo: string
  estado: string
  actividad?: string
  modalidad?: string
  descripcion: string
}

export type ModoPeriodo = 'dia' | 'semana' | 'mes'

/**
 * Filtra notas cuyo `fecha` está en [start, end] inclusive (strings YYYY-MM-DD).
 */
export function notasEnRango(notes: DailyNote[], start: string, end: string): DailyNote[] {
  return notes.filter(n => n.fecha >= start && n.fecha <= end)
}

export function notasDelDia(notes: DailyNote[], ymd: string): DailyNote[] {
  return notes.filter(n => n.fecha === ymd)
}

/** Semana ISO: `isoYear` es el año de la semana ISO (p. ej. puede ser 2026 para un 31-dic-2025). */
export function notasDeSemanaISO(notes: DailyNote[], isoYear: number, week: number): DailyNote[] {
  return notes.filter(n => {
    const { week: w, year: y } = getISOWeekAndYear(n.fecha)
    return w === week && y === isoYear
  })
}

export function notasDelMesCalendario(
  notes: DailyNote[],
  year: number,
  month1to12: number
): DailyNote[] {
  const { start, end } = monthBounds(year, month1to12)
  return notasEnRango(notes, start, end)
}

/**
 * `semana` del YAML no coincide con el cálculo desde `fecha` (revisar el diario).
 */
export function notaSemanaInconsistente(note: DailyNote): boolean {
  const { week } = getISOWeekAndYear(note.fecha)
  return week !== note.semana_iso
}

/**
 * Horas por proyecto en el conjunto de notas ya filtrado por período.
 */
export function horasPorProyectoEnNotas(notes: DailyNote[]): HorasPorProyecto[] {
  return horasTotalesPorProyecto(notes)
}

/**
 * Horas por proyecto e iniciativa (desglose).
 */
export function horasPorProyectoEIniciativa(notes: DailyNote[]): HorasPorIniciativa[] {
  return horasPorIniciativa(notes)
}

export function sumaHorasTotales(notes: DailyNote[]): number {
  let t = 0
  for (const n of notes) {
    for (const e of n.entradas) {
      t += e.horas ?? 0
    }
  }
  return t
}

/** Expande entradas a filas con fecha para CSV. */
export function filasDetalleExport(notes: DailyNote[]): FilaHorasDetalle[] {
  const rows: FilaHorasDetalle[] = []
  for (const n of notes) {
    for (const e of n.entradas) {
      rows.push({
        fecha: n.fecha,
        proyecto: e.proyecto,
        iniciativa: e.iniciativa,
        horas: e.horas ?? 0,
        rol: e.rol,
        tipo_trabajo: e.tipo_trabajo,
        estado: e.estado,
        actividad: e.actividad,
        modalidad: e.modalidad,
        descripcion: e.descripcion,
      })
    }
  }
  return rows.sort((a, b) => a.fecha.localeCompare(b.fecha) || a.proyecto.localeCompare(b.proyecto))
}

/**
 * Agrega horas por semana y proyecto (para BarChart apilado).
 */
export function horasPorSemana(notes: DailyNote[]): HorasPorSemana[] {
  const map = new Map<string, HorasPorSemana>()

  for (const note of notes) {
    const { week, year } = getISOWeekAndYear(note.fecha)
    const semanaKey = `S${week} ${year}`
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

const YM_RE = /^\d{4}-\d{2}$/

/** Meses calendario presentes en las notas, más reciente primero (`YYYY-MM`). */
export function listMonthsFromNotesDescending(notes: DailyNote[]): string[] {
  const set = new Set<string>()
  for (const n of notes) {
    if (n.fecha.length >= 7) set.add(n.fecha.slice(0, 7))
  }
  return Array.from(set).sort((a, b) => b.localeCompare(a))
}

/** Notas cuyo `fecha` cae en el mes calendario `YYYY-MM`. Orden: fecha descendente. */
export function filterNotesByCalendarMonth(notes: DailyNote[], yyyymm: string): DailyNote[] {
  if (!YM_RE.test(yyyymm)) return []
  const prefix = `${yyyymm}-`
  return notes.filter(n => n.fecha.startsWith(prefix)).sort((a, b) => b.fecha.localeCompare(a.fecha))
}

/**
 * Bitácora plana del mes (equivalente a FLATTEN entradas + SORT fecha DESC en Dataview).
 * Una fila por entrada de timesheet; orden: día más reciente primero, luego orden de entradas en el día.
 */
export function buildMonthlyBitacora(notesDelMes: DailyNote[]): BitacoraRow[] {
  const sorted = [...notesDelMes].sort((a, b) => b.fecha.localeCompare(a.fecha))
  const rows: BitacoraRow[] = []
  for (const n of sorted) {
    for (const e of n.entradas) {
      const proyecto = e.proyecto?.trim() || 'Sin proyecto'
      const iniciativa = e.iniciativa?.trim() || 'Sin iniciativa'
      const actividad = e.actividad?.trim() || 'Sin actividad'
      rows.push({
        fecha: n.fecha,
        proyecto,
        iniciativa,
        actividad,
        descripcion: e.descripcion?.trim() ?? '',
        horas: e.horas,
      })
    }
  }
  return rows
}

/** Construye el payload ejecutivo del mes; `generado_en` por defecto = hoy local. */
export function buildMonthlyReportPayload(
  periodo_yyyymm: string,
  allNotes: DailyNote[],
  generado_en: string = todayYMDLocal()
): MonthlyReportPayload {
  const filtered = filterNotesByCalendarMonth(allNotes, periodo_yyyymm)
  const bitacora = buildMonthlyBitacora(filtered)
  const hh_totales = bitacora.reduce((s, r) => s + (r.horas ?? 0), 0)
  const proyectosSet = new Set<string>()
  const iniciativasSet = new Set<string>()
  const porProyecto = new Map<string, { horas: number; actividades: number }>()

  for (const r of bitacora) {
    proyectosSet.add(r.proyecto)
    iniciativasSet.add(r.iniciativa)
    const prev = porProyecto.get(r.proyecto) ?? { horas: 0, actividades: 0 }
    porProyecto.set(r.proyecto, {
      horas: prev.horas + (r.horas ?? 0),
      actividades: prev.actividades + 1,
    })
  }

  const resumen_por_proyecto = Array.from(porProyecto.entries())
    .map(([proyecto, v]) => ({ proyecto, horas: v.horas, actividades: v.actividades }))
    .sort((a, b) => b.horas - a.horas)

  return {
    periodo_yyyymm,
    generado_en,
    hh_totales,
    num_actividades: bitacora.length,
    proyectos_involucrados: Array.from(proyectosSet).sort(),
    iniciativas_involucradas: Array.from(iniciativasSet).sort(),
    resumen_por_proyecto,
    bitacora,
  }
}
