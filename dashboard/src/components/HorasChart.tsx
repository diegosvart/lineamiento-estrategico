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

interface Props {
  data: HorasPorSemana[]
  proyectos: string[]
}

const COLORS = [
  '#2196f3', '#4caf50', '#ff9800', '#9c27b0',
  '#f44336', '#00bcd4', '#8bc34a', '#ff5722',
]

export function HorasChart({ data, proyectos }: Props) {
  if (data.length === 0) {
    return <div style={{ padding: 24, color: '#9e9e9e' }}>Sin datos de horas registradas.</div>
  }

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Horas por Semana</h2>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="semana" />
          <YAxis label={{ value: 'horas', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          {proyectos.map((proyecto, i) => (
            <Bar
              key={proyecto}
              dataKey={proyecto}
              stackId="a"
              fill={COLORS[i % COLORS.length]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
