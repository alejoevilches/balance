import { NavLink } from 'react-router-dom'
import './Navbar.css'

export function Navbar(){
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
        isActive ? 'active' : ''
        }
      >
        <button className="navbar-button">Entradas</button>
      </NavLink>
      <NavLink
        to={'/stats'}
        className={({ isActive }) =>
          isActive ? 'active' : ''
        }
      >
        <button className="navbar-button">Estadisticas</button>
      </NavLink>
    </nav>
  )
}