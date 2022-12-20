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
        feedbackLogic = 'You completed the task!';
        tapTotal = 100;
        console.log('complete');
        trialComplete = 1;
        width = document.getElementById("keyBar").style.width="0%"; // reset to 0
        jsPsych.finishTrial();  
      } else {
        width++;
        console.log(width);
        tapTotal = width;
        trialComplete = 0;
        width = document.getElementById("keyBar").style.width=String(width)+"%";
        return (event.charCode == HardKey_ASCII)
      }

    }

//  increment progress bar for EASY condition
function moveEasy() { // function definition
    
    let feedback = document.getElementById("feedbackGenerator");
    var width = document.getElementById("keyBar").style.width; // variable assignment of width property of keyBar
    width = parseFloat(width.slice(0, -1)); // variable reassignment
        if (width >=96.57) { // set to record 30 taps
        feedbackLogic = 'You completed the task!';
        console.log('complete');
        trialComplete = 1;
        width = document.getElementById("keyBar").style.width="0%";
        tapTotal = 30;
        jsPsych.finishTrial();  
        } else {
        width+=3.33;
        console.log(width);
        tapTotal = width/3.33;
        trialComplete = 0;
        width = document.getElementById("keyBar").style.width=String(width)+"%";
        return (event.charCode == EasyKey_ASCII)
        }
    

    }

function countdownEasy(minutes) {
    let seconds = 8;
    let mins = minutes;
    function tick() {
        let counter = document.getElementById("timeRemaining");
        // let current_minutes = mins-1
        seconds--;
        counter.innerHTML = seconds; //comment out .innerHTML method to hide the timer
        if(seconds > 0) {
            setTimeout(tick, 1000);
            console.log(seconds);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
            else if (seconds == 0) { //ends experiment when timer reaches 0
                feedbackLogic = 'You <u>did not</u> complete the task.';
                console.log('incomplete')
                jsPsych.finishTrial();
                seconds = 7;
                counter.innerHTML = "";
            }
        }
    }
    tick();
}
    
    function countdownHard(minutes) {
        let seconds = 22;
        let mins = minutes;
        function tick() {
            let counter = document.getElementById("timeRemaining");
            // let current_minutes = mins-1
            seconds--;
            counter.innerHTML = seconds; //comment out .innerHTML method to hide the timer
            if( seconds > 0 ) {
                setTimeout(tick, 1000);
                console.log(seconds);
            } else {
                if(mins > 1){
                    countdown(mins-1);           
                }
                else if (seconds == 0) { //ends experiment when timer reaches 0
                    feedbackLogic = 'You <u>did not</u> complete the task.';
                    console.log('incomplete')
                    jsPsych.finishTrial();
                   seconds = 21;
                   counter.innerHTML = "";
                }
            }
        }
        tick();
    }

// function countdownHard() {
//     var timeleft = 21;
//     // if timeleft
//     var downloadTimer = setInterval(function(){
//     timeleft--;
//     document.getElementById("timeRemaining").textContent = timeleft;
//     if(timeleft <= 0)
//         clearInterval(downloadTimer);
//     },1000);
// }
// function rewardSum(){
//     rewardTally.reduce(function(a, b){
//         return a + b;
//     }, 0);
//   }

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
                    console.log('Experiment complete');
                    if (version === "money"){
                        // jsPsych.endCurrentTimeline();
                        reward.push(MinutesToPlay+" Minute Timer! Experiment Complete.\nCongratulations! You won: "+currency+" "+Math.round(rewardTally/10)+" "+points+"!\nPress OK to continue.");
                        while (experimentIterator < experimentOutcome.length){ // loops through to the end of all possible trials
                            jsPsych.endCurrentTimeline();
                            console.log('killProcess');
                            experimentIterator++;
                    }
                    } else if (version === 'points'){
                        // jsPsych.endCurrentTimeline();
                        reward.push(MinutesToPlay+" Minute Timer! Experiment Complete.\nCongratulations! You won: "+currency+" "+rewardTally+" "+points+"!\nPress OK to continue.");
                        while (experimentIterator < experimentOutcome.length){ // loops through to the end of all possible trials
                            jsPsych.endCurrentTimeline();
                            console.log('killProcess');
                            experimentIterator++;
                    }
                    }
                }
            }
        }
        tick();
    }

