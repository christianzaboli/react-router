import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <NavLink to='/'>Home page</NavLink>
                <Link to='/prodotti'>Prodotti</Link>
                <Link to='/contatti'>Contatti</Link>
            </ul>
        </nav>
    )
}