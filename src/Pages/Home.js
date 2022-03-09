import React from 'react'
import {Link } from "react-router-dom";

function Home() {
   
    return (
       
        <div className="App">
            <div className="App-header"> { 
           <div>
            <h2 style={{fontSize:"76px", color:"white"}} >Welcome to Bubloo</h2>
<p style={{color:"grey"}}>Chat with friends while watching a video</p>
      <Link className=" btn-primary btn " to="/protected" style={{fontSize:"26px", borderRadius:"10px"}}>Get Started</Link>
    </div>
  }  </div>
            
        </div>
    )
}

export default Home


