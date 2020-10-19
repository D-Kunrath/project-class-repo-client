import React, { useState, useEffect, useRef } from "react";
import NavBar from "../NavBar";
import githubApi from "../../apis/githubApi";

const Profile = () => {
  const [zen, setZen] = useState("loading...");

  const mountedRef = useRef();
  mountedRef.current = false;

  useEffect(() => {
    const zenPromise = async () => {
      // const githubApi = await setGithubToken();
      const response = await githubApi.get("/zen");
      console.log(response.data);
      setZen(response.data);
    };
    zenPromise();
  }, []);

  return (
    <div id="content">
      <NavBar pageName="Profile" />
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
