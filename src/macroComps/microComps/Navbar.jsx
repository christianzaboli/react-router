import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home page</NavLink>
                </li>
                <li>
                    <NavLink to='/prodotti'>Prodotti</NavLink>
                </li>
                <li>
                    <NavLink to='/contatti'>Contatti</NavLink>
                </li>
            </ul>
        </nav>
    )
}