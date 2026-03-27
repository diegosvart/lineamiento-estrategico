import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  // Permite glob imports de archivos del vault (carpeta padre)
  assetsInclude: ['**/*.md', '**/*.yaml'],
})
