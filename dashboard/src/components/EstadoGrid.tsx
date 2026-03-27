import type { Iniciativa } from '../types/vault'
import { ESTADO_COLORS } from '../types/vault'
import { SectionCard } from './SectionCard'

interface Props {
  iniciativas: Iniciativa[]
  filtroLineamiento?: string
}

const LINEAMIENTOS = ['L2', 'L3', 'L4', 'L5'] as const

export function EstadoGrid({ iniciativas, filtroLineamiento }: Props) {
  const filtered = filtroLineamiento
    ? iniciativas.filter(i => i.lineamiento === filtroLineamiento)
    : iniciativas

  if (filtered.length === 0) {
    return (
      <SectionCard
        badge="Portafolio"
        title="Estado de iniciativas"
        description="Tags YAML de cada nota (completado, activo, en-definición, pendiente, backlog), alineados con el grafo Juggl."
      >
        <div className="dash-empty">No se encontraron iniciativas con el filtro actual.</div>
      </SectionCard>
    )
  }

  const grouped = LINEAMIENTOS.reduce<Record<string, Iniciativa[]>>((acc, l) => {
    acc[l] = filtered.filter(i => i.lineamiento === l)
    return acc
  }, {})

  return (
    <SectionCard
      badge="Portafolio"
      title="Estado de iniciativas"
      description="Color = estado del documento (misma paleta que Juggl). Agrupado por lineamiento L2–L5. Pasa el cursor para ver ruta del archivo."
    >
      {LINEAMIENTOS.map(lineamiento => {
        const items = grouped[lineamiento]
        if (items.length === 0) return null
        return (
          <div key={lineamiento} className="dash-lineamiento">
            <h3>{lineamiento}</h3>
            <div className="dash-chip-grid">
              {items.map(iniciativa => {
                const estado = iniciativa.tags[0] ?? 'pendiente'
                const color = ESTADO_COLORS[estado] ?? '#9e9e9e'
                return (
                  <div
                    key={iniciativa.path}
                    className="dash-chip"
                    style={{ background: color }}
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
      <p className="dash-meta-footer">Total visibles: {filtered.length} iniciativas</p>
    </SectionCard>
  )
}
