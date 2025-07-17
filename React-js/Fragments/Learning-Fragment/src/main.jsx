import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Map from './Map.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Map />
  </StrictMode>,
)
