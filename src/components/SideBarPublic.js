import React, { useState } from "react";

import { Link } from "react-router-dom";

function SideBarPublic(props) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <nav id="sidebar" className={`${menuActive ? "active" : ""}`}>
        <div className="sidebar-header">
          <h3>Welcome to Class Repo</h3>
        </div>

        <ul className="list-unstyled components">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="list-unstyled CTAs">
          <li>
            <Link to="/signup" className="download">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="article">
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        id="sidebarCollapse"
        className="navbar-btn"
        style={{
          position: "relative",
          top: 40,
          left: 50,
          zIndex: 100,
        }}
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
}
export default SideBarPublic;
