import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link className="navbar__link" to="/">
          <HomeIcon style={{ fontSize: 40, color: "#5dfdcb" }} />
        </Link>
        <a className="navbar__link" href="https://itssalmaank.web.app/">
          <h2>About</h2>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
