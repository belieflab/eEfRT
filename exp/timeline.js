/* create timeline */
let timeline = [];

/* define welcome message trial */
let welcome = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">Welcome to the experiment!</p>'+
  '<p style="color:white;"><i>Press any key to begin.</i></p>'
};

/* define instructions trial */
let instructions_1 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">You are going to play the lever-press game. </p>' +
    '<p style="color:white;">The game will consist of a series of individual trials. </p>' +
    '<p style="color:white;">The length of time required to complete each trial will depend upon decisions you make during that trial.  </p>'+
    '<p style="color:white;">You will play the game for exactly <span><strong>'+ MinutesToPlay + ' minutes</strong></span>, after which you will be asked to stop.  </p>'+
    // '<p style="color:white;"><b><i>Even if you choose to go through trials quickly, you will still play for the same total amount of time.</i></b></p>'+
    '<p style="color:white;"><i>Press the spacebar to continue.</i></p>',
  choices: [' ']
};

let instructions_2 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">For <b>each trial</b>, you will have an opportunity to <b>win some '+version+'</b>.</p> ' +
      '<p style="color:white;">In order to be eligible to <b>win '+version+'</b> on a given trial, you must first complete a task that requires you to <b>press a button on your keyboard</b> repeatedly for a certain amount of time.</p>' +
      '<p style="color:white;">For each trial you can <b>choose</b> to complete an <b>Easy task</b> <i>or a </i> <b>Hard task</b>. </p> '+
      '<p style="color:white;"><strong>If you do not decide within 5 seconds, an option will be randomly chosen</strong>. </p> '+
      '<p style="color:white;"><i>Press the spacebar to continue.</i></p>',
  choices: [32]
};

let instructions_3 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">If you choose the <b>Easy task</b>, you will need to press the <strong >'+EasyKey_uCase+' key</strong> with your <strong>'+handedness.toUpperCase()+' index finger</strong> approximately <b>30 times within 7 seconds</b>. </p> ' +
  '<p style="color:white;">You are eligible to win <b>'+currency+practiceEasy[1]+' '+points+'</b> for each time you complete the <b>Easy task</b>. </p> ' + 
  '<p style="color:white;"><i>Press the spacebar to continue.</i></p>',
  choices: [32]
};

let instructions_4 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">If you choose the <b>Hard task</b>, you will need to press the <strong>'+HardKey_uCase+' key</strong> with the <b>pinky finger</b> of your <strong>'+antihandedness.toUpperCase()+'</strong> hand approximately <b>100 times within 21 seconds</b>.  </p> ' +
  '<p style="color:white;"><b><i>For each trial, the amount that you are eligible to win if you complete the Hard task will change.</i></b></p>' +
  // '<p style="color:white;">The amount that the Hard task is worth on a given trial will be presented to you at the beginning of that trial.</p>' +
  '<p style="color:white;"><b>Hard trials</b> range from <b>'+rangeLow+' to around '+rangeHigh+'</b>.</p>' +
  '<p style="color:white;"><i>Press the spacebar to continue.</i></p>',
  choices: [32]
};

let instructions_5 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;"><b>Completing the Easy or Hard task makes you eligible to receive '+version+' on that trial</i></b>,<p>'+
  '<p style="color:white;"><b>but completion alone does NOT guarantee that you will win '+version+'.</b></p> ' +
  '<p style="color:white;"><i>Press the spacebar to continue.</p>' , 
  choices: [32]
};

let instructions_6 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;"><b>Some trials are less likely to give you '+version+' than others.</b></p> ' +
  '<p style="color:white;">Some trials have an <b>88% chance</b> of receiving '+version+' if you <b>complete the task</b>.  </p> ' +
  '<p style="color:white;">Some trials have a <b>50% chance</b> of receiving '+version+' if you <b>complete the task</b>.   </p> ' +
  '<p style="color:white;">Some trials have a <b>12% chance</b> of receiving '+version+' if you <b>complete the task</b>.   </p> ' +
  '<p style="color:white;"><i>Press the spacebar to continue.</i></p>',
  choices: [32]
};

