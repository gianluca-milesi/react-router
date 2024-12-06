import style from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className={style.navbar}>
                <ul className={style.main_menu}>
                    <li><NavLink to="/">About</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Posts</NavLink></li>
                </ul>
            </nav >
        </>
    )
}

export default Navbar