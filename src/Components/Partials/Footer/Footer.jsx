import React from "react";
import "./Footer.scss";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div className="copyright">
            <h2>&copy; 2021 Hotel Overlook. Alle rettigheder forbeholdt.</h2>
          </div>
          <div className="socials">
            <FaFacebookSquare size={"2em"} />
            <FaTwitterSquare size={"2em"} />
          </div>
          <div className="footerNav">
            <ul>
              <li>
                {" "}
                <Link to="/">Forside</Link>{" "}
              </li>
              <li>
                <a href="/destinationer">Hoteller & Destinationer</a>
              </li>
              <li>
                <a href="/vaerelser">Værelser</a>
              </li>
              <li>
                <a href="/reservation">Reservation</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