let instructions_7 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">Also keep in mind that you only have <strong>'+ MinutesToPlay + ' minutes</strong> to get through the game, and the Hard task takes about twice as long as the Easy task.   </p> ' +
  '<p style="color:white;">If you choose all <b>Easy tasks</b>, you will probably get through approximately <b>60 trials</b></p>'+
  '<p style="color:white;">If you choose all <b>Hard tasks</b>, you will probably get through around <b>30 trials</b>, so <b>choose your Hard tasks carefully</b>!    </p> '+
  '<p style="color:white;"><i>Press the spacebar to continue.</i></p>',
  choices: [32]
};

let instructions_8 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">Now you are ready to play the game.    </p> ' +
  '<p style="color:white;"><b>You will begin with a set of 4 practice trials.</b></p> ' +
  '<p style="color:white;"><i>Press the spacebar to continue.</i></p>',
  choices: [32]
};

let begin_practice = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">Get your hands in position and press the spacebar to start the practice trials. </p> ' +
  "<img id='cartoon' src='' width='1000' height='500'>",
  choices: [32],
  on_load: function() {
    'use strict';
    if (handedness==='LEFT'){
      document.getElementById("cartoon").src= "stim/cartoonLeft.png";
    } else if (handedness==='RIGHT'){
      document.getElementById("cartoon").src= "stim/cartoonRight.png";
    }
  }
};

let fixation = {
  type: 'html-keyboard-response',
  stimulus: '<div style="color:white; font-size:60px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000
};

let trial = {
  type: "html-keyboard-response",
  stimulus: jsPsych.timelineVariable('stimulus'), //train_stimuli_array, //jsPsych.timelineVariable('stimulus'),
  choices: [EasyKey_uCase, HardKey_uCase],
  // data: jsPsych.timelineVariable('data'),
  trial_duration: 5000,
  on_finish: function(data) {
    'use strict';
    selection = String(jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press));
    selection = selection.toUpperCase();
    console.log(selection);
    if (selection == EasyKey_uCase.toUpperCase()) { // handles exception if participant does not respond within 5s
      // console.log("oh hai mark")
      // data.eefrt_01_condition = 'e';
      // data.trial_timeout = 0;
      trialTimeout = 0;
      trialCondition = 'e';
    } else if (selection == HardKey_uCase.toUpperCase()) {
      // console.log("oh hai mark")
      // data.eefrt_01_condition = 'h'
      // data.trial_timeout = 0;
      trialTimeout = 0;
      trialCondition = 'h';
    } else {
      selection = selectionTimeout[Math.floor(Math.random() * selectionTimeout.length)]; // randomizes the two possible response keys
      if (selection.toUpperCase() == EasyKey_uCase.toUpperCase()) {
        // data.eefrt_01_condition = 'e';
        // console.log("oh hai greg")
        // data.trial_timeout = 1;
        trialTimeout = 1;
        trialCondition = 'e';
      } else if (selection.toUpperCase() == HardKey_uCase.toUpperCase()) {
      // data.eefrt_01_condition = 'h';
      // console.log("oh hai greg")
      // data.trial_timeout = 1;
      trialTimeout = 1;
      trialCondition = 'h';
      }
    }
  }
};

let ready = {
  type: 'html-keyboard-response',
  stimulus:'<p style="color:white; font-size:24px">Ready?</p>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000
};

let load = {
  type: 'html-button-response',
  prompt: '<p id="timeRemaining" style="text-align:center; color:white; font-size:24px">Begin!</p>',
  stimulus:'<p style="color:white; font-size:24px">Ready?</p>',
  button_html: '<button id="ready" onclick="" style="outline:none; background-color:black">START</button>',
  choices: [32],
  // trial_duration: 1000,
  on_load:function userSelection(){
    'use strict';
    console.log(pressing_time);
    console.log(selection);
    if (selection==EasyKey_uCase){
      pressing_time = 7000;
      buttonPressing.trial_duration = 7000;
      document.getElementById("ready").setAttribute("onclick", "countdownEasy(1)");
    } else if (selection==HardKey_uCase) {
      pressing_time= 21000; // for right handed only
      buttonPressing.trial_duration = 20000;
      document.getElementById("ready").setAttribute("onclick", "countdownHard(1)");
    }
    document.getElementById("ready").click(); //automatically clicks the hidden button after loading
  }
};

let buttonPressing = {
  type: "html-keyboard-response",
  // prompt: '<p style="color:white;" id="counter"> </p>' +'<input type="text" onkeypress="move()">'+'<p style="color:white;" id="counter"> </p>',
  prompt: fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; outline:none; border:none; background:none" onkeyup="">',
  // stimulus: , //this gets filled in with the countdown
  choices: [selection],
  response_ends_trial: false,
  trial_duration: pressing_time,
  data: jsPsych.timelineVariable('data'),
  stimulus: jsPsych.timelineVariable('progress'),
  on_load: function buttonPress() {
    'use strict';
    let barFill = document.getElementById("fillUp");
    barFill.innerHTML = 'Press the <strong>'+selection+'</strong> key until the bar fills up.';
    document.getElementById("tapTap").focus(); //gives focus to the text box
    console.log(pressing_time);
    console.log(selection);
    $(document).ready(function(){
      $("#tapTap").keypress(function(event){
          let keycode = event.which;
          if (pressing_time==21000) {
            if (keycode == HardKey_ASCII) {
              document.getElementById("counter").setAttribute("onkeyup", "return moveHard()"); // event.charCode allows us to set specific keys to use 
            } else {
              document.getElementById("counter").setAttribute("onkeyup", "return false"); // event.charCode allows us to set specific keys to use 
            }
        } else if (pressing_time==7000){
            if (keycode == EasyKey_ASCII) {
              document.getElementById("counter").setAttribute("onkeyup", "return moveEasy()"); // event.charCode allows us to set specific keys to use 
            } else {
              document.getElementById("counter").setAttribute("onkeyup", "return false"); // event.charCode allows us to set specific keys to use 
            }
          }
      });
    });
  },

  on_finish: function(data) {
    'use strict';
    data.eefrt_01_taps = tapTotal;
    data.trial_complete = trialComplete;
    tapTotal = 0;
    data.trial_timeout = trialTimeout;
    data.eefrt_01_condition = trialCondition;
    data.subjectkey = GUID;
    data.src_subject_id = workerId;
    data.site = siteNumber;
    data.interview_date = today;
    data.interview_age = ageAtAssessment;
    data.sex = sexAtBirth;
    data.phenotype = groupStatus;
    data.handedness = handedness.toLowerCase();
    data.reward_tally = rewardTally;
  }
};

let feedback = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  stimulus: jsPsych.timelineVariable('feedback'),
  on_load: function(){
    'use strict';
    feedback = document.getElementById("feedbackGenerator");
    feedback.innerHTML = feedbackLogic;
  }
};

let practice_outcome = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  stimulus: jsPsych.timelineVariable('outcome'),
  on_load: function() {
    'use strict';
    let outcome = document.getElementById("outcomeGenerator");
    if (feedbackLogic == 'You completed the task!' && practiceOutcome[practiceIterator] == 'win') {
        if (selection==EasyKey_uCase) {
        outcome.innerHTML = 'You won '+currency+practiceEasy[practiceIterator]+' '+points+'!';
        practiceIterator++;
        } else if (selection==HardKey_uCase) {
          outcome.innerHTML = 'You won '+currency+practiceHard[practiceIterator]+' '+points+'!';
          practiceIterator++;
      }
    } else if (feedbackLogic == 'You completed the task!' && experimentOutcome[practiceIterator] == 'lose') { // elseif block prevents writing bad outcomeLogic i.e. no reward when completed where win was expected
      outcome.innerHTML = 'No '+version+' this round.';
      practiceIterator++;
    } else {
      practiceIterator++;
    }
  }
};


