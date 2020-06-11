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

  function countdownEasy(minutes) {
    // jsPsych.endCurrentTimeline();
    let seconds = 7;
    let mins = minutes;
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        let counter = document.getElementById("counter");
        // let counter = '';
        let current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds); //comment out .innerHTML method to hide the timer
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
            console.log(seconds);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
            // else if (seconds == 0) { //ends experiment when timer reaches 0
            //     jsPsych.endCurrentTimeline();
            // }
        }
    }
    tick();

}

function countdownHard(minutes) {
    // jsPsych.endCurrentTimeline();
    let seconds = 21;
    let mins = minutes;
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        let counter = document.getElementById("counter");
        // let counter = '';
        let current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds); //comment out .innerHTML method to hide the timer
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
            console.log(seconds);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
            // else if (seconds == 0) { //ends experiment when timer reaches 0
            //      jsPsych.endCurrentTimeline();
            // }
        }
    }
    tick();

}
