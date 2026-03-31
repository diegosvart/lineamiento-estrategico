import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Permite leer `diario/`, `proyectos/`, `ms365-sync/` vía glob fuera de `dashboard/` si el detector de raíz falla
    fs: {
      allow: [repoRoot],
    },
  },
  // Permite glob imports de archivos del vault (carpeta padre)
  assetsInclude: ['**/*.md', '**/*.yaml'],
})
