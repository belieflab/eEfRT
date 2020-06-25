function countdownEasy(minutes) {
    // jsPsych.endCurrentTimeline();
    let seconds = 7;
    let mins = minutes;
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        let counter = document.getElementById("timeRemaining");
        let feedback = document.getElementById("feedbackGenerator");
        // let counter = '';
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
                window.feedbackLogic = '<p style="color:white;">You <u>did not</u> complete the task</p> ';
                practice_feedback_array.push('<p style="color:white;">You <u>did not</u> complete the task</p> ');
                // feedback.innerHTML = "FUCK YEAH";
                console.log('incomplete')
                jsPsych.finishTrial('failure');
               seconds = 7;
               counter.innerHTML = "Time Remaining: 00:07";
               return feedbackLogic
            }
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
        let counter = document.getElementById("timeRemaining");
        let feedback = document.getElementById("feedbackGenerator");
        // let counter = '';
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
                window.feedbackLogic = '<p style="color:white;">You <u>did not</u> complete the task</p> ';
                practice_feedback_array.push('<p style="color:white;">You <u>did not</u> complete the task</p> ');
                // feedback.innerHTML = "FUCK YEAH";
                console.log('incomplete')
               seconds = 21;
               counter.innerHTML = "Time Remaining: 00:21";
               return feedbackLogic
            }
        }
    }
    tick();

}

