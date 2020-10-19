import React, { useState, useEffect, useRef } from "react";
import NavBar from "../NavBar";
import axios from "axios";
import setGithubToken from "../../apis/githubApi";

const Profile = () => {
  const [zen, setZen] = useState("teste");

  const mountedRef = useRef();
  mountedRef.current = false;

  useEffect(() => {
    const zenPromise = async () => {
      const githubApi = await setGithubToken();
      const response = await githubApi.get("/zen");
      console.log(response.data);
      setZen(response.data);
    };
    zenPromise();
  }, []);

  return (
    <div id="content">
      <NavBar pageName="Profile" />
      <p>Git Zen Menssage:</p>
      <h2>{zen}</h2>
      <div className="line"></div>
    </div>
  );
};

export default Profile;
