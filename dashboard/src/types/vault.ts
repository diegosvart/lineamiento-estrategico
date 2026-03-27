// Tipos TypeScript para el schema YAML del vault
// Cosemar PM Workspace — workspace/dashboard

export type EstadoTag =
  | 'completado'
  | 'activo'
  | 'en-definicion'
  | 'pendiente'
  | 'backlog'

export type Lineamiento = 'L2' | 'L3' | 'L4' | 'L5'

export interface TimesheetEntry {
  proyecto: string
  iniciativa: string
  descripcion: string
  horas: number | null
  rol: string
  tipo_trabajo: string
  estado: string
  /** Opcional — schema YAML del vault */
  actividad?: string
  modalidad?: string
}

export interface DailyNote {
  fecha: string       // YYYY-MM-DD
  semana_iso: number  // 1-53 (desde YAML `semana` o `semana_iso`)
  entradas: TimesheetEntry[]
  /** Suma del día en YAML (`horas-total`), si existe */
  horas_total_yaml?: number
}

export interface Iniciativa {
  path: string
  alias: string
  tags: EstadoTag[]
  lineamiento?: Lineamiento
  title: string
}

export interface MS365SyncStatus {
  fecha: string
  fuente: 'planner'
  sync_timestamp: string
  total_tareas: number
  tareas: PlannerTask[]
}

export interface PlannerTask {
  descripcion: string
  iniciativa: string
  proyecto: string
  rol: string
  estado: string
  horas: number | null
  planner_task_id: string
}

export interface AlertaVault {
  tipo:
    | 'estructura-incompleta'
    | 'deadline-presion'
    | 'decision-huerfana'
    | 'documentacion-desactualizada'
    | 'bloqueo-cascada'
    | 'control-no-declarado'
    | 'scope-creep'
    | 'config-drift'
  descripcion: string
  archivo?: string
  prioridad: 'alta' | 'media' | 'baja'
}

// Colores del sistema (Juggl + dashboard)
export const ESTADO_COLORS: Record<EstadoTag, string> = {
  completado: '#4caf50',
  activo: '#2196f3',
  'en-definicion': '#ff9800',
  pendiente: '#9e9e9e',
  backlog: '#9c27b0',
}
