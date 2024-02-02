import {Link, Outlet} from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <div>
            <header>
                <Link to="MainPage">Home</Link>
                <Link to="ShopPage">Shop</Link>
            </header>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    )
}

export default Navbar;