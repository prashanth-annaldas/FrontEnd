import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Display from './components/wishlist.jsx';
import netflixStore from './store/index.js'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Bag from './Bag.jsx';

const router = createBrowserRouter([
  { path:"/",element:<Register /> },
  { path: "/Login", element: <Login /> },
  {
    path:"/app",element:<App />,
    children:[
      { path: "display", element: <Display /> },
      { path: "bag", element: <Bag /> },
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
