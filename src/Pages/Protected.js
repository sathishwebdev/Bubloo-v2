import React from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import useAuth from "../services/auth";
import Users from "./users";
import Roomcreate from "./roomcreate";
import PublicRooms from "./publicRooms";
import firebase from "firebase";

export default function ProtectedPage() {
  return (
    <React.Fragment >
      <div className="App" style={{ marginTop: "80px", minHeight:"90vh" }}>
        <PublicRooms />
      </div>
      <div className="fixed-bottom " style={{
          backgroundColor:"rgb(9, 107, 160)",
           textAlign:"right",
           padding: "15px",
           margin: "2%",
           width:"fit-content",
           marginRight:"6px",
           marginLeft:"auto",
           borderRadius: "50%",
      }}>
          <Link className="sndbtn" style={{color:"white"}} to = "/joinroom">
              <i className="fa fa-plus" aria-hidden="true"></i>
          </Link>
        </div>
    </React.Fragment>
  );
}

export function CreateRoom() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="jumbotron">
          <h2>Create Room</h2>
          <hr></hr>
          <Roomcreate />
        </div>
      </div>
    </div>
  );
}

export function JoinRoom() {
  let usecon = firebase.auth().currentUser;
  let auth = useAuth();
  let history = useHistory();
  return (
    <div className="jumbotron-white" >
        <div className="d-flex justify-content-center align-items-center" style={{
        minHeight:"50vh"
    }}>
          <img
            src={usecon.photoURL}
            alt="profile"
            style={{ height: "150px", borderRadius: "50%" }}
          />
          <br />
          <br />
          <div>
              <h3 style={{ textTransform: "uppercase", color: "whitesmoke" }}>
                {usecon.displayName}
              </h3>
              <p style={{ fontSize: "small" }}>
                <a
                  style={{ color: "grey", textDecoration: "none" }}
                  href={`mailto:${usecon.email}`}
                >
                  {usecon.email}
                </a>
              </p>
              <button
                className="btn btn-danger"
                style={{ color: "whitesmoke", display: "inline-block" }}
                onClick={() => {
                  auth.signout(() => history.push("/"));
                }}
              >
                Sign out
              </button>
          </div>

        </div>
        
      </div>
  );
}

export function Redir() {
  let auth = firebase.auth().currentUser;
  return <div>{auth ? <Redirect to={`/protected`} /> : null}</div>;
}

export function UserProfile() {
  return (
    <div className="App">
      <div style={{paddingTop:"100px", paddingBottom:"50px"}}>
        <JoinRoom />
      </div>
      <div className="jumbotron-white">
        <h3>Others</h3>
        <Users />
      </div>
    </div>
  );
}
