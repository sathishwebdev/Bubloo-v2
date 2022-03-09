import React, {useState, useEffect, useRef} from 'react'
import firebase from 'firebase';
import {useParams, Link} from 'react-router-dom';

function PchatCon() {
    let {reid} = useParams();
let auth = firebase.auth().currentUser;
    const [content, setContent] = useState([]);
var da = [];
let ft = new Date().toLocaleTimeString('en-us');
let dt = new Date().toLocaleDateString('en-us');
let ref = Date.now();
useEffect(() => {
  firebase.database().ref('users/'+ reid +'/data').once('value', da => {

    var rd = da.val();
  firebase.database().ref('users/'+auth.uid +'/chat/'+reid +'/data').update({
    name : rd.Name,
    photo: rd.Photo,
    useid: rd.uid,
    seen: true
    
  })}).then(()=>{
var dref = firebase.database().ref('users/'+auth.uid+'/chat/'+ reid +'/messages').orderByChild('index');
  
dref.on('value', snapshot => {
    setContent([])
    snapshot.forEach(d => {
         da.push(  d.val());
    
    })
   setContent(da);

  da = [];


});})
return setContent([]);
}


,[]);

const messageEl = useRef(null)
useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])  
  
 
    
    return (
        <div className="chat " ref={messageEl} >
            {content.map(c => (
                <div key={c.index} id={c.index} className = { auth.uid === c.useid ? ("chat-card "): (" chat-card-u")}>
               <p style={{ margin:"0", display: "inline-block", width:"96%"}}> {c.text}</p>
               <p style={{textAlign:"right", width:"100%",  display: "inline-block", fontSize:"small", color:"rgb(97 , 97, 97)", margin:"0"}} >     {"     "+ c.time.substring(0,5)} {c.time.substring(8,11) + "  "} </p>

                </div>
            ))
            }
        </div>
    )
}
export default PchatCon;


