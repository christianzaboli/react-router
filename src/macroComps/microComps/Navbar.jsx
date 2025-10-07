import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink to='/'>Home page</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Prodotti</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts'>Contatti</NavLink>
                </li>
            </ul>
        </nav>
    )
}