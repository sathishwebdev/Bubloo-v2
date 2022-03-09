import React, {useState, useEffect, useRef} from 'react'
import firebase from 'firebase';
import {useParams, Link} from 'react-router-dom';

function ChatContent() {

    let {rid} = useParams();
let auth = firebase.auth().currentUser;
    const [content, setContent] = useState([]);
var da = [];
useEffect(() => {
   var dref = firebase.database().ref('PublicRooms/'+rid +'/chat').orderByChild('index');
dref.on('value', snapshot => {
    setContent([])
    snapshot.forEach(d => {
         da.push(  d.val());
    
    })
   setContent(da);

  da = [];


});
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
        <div className="chat" ref={messageEl} >
            {content.map(c => (
                <div key={c.index} id={c.index} className = { auth.uid === c.useid ? ("chat-card"): ("chat-card-u")}>
                 <Link style={{textDecoration:"none", textAlign:"left"}} to= {`/user/${c.useid}`}>   <p>{c.name} : </p></Link><h5> {c.text}</h5>
                  
                    {/*  <p style={{color:"grey"}} > {<TimeAgo date= {c.time}  formatter={formatter} />}</p>
                    */}
                </div>
            ))
            }
        </div>
    )
}



export default ChatContent

