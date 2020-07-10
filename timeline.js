   

/* create timeline */
let timeline = [];

let welcome = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">Welcome to the experiment! Press any key to begin.</p>',
  on_finish: function checkHandedness(){
    if (handedness.toUpperCase() == 'RIGHT'){
         EasyKey_uCase = 'L';  // 108
         HardKey_uCase = 'S';  // 115
         antihandedness = 'LEFT';
         EasyKey_ASCII = 108;
         HardKey_ASCII = 115;
    } else if (handedness.toUpperCase() == 'LEFT') {
         EasyKey_uCase = 'S';  // 115
         HardKey_uCase = 'L';  // 108
         antihandedness = 'RIGHT';
         EasyKey_ASCII = 115;
         HardKey_ASCII = 108;
    } 
 }
//   on_finish: function instructionTick() {
//     progress_bar += instruction_tick;
//     jsPsych.setProgressBar(progress_bar);
//   },
}

timeline.push(welcome);

/* define instructions trial */
let instructions_1 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">You are going to play the lever-press game. </p>' +
    '<p style="color:white;">The game will consist of a series of individual trials. </p>' +
    '<p style="color:white;">The length of time required to complete each trial will depend upon decisions you make during that trial.  </p>'+
    '<p style="color:white;">You will play the game for exactly <strong>'+ MinutesToPlay + '</strong> minutes, after which you will be asked to stop.  </p>'+
    '<p style="color:white;"> Even if you choose to go through trials quickly, you will still play for the same total amount of time.  </p>'+
    '<p style="color:white;"> Press the space bar to continue.</p>',
  choices: [' '],
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

let instructions_2 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">For each trial, you will have an opportunity to win some money.</p> ' +
      '<p style="color:white;">In order to be eligible to win money on a given trial, you must first complete a task.</p> ' + 
      '<p style="color:white;">The task involves making repeated button presses within a certain amount of time. </p>' +
      '<p style="color:white;">For each trial you can choose to complete an Easy task, or a Hard task. </p> '+
      '<p style="color:white;">Press the space bar to continue.</p>',
  choices: [32],
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

let instructions_3 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">If you choose the Easy task, you will need to press the <u><strong>'+EasyKey_uCase+'</strong></u> key with your <u><strong>'+handedness.toUpperCase()+'</strong></u> index finger approximately 30 times within 7 seconds. </p> ' +
  '<p style="color:white;">You are eligible to win $1.00 for each time you complete the Easy task. </p> ' + 
  '<p style="color:white;">Press the space bar to continue. </p>' ,
  choices: [32],
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

let instructions_4 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">If you choose the Hard task, you will need to press the <u><strong>'+HardKey_uCase+'</strong></u> key with the pinky finger of your <u><strong>'+antihandedness+'</strong></u> hand approximately 100 times within 21 seconds.  </p> ' +
  '<p style="color:white;">For each trial, the amount that you are eligible to win if you complete the Hard task will change.  </p> ' + 
  '<p style="color:white;">The amount that the Hard task is worth on a given trial will be presented to you at the beginning of that trial.  </p>' +
  '<p style="color:white;">Hard trials range from $1.20 to around $4.00. </p>' + 
  '<p style="color:white;">Press the space bar to continue. </p>',
  choices: [32],
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

let instructions_5 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">Completing the Easy or Hard task makes you eligible to receive money on that trial, but completion alone does NOT guarantee that you will win money.  </p> ' +
  '<p style="color:white;">Press the space bar to continue.  </p> ' , 
  choices: [32],
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

let instructions_6 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">Some trials are less likely to give you money than others. </p> ' +
  '<p style="color:white;">To help you decide which trials are more likely to give you money, you will be told the probability that you WILL receive money IF you complete the task at the beginning of each trial.   </p> ' +
  '<p style="color:white;">Press the space bar to continue. </p>',
  choices: [32],
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

let instructions_7 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">Some trials you will have an 88% receiving money if you complete the task.  </p> ' +
  '<p style="color:white;">Some trials you will have a 50% chance receiving money if you complete the task.   </p> ' +
  '<p style="color:white;">Some trials you will have a 12% chance of receiving money if you complete the task.   </p> ' +
  '<p style="color:white;">Press the space bar to continue. </p>',
  choices: [32],
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

let instructions_8 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">At the beginning of each trial, you will have a choice between the Hard task and the Easy task.   </p> ' +
  '<p style="color:white;">The amount you are eligible to win on the Hard task, and the probability of winning will be presented at the beginning of each trial.   </p> ' +
  '<p style="color:white;">To choose the Hard task, press the <u><strong>'+HardKey_uCase+'</strong></u> key.  </p> ' +
  '<p style="color:white;">To choose the Easy task, press the <u><strong>'+EasyKey_uCase+'</strong></u> key.  </p> ' +
  '<p style="color:white;">Press the space bar to continue. </p>',
  choices: [32],
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

let instructions_9 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">We cannot pay you based on every choice you make.  </p> ' +
  '<p style="color:white;">However, at the end of the experiment, we will randomly select 4 trials (2 from each session) and add them to your payment.    </p> ' +
  '<p style="color:white;">You won’t know which trials get added to your payment.   </p> ' +
  '<p style="color:white;">Therefore, while the decisions you make on only four trials WILL count, any trial COULD count.  </p> ' +
  '<p style="color:white;">Press the space bar to continue. </p>',
  choices: [32],
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

let instructions_10 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">Also keep in mind that you only have <strong>'+ MinutesToPlay + '</strong> minutes to get through the game, and the Hard task takes about twice as long as the Easy task.   </p> ' +
  '<p style="color:white;">If you choose all Easy tasks, you will probably get through approximately 40 trials, if you choose all Hard tasks, you will probably get through around 20 trials, so choose your Hard tasks carefully!    </p> ' +
  '<p style="color:white;">Now you are ready to play the game.    </p> ' +
  '<p style="color:white;">You will begin with a set of 4 practice trials.    </p> ' +
  '<p style="color:white;">Press the space bar to start. </p>',
  choices: [32],
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

let instructions_11 = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">Get your hands in position and press any key to start the practice trials. </p> ' ,
  choices: [32],
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

let instructions_procedure = {
  timeline: [instructions_1, instructions_2, instructions_3, instructions_4, instructions_5, instructions_6, instructions_7, instructions_8, instructions_9, instructions_10, instructions_11],
}

timeline.push(instructions_procedure);

let end_of_trial = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:white;">You completed the task.   </p> ' +
  '<p style="color:white;">No money this round    </p> ' +
  '<p style="color:white;">Now you are ready to play the game.    </p> ' +
  '<p style="color:white;">You did not complete the task.   </p> ' +
  '<p style="color:white;">Get your hands in position and press the space bar to start. </p>',
  choices: [32],
  post_trial_gap: 2000,

};
let fixation = {
  type: 'html-keyboard-response',
  stimulus: '<div style="color:white; font-size:60px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000,
}

let trial = {
  type: "html-keyboard-response",
  stimulus: jsPsych.timelineVariable('stimulus'), //train_stimuli_array, //jsPsych.timelineVariable('stimulus'),
  choices: [EasyKey_uCase.toUpperCase(), HardKey_uCase.toUpperCase()],
  data: jsPsych.timelineVariable('data'),
  on_finish: function(data){
    selection = String(jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press))
    selection = selection.toUpperCase()
    console.log(selection)
  }
}

let ready = {
  type: 'html-keyboard-response',
  stimulus:'<p style="color:white;">Ready?</p>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000,
}

let load = {
  type: 'html-button-response',
  prompt: '<p id="timeRemaining" style="text-align:center; color:white; font-size:30px"></p>',
  stimulus:'<p style="color:white;">Ready?</p>',
  button_html: '<button id="ready" onclick="" style="outline:none; background-color:black">START</button>',
  choices: [32],
  // trial_duration: 1000,
  on_load:function userSelection(){
    console.log(pressing_time)
    console.log(selection)
    if (selection==EasyKey_uCase){
      pressing_time = 7000;
      buttonPressing.trial_duration = 7000;
      document.getElementById("ready").setAttribute("onclick", "countdownEasy(1)");
    } else if (selection==HardKey_uCase){ 
      pressing_time= 21000; // for right handed only
      buttonPressing.trial_duration = 21000;
      document.getElementById("ready").setAttribute("onclick", "countdownHard(1)");
    }
    document.getElementById("ready").click(); //automatically clicks the hidden button after loading
}
}

