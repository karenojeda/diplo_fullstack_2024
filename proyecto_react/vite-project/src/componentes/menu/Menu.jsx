import { Link } from "react-router-dom"

const Menu = () => {
    return(
        <nav className="menu">
            <ul>
                <li> <Link to="/"> Inicio </Link> </li>
                <li> <Link to="/pociones"> Gestion de Pociones </Link> </li>
                <li> <Link to="/casas"> Casas </Link> </li>
                <li> <Link to="/personajes"> Personajes </Link> </li>
            </ul>
        </nav>
    )
}

export default Menu;