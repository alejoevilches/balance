import "./Navbar.css"
import { Link } from "react-router-dom"

export function Navbar(){
  return (
    <nav>
      <Link to="/"><button>Entradas</button></Link>
      <Link to={"/stats"}><button>Estadisticas</button></Link>
    </nav>
  )
}