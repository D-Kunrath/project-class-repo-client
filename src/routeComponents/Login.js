import React from "react";
import NavBar from "./NavBar";

import SideBarPublic from "../components/SideBarPublic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Login() {
  return (
    <div className="wrapper">
      <SideBarPublic />
      {/* Page Content Holder  */}
      <div id="content">
        <NavBar pageName="Login" />

        <div>
          <form className="text-center border border-light p-5" action="#!">
            <div className="control pt-2">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="E-mail"
              />
            </div>
            <div className="control pt-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                aria-describedby="defaultRegisterFormPasswordHelpBlock"
              />
            </div>
            <button
              className="btn btn-info my-4 btn-block"
              style={{ backgroundColor: "#7386D5" }}
              type="submit"
            >
              Login
            </button>

            <p>or sign up with:</p>

            <a href="/" role="button">
              {" "}
              <FontAwesomeIcon icon={faGithub} color="#7386D5" size="3x" />{" "}
            </a>
          </form>
        </div>

        <div className="line"></div>
      </div>
    </div>
  );
}
export default Login;
