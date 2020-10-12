import React from "react"

import SideBarPublic from "../components/SideBarPublic";

function Login() {
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
                                <span className="nav-link" >Login</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <h2>Login</h2>

            

        </div>
    </div>
    ); 
}

export default Login;