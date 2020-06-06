function easyTimer(){ // initialize timer
    var easySec = 7; // set timer in seconds
    var timer = setInterval(function(){
    document.getElementById('hardTimer').innerHTML='00:'+easySec;
    easySec--;  // decrement
    // if (sec < -1) {
        
    //   }
    }, 1000);
    var easySec = 7; 
  }

  function hardTimer(){ // initialize timer
    var hardSec = 21; // set timer in seconds
    var timer = setInterval(function(){
    document.getElementById('hardTimer').innerHTML='00:'+hardSec;
    hardSec--;  // decrement
    // if (sec < -1) {
        
    //   }
    }, 1000);
    var hardSec = 21; // resetting the timer to 21 seconds
  }