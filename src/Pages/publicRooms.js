import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import {Link} from 'react-router-dom'


function PublicRooms() {
 let ui = firebase.auth().currentUser;
    const [roomlist, setRoomList] = useState([]);
    
    useEffect(() => {
   var docRef = firebase.database().ref("users/"+ui.uid+'/chat/').orderByChild('data/arr');
    docRef.on( 'value', rooms => {
   
  var list =[];
     
   rooms.forEach(lst => {
list.push(lst.val());
      
        });
        var lists = list.reverse(); 
  
 setRoomList(lists);         
        
     
        
       
   } );        


return ;
},[]);

    return (
        <div style={{textAlign:"left"}} className="d-flex">
        

           <div style={{width:"100%",maxWidth:"600px", marginLeft:"auto", marginRight:"auto"}} >
               { roomlist.map(us => (
                 <div key={us.data.useid} style={{ margin:"2%"}} > <Link key={us.data.useid} style={{textDecoration:"none", color:"white"}} to= {"/chat/private/"+ ui.uid+'/' + us.data.useid} > 
                 
                 <div className='row align-items-center justify-content-center' style={{width:"100%"}}>
                   <div className="col-3">
                     <img alt="avatar" src ={us.data.photo} style={{height:"50px", borderRadius:"50%"}} />
                     </div>
                     <div className="col-6 cha">
                     <p key={us.data.useid}>  {us.data.name.split(" ")[0]}</p>
                     <p style={{fontSize:"small", color:"grey", marginTop:"-5px"}} >{us.data.lastmsg}</p>
                       </div>
                    <div className="col-1"> { us.data.seen === false ? ( <div style={{height:"10px", width:"10px", backgroundColor:"green", borderRadius:"50%"}} ></div>):(<div></div>)}</div>
                       <div className="col-1"><p style={{fontSize:"small",color:"GrayText"}}>{us.data.time}</p>
                     
                       </div>
                       </div>   </Link>
                    </div>
               ) ) 

                 }
               
               
        </div>
        
        
        </div>
    )
}
export default PublicRooms;


