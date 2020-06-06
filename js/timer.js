function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        var counter = document.getElementById("counter");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
        }
    }
    tick();
}




on_start: function timer(){ // initialize timer
    var sec = 30; // set timer in seconds
    var timer = setInterval(function(){
    document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
    sec--;
    if (sec < 0) {
      jsPsych.endCurrentTimeline();
      }
    }, 1000);
  },


  prompt: '<p style="color:white;" id="safeTimerDisplay">00:30</p>',