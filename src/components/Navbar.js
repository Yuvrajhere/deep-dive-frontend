import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="Navbar">
      <nav className="Navbar-main">
        <Link to="/" className="brand">
          <h3>DeepDive</h3>
        </Link>
        <button
          className="navbar-toggler"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? "X" : "☰"}
        </button>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
        </ul>
        <button className={isSignedIn ? "btn out" : "btn in"}>
          {isSignedIn ? "Signout" : "Signin"}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
