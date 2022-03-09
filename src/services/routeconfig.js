import React from "react";
import { Switch, Route, Redirect,useHistory} from "react-router-dom";
import PublicPage from '../Pages/publicpage';
import ProtectedPage, {CreateRoom, UserProfile} from '../Pages/Protected';
import Login from '../Pages/login';
import Home from '../Pages/Home';
import Profile from '../Pages/profile';
import Room from '../Pages/room';
import firebase from 'firebase';
import Privatechat from "../Pages/privatechat";
export default function RouteConfig() {
    
    return (
      
      <div>
         <Switch>
              <Route exact path = "/" children = {<Home />} ></Route>
            <Route path="/public" children = {<PublicPage />}>
              
            </Route>
            <Route path="/login" children={<Login />}>
            </Route>
            <PrivateRoute path="/protected" children={<ProtectedPage />}>
              
            </PrivateRoute>
            <PrivateRoute path="/createRoom" children={<CreateRoom/>}>

            </PrivateRoute>
          <PrivateRoute path="/joinRoom" children={<UserProfile/>}>
            
          </PrivateRoute>
          <PrivateRoute path="/user/:id" children={<Profile />}>
            
          </PrivateRoute>
          <PrivateRoute path="/rooms/:uid/Room/:rid" children={<Room />}>
            
            </PrivateRoute>
            <PrivateRoute path="/chat/private/:sid/:reid" children={<Privatechat />}>
            
            </PrivateRoute>
          </Switch>

          
  
      </div>
    );
  }
  function PrivateRoute({ children, ...rest }) {
    let auth = firebase.auth().currentUser;
    let history = useHistory();
    
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            history.push({
                pathname: "/login",
                state: { from: location }
              })
            
          )
        }
      />
    );
  }
  
