import React, {useState} from 'react';
import firebase from 'firebase';
import {useParams} from 'react-router-dom';
import PchatCon from './PchatCon';

function Privatechatcreate() {
    let ull = '';
    let user = firebase.auth().currentUser;
    const [message, setMessage] = useState('');
    
    let {reid} = useParams();
    let sndref = 'users/'+user.uid+"/chat/"+reid;
  let reref = 'users/'+reid+'/chat/'+user.uid;
  
  const handleText = (event) => {
         event.persist();
        let messages = event.target.value;
        setMessage(messages);
    
      
      }
    
    
    
    function  messageHandler(event){
          event.preventDefault();
         
          let texts =  message ;
          let ft = new Date().toLocaleTimeString('en-us');
          let dt = new Date().toLocaleDateString('en-us');
          let ref = Date.now();
          console.log(ft)
          
       let use = firebase.auth().currentUser;
        firebase.database().ref(sndref+'/messages').once('value', function(message_obj) {
 var indexe = parseFloat(message_obj.numChildren()) + 0 ;
         firebase.database().ref(sndref + `/messages/message_${indexe}`).set({
             text : texts,
             time: ft,
             date: dt,
             arr: ref,
             index : indexe,
             name : use.displayName,
             useid: use.uid

        })
        
        firebase.database().ref(reref + `/messages/message_${indexe}`).set({
            text : texts,
            time:ft,
            date: dt,
            arr: ref,
            index : indexe,
            name : use.displayName,
            useid: use.uid

       })
       firebase.database().ref(reref + '/data').set({
        
        name : user.displayName,
        photo:user.photoURL,
        useid: user.uid,
        lastmsg: texts.substring(0, 20) ,
        time: ft,
        arr: ref,
        date: dt,
        seen: false

   })
   

firebase.database().ref('users/'+ reid +'/data').once('value', da => {

var rd = da.val();


 firebase.database().ref(sndref + '/data').set({
 
  name : rd.Name,
  photo: rd.Photo,
  useid: rd.uid,
  lastmsg: texts.substring(0,20) ,
  time: ft,
  arr: ref,
  date: dt,
  seen: true

 })

}).then(() => {
setMessage(ull) ;
            

})})
        
      return 
       ;
          



}
  

    return (
        <div >
<PchatCon/>
<div className="fixed-bottom align-items-center chatform row">
   {/* <div className="col-1 "><button className="sndbtn" style={{maxHeight:"75px", width:"auto"}} ><i className="fa fa-film"></i></button></div> */}
   <div className="col">
<form onSubmit={messageHandler}>
    <div>
        
    <input autoComplete="off" className="col-8 text input" style={{width:"100%",borderRadius:"50px", border:"0.2px grey", margin:"2%", marginRight: "0"}} type="text" name="text" placeholder="Message..." value={message} onChange={handleText} autoFocus required />
    
    <button  style={{maxHeight:"75px", width:"auto"}} type="submit" className="sndbtn col-3" > <i className="fa fa-send"></i></button>
    </div>
</form>
</div></div> </div>
        
    )}



export default Privatechatcreate;


