import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import counterStore from './store/Counter-Redux.js'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
