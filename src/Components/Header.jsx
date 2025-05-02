//import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  //object containing styles
  const styleActive = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <NavLink
        to="/"
        className="site-logo"
        style={({ isActive }) => (isActive ? styleActive : null)}
      >
        #VanLife
      </NavLink>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? styleActive : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? styleActive : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? styleActive : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
