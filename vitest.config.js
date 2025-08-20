import { defineConfig } from 'vitest/config' // Make sure to import from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // This line is crucial
    // Other Vitest configurations can go here
    setupFiles: ['./setupTests.ts'], // Path to your setup file
  },
  // Other Vite configurations can go here
})
