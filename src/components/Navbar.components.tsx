import { NavLink } from "react-router-dom";


type NavLinkClassName = {
    isActive:boolean;
}


const Navbar:React.FC = () => {

    const getLinkClassName = ({isActive}:NavLinkClassName):string => {
        return isActive ? "text-blue-500":"text-black"
    };

    return(
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">GM</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={getLinkClassName}>
                    About
                </NavLink>
                <NavLink to="/project" className={getLinkClassName}>
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;