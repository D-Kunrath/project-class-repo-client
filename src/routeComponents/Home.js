import React from "react";

import NavBar from "./NavBar";

function Home() {
  return (
    <div id="content">
      <NavBar pageName="Home" />

      <h2>Welcome to Class Repo</h2>
      <p>Controle os exercícios de seus alunos no Github</p>

      <div className="line"></div>
    </div>
  );
}

export default Home;
