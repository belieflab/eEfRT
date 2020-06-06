function timer(){ // initialize timer
    var sec = 21; // set timer in seconds
    var timer = setInterval(function(){
    document.getElementById('hardTimer').innerHTML='00:'+sec;
    sec--;  // decrement
    // if (sec < -1) {
        
    //   }
    }, 1000);
    var sec = 21; // resetting the timer to 21 seconds
  }