import type { MS365SyncStatus } from '../types/vault'

interface Props {
  status: MS365SyncStatus | null
}

export function MS365SyncStatusPanel({ status }: Props) {
  if (!status) {
    return (
      <div
        style={{
          padding: '10px 14px',
          background: '#f5f5f5',
          borderRadius: 6,
          fontSize: 13,
          color: '#9e9e9e',
        }}
      >
        MS365 Sync: sin datos de sincronización
      </div>
    )
  }

  const timestamp = status.sync_timestamp
    ? new Date(status.sync_timestamp).toLocaleString('es-CL')
    : status.fecha

  return (
    <div
      style={{
        padding: '10px 14px',
        background: '#e3f2fd',
        borderRadius: 6,
        fontSize: 13,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <span style={{ color: '#1565c0', fontWeight: 600 }}>MS365 Sync</span>
      <span style={{ color: '#555' }}>Última sync: {timestamp}</span>
      <span
        style={{
          background: '#1565c0',
          color: '#fff',
          borderRadius: 10,
          padding: '1px 8px',
          fontSize: 11,
        }}
      >
        {status.total_tareas} tareas importadas
      </span>
    </div>
  )
}
