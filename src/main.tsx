import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './variables.css'
import App from './App.tsx'
import { registerSW } from './serviceWorkerRegistration.ts'
// import App from './AppTest';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Enregistrer le Service Worker
registerSW()
