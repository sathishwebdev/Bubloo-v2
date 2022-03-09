import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    
  Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
  import useAuth ,{} from '../services/auth';
  import firebase from 'firebase';
function Login() {
   let gg = firebase.auth().currentUser;
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
  
    let { from } = location.state || { from: { pathname: "/login" } };
    let login = () => {
      auth.signin(() => {
        history.replace(from);
      });
    };
    
    return (
      <div className="App">
          <div className="App-header">
               {gg ? ( history.push(from)   

              ) : ( 
                <p style={{fontSize:"65px", }}>Sign in with Google</p>
              

              )}
          
         
         
         <button className="signbutton" style={{ borderRadius:"50%", margin:"2%"}} onClick={login}> <i className="fa fa-google fa-5x" ></i></button> 
         <br/>
          
          </div>
        
        
      </div>
    );
  }

export default Login;


