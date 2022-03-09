import React, {useState} from 'react';
import firebase from 'firebase';
import {useParams} from 'react-router-dom';
import ChatContent from './chatcontent';

function Roomchat () {
    let ull = '';
    const [message, setMessage] = useState('');
    let {rid} = useParams();
    let yy = 'PublicRooms/'+rid;
  
  
  const handleText = (event) => {
         event.persist();
        let messages = event.target.value;
        setMessage(messages);
    
      
      }
    
    
    
    function  messageHandler(event){
          event.preventDefault();
         
          let texts =  message ;
          
          
       let use = firebase.auth().currentUser;
        firebase.database().ref(yy +'/chat').once('value', function(message_obj) {
 var indexe = parseFloat(message_obj.numChildren()) + 0 ;
         firebase.database().ref(yy + `/chat/message_${indexe}`).set({
             text : texts,
             time: Date.now(),
             index : indexe,
             name : use.displayName,
             useid: use.uid

        }).then(() => {
setMessage(ull) ;
            

})
        
      return 
       ;
          

})

}
  

    return (
        <div >
<ChatContent/>
<div className="fixed-bottom  chatform">
    <div className="jumbrotron-fluid row">
<form onSubmit={messageHandler}>
    <div>
        
    <input autoComplete="off" className="col-8 text input" style={{width:"100%",borderRadius:"10px", border:"0.2px grey", margin:"2%"}} type="text" name="text" value={message} onChange={handleText} required />
    
    <input style={{maxHeight:"75px", width:"auto"}} type="submit" className ="sndbtn col-3" value="  Send  " />
    </div>
</form>
</div></div>
        </div>
    )}


export default Roomchat;


