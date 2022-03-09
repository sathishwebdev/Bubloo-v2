import React from 'react'
import {useProvideAuth, authContext} from './auth';
import firebase from 'firebase';
    
            
function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider> );
  
}
        
    


export default ProvideAuth;


