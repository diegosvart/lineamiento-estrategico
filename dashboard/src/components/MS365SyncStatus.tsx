import type { MS365SyncStatus } from '../types/vault'

interface Props {
  status: MS365SyncStatus | null
}

export function MS365SyncStatusPanel({ status }: Props) {
  if (!status) {
    return (
      <div className="dash-sync dash-sync--missing">
        <span className="dash-sync__brand">Microsoft 365</span>
        <span>
          No hay <span className="dash-code">ms365-sync/output/*.yaml</span> en el workspace, o el archivo está
          vacío. Ejecuta el script de sync en el ámbito <span className="dash-code">workspace/ms365</span> para ver
          tareas importadas desde Planner.
        </span>
      </div>
    )
  }

  const timestamp = status.sync_timestamp
    ? new Date(status.sync_timestamp).toLocaleString('es-CL')
    : status.fecha

  return (
    <div className="dash-sync dash-sync--ok">
      <span className="dash-sync__brand">Microsoft 365</span>
      <span style={{ color: 'var(--text-secondary)' }}>
        Última sincronización: <strong style={{ color: 'var(--text-primary)' }}>{timestamp}</strong>
      </span>
      <span className="dash-pill">{status.total_tareas} tareas</span>
    </div>
  )
}
