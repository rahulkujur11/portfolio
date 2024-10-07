import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Adjust the base path if needed
  build: {
    outDir: 'dist', // Default is dist, ensure this is correct
  },
  plugins: [react()],
})
