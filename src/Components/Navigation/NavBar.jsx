import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  {
    /* Stting up the variable to handle the state of mobile menu */
  }
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      {/* Start of the navigation component */}
      <nav className="navigation">
        {/* Logo */}
        <img
          className="brand-name"
          src={require("../../Assets/Images/logo.png")}
          alt="logo"
        />
        {/* Button with a onclick event from useState hook used  for  a hamburger menu */}
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 18L20 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M4 12L20 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M4 6L20 6"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        {/* Menu changing state depending on screen size */}
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              {/* Navlinks for internal navigation, changing color based on active/inactive state */}
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                })}
              >
                FORSIDE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destinationer"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                })}
              >
                HOTELLER OG DESTINATIONER
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vaerelser"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                })}
              >
                VÆRELSER
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservation"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                })}
              >
                RESERVATION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                })}
              >
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Outlet to handle subrouting */}
      <Outlet />
    </>
  );
};

/* Exporting the component so it can be used elsewhere */
export default NavBar;
