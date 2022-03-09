import { useContext, createContext, useState } from "react";
import fire from './firebase';
import firebase from 'firebase';


import Av from '../avatar.jpeg';


const fakeAuth = {
   
    signin(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100);
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  
  
export const authContext = createContext();

export default function useAuth() {
    return useContext(authContext);
  }

 
  
  export function useProvideAuth() {
    
    const [data, setUser] = useState(null);
    const [photo, setPhoto] = useState(Av);
    const [uid, setUid] = useState(null);
    
    firebase.auth().onAuthStateChanged(function (user) {
  
    
      if (user) {
       setUser(user.displayName);
       setPhoto(user.photoURL);
       setUid(user.uid);
      
        return (
        data,
        photo,
        uid) ;
      }
      else {
       setUser(null);
       setPhoto(Av);
      return data;
      }
    })
   const signin = cb => {
      return fakeAuth.signin(() => {
          var provider = new firebase.auth.GoogleAuthProvider();
  
    fire.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      
      return firebase.database().ref('users/' + user.uid + '/data').set({
        Name: user.displayName, Photo: user.photoURL, uid: user.uid, email: user.email
      }).then(()=>{
        cb();
        alert("Logged in successfully " + user.displayName );});
        
      }).catch((error) => {
     console.log(error);
     alert ("signin failed by " + error.message);
    });
  
        
      });
    };
  
  const signout = cb => {
      return fakeAuth.signout(() => {
          firebase.auth().signOut().then(() => {
              alert("signed out successfull")
             }).catch((error) => {
               alert("logout error with" + error.message)
             });
        setUser(null);
        cb();
      });
    };
    
  
    return {
      data,
      photo,
      uid,
      signin,
      signout,
      
    
    };
   
    
    
 
 
  }
  


// WEBPACK FOOTER //
// ./src/services/auth.js