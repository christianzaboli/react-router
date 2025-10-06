import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home page</NavLink>
                </li>
                <li>
                    <Link to='/prodotti'>Prodotti</Link>
                </li>
                <li>
                    <Link to='/contatti'>Contatti</Link>
                </li>
            </ul>
        </nav>
    )
}