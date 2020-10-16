import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import axios from "axios";
import setGithubToken from "../../apis/githubApi";

const Profile = () => {
  const [zen, setZen] = useState("teste");
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
      <h2></h2>
      <p>{zen}</p>

      <div className="line"></div>

      <h2>Lorem Ipsum Dolor</h2>

      <div className="line"></div>

      <h2>Lorem Ipsum Dolor</h2>

      <div className="line"></div>

      <h3>Lorem Ipsum Dolor</h3>
    </div>
  );
};

export default Profile;
