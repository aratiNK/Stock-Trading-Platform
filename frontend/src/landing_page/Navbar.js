import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto d-flex align-items-center">
            <ul className="navbar-nav mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/support">Support</Link>
              </li>

              {/* ⭐ Replace Signup with Register */}
              <li className="nav-item">
                <Link className="nav-link" to="/register">Signup</Link>
              </li>

              {/* ⭐ Login */}
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
