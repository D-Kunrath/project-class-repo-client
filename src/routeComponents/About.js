import React from "react";
import NavBar from "./NavBar";

function About() {
  return (
    <div id="content">
      <NavBar pageName="About" />

      <h2>About</h2>
      <div>
        O Welcome to Class Repo é uma plataforma de controle centralizada para
        aulas/cursos que usam o github como uma ferramenta de exercícios para os
        alunos. Nele o Professor pode acompanhar as entregas dos exercícios
        feitos pelos alunos além de poder atribuir uma nota para cada exercício,
        evitando o uso de planilhas e documentos espalhados, facilitando o dia a
        dia dos professores.
      </div>

      <div className="line"></div>
    </div>
  );
}

export default About;
