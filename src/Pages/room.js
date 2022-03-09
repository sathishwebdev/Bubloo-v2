import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import firebase from 'firebase';
import Roomchat from './roomchat';
 
export default function Room() {
   let {rid} = useParams();

    let user = firebase.auth().currentUser;
        const [roomdata, setRoom] = useState([]);
        
    
        useEffect(() => { 
        var docRef = firebase.database().ref('PublicRooms/'+ rid +'/data');

        docRef.once('value' , (snapshot) => {
            const Rdata = snapshot.val();
             
            

               setRoom(Rdata);
               

        }); return user;
    }
,[]);
    



    
    
    return (
            <div className=" App row jumbotron" >
                
                  {/* <div style={{background:"black"}} className="col-lg-9 justify-content-center embed-responsive embed-responsive-16by9">
                   <div className="embed-responsive-item">  
                   {!roomdata.Vurl === "" ?(<div></div>) :(<div><ReactPlayer  style={{ marginRight:"auto", marginLeft:"auto", height:"auto", }}
                    url={roomdata.Vurl}
                    autoPlay = {true}
                    controls 
                    stopOnUnmount={false} 
                    config={{ file: { 
                        attributes: {
                          controlsList: 'nodownload'  //<- this is the important bit
                        }}}}
                    /></div>)} </div> </div>*/} <div className="jumbotro  "> <div className="jumbotron fixed-top"  > <div className="row justify-content-center"style={{height:"50px"}} ><div className="col-6"> <h2>{roomdata.Name}</h2> <p>Created By   <Link style={{textDecoration:"none"}} to= {`/user/${roomdata.Adminuid}`}>{roomdata.Admin}</Link></p></div><div className="col-6"> <img alt="avatar" src ={user.photoURL} style={{height:"40px", borderRadius:"50%"}} /><p>sign in as {user.displayName}</p></div></div></div><hr/> <div style={{marginTop:"100px"}} className="row justify-content-center">
<div className="col-md-8 chatbox">

<Roomchat />
    </div>
</div>
                    </div>
                    
                </div>
               

        )
    }
    


