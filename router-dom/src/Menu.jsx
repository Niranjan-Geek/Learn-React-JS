import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="navigation">
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/about">About</NavLink></li>
            <li><NavLink exact to="/contact">Contact</NavLink></li>
            <li><NavLink exact to="/use-params">Use Params</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
