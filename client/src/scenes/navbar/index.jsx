import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-bg bg-body-tertiary mb-5">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img
            src="img/Kütahya_Dumlupınar_Üniversitesi_logo.png"
            alt="Logo"
            width="100"
            height="100"
          />
        </Link>
        <h2>Kütahya Dumlupınar Üniversitesi</h2>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h3>Öğrenci Takip Sistemi</h3>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
