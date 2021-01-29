import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>

      <div className="header__right">
        <Link className="header__link" to="/recordsForm">
          <div className="header__option">
            <h3>Record Form</h3>
          </div>
        </Link>

        <Link className="header__link" to="/recordsList">
          <div className="header__option">
            <h3>Record List</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
