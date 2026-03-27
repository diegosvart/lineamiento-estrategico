import { useEffect, useState } from 'react'
import { HorasChart } from './components/HorasChart'
import { EstadoGrid } from './components/EstadoGrid'
import { AlertasPanel } from './components/AlertasPanel'
import { MS365SyncStatusPanel } from './components/MS365SyncStatus'
import { loadDailyNotes, loadIniciativas, loadMS365SyncStatus } from './lib/vaultReader'
import { horasPorSemana, proyectosUnicos } from './lib/dataTransforms'
import type { DailyNote, Iniciativa, MS365SyncStatus, AlertaVault } from './types/vault'

function App() {
  const [notes, setNotes] = useState<DailyNote[]>([])
  const [iniciativas, setIniciativas] = useState<Iniciativa[]>([])
  const [syncStatus, setSyncStatus] = useState<MS365SyncStatus | null>(null)
  const [alertas] = useState<AlertaVault[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function init() {
      const [loadedNotes, loadedIniciativas, loadedSync] = await Promise.all([
        loadDailyNotes(),
        loadIniciativas(),
        loadMS365SyncStatus(),
      ])
      setNotes(loadedNotes)
      setIniciativas(loadedIniciativas)
      setSyncStatus(loadedSync)
      setLoading(false)
    }
    init()
  }, [])

  if (loading) {
    return (
      <div style={{ padding: 40, fontFamily: 'sans-serif', color: '#555' }}>
        Cargando vault...
      </div>
    )
  }

  const semanaData = horasPorSemana(notes)
  const proyectos = proyectosUnicos(notes)

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        maxWidth: 1100,
        margin: '0 auto',
        padding: 24,
        color: '#212121',
      }}
    >
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 22 }}>PM Workspace Dashboard</h1>
        <p style={{ margin: '4px 0 0', color: '#9e9e9e', fontSize: 13 }}>
          Cosemar — Diego Morales
        </p>
      </header>

      <MS365SyncStatusPanel status={syncStatus} />

      <div style={{ height: 24 }} />
      <AlertasPanel alertas={alertas} />

      <div style={{ height: 32 }} />
      <HorasChart data={semanaData} proyectos={proyectos} />

      <div style={{ height: 32 }} />
      <EstadoGrid iniciativas={iniciativas} />
    </div>
  )
}

export default App
