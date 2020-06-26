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
    let seconds = 1200;
    let mins = minutes;
    function tick() {
        let current_minutes = mins-1
        seconds--;
        timer = "Time Remaining: " + current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds); //comment out .innerHTML method to hide the timer
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
            console.log(seconds);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
            else if (seconds == 0) { //ends experiment when timer reaches 0
                console.log('Experiment complete')
                jsPsych.endCurrentTimeline('complete');
            }
        }
    }
    tick();
}