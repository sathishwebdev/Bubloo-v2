import React, { Component } from "react";
import logo from "../logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import {useHistory, Link} from "react-router-dom";
import useAuth from '../services/auth';
import firebase from 'firebase';import Av from '../avatar.jpeg';

export default class NavPage extends Component {

   AuthButton() {
    let history = useHistory();
    let auth = useAuth();
    let use = firebase.auth().currentUser;
    
    
    let login = () => {
      auth.signin(() => {
        history.push("/protected")
      });
    };
  
    return use ? ( <Nav  className="ml-auto " >
      <Nav.Link className="d-none d-sm-block" ><p style={{color:"grey"}} >{auth.data} </p></Nav.Link>
      <Nav.Link  > <Link to="/JoinRoom"> <img alt="avatar" src ={auth.photo} style={{height:"40px", borderRadius:"50%"}} /></Link></Nav.Link>
        <Nav.Link ></Nav.Link>
          </Nav>
    ) : (
     <Nav className="ml-auto"> <Nav.Link  ><img src ={Av} alt="profile-avatar" style={{height:"40px", borderRadius:"50%"}} /></Nav.Link> <Nav.Link> <button style={{height:"40px", width:"80px"}} className=" d-inline-block btn btn-primary"  onClick={login}>Log in</button></Nav.Link> </Nav>
   
    );
  }




  render() {

    return (
    
        <div style={{maxHeight:"100px"}}  >
        <Navbar collapseOnSelect fixed="top" bg="dark"  >
        <Navbar.Brand> <Link style={{textDecoration:"none", color:"black"}} to="/protected" ><h2> <img
        src={logo}
        
        height="40"
        className="d-inline-block align-top rounded"
        alt="logo"
      /> Bubloo </h2></Link></Navbar.Brand>
 <this.AuthButton/>
     </Navbar></div>
    );
  }
}
