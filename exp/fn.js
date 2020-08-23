// must be called in intake screen to pass variables to main.js
function checkHandedness() {
    if (handedness.toUpperCase() == 'RIGHT'){
         handedness = 'RIGHT';
         antihandedness = 'LEFT';
         EasyKey_uCase = 'L';  // 108
         HardKey_uCase = 'S';  // 115
         EasyKey_ASCII = 108;
         HardKey_ASCII = 115;
     //     cartoon = document.getElementById("cartoon").src= "stim/cartoonRight.png";
    } else if (handedness.toUpperCase() == 'LEFT') {
         handedness = 'LEFT';
         antihandedness = 'RIGHT';
         EasyKey_uCase = 'S';  // 115
         HardKey_uCase = 'L';  // 108
         EasyKey_ASCII = 115;
         HardKey_ASCII = 108;
     //     cartoon = document.getElementById("cartoon").src= "stim/cartoonLeft.png";
    } 
 }

//  increment progress bar for HARD condition
 function moveHard() { // function definition
    let feedback = document.getElementById("feedbackGenerator");
    var width = document.getElementById("keyBar").style.width; // variable assignment of width property of keyBar
    width = parseFloat(width.slice(0, -1)); // variable reassignment
      if (width >= 99) { // set to record 100 taps
        feedbackLogic = 'You completed the task';
        console.log('complete');
        width = document.getElementById("keyBar").style.width="0%"; // reset to 0
        jsPsych.finishTrial('success');  
      } else {
        width++;
        console.log(width);
        width = document.getElementById("keyBar").style.width=String(width)+"%";
        return (event.charCode == HardKey_ASCII)
      }

    }

//  increment progress bar for EASY condition
function moveEasy() { // function definition
    
    let feedback = document.getElementById("feedbackGenerator");
    var width = document.getElementById("keyBar").style.width; // variable assignment of width property of keyBar
    width = parseFloat(width.slice(0, -1)); // variable reassignment
        if (width >= 96.57) { // set to record 30 taps
        feedbackLogic = 'You completed the task';
        console.log('complete');
        width = document.getElementById("keyBar").style.width="0%";
        jsPsych.finishTrial('data');  
        } else {
        width+=3.33;
        console.log(width);
        width = document.getElementById("keyBar").style.width=String(width)+"%";
        return (event.charCode == EasyKey_ASCII)
        }
    

    }

    function countdownEasy(minutes) {
        let seconds = 7;
        let mins = minutes;
        function tick() {
            let counter = document.getElementById("timeRemaining");
            let current_minutes = mins-1
            seconds--;
            counter.innerHTML = "Time Remaining: " + current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds); //comment out .innerHTML method to hide the timer
            if(seconds > 0) {
                setTimeout(tick, 1000);
                console.log(seconds);
            } else {
                if(mins > 1){
                    countdown(mins-1);           
                }
                else if (seconds == 0) { //ends experiment when timer reaches 0
                    feedbackLogic = 'You <u>did not</u> complete the task';
                    console.log('incomplete')
                    jsPsych.finishTrial('failure');
                   seconds = 7;
                   counter.innerHTML = "Time Remaining: 00:07";
                }
            }
        }
        tick();
    }
    
    function countdownHard(minutes) {
        let seconds = 21;
        let mins = minutes;
        function tick() {
            let counter = document.getElementById("timeRemaining");
            let current_minutes = mins-1
            seconds--;
            counter.innerHTML = "Time Remaining: " + current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds); //comment out .innerHTML method to hide the timer
            if( seconds > 0 ) {
                setTimeout(tick, 1000);
                console.log(seconds);
            } else {
                if(mins > 1){
                    countdown(mins-1);           
                }
                else if (seconds == 0) { //ends experiment when timer reaches 0
                    feedbackLogic = 'You <u>did not</u> complete the task';
                    console.log('incomplete')
                    jsPsych.finishTrial('failure');
                   seconds = 21;
                   counter.innerHTML = "Time Remaining: 00:21";
                }
            }
        }
        tick();
    }
    
    function experimentTimer(minutes) {
        let seconds = MinutesToPlay*60;
        let mins = minutes;
        function tick() {
            let current_minutes = mins-1
            seconds--;
            timer = (seconds < 10 ? "0" : "") + String(seconds); //comment out .innerHTML method to hide the timer
            timerFloat = parseFloat(timer);
            if( seconds > 0 ) {
                setTimeout(tick, 1000);
                console.log(seconds);
            } else {
                if(mins > 1){
                    countdown(mins-1);           
                }
                else if (seconds == 0) { //ends experiment when timer reaches 0
                    console.log('Experiment complete')
                    jsPsych.endExperiment(alert(MinutesToPlay+" Minute Timer! Experiment Complete."));
                }
            }
        }
        tick();
    }