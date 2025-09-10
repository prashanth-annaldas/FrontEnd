import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Wishlist from './components/wishlist.jsx';
import Display from './components/wishlist.jsx';
import Login from './components/LoginPage.jsx';
import netflixStore from './store/index.js'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path:"/",element:<Login /> },
  {
    path:"/app",element:<App />,
    children:[
      { path: "/display", element: <Display /> },
      { path: "/bag", element: <Wishlist /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = { netflixStore }>
      <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>,
)
