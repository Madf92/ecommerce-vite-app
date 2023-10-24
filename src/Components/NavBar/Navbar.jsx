import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="flex justify-between items-center">
            <ul>
                <li>
                    <NavLink to="/">Myshop</NavLink>
                </li>
                <li>
                    <NavLink to="/">All</NavLink>
                </li>
                <li>
                    <NavLink to="/Clothes">Clothes</NavLink>
                </li>
                <li>
                    <NavLink to="/Electronics">Electronics</NavLink>
                </li>
                <li>
                    <NavLink to="/Furniture">Furniture</NavLink>
                </li>
                <li>
                    <NavLink to="/Toys">Toys</NavLink>
                </li>
                <li>
                    <NavLink to="/Other">Other</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    MyEmail@Email.com
                </li>
                <li>
                    <NavLink to="/my-orders">My Orders</NavLink>
                </li>
                <li>
                    <NavLink to="/my-account">My Account</NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in">Sign In</NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in">🛒 0</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;