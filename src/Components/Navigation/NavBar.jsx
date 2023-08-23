import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <img
        className="brand-name"
        src={require("../../Assets/Images/logo.png")}
        alt="logo"
      />
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 18L20 18"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 12L20 12"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 6L20 6"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink to="/" className="active">
              FORSIDE
            </NavLink>
          </li>
          <li>
            <NavLink to="/destinations" className="active">
              HOTELLER OG DESTINATIONER
            </NavLink>
          </li>
          <li>
            <NavLink to="/rooms" className="active">
              VÆRELSER
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations" className="active">
              RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="active">
              LOGIN
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
