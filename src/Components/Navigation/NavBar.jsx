import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
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
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
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
      <Outlet />
    </>
  );
};
export default NavBar;
