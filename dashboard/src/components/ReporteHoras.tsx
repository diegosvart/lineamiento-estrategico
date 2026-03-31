import { useMemo, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { getISOWeekAndYear } from '../lib/dateUtils'
import {
  filasDetalleExport,
  horasPorProyectoEIniciativa,
  horasPorProyectoEnNotas,
  type ModoPeriodo,
  notaSemanaInconsistente,
  notasDelDia,
  notasDelMesCalendario,
  notasDeSemanaISO,
  sumaHorasTotales,
} from '../lib/dataTransforms'
import type { DailyNote } from '../types/vault'
import { SectionCard } from './SectionCard'

const chartTooltip = {
  backgroundColor: '#161a22',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  color: '#e9eef5',
}

function todayYMD(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function escapeCsvCell(s: string): string {
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function toCsv(rows: ReturnType<typeof filasDetalleExport>): string {
  const headers = [
    'fecha',
    'proyecto',
    'iniciativa',
    'horas',
    'rol',
    'tipo_trabajo',
    'estado',
    'actividad',
    'modalidad',
    'descripcion',
  ]
  const lines = [headers.join(',')]
  for (const r of rows) {
    const line = [
      r.fecha,
      r.proyecto,
      r.iniciativa,
      String(r.horas),
      r.rol,
      r.tipo_trabajo,
      r.estado,
      r.actividad ?? '',
      r.modalidad ?? '',
      r.descripcion,
    ].map(escapeCsvCell)
    lines.push(line.join(','))
  }
  return lines.join('\n')
}

interface Props {
  notes: DailyNote[]
}

export function ReporteHoras({ notes }: Props) {
  const [modo, setModo] = useState<ModoPeriodo>('semana')
  const [fechaDia, setFechaDia] = useState(todayYMD())
  const [semanaNum, setSemanaNum] = useState(() => String(getISOWeekAndYear(todayYMD()).week))
  const [semanaAno, setSemanaAno] = useState(() => String(getISOWeekAndYear(todayYMD()).year))
  const [mesAno, setMesAno] = useState(() => String(new Date().getFullYear()))
  const [mesMes, setMesMes] = useState(() => String(new Date().getMonth() + 1))
  const [mostrarIniciativas, setMostrarIniciativas] = useState(false)

  const notasFiltradas = useMemo(() => {
    if (modo === 'dia') {
      return notasDelDia(notes, fechaDia)
    }
    if (modo === 'semana') {
      const w = Number.parseInt(semanaNum, 10)
      const y = Number.parseInt(semanaAno, 10)
      if (Number.isNaN(w) || Number.isNaN(y)) return []
      return notasDeSemanaISO(notes, y, w)
    }
    const y = Number.parseInt(mesAno, 10)
    const m = Number.parseInt(mesMes, 10)
    if (Number.isNaN(y) || Number.isNaN(m) || m < 1 || m > 12) return []
    return notasDelMesCalendario(notes, y, m)
  }, [modo, fechaDia, semanaNum, semanaAno, mesAno, mesMes, notes])

  const porProyecto = useMemo(() => horasPorProyectoEnNotas(notasFiltradas), [notasFiltradas])
  const porIniciativa = useMemo(() => horasPorProyectoEIniciativa(notasFiltradas), [notasFiltradas])
  const totalHoras = useMemo(() => sumaHorasTotales(notasFiltradas), [notasFiltradas])

  const chartData = useMemo(
    () => porProyecto.map(r => ({ name: r.proyecto, horas: r.horas })),
    [porProyecto]
  )

  const advertenciasSemana = useMemo(
    () => notasFiltradas.filter(n => notaSemanaInconsistente(n)),
    [notasFiltradas]
  )

  const exportCsv = () => {
    const rows = filasDetalleExport(notasFiltradas)
    const csv = `\uFEFF${toCsv(rows)}`
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `horas-reporte-${modo}-${todayYMD()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const copiarCsv = async () => {
    const csv = toCsv(filasDetalleExport(notasFiltradas))
    try {
      await navigator.clipboard.writeText(csv)
    } catch {
      /* ignore */
    }
  }

  const labelPeriodo =
    modo === 'dia'
      ? fechaDia
      : modo === 'semana'
        ? `Semana ISO ${semanaNum} · ${semanaAno}`
        : `${mesMes}-${mesAno}`

  return (
    <SectionCard
      badge="Operativo"
      title="Reporte de horas por proyecto"
      description="Fuente: daily notes en diario/*.md. Elige día, semana ISO o mes; los totales suman solo entradas con horas. Exporta detalle a CSV o portapapeles."
    >
      <div className="dash-toolbar">
        <label>
          <span>Período</span>
          <select
            className="dash-select"
            value={modo}
            onChange={e => setModo(e.target.value as ModoPeriodo)}
          >
            <option value="dia">Día</option>
            <option value="semana">Semana ISO</option>
            <option value="mes">Mes calendario</option>
          </select>
        </label>

        {modo === 'dia' && (
          <label>
            Fecha
            <input
              className="dash-input"
              type="date"
              value={fechaDia}
              onChange={e => setFechaDia(e.target.value)}
            />
          </label>
        )}

        {modo === 'semana' && (
          <>
            <label>
              Semana (1–53)
              <input
                className="dash-input"
                type="number"
                min={1}
                max={53}
                value={semanaNum}
                onChange={e => setSemanaNum(e.target.value)}
                style={{ width: 72 }}
              />
            </label>
            <label>
              Año ISO
              <input
                className="dash-input"
                type="number"
                value={semanaAno}
                onChange={e => setSemanaAno(e.target.value)}
                style={{ width: 88 }}
              />
            </label>
          </>
        )}

        {modo === 'mes' && (
          <>
            <label>
              Mes
              <select className="dash-select" value={mesMes} onChange={e => setMesMes(e.target.value)}>
                {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                  <option key={m} value={String(m)}>
                    {String(m).padStart(2, '0')}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Año
              <input
                className="dash-input"
                type="number"
                value={mesAno}
                onChange={e => setMesAno(e.target.value)}
                style={{ width: 88 }}
              />
            </label>
          </>
        )}

        <label>
          <input
            type="checkbox"
            checked={mostrarIniciativas}
            onChange={e => setMostrarIniciativas(e.target.checked)}
          />
          Desglose por iniciativa
        </label>

        <button type="button" className="dash-btn" onClick={exportCsv}>
          Descargar CSV
        </button>
        <button type="button" className="dash-btn" onClick={copiarCsv}>
          Copiar CSV
        </button>
      </div>

      {advertenciasSemana.length > 0 && (
        <div className="dash-notice dash-notice--warn" style={{ marginBottom: 16 }}>
          <strong>Semana YAML vs fecha:</strong> en {advertenciasSemana.length} diario(s) el campo{' '}
          <span className="dash-code">semana</span> no coincide con la semana ISO calculada desde{' '}
          <span className="dash-code">fecha</span>: {advertenciasSemana.map(n => n.fecha).join(', ')}
        </div>
      )}

      <p style={{ margin: '0 0 16px', fontSize: 14, color: 'var(--text-secondary)' }}>
        <strong style={{ color: 'var(--text-primary)' }}>Período:</strong> {labelPeriodo} ·{' '}
        <strong style={{ color: 'var(--text-primary)' }}>Total horas:</strong> {totalHoras.toFixed(1)}
      </p>

      {chartData.length > 0 && (
        <div className="dash-chart dash-chart--mid" style={{ marginBottom: 20 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis
                dataKey="name"
                angle={-22}
                textAnchor="end"
                height={76}
                interval={0}
                tick={{ fill: '#b4c0d4', fontSize: 11 }}
                stroke="rgba(255,255,255,0.15)"
              />
              <YAxis
                tick={{ fill: '#b4c0d4', fontSize: 11 }}
                stroke="rgba(255,255,255,0.15)"
                label={{ value: 'Horas', angle: -90, position: 'insideLeft', fill: '#9aa8bc', fontSize: 11 }}
              />
              <Tooltip contentStyle={chartTooltip} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="horas" name="Horas" fill="#4d9fff" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {porProyecto.length === 0 ? (
        <div className="dash-empty">Sin entradas de horas en este período.</div>
      ) : (
        <div className="dash-table-wrap" style={{ marginBottom: mostrarIniciativas ? 20 : 0 }}>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Proyecto</th>
                <th>Horas</th>
              </tr>
            </thead>
            <tbody>
              {porProyecto.map(row => (
                <tr key={row.proyecto}>
                  <td>{row.proyecto}</td>
                  <td>{row.horas.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {mostrarIniciativas && porIniciativa.length > 0 && (
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              fontWeight: 600,
              margin: '0 0 10px',
            }}
          >
            Por iniciativa
          </h3>
          <div className="dash-table-wrap">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Proyecto</th>
                  <th>Iniciativa</th>
                  <th>Horas</th>
                </tr>
              </thead>
              <tbody>
                {porIniciativa.map(row => (
                  <tr key={`${row.proyecto}-${row.iniciativa}`}>
                    <td>{row.proyecto}</td>
                    <td>{row.iniciativa}</td>
                    <td>{row.horas.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </SectionCard>
  )
}
