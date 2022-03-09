import React from 'react';
import firebase from "firebase";
import { withRouter} from "react-router";


class Roomcreate extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            name: '',
            url:''
        };
        
    
        this.handleChange = this.handleChange.bind(this);
      
        
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
         
        this.setState({
            name: event.target.value })
      
      
      }
      
    
  
    
    
      handleSubmit(event) {
          event.preventDefault();
          let nam =this.state.name;
        let user = firebase.auth().currentUser;
       
        firebase.database().ref('PublicRooms/'  + user.uid + "R_"+nam + '/data').set({
            Admin: user.displayName,
            Adminuid: user.uid,
            Name: nam,
            time: new Date().toLocaleString(),
            
            shareUrl: '/'+user.uid+ '/Room/'+ user.uid + "R_" +nam  
        }).then(()=>{
          this.setState({
            url: '/rooms/'+user.uid+ '/Room/'+  user.uid + 'R_' + this.state.name
          })
        })
 .then(()=>{

         this.props.history.push(this.state.url); 
         
        })
        
      }

render(){
    return (
        <div>
             <form onSubmit={this.handleSubmit}>
                 <div>
        <label>
         <input className="input" placeholder="   Room Name" style={{borderRadius:"10px", border:"0.2px grey"}} type="text" value={this.state.name} onChange={this.handleChange} />
        </label></div>
        <div>
        </div>
<div>
        <input type="submit" className="bubl" value="Submit" /></div>
      </form>
        </div>
    )
}
}
export default withRouter(Roomcreate);


