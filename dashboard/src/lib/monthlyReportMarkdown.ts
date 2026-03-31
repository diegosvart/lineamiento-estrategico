// Genera Markdown ejecutivo portable (sin wikilinks ni Dataview) desde el payload mensual.

import type { MonthlyReportPayload } from '../types/vault'

function escapeCell(s: string): string {
  return s.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').trim()
}

function hhCell(h: number | null): string {
  if (h === null || Number.isNaN(h)) return '—'
  return String(h)
}

/** Título legible del mes a partir de `YYYY-MM`. */
function mesTitulo(yyyymm: string): string {
  const m = /^(\d{4})-(\d{2})$/.exec(yyyymm)
  if (!m) return yyyymm
  const y = Number(m[1])
  const mo = Number(m[2]) - 1
  try {
    return new Date(y, mo, 1).toLocaleDateString('es-CL', { month: 'long', year: 'numeric' })
  } catch {
    return yyyymm
  }
}

/**
 * Documento completo: resumen ejecutivo + tabla por proyecto + bitácora (estilo sección J).
 */
export function renderMonthlyReportMarkdown(p: MonthlyReportPayload): string {
  const lines: string[] = []
  lines.push('# Reporte mensual de actividades')
  lines.push('')
  lines.push(`- **Período:** ${mesTitulo(p.periodo_yyyymm)} (${p.periodo_yyyymm})`)
  lines.push(`- **Generado:** ${p.generado_en}`)
  lines.push(`- **HH totales (imputadas):** ${p.hh_totales.toFixed(1)}`)
  lines.push(`- **Cantidad de actividades (líneas):** ${p.num_actividades}`)
  lines.push(`- **Proyectos involucrados:** ${p.proyectos_involucrados.length}`)
  lines.push(`- **Iniciativas involucradas:** ${p.iniciativas_involucradas.length}`)
  lines.push('')
  lines.push('## Resumen por proyecto')
  lines.push('')
  lines.push('| Proyecto | HH | Actividades |')
  lines.push('| --- | ---: | ---: |')
  if (p.resumen_por_proyecto.length === 0) {
    lines.push('| _Sin registros en el período_ | — | — |')
  } else {
    for (const r of p.resumen_por_proyecto) {
      lines.push(`| ${escapeCell(r.proyecto)} | ${r.horas.toFixed(1)} | ${r.actividades} |`)
    }
  }
  lines.push('')
  lines.push('## Bitácora de actividades')
  lines.push('')
  lines.push(
    '> Todas las entradas del timesheet del período (equivalente a la bitácora del dashboard de horas en Obsidian).'
  )
  lines.push('')
  lines.push('| Día | Proyecto | Iniciativa | Actividad | Descripción | HH |')
  lines.push('| --- | --- | --- | --- | --- | ---: |')
  if (p.bitacora.length === 0) {
    lines.push('| — | — | — | — | _Sin datos en este mes_ | — |')
  } else {
    for (const r of p.bitacora) {
      lines.push(
        `| ${r.fecha} | ${escapeCell(r.proyecto)} | ${escapeCell(r.iniciativa)} | ${escapeCell(r.actividad)} | ${escapeCell(r.descripcion)} | ${hhCell(r.horas)} |`
      )
    }
  }
  lines.push('')
  return lines.join('\n')
}
