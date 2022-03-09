import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import firebase from 'firebase';
import Privatechatcreate from './privatechatcreate';

function Privatechat() {
    let {reid} = useParams();

    let user = firebase.auth().currentUser;
        const [rdata, setRoom] = useState([]);
        
    



        useEffect(() => { 
        var docRef = firebase.database().ref('users/'+ reid +'/data');

        docRef.once('value' , (snapshot) => {
            const Rdata = snapshot.val();
             
            

               setRoom(Rdata);
             
               
        }); return user;
    }
,[]);
    


    
    
    return (
            <div className="App" >
                
            <div className="container-fluid">
                 <div className=" fixed-top" style={{ backgroundColor:"rgb(26, 26, 26)"}} >
                      <div className="row align-items-center"style={{height:"80px", overflow:"scroll"}} >
                           <div className="col-2">
                               <Link to="/protected">
                                   <i style={{margin:"2%"}} className="fa fa-angle-left fa-2x" >

                                   </i>
                                   </Link>
                                   </div>
                                   <div className="col-2"> 
                                    <img alt="avatar" src ={rdata.Photo} style={{height:"40px", borderRadius:"50%"}} />
                                     </div> 
                                     <div className="col-8">
                                         <h3 style={{textAlign:"left",height:"30px"}}>
                                             <Link style={{textDecoration:"none", color:"grey"}} to = {'/user/'+ rdata.uid}>{rdata.Name}</Link>
                                             </h3> 
                                             </div>
                                             </div>
                                             </div> 
                                             <div style={{marginTop:"80px", marginBottom:"60px"}} className="row justify-content-center">
<div className="col-md-8 chatbox">

<Privatechatcreate />
    </div>
</div>
                    </div>
                    
                </div>
               

        )
    }
    

export default Privatechat;


