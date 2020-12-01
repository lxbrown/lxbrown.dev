import { NavLink } from "react-router-dom";

import './header.css';

export default function Header() {
    return (
        <div className="header">
            <NavLink exact to="/" className='menuItem' activeClassName="selected">Home</NavLink>
            <NavLink exact to="/tech" className='menuItem' activeClassName="selected">Tech</NavLink>
            <NavLink exact to="/contact" className='menuItem' activeClassName="selected">Contact</NavLink>
        </div>
    )
}