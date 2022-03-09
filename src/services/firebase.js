import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6J7rCHRp1As1mInXX9Ct52C2zAYxiu6o",
    authDomain: "bubloo2716.firebaseapp.com",
    databaseURL: "https://bubloo2716-default-rtdb.firebaseio.com",
    projectId: "bubloo2716",
    storageBucket: "bubloo2716.appspot.com",
    messagingSenderId: "1025422111699",
    appId: "1:1025422111699:web:e6dbcbf08a85f76321f526",
    measurementId: "G-GJ8TQB70RK"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire
  export const auth = fire.auth();
  export const db = fire.firestore();


// WEBPACK FOOTER //
// ./src/services/firebase.js