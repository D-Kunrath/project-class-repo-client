import React from "react"

import SideBarPublic from "../components/SideBarPublic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



function Signup() {
    return(
        <div className="wrapper">
            <SideBarPublic />
       {/* Page Content Holder  */}
        <div id="content">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <span className="nav-link" >Sign Up</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
            <form className="text-center border border-light p-5" action="#!">

                        <p className="h4 mb-4">Sign up</p>

                        <div className="form-row mb-4">
                            <div className="col">
                               
                                <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                               
                                <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name" />
                            </div>
                        </div>

                        
                        <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail" />


                        <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                        <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                            At least 8 characters and 1 digit
                        </small>



                        <button className="btn btn-info my-4 btn-block" style={{backgroundColor:"#7386D5"}} type="submit">Sign Up</button>

                        <p>or sign up with:</p>


                        <a href="/"  role="button">
                        <FontAwesomeIcon icon={faGithub} color="#7386D5" size="3x" />
                            </a>

                        <hr />


                        <p>By clicking
                            <em>Sign up</em> you agree to our
                            <a href="/" target="_blank">terms of service</a></p>

             </form>
             </div>



            <div classNameName="line">
                
            </div>

        </div>
    </div>
    ); 
}

export default Signup;