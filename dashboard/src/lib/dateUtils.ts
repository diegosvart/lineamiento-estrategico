/**
 * Semana ISO y límites de mes calendario (YYYY-MM-DD) para filtros del reporte.
 */

function pad2(n: number): string {
  return String(n).padStart(2, '0')
}

/**
 * Año ISO y número de semana ISO (1–53) para una fecha `YYYY-MM-DD`.
 * La semana ISO 1 es la que contiene el primer jueves del año.
 */
export function getISOWeekAndYear(ymd: string): { week: number; year: number } {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd)
  if (!m) return { week: 1, year: new Date().getFullYear() }
  const y = Number(m[1])
  const mo = Number(m[2])
  const d = Number(m[3])
  const date = new Date(Date.UTC(y, mo - 1, d))
  const day = date.getUTCDay() || 7
  const thu = new Date(date)
  thu.setUTCDate(date.getUTCDate() + 4 - day)
  const isoYear = thu.getUTCFullYear()
  const jan4 = new Date(Date.UTC(isoYear, 0, 4))
  const jan4Day = jan4.getUTCDay() || 7
  const week1Mon = new Date(jan4)
  week1Mon.setUTCDate(jan4.getUTCDate() - (jan4Day - 1))
  const week = Math.floor((thu.getTime() - week1Mon.getTime()) / 604800000) + 1
  return { week, year: isoYear }
}

/** Primer y último día del mes calendario como strings YYYY-MM-DD. */
export function monthBounds(year: number, month1to12: number): { start: string; end: string } {
  const start = `${year}-${pad2(month1to12)}-01`
  const lastDay = new Date(year, month1to12, 0).getDate()
  const end = `${year}-${pad2(month1to12)}-${pad2(lastDay)}`
  return { start, end }
}

/** Fecha local YYYY-MM-DD (nombre de archivo del reporte generado). */
export function todayYMDLocal(): string {
  const n = new Date()
  return `${n.getFullYear()}-${pad2(n.getMonth() + 1)}-${pad2(n.getDate())}`
}
