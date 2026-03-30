import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  buildMonthlyReportPayload,
  listMonthsFromNotesDescending,
} from '../lib/dataTransforms'
import { todayYMDLocal } from '../lib/dateUtils'
import { renderMonthlyReportMarkdown } from '../lib/monthlyReportMarkdown'
import type { DailyNote } from '../types/vault'

interface Props {
  notes: DailyNote[]
}

export function MonthlyReportPanel({ notes }: Props) {
  const months = useMemo(() => listMonthsFromNotesDescending(notes), [notes])
  const [periodo, setPeriodo] = useState<string>('')

  useEffect(() => {
    if (months.length === 0) {
      setPeriodo('')
      return
    }
    setPeriodo(prev => (prev && months.includes(prev) ? prev : months[0]))
  }, [months])

  const payload = useMemo(() => {
    if (!periodo || !/^\d{4}-\d{2}$/.test(periodo)) return null
    return buildMonthlyReportPayload(periodo, notes, todayYMDLocal())
  }, [periodo, notes])

  const markdown = useMemo(() => (payload ? renderMonthlyReportMarkdown(payload) : ''), [payload])

  const downloadFilename = useCallback(() => {
    if (!periodo) return 'reporte-mensual.md'
    const gen = todayYMDLocal()
    return `reporte-mensual-actividades-${periodo}-generado-${gen}.md`
  }, [periodo])

  const handleDownload = useCallback(() => {
    if (!markdown) return
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = downloadFilename()
    a.click()
    URL.revokeObjectURL(url)
  }, [markdown, downloadFilename])

  if (months.length === 0) {
    return (
      <section className="dash-card" aria-labelledby="monthly-report-heading">
        <div className="dash-section-head">
          <span className="dash-badge">Exportación</span>
          <h2 id="monthly-report-heading" className="dash-section-head__title">
            Reporte mensual ejecutivo
          </h2>
          <p className="dash-section-head__desc">
            No hay daily notes con fechas reconocibles en el vault. Cuando existan entradas en{' '}
            <code>diario/</code>, podrás elegir un mes y descargar la bitácora en Markdown.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="dash-card" aria-labelledby="monthly-report-heading">
      <div className="dash-section-head">
        <span className="dash-badge">Exportación</span>
        <h2 id="monthly-report-heading" className="dash-section-head__title">
          Reporte mensual ejecutivo
        </h2>
        <p className="dash-section-head__desc">
          Vista previa y descarga en Markdown (sin wikilinks ni Dataview), alineada a la bitácora de actividades
          del resumen de horas. Misma fuente: entradas del timesheet por día.
        </p>
      </div>

      <div className="dash-toolbar">
        <label>
          Período (mes)
          <select
            className="dash-select"
            value={periodo}
            onChange={e => setPeriodo(e.target.value)}
            aria-label="Mes del reporte"
          >
            {months.map(m => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
        <button type="button" className="dash-btn" onClick={handleDownload} disabled={!markdown}>
          Descargar .md
        </button>
        <span className="dash-session-meta dash-session-meta--muted" style={{ margin: 0 }}>
          Archivo: <code>{downloadFilename()}</code>
        </span>
      </div>

      {payload && (
        <div className="dash-monthly-kpis" style={{ marginBottom: 16 }}>
          <p style={{ margin: '0 0 8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <strong>HH totales:</strong> {payload.hh_totales.toFixed(1)} · <strong>Actividades:</strong>{' '}
            {payload.num_actividades} · <strong>Proyectos:</strong> {payload.proyectos_involucrados.length} ·{' '}
            <strong>Iniciativas:</strong> {payload.iniciativas_involucradas.length}
          </p>
        </div>
      )}

      <div className="dash-monthly-preview-wrap">
        <p className="dash-section-head__desc" style={{ marginBottom: 8 }}>
          Vista previa (idéntica al archivo descargado)
        </p>
        <pre className="dash-monthly-preview" role="region" aria-label="Vista previa Markdown">
          {markdown || '—'}
        </pre>
      </div>
    </section>
  )
}
