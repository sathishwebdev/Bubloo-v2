import React from 'react';


function PublicPage() {
  

    return (<div  className="App" > 
         <div className="App-header">
<h2 style={{fontSize:"76px"}} >Welcome to Bubloo</h2>
<p>Chat with friends while watching a video</p>
        </div>
            
      </div>
    )
}

export default PublicPage;

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('textbox').innerHTML = h + ":" + m + ":" + s;
 var t = setTimeout(function () {
      startTime()
  }, 500);
  }
  
  function getTwentyFourHrs() {
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('textbox').innerHTML = h+":"+m+":"+s;
  var t = setTimeout(function(){startTime()},500);
  }
  
  function checkTime(i) {
  if (i<10) {i = "0" + i}; 
  return i;
  }

