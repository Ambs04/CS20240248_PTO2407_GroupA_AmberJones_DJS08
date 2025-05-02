//import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  //object containing styles
  const styleActive = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? styleActive : null)}
        >
          Dashboard
        </NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
