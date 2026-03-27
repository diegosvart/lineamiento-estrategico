import type { AlertaVault } from '../types/vault'
import { SectionCard } from './SectionCard'

interface Props {
  alertas: AlertaVault[]
}

const PRIORIDAD_COLORS = {
  alta: '#ef5350',
  media: '#ff9800',
  baja: '#4d9fff',
}

const TIPO_LABELS: Record<AlertaVault['tipo'], string> = {
  'estructura-incompleta': 'Estructura incompleta',
  'deadline-presion': 'Deadline próximo',
  'decision-huerfana': 'Decisión sin dueño',
  'documentacion-desactualizada': 'Doc. desactualizada',
  'bloqueo-cascada': 'Bloqueo en cascada',
  'control-no-declarado': 'Control no declarado',
  'scope-creep': 'Scope creep',
  'config-drift': 'Config drift',
}

export function AlertasPanel({ alertas }: Props) {
  if (alertas.length === 0) {
    return null
  }

  const sorted = [...alertas].sort((a, b) => {
    const order = { alta: 0, media: 1, baja: 2 }
    return order[a.prioridad] - order[b.prioridad]
  })

  return (
    <SectionCard
      badge="Riesgos"
      title={`Alertas del vault (${alertas.length})`}
      description="Prioridad y tipo según el registro de alertas activas."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {sorted.map((alerta, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              padding: '12px 14px',
              background: 'rgba(0,0,0,0.25)',
              border: `1px solid ${PRIORIDAD_COLORS[alerta.prioridad]}`,
              borderRadius: 10,
            }}
          >
            <span
              style={{
                background: PRIORIDAD_COLORS[alerta.prioridad],
                color: '#0c0f14',
                borderRadius: 6,
                padding: '3px 8px',
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {TIPO_LABELS[alerta.tipo]}
            </span>
            <div style={{ fontSize: 13, color: 'var(--text-primary)' }}>
              <div>{alerta.descripcion}</div>
              {alerta.archivo ? (
                <div style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 4 }}>{alerta.archivo}</div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}
