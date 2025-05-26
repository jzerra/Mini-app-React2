import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'public',          // tell Vite to treat public/ as root
  plugins: [react()],
  publicDir: '../public',  // public assets relative to root
  build: {
    outDir: '../dist'      // output to project root/dist
  }
})
