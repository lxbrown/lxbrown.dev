import { NavLink } from "react-router-dom";

import './header.css';

export default function Header() {
    return (
        <div className="header">
            <NavLink to="/" className={(navData) => (navData.isActive ? "menuItem selected" : "menuItem")}>Home</NavLink>
            <NavLink to="/tech"className={(navData) => (navData.isActive ? "menuItem selected" : "menuItem")}>Tech</NavLink>
            <NavLink to="/contact" className={(navData) => (navData.isActive ? "menuItem selected" : "menuItem")}>Contact</NavLink>
        </div>
    )
}