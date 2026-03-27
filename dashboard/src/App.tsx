import { useEffect, useMemo, useState } from 'react'
import { HorasChart } from './components/HorasChart'
import { ReporteHoras } from './components/ReporteHoras'
import { EstadoGrid } from './components/EstadoGrid'
import { AlertasPanel } from './components/AlertasPanel'
import { MS365SyncStatusPanel } from './components/MS365SyncStatus'
import { loadDailyNotes, loadIniciativas, loadMS365SyncStatus } from './lib/vaultReader'
import { horasPorSemana, proyectosUnicos, sumaHorasTotales } from './lib/dataTransforms'
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

  const semanaData = useMemo(() => horasPorSemana(notes), [notes])
  const proyectos = useMemo(() => proyectosUnicos(notes), [notes])
  const totalHorasVault = useMemo(() => sumaHorasTotales(notes), [notes])

  if (loading) {
    return (
      <div className="dash-loading">
        <div className="dash-loading__spinner" aria-hidden />
        <p style={{ margin: 0 }}>Leyendo diario e iniciativas del vault…</p>
      </div>
    )
  }

  return (
    <div className="dash-shell">
      <header className="dash-hero">
        <p className="dash-hero__eyebrow">Cosemar PM · lectura local</p>
        <h1 className="dash-hero__title">Panel de gobernanza y horas</h1>
        <p className="dash-hero__subtitle">
          Vista única sobre timesheet (`diario/`), iniciativas (`proyectos/`) y sincronización M365. Los datos se
          cargan en caliente desde el vault del repo; no hay backend.
        </p>

        <div className="dash-kpi-row">
          <div className="dash-kpi">
            <p className="dash-kpi__label">Horas imputadas (vault)</p>
            <p className="dash-kpi__value">{totalHorasVault.toFixed(1)}</p>
            <p className="dash-kpi__hint">Suma de entradas con horas en daily notes</p>
          </div>
          <div className="dash-kpi">
            <p className="dash-kpi__label">Días registrados</p>
            <p className="dash-kpi__value">{notes.length}</p>
            <p className="dash-kpi__hint">Archivos en `diario/` con timesheet</p>
          </div>
          <div className="dash-kpi">
            <p className="dash-kpi__label">Proyectos (timesheet)</p>
            <p className="dash-kpi__value">{proyectos.length}</p>
            <p className="dash-kpi__hint">Proyectos distintos en entradas</p>
          </div>
          <div className="dash-kpi">
            <p className="dash-kpi__label">Iniciativas indexadas</p>
            <p className="dash-kpi__value">{iniciativas.length}</p>
            <p className="dash-kpi__hint">Notas bajo plan gobernanza TI</p>
          </div>
        </div>

        <p className="dash-session-meta" role="status">
          Carga de esta sesión: {notes.length} días de diario con timesheet, {iniciativas.length} iniciativas indexadas.
          Si editas Markdown en disco, recarga el navegador para ver los cambios.
        </p>
        <p className="dash-session-meta dash-session-meta--muted">
          Alertas automáticas (estructura, deadlines, decisiones, etc.): pendiente de integración con un motor de
          reglas; cuando exista, aparecerán aquí sin cambiar el layout general.
        </p>
      </header>

      <MS365SyncStatusPanel status={syncStatus} />

      <AlertasPanel alertas={alertas} />

      <HorasChart data={semanaData} proyectos={proyectos} />

      <ReporteHoras notes={notes} />

      <EstadoGrid iniciativas={iniciativas} />
    </div>
  )
}

export default App
