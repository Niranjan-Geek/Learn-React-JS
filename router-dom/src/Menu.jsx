import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="navigation">
        <ul>
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/contact">Contact</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/use-params">Use Params</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