let begin_experiment = {
  type: 'html-keyboard-response',
  stimulus: '<p style="color:white;">That was the practice. The experiment starts now!</p> ' + '<p style="color:white;">Get your hands in position and press the spacebar to start. </p>'+
  "<img id='cartoon' src='' width='1000' height='500'>",
  choices: [32],
  on_load: function() {
    'use strict';
    if (handedness==='LEFT') {
      document.getElementById("cartoon").src= "stim/cartoonLeft.png";
    } else if (handedness==='RIGHT') {
      document.getElementById("cartoon").src= "stim/cartoonRight.png";
    }
  },
  on_finish: function() {
    'use strict';
    experimentTimer();
  }
};

let experiment_outcome = {
  type: 'html-keyboard-response',
  // stimulus:'<p style="color:white;">completion </p> ',
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  stimulus: jsPsych.timelineVariable('outcome'),
  on_load: function() {
    'use strict';
    let outcome = document.getElementById("outcomeGenerator");
    if (feedbackLogic == 'You completed the task!' && experimentOutcome[experimentIterator] == 'win') {

        if (selection==EasyKey_uCase) {
          outcome.innerHTML = 'You won '+currency+easyAmount[experimentIterator]+' '+points+'!';
          rewardTally+=easyAmount[experimentIterator]; // adds easy winnings to array
          experimentIterator++;
        } else if (selection==HardKey_uCase) {
          outcome.innerHTML = 'You won '+currency+hardAmount[experimentIterator]+' '+points+'!';
          rewardTally+=hardAmount[experimentIterator]; // adds hard winnings to array
          experimentIterator++;
        }

    } else if (feedbackLogic == 'You completed the task!' && experimentOutcome[experimentIterator] == 'lose') { // elseif block prevents writing bad outcomeLogic i.e. no reward when completed where win was expected
      outcome.innerHTML = 'No '+version+' this round.';
      experimentIterator++;

    } else {
      experimentIterator++;
    }
  },
};



let save_data = {
  type: "html-keyboard-response",
  stimulus: "<p style='color:white;'>Data saving...</p>"+
  '<div class="sk-cube-grid">'+
  '<div class="sk-cube sk-cube1"></div>'+
  '<div class="sk-cube sk-cube2"></div>'+
  '<div class="sk-cube sk-cube3"></div>'+
  '<div class="sk-cube sk-cube4"></div>'+
  '<div class="sk-cube sk-cube5"></div>'+
  '<div class="sk-cube sk-cube6"></div>'+
  '<div class="sk-cube sk-cube7"></div>'+
  '<div class="sk-cube sk-cube8"></div>'+
  '<div class="sk-cube sk-cube9"></div>'+
  '</div>'+
  "<p style='color:white;'>Do not close this window until the text dissapears.</p>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
  on_finish: function() {
    saveData("eefrt_" + workerId, jsPsych.data.get().csv());
    document.getElementById("unload").onbeforeunload='';
    $(document).ready(function() {
    $("body").addClass("showCursor"); // returns cursor functionality
    closeFullscreen(); // kill fullscreen
    });
  }
};

let end = {
  type: "html-keyboard-response",
  stimulus:   "<p style='color:white;'>Thank you!</p>"+
  "<p style='color:white;'>You have successfully completed the experiment and your data has been saved.</p>"+
  "<p style='color:white;'>To leave feedback on this task, please click the following link:</p>"+
  "<p style='color:white;'><a href="+feedbackLink+">Leave Task Feedback!</a></p>"+
  // "<p>Please wait for the experimenter to continue.</p>"+
  "<p style='color:white;'><i>You may now close the expriment window at anytime.</i></p>",
  choices: jsPsych.NO_KEYS,
  on_load: function() {
    alert(reward);
  }
};

// call main
$.getScript("exp/main.js");