import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import Users from "./users";
import useAuth from "../services/auth";

function Profile() {
  let { id } = useParams();
  let used = firebase.auth().currentUser;
  let auth = useAuth()
  let history = useHistory()
  const [prodata, setProdata] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref("users/" + id + "/data")
      .on("value", (profile) => {
        const udata = profile.val();
        setProdata(udata);
      });
    return;
  }, [id]);
  /**/

  return (
    <div className="App ">
        <div style={{ paddingTop: "100px", paddingBottom:"70px", minHeight:"40vh" }}>
          <div className="d-flex justify-content-center align-items-center ">
            <img
              src={prodata.Photo}
              alt="profile"
              style={{ height: "150px", borderRadius: "50%" }}
            />
            <div style={{padding:"2%"}}>
              <h2> {prodata.Name}</h2>
              <p style={{ fontSize: "small" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href={`mailto:${prodata.email}`}
                >
                  {prodata.email}
                </a>
              </p>
            
          {id === used.uid ? (
            <div style={{ margin: "4%" }}>
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
          ) : (
            <div>
              <Link
                className="bubl"
                to={"/chat/private/" + used.uid + "/" + id}
              >
                Message
              </Link>
            </div>
          )}</div>
          </div>
          </div>
          <div className="jumbotron-white">
        <h3>Others</h3>
        <Users />
      </div>
          
        
      
    </div>
  );
}

export default Profile;
