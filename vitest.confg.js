import { defineConfig } from 'vitest/config' // Make sure to import from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // This line is crucial
    // Other Vitest configurations can go here
  },
  // Other Vite configurations can go here
})
