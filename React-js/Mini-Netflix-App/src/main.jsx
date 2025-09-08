import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Wishlist from './components/wishlist.jsx';
import Display from './components/wishlist.jsx';
import netflixStore from './store/index.js'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",element:<App />,
    children:[
      { path: "/", element: <Display /> },
      { path: "/bag", element: <Wishlist /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = { netflixStore }>
      <RouterProvider router = {router} />
    </Provider>
  </StrictMode>,
)
