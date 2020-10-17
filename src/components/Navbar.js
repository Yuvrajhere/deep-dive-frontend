import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <Link className="brand" href="#">
        <h2>DeepDive</h2>
      </Link>
      <button className="navbar-toggler">{isOpen ? "X" : "☰"}</button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Pricing
            </Link>
          </li>
        </ul>
        <span className="navbar-text">Navbar text with an inline element</span>
      </div>
    </nav>
  );
};

export default Navbar;
