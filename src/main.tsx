import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './variables.css'
import './index.css'
import App from './App.tsx'
import { registerSW } from './serviceWorkerRegistration.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Enregistrer le Service Worker
registerSW()
