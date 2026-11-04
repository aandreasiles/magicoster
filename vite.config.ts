import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// Soporte para ambos entornos:
// - GitHub Pages: /magicoster/ (por defecto si corre en GitHub Actions o se define BASE_PATH=/magicoster/)
// - Dominio propio (andreasiles.es): /demos/magicoster/
const base = process.env.BASE_PATH || (process.env.GITHUB_ACTIONS ? '/magicoster/' : '/demos/magicoster/')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
