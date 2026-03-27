import type { Iniciativa } from '../types/vault'
import { ESTADO_COLORS } from '../types/vault'

interface Props {
  iniciativas: Iniciativa[]
  filtroLineamiento?: string
}

const LINEAMIENTOS = ['L2', 'L3', 'L4', 'L5']

export function EstadoGrid({ iniciativas, filtroLineamiento }: Props) {
  const filtered = filtroLineamiento
    ? iniciativas.filter(i => i.lineamiento === filtroLineamiento)
    : iniciativas

  if (filtered.length === 0) {
    return <div style={{ padding: 24, color: '#9e9e9e' }}>Sin iniciativas encontradas.</div>
  }

  const grouped = LINEAMIENTOS.reduce<Record<string, Iniciativa[]>>((acc, l) => {
    acc[l] = filtered.filter(i => i.lineamiento === l)
    return acc
  }, {})

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Estado de Iniciativas</h2>
      {LINEAMIENTOS.map(lineamiento => {
        const items = grouped[lineamiento]
        if (items.length === 0) return null
        return (
          <div key={lineamiento} style={{ marginBottom: 24 }}>
            <h3 style={{ color: '#555', marginBottom: 8 }}>{lineamiento}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {items.map(iniciativa => {
                const estado = iniciativa.tags[0] ?? 'pendiente'
                const color = ESTADO_COLORS[estado] ?? '#9e9e9e'
                return (
                  <div
                    key={iniciativa.path}
                    style={{
                      background: color,
                      color: '#fff',
                      borderRadius: 6,
                      padding: '6px 12px',
                      fontSize: 13,
                      fontWeight: 500,
                      maxWidth: 220,
                      wordBreak: 'break-word',
                    }}
                    title={`${estado} — ${iniciativa.path}`}
                  >
                    {iniciativa.alias}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      <div style={{ marginTop: 8, fontSize: 12, color: '#9e9e9e' }}>
        Total: {filtered.length} iniciativas
      </div>
    </div>
  )
}