let buttonPressing = {
type: "html-keyboard-response",
// prompt: '<p style="color:white;" id="counter"> </p>' +'<input type="text" onkeypress="move()">'+'<p style="color:white;" id="counter"> </p>',
prompt: fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; outline:none; border:none; background:none" onkeypress="">',
// stimulus: , //this gets filled in with the countdown
choices: [selection],
response_ends_trial: false,
trial_duration: pressing_time,
data: jsPsych.timelineVariable('data'),
stimulus: jsPsych.timelineVariable('progress'),    
on_load:function buttonPress(){
    barFill = document.getElementById("fillUp");
    barFill.innerHTML = 'Press the <u><strong>'+selection+'</strong></u> key until the bar fills up.';   
    document.getElementById("tapTap").focus(); //gives focus to the text box
    console.log(pressing_time)
    console.log(selection)
    if (pressing_time==21000){
      // pressing_time = 7000;
      // buttonPressing.trial_duration = pressing_time;
      document.getElementById("counter").setAttribute("onkeypress", "return (event.charCode == HardKey_ASCII) && moveHard()"); // event.charCode allows us to set specific keys to use
    } else if (pressing_time==7000){ 
      // pressing_time= 21000; // for right handed only
      // buttonPressing.trial_duration = pressing_time;
      document.getElementById("counter").setAttribute("onkeypress", "return (event.charCode == EasyKey_ASCII) && moveEasy()"); // event.charCode allows us to set specific keys to use
    }
},
}

let feedback = {
  type: 'html-keyboard-response',
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000, 
  stimulus: jsPsych.timelineVariable('feedback'),  
  data: jsPsych.timelineVariable('data'),  
  on_load: function(){
    let feedback = document.getElementById("feedbackGenerator");
    feedback.innerHTML = feedbackLogic;
  }
}

let practice_outcome = {
  type: 'html-keyboard-response',
  // stimulus:'<p style="color:white;">completion </p> ',
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
  stimulus: jsPsych.timelineVariable('outcome'),  
  data: jsPsych.timelineVariable('data'),  
  on_load: function(){
    let outcome = document.getElementById("outcomeGenerator");
    if (feedbackLogic == 'You completed the task' && practiceOutcome[practiceIterator] == 'win'){ 
        if (selection==EasyKey_uCase){
        outcome.innerHTML = 'You won $ '+practiceEasy[practiceIterator];
        practiceIterator++
        progress_bar += practice_tick;
        jsPsych.setProgressBar(progress_bar);
        } else if (selection==HardKey_uCase){
         outcome.innerHTML = 'You won $ '+practiceHard[practiceIterator];
         practiceIterator++
         progress_bar += practice_tick;
         jsPsych.setProgressBar(progress_bar);
      }
    } else if (feedbackLogic == 'You completed the task' && practiceOutcome[practiceIterator] == 'lose') { // elseif block prevents writing bad outcomeLogic i.e. no reward when completed where win was expected
        outcome.innerHTML = 'No money this round';
        practiceIterator++;
          progress_bar += practice_tick;
          jsPsych.setProgressBar(progress_bar);
    } else {
          practiceIterator++;
          progress_bar += practice_tick;
          jsPsych.setProgressBar(progress_bar);
        }
    }, 
    };





let practice_position = {
  type: 'html-keyboard-response',
  stimulus: '<p style="color:white;">Get your hands in position and press the space bar to start. </p>',
  // button_html: '<button id="startExp" onclick="experimentTimer()" style="outline:none; border:none; background-color:black">START</button>',
  choices: [32],
  // on_load: function(){
  //   document.getElementById('startExp').focus();
  // }
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};


timeline.push(practice_position);



// this is where the procedure loops over the timeline property below. the timeline variables are the stimuli.

let practice_procedure = {
  timeline: [fixation, trial, ready, load, buttonPressing, feedback, practice_outcome],
  timeline_variables: practice_prompt_stimuli,
  randomize_order: false
}
timeline.push(practice_procedure);



/* END TRAINING TRIAL FOR PARTICIPANTS */


let start_task = {
  type: 'html-button-response',
  stimulus: '<p style="color:white;">That was the practice. The experiment starts now!</p> ' + '<p style="color:white;">Get your hands in position and press the space bar to start. </p>',
  button_html: '<button id="startExp" onclick="experimentTimer()" style="outline:none; border:none; background-color:black">START</button>',
  choices: [32],
  on_load: function(){
    document.getElementById('startExp').focus();
  },
  on_finish: function instructionTick() {
    progress_bar += instruction_tick;
    jsPsych.setProgressBar(progress_bar);
  },
};

timeline.push(start_task);
