import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg  ml-auto">
            <ul>            {/* cambiar el color de fondo del link activo con la clase active  */}
                <li>        {/* para esto usamos el navLink y no el link de react router dom*/}
                    <NavLink exact to="/" activeClassName="active">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/Conozcanos" activeClassName="active">Conozcanos</NavLink>
                </li>         {/* si dejamos exact en todos los link hijos no se resaltan*/}
                <li>
                    <NavLink to="/articulos" activeClassName="active">Articulos</NavLink>
                </li>

                <li>
                    <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="active">login</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" activeClassName="active">dashboard</NavLink>
                </li>



            </ul>
        </nav>
    )
}


