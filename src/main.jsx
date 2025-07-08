import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { injectAnalytics } from '@vercel/analytics/sveltekit'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {injectAnalytics()}
    <App />
  </StrictMode>,
)
