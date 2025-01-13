import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">IOT SMARTCAM</Link>
        <ul className="navbar-links">
          <li>
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
