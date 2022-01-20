import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/Auth.context'
import { Navbar } from './components/Navbar'
//import {Footer} from './components/Footer.js'
import { Loader } from './components/Loader'
import 'materialize-css'

function App() {
  const {token, login, logout, userId, admin, ready} = useAuth()
  const isAuthenticated = !!token // привел к boolean через !!
  const isAdmin = admin
  const routes = useRoutes(isAuthenticated, isAdmin)
 
  //console.log('admin',isAdmin)

  if(!ready) {
    return <Loader></Loader>
  }

  return (
    <AuthContext.Provider value = {{
      token, login, logout, userId, isAuthenticated, isAdmin
    }}>
      <Router>
        { isAuthenticated && <Navbar admin={isAdmin}/>} 
          {routes}
      </Router>
    </AuthContext.Provider>
  )
}

export default App
