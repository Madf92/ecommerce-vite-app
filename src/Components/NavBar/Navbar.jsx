import { NavLink } from "react-router-dom";
import { linksLeft, linksRight } from "../../Pages/Routes/Routes";

const activeStyle = ({ isActive }) => {
    return isActive ? 'underline underline-offset-4' : null;
};

const NavBar = () => {
    return(
        <nav className="flex justify-between items-center fixed  w-full z-10 px-8 py-10 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Myshop</NavLink>
                </li>
                {linksLeft.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.to} className={activeStyle}>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center gap-3">
                <li className=" text-black/60">
                    MyEmail@Email.com
                </li>
                {linksRight.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.to} className={activeStyle}>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default NavBar;