import React, {useState, useEffect} from 'react';
    import {Link, useParams} from 'react-router-dom';

    
    import firebase from "firebase";
function Chats() {
    let {id} = useParams();
    let auth = firebase.auth().currentUser;
        
        const [clien, setClien] = useState([]);
        const data = [];
    useEffect(() => {
      const user = firebase.database().ref('users/'+id+'/Room').once("value", snapshot => {
            snapshot.forEach(snap => {
           data.push(snap.val());     
            });
            setClien(data);
          
           
        });
    return user;
        }
    ,[]);
        
        
    

    return (
        <div>
            <h1> Rooms</h1><hr />
           
                       <div  >
                           {clien.map(u => (
                              <Link className="users" key ={u.data.useid } to ={`/rooms${u.data.shareUrl}`} ><p> {u.data.Name}  
                              </p></Link>
                           ) ) 
            
                           }
                           
                    </div></div>
    )
}


export default Chats;
