import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import axios from "axios"

const Profile = () => {
  const [zen, setZen] = useState('teste')
  useEffect(()=> {
   
   
   
    const zenPromise= async ()=> {
    const response = await axios.get("https://api.github.com/zen")
    console.log(zen, response)
    setZen(response.data)
    console.log(zen, response)
   }
   zenPromise()
    
    
  }, [])

  return (
        <div id="content">
        <NavBar pageName="Profile" />
        <h2></h2>
        <p>
          {zen}
        </p>

        <div className="line"></div>

        <h2>Lorem Ipsum Dolor</h2>
        

        <div className="line"></div>

        <h2>Lorem Ipsum Dolor</h2>
      

        <div className="line"></div>

        <h3>Lorem Ipsum Dolor</h3>
 
      </div>
  )
}

export default Profile;
