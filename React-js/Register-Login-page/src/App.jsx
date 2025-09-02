import { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  return <center>
    {!user ? (<>
              <Register setUser = {setUser} />
              <Login setUser = {setUser} />
            </>) : (<Dashboard user = {user} setUser = {setUser} />)}
  </center>
}

export default App
