import React, { Component } from "react";
import fire from './firebase';
import firebase from 'firebase';

class App extends Component {

constructor(){
  super();
  this.onSubmit = this.onSubmit.bind(this);
  this.state = {
    isLogIn: false,
    name: "",
    photo: ""

  }
}

onSubmit = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  fire.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    
    
    }).catch((error) => {
   console.log(error);
   alert ("signin failed");
  });

}
 onLogout = () =>{
  firebase.auth().signOut().then(() => {
   alert("signed out successfull")
  }).catch((error) => {
    alert("logout error with" + error.message)
  });

  this.setState({
    isLogIn: false
  })
 }

componentDidMount = () => {

   var that = this;
firebase.auth().onAuthStateChanged(function (user) {
 
  if (user) {
    alert("sign in as " + user.displayName );
    that.setState({ 
      isLogIn: true,
      name: user.displayName,
      photo: user.photoURL
    });
  }
  else {
   alert("Please Login to Continue"  );
  }
})
}

render(){
       return  (   <ProvideAuth>
        <Router>
          <div>
            <AuthButton />
            <RouteConfig />
          
          </div>
        </Router>
      </ProvideAuth>
       );    
}}
export default App;

