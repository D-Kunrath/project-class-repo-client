import React from "react"

import {Link} from "react-router-dom" 

function SideBarPublic(){
    return(
       <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Welcome to Class Repo</h3>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <Link to="/">Home</Link>

                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li>
                    <Link to="/signup" className="download">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login" className="article">Login</Link>
                </li>
            </ul>
        </nav>
    )
}
export default SideBarPublic
