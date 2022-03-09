import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import {Link} from 'react-router-dom';


function Users() {
   
    const [client, setClient] = useState([]);
    
    useEffect(() => {
   var docRef = firebase.database().ref();
    docRef.child("users").once( 'value', doc => {
      
  var dat =[];
    doc.forEach(ud => {
dat.push(ud.val());
        });
        setClient(dat);
       
   } );        


return ;
},[]);

    return (
        <div className="jumbotron-white" style={{marginLeft:"20px"}}>
        
<hr/>
           <div  >
               {client.map(us => (
                  <div style={{height:"100px"}} key ={us.data.uid}> <Link className="users"  to ={`/user/${us.data.uid}`} ><p><img src={us.data.Photo} alt="profile" style={{height:"50px", borderRadius:"50%"}} /> {us.data.Name}  
                  </p></Link> <hr/> </div>
               ) ) 

               }
               
        </div></div>
    )
}

export default Users;


