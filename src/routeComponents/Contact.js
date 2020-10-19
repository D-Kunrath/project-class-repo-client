import React from "react";
import NavBar from "./NavBar";
import Linkedin from "./asset/linkedin.svg";
import Github from "./asset/github.svg";
function Contact() {
  return (
    <div id="content">
      <NavBar pageName="Contact" />
      <h2>Contact</h2>
      <div className="line"></div>

      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title">Rubem Carvalho</h5>
              <div>
                <img alt="linkedin icon" src={Linkedin} style={{ width: 60, height: 40 }} />
                <a href="https://www.linkedin.com/in/rubem-carvalho/">
                  /in/rubem-carvalho
                </a>
                <img alt="github icon" src={Github} style={{ width: 60, height: 40 }} />
                <a href="https://github.com/rubemdiogo">/rubemdiogo</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title">Daniel Kunrath</h5>
              <div>
                <img alt="linkedin icon" src={Linkedin} style={{ width: 60, height: 40 }} />
                <a href="https://www.linkedin.com/in/daniel-k-albanez/">
                  /in/daniel-k-albanez
                </a>
                <img alt="github icon" src={Github} style={{ width: 60, height: 40 }} />
                <a href="https://github.com/D-Kunrath">/D-Kunrath</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div className="line"></div>
    </div>
  );
}

export default Contact;
