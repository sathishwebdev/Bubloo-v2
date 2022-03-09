import React from "react";
import {
  BrowserRouter as Router,
  } from "react-router-dom";
import NavPage from './Pages/nav';

import ProvideAuth from './services/provider';
import RouteConfig from './services/routeconfig';




export default function Xapp(){
    return (<ProvideAuth>
    <Router>
        
        <NavPage />
        <RouteConfig /> 
    </Router>
  </ProvideAuth>);
}



 


