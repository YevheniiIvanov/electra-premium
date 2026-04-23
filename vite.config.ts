import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Na GitHub Pages aplikacja działa pod URL:
// https://<user>.github.io/<nazwa-repo>/
// Ustaw zmienną środowiskową przy buildzie, np.: VITE_BASE_PATH=/electra-premium/
const base = process.env.VITE_BASE_PATH ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
