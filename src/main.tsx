import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import Timer from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Timer />
  </StrictMode>,
)
