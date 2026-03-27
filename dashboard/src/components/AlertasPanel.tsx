import type { AlertaVault } from '../types/vault'

interface Props {
  alertas: AlertaVault[]
}

const PRIORIDAD_COLORS = {
  alta: '#f44336',
  media: '#ff9800',
  baja: '#2196f3',
}

const TIPO_LABELS: Record<AlertaVault['tipo'], string> = {
  'estructura-incompleta': 'Estructura Incompleta',
  'deadline-presion': 'Deadline Próximo',
  'decision-huerfana': 'Decisión Sin Dueño',
  'documentacion-desactualizada': 'Doc. Desactualizada',
  'bloqueo-cascada': 'Bloqueo en Cascada',
  'control-no-declarado': 'Control No Declarado',
  'scope-creep': 'Scope Creep',
  'config-drift': 'Config Drift',
}

export function AlertasPanel({ alertas }: Props) {
  if (alertas.length === 0) {
    return (
      <div>
        <h2 style={{ marginBottom: 16 }}>Alertas del Vault</h2>
        <div style={{ padding: 16, background: '#e8f5e9', borderRadius: 6, color: '#2e7d32' }}>
          Sin alertas activas.
        </div>
      </div>
    )
  }

  const sorted = [...alertas].sort((a, b) => {
    const order = { alta: 0, media: 1, baja: 2 }
    return order[a.prioridad] - order[b.prioridad]
  })

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Alertas del Vault ({alertas.length})</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {sorted.map((alerta, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              padding: '10px 14px',
              background: '#fff',
              border: `2px solid ${PRIORIDAD_COLORS[alerta.prioridad]}`,
              borderRadius: 6,
            }}
          >
            <span
              style={{
                background: PRIORIDAD_COLORS[alerta.prioridad],
                color: '#fff',
                borderRadius: 4,
                padding: '2px 8px',
                fontSize: 11,
                fontWeight: 700,
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {TIPO_LABELS[alerta.tipo]}
            </span>
            <div style={{ fontSize: 13 }}>
              <div>{alerta.descripcion}</div>
              {alerta.archivo && (
                <div style={{ color: '#9e9e9e', fontSize: 11, marginTop: 2 }}>
                  {alerta.archivo}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
