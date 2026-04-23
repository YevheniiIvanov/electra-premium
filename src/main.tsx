import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LegalModalProvider } from './context/LegalModalContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LegalModalProvider>
      <App />
    </LegalModalProvider>
  </StrictMode>,
)
