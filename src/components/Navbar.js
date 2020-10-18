import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSignoutClick = () => {
    props.signout();
  }

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
          { props.isSignedIn ? <li className="nav-item">
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li> : null }
        </ul>
        <button onClick={handleSignoutClick} className={props.isSignedIn ? "btn out" : "btn in"}>
          <Link to={props.isSignedIn ? "/" : "/signin"}>{props.isSignedIn ? "Signout" : "Signin"}</Link>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
