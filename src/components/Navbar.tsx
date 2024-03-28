import "./Navbar.css"
import { Link } from "react-router-dom"

export function Navbar(){
  return (
    <nav className="navbar">
      <Link to="/"><button className="navbar-button">Entradas</button></Link>
      <Link to={"/stats"}><button className="navbar-button">Estadísticas</button></Link>
    </nav>
  )
}