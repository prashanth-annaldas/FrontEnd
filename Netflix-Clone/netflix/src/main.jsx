import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import NetflixStore from './store/netflixStore.js'
import App from './routes/App.jsx'

const router = createBrowserRouter([
  {
    path:"/",element:<App />,
    children:[],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = { NetflixStore }>
      <RouterProvider router = { router } />
    </Provider>
  </React.StrictMode>,
)
