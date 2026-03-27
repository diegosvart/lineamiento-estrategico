import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import type { HorasPorSemana } from '../lib/dataTransforms'
import { SectionCard } from './SectionCard'

interface Props {
  data: HorasPorSemana[]
  proyectos: string[]
}

const BAR_COLORS = ['#4d9fff', '#4caf50', '#ff9800', '#ab47bc', '#ef5350', '#26c6da', '#8bc34a', '#ff7043']

const tooltipStyle = {
  backgroundColor: '#161a22',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  color: '#e9eef5',
}

export function HorasChart({ data, proyectos }: Props) {
  if (data.length === 0) {
    return (
      <SectionCard
        badge="Tendencia"
        title="Horas por semana ISO"
        description="Barras apiladas por proyecto; eje X = semana (etiqueta tipo S12 2026)."
      >
        <div className="dash-empty">Sin datos de horas en el vault todavía.</div>
      </SectionCard>
    )
  }

  return (
    <SectionCard
      badge="Tendencia"
      title="Horas por semana ISO"
      description="Distribución semanal de horas por proyecto (stack). Útil para ver carga relativa en el tiempo."
    >
      <div className="dash-chart dash-chart--tall">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis
              dataKey="semana"
              tick={{ fill: '#b4c0d4', fontSize: 11 }}
              stroke="rgba(255,255,255,0.15)"
            />
            <YAxis
              tick={{ fill: '#b4c0d4', fontSize: 11 }}
              stroke="rgba(255,255,255,0.15)"
              label={{ value: 'Horas', angle: -90, position: 'insideLeft', fill: '#9aa8bc', fontSize: 11 }}
            />
            <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: '#9aa8bc' }} />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12 }} />
            {proyectos.map((proyecto, i) => (
              <Bar
                key={proyecto}
                dataKey={proyecto}
                stackId="a"
                fill={BAR_COLORS[i % BAR_COLORS.length]}
                radius={[2, 2, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  )
}
