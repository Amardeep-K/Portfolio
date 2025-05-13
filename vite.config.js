import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  colors:{
    linkedin: '#0077B5',
    github: '#333333',
    whatsapp: '#25D366',
  },
  plugins: [react(),tailwindcss()],
})
