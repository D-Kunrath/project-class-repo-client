import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import setGithubToken from '../apis/githubApi';

function SideBarPrivate(props) {
  const [menuActive, setMenuActive] = useState(false);
  const [gitState, setGitState] = useState({});

  const loggedInUser = localStorage.getItem("loggedInUser");
  const storedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    const gitUserPromise = async () => {
      try {
        const githubApi = await setGithubToken();
        const response = await githubApi.get(`/users/${storedUser.user.name}`);
        console.log(response.data);
        setGitState(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    gitUserPromise();
  }, [])

  return (
    <>
      <nav id="sidebar" className={`${menuActive ? "active" : ""}`}>
        <div className="sidebar-header">
          <img alt='github avatar photo' src={gitState.avatar_url} />
          <h3>{gitState.login}</h3>
        </div>

        <ul className="list-unstyled components">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/newclassroom">New Classroom</Link>
          </li>
          <li>
            <Link to="/classroomList">Classroom</Link>
          </li>
        </ul>

        <ul className="list-unstyled CTAs">
          <li>
            <Link to="/logout" className="article">
              Logout
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
export default SideBarPrivate;
