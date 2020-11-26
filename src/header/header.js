import { NavLink } from "react-router-dom";

import './header.css';

export default function Header() {
    return (
        <div className="header">
            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            <NavLink exact to="/portfolio" activeClassName="selected">Portfolio</NavLink>
            <NavLink exact to="/contact" activeClassName="selected">Contact</NavLink>
        </div>
    )
}