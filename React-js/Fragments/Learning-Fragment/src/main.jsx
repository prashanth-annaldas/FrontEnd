import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Map from './Map.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Map />
  </StrictMode>,
)
