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
        feedbackLogic = 'You completed the task!';
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
                feedbackLogic = 'You <u>did not</u> complete the task';
                console.log('incomplete')
                jsPsych.finishTrial('failure');
                seconds = 7;
                counter.innerHTML = "";
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
                    jsPsych.finishTrial('failure');
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
      on_finish: function(){ saveData("eEfRT_" + workerID, jsPsych.data.get().csv()); }
      //on_finish: function(){
        //jsPsych.data.get().filter([{test_part: 'test'},{test_part: 'prediction'},{test_part: 'c2_test'}]).localSave("csv", `test-self-deception-data.csv`);
          //jsPsych.data.displayData(); 
      //}
    });
  }