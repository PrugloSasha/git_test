import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../context/Auth.context'

export const Navbar = ({ admin }) => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    
    return (
        <nav>
          <div className="nav-wrapper cyan lighten-1">
            <a href="#!" className="brand-logo" style={{color: 'black'}}>ЗАЯВКА НА ВИКОНАННЯ РОБІТ</a>
            <ul className="right hide-on-med-and-down">
              <li><a style={{color: 'black'}} href="/" onClick={logoutHandler}>Вихід</a></li>
            </ul>
          </div>
        </nav>
    )
}