function versionRandomization(){



    if (version === 'money') {
        rewardTally = 0;
        breakSpace = '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
        currency = "$";
        points="";
        rangeLow = "$1.20";
        rangeHigh = "$4.00";
      
        // practice variables
        practiceOutcome     = ["win", "lose", "lose", "win"];
        practiceHard        = [1.78, 2.68, 3.58, 4.12];
        practiceEasy        = [1.00, 1.00, 1.00, 1.00];
        practiceProbability = [50,  12,  50,  88];
        practiceHardRewardValue = [1, 2, 4, 4];
      
        // experiment variables
        experimentOutcome = ["lose", "lose", "lose", "win", "lose",	"win", "lose", "win", "win", "win", "lose",	"win", "lose", "win", "lose",	"lose",	"win", "lose", "win", "lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"win", 	"lose",	"lose",	"lose",	"win", 	"lose",	"win", 	"win", 	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"win", 	"win", 	"lose",	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"lose",	"win", 	"win", 	"win", 	"lose",	"win", 	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"win", 	"win", 	"win", 	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"lose"];
        hardAmount = [3.04, 1.42,	2.86,	3.22,	1.78,	1.96,	2.68,	1.78,	2.14,	2.50,	3.94,	2.32,	2.14,	1.42,	3.04,	1.24,	3.58,	2.32,	4.12,	4.12,	2.50,	3.94,	3.22,	4.12,	2.68,	3.40,	2.50,	3.76,	1.78,	1.42,	3.04,	3.40,	3.22,	1.24,	3.58,	3.76,	3.76,	2.14,	3.58,	1.60,	2.86,	2.68,	1.24,	1.96,	1.60,	2.86,	2.32,	3.40,	3.94,	1.96,	1.60,	2.59,	3.49,	3.85,	4.21,	4.03,	3.67,	3.67,	4.03,	2.77,	1.51,	1.87,	4.21,	1.33,	1.87,	1.51,	3.13,	3.13,	3.85,	2.59,	4.21,	2.95,	2.05,	2.77,	3.49,	1.87,	2.95,	3.13,	3.67,	1.69,	2.59,	2.41,	1.33,	3.31,	2.23,	2.23,	4.03,	1.33,	2.41,	3.31,	2.23,	3.85, 2.41,	3.31,	2.77,	2.05,	1.69,	3.49,	1.69,	2.95,	2.05,	1.51];
        easyAmount = [1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,];
        experimentProbability = [12,	50,	50,	88,	12,	88,	50,	88,	50,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	50,	12,	12,	88,	88,	50,	88,	50,	50,	12,	50,	88,	50,	88,	12,	12,	88,	88,	50,	88,	12,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	88,	50,	88,	12,	50,	12,	88,	50,	88,	88,	50,	50,	50,	50,	88,	12,	12,	88,	12,	12,	88,	12,	50,	12,	50,	50,	88,	88,	50,	12,	88,	50,	12,	50,	50,	12,	88,	12,	88,	88,	50,	88,	88,	12,	12,	12,	50,	88,	50,	12,];
        hardRewardValue = [3, 1, 3, 3, 1, 2, 2, 1, 2, 2, 4, 2, 2, 1, 3, 1, 4, 2, 4, 4, 2, 4, 3, 4, 2, 3, 2, 4, 1, 1, 3, 3, 3, 1, 4, 4, 4, 2, 4, 1, 3, 2, 1, 2, 1, 3, 2, 3, 4, 2, 1, 2, 3, 4, 4, 4, 4, 4, 4, 3, 1, 1, 4, 1, 1, 1, 3, 3, 4, 2, 4, 3, 2, 3, 3, 1, 3, 3, 4, 1, 2, 2, 1, 3, 2, 2, 4, 1, 2, 3, 2, 4, 2, 3, 3, 2, 1, 3, 1, 3, 2, 1,];
        
        instructions_9 = {
            type: "html-keyboard-response",
            stimulus: '<p style="color:white;"><b>We cannot pay you based on every choice you make.</b></p> ' +
            '<p style="color:white;">At the end of the experiment, you will be notified of your winnings that will be added to your payment.    </p> ' +
            '<p style="color:white;"><b>You won’t know which trials get added to your payment.</p></b>' +
            '<p style="color:white;">Therefore, while the decisions you make on these selected trials WILL count, any trial COULD count.</p> ' +
            '<p style="color:white;"><i>Press the spacebar to continue.</i></p>',
            choices: [32],
        };
      
      } else if (version === 'points') {
        rewardTally = 0;
        breakSpace = '';
        currency = "";
        points="points";
        rewardEasy= "100 points";
        rangeLow = "120";
        rangeHigh = "400 points";
      
        // practice variables
        practiceOutcome     = ["win", "lose", "lose", "win"]
        practiceHard        = [178, 268, 358, 412];
        practiceEasy        = [100, 100, 100, 100];
        practiceProbability = [50,  12,  50,  88];
        practiceHardRewardValue = [1, 2, 4, 4];
      
        // experiment variables
        experimentOutcome = ["lose", "lose", "lose", "win", "lose",	"win", "lose", "win", "win", "win", "lose",	"win", "lose", "win", "lose",	"lose",	"win", "lose", "win", "lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"win", 	"lose",	"lose",	"lose",	"win", 	"lose",	"win", 	"win", 	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"win", 	"win", 	"lose",	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"lose",	"win", 	"win", 	"win", 	"lose",	"win", 	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"win", 	"win", 	"win", 	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"lose"];
        hardAmount = [304, 142,	286,	322,	178,	196,	268,	178,	214,	250,	394,	232,	214,	142,	304,	124,	358,	232,	412,	412,	250,	394,	322,	412,	268,	340,	250,	376,	178,	142,	304,	340,	322,	124,	358,	376,	376,	214,	358,	160,	286,	268,	124,	196,	160,	286,	232,	340,	394,	196,	160,	259,	349,	385,	421,	403,	367,	367,	403,	277,	151,	187,	421,	133,	187,	151,	313,	313,	385,	259,	421,	295,	205,	277,	349,	187,	295,	313,	367,	169,	259,	241,	133,	331,	223,	223,	403,	133,	241,	331,	223,	385, 241,	331,	277,	205,	169,	349,	169,	295,	205,	151];
        easyAmount = [100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,];
        experimentProbability = [12,	50,	50,	88,	12,	88,	50,	88,	50,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	50,	12,	12,	88,	88,	50,	88,	50,	50,	12,	50,	88,	50,	88,	12,	12,	88,	88,	50,	88,	12,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	88,	50,	88,	12,	50,	12,	88,	50,	88,	88,	50,	50,	50,	50,	88,	12,	12,	88,	12,	12,	88,	12,	50,	12,	50,	50,	88,	88,	50,	12,	88,	50,	12,	50,	50,	12,	88,	12,	88,	88,	50,	88,	88,	12,	12,	12,	50,	88,	50,	12,];
        hardRewardValue = [3, 1, 3, 3, 1, 2, 2, 1, 2, 2, 4, 2, 2, 1, 3, 1, 4, 2, 4, 4, 2, 4, 3, 4, 2, 3, 2, 4, 1, 1, 3, 3, 3, 1, 4, 4, 4, 2, 4, 1, 3, 2, 1, 2, 1, 3, 2, 3, 4, 2, 1, 2, 3, 4, 4, 4, 4, 4, 4, 3, 1, 1, 4, 1, 1, 1, 3, 3, 4, 2, 4, 3, 2, 3, 3, 1, 3, 3, 4, 1, 2, 2, 1, 3, 2, 2, 4, 1, 2, 3, 2, 4, 2, 3, 3, 2, 1, 3, 1, 3, 2, 1,];
        
    }
}

// populates practice_prompt_array
function practicePromptPush(){
    if (handedness === "RIGHT") {
        for (let i = 0; i <= 3; i++){
        practice_prompt_array.push(
            '<br>'+
            '<br>'+
        '<p style="color:white;">Press the <strong>'+HardKey_uCase+'</strong> key. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Press the <strong>'+EasyKey_uCase+'</strong> key.</p> ' +
        '<p style="color:white;">Hard is worth: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Easy is worth: </p> ' +
        '<p style="color:white;"> '+currency+practiceHard[i]+' '+points+' '+breakSpace+' &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp '+currency+practiceEasy[i]+' '+points+'</p> ' +
        '<br>'+
        '<br>'+
        '<p style="color:white;"> The probability of winning is ' +practiceProbability[i]+'%.   </p> ')
        };
    } else if (handedness === "LEFT") {
        for (let i = 0; i <= 3; i++){
        practice_prompt_array.push(
            '<br>'+
            '<br>'+
        '<p style="color:white;">Press the <strong>'+EasyKey_uCase+'</strong> key. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Press the <strong>'+HardKey_uCase+'</strong> key.</p> ' +
        '<p style="color:white;">Easy is worth: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Hard is worth: </p> ' +
        '<p style="color:white;"> '+currency+practiceEasy[i]+' '+points+' '+breakSpace+' &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp '+currency+practiceHard[i]+' '+points+'</p> ' +
        '<br>'+
        '<br>'+
        '<p style="color:white;"> The probability of winning is ' +practiceProbability[i]+'%.   </p> ')
        };
    }
}

// populates test_prompt_array
function experimentPromptPush(){
    if (handedness == "RIGHT") {
        for (let i = 0; i < experimentOutcome.length; i++){
            test_prompt_array.push(
            '<br>'+
            '<br>'+
            '<p style="color:white;">Press the <strong>'+HardKey_uCase+'</strong> key. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Press the <strong>'+EasyKey_uCase+'</strong> key.</p> ' +
            '<p style="color:white;">Hard is worth: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Easy is worth: </p> ' +
            '<p style="color:white;">'+currency+hardAmount[i]+' '+points+' '+breakSpace+' &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp '+currency+easyAmount[i]+' '+points+'</p> ' +
            '<br>'+
            '<br>'+
            '<p style="color:white;"> The probability of winning is ' +experimentProbability[i]+'%.   </p> ')
        };
    } else if (handedness = "LEFT") {
        for (let i = 0; i < experimentOutcome.length; i++){
            test_prompt_array.push(
            '<br>'+
            '<br>'+
            '<p style="color:white;">Press the <strong>'+EasyKey_uCase+'</strong> key. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Press the <strong>'+HardKey_uCase+'</strong> key.</p> ' +
            '<p style="color:white;">Easy is worth: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hard is worth: </p> ' +
            '<p style="color:white;">'+currency+easyAmount[i]+' '+points+' '+breakSpace+' &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp '+currency+hardAmount[i]+' '+points+'</p> ' +
            '<br>'+
            '<br>'+
            '<p style="color:white;"> The probability of winning is ' +experimentProbability[i]+'%.   </p> ')
        };
    }
}

function saveData(name, data){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php'); // 'write_data.php' is the path to the php file described above.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));
  }

  /* start the experiment */
  function startExperiment(){
    jsPsych.init({
      timeline: timeline,
      preload_images: ["stim/cartoonRight.png", "stim/cartoonLeft.png"],
      show_progress_bar: true,
      auto_update_progress_bar: true,
    });
  }

  //onbeforeunload in body
  function areYouSure() {
    return "Write something clever here...";
  }
  areYouSure();
