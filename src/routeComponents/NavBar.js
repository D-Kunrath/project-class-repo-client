import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item active">
              <span className="nav-link">{props.pageName}</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
