   

    /* create timeline */
    let timeline = [];

    // hard code playtime to 20 minutes
    const MinutesToPlay = 20;

    // MinutesToPlay is the user's length of time on the experiment
    // let MinutesToPlay = parseInt(prompt("Enter time in minutes to play the game: "));

    var feedbackLogic;

    // user selection of hard or easy trials
    var selection;

    // Ask participant handedness
    let handedness =prompt("Are you right or left handed?");
    
    // const handedness=right;
    let antihandedness;
    let EasyKey_uCase; 
    let HardKey_uCase;

    // declare variable for the time to press
    let pressing_time;

    // declare iterators for the practice and experiment outcome
    let practiceIterator=0;
    let experimentIterator=0;
  
    // run script to ask participant how much time they would like to play for
    playTime();

    /* define welcome message trial */
    let welcome = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Welcome to the experiment! Press any key to begin.</p>',
      on_load: checkHandedness(),
    };

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
    };

    let instructions_2 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">For each trial, you will have an opportunity to win some money.</p> ' +
          '<p style="color:white;">In order to be eligible to win money on a given trial, you must first complete a task.</p> ' + 
          '<p style="color:white;">The task involves making repeated button presses within a certain amount of time. </p>' +
          '<p style="color:white;">For each trial you can choose to complete an Easy task, or a Hard task. </p> '+
          '<p style="color:white;">Press the space bar to continue.</p>',
      choices: [32],
      post_trial_gap: 2000
    };

    let instructions_3 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">If you choose the Easy task, you will need to press the <u><strong>'+EasyKey_uCase+'</strong></u> key with your <u><strong>'+handedness.toUpperCase()+'</strong></u> index finger approximately 30 times within 7 seconds. </p> ' +
      '<p style="color:white;">You are eligible to win $1.00 for each time you complete the Easy task. </p> ' + 
      '<p style="color:white;">Press the space bar to continue. </p>' ,
      choices: [32],
      post_trial_gap: 2000,
    };
    
    let instructions_4 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">If you choose the Hard task, you will need to press the <u><strong>'+HardKey_uCase+'</strong></u> key with the pinky finger of your <u><strong>'+antihandedness+'</strong></u> hand approximately 100 times within 21 seconds.  </p> ' +
      '<p style="color:white;">For each trial, the amount that you are eligible to win if you complete the Hard task will change.  </p> ' + 
      '<p style="color:white;">The amount that the Hard task is worth on a given trial will be presented to you at the beginning of that trial.  </p>' +
      '<p style="color:white;">Hard trials range from $1.20 to around $4.00. </p>' + 
      '<p style="color:white;">Press the space bar to continue. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    let instructions_5 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Completing the Easy or Hard task makes you eligible to receive money on that trial, but completion alone does NOT guarantee that you will win money.  </p> ' +
      '<p style="color:white;">Press the space bar to continue.  </p> ' , 
     
      choices: [32],
      post_trial_gap: 2000,
    };

    let instructions_6 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Some trials are less likely to give you money than others. </p> ' +
      '<p style="color:white;">To help you decide which trials are more likely to give you money, you will be told the probability that you WILL receive money IF you complete the task at the beginning of each trial.   </p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    let instructions_7 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Some trials you will have an 88% receiving money if you complete the task.  </p> ' +
      '<p style="color:white;">Some trials you will have a 50% chance receiving money if you complete the task.   </p> ' +
      '<p style="color:white;">Some trials you will have a 12% chance of receiving money if you complete the task.   </p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    let instructions_8 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">At the beginning of each trial, you will have a choice between the Hard task and the Easy task.   </p> ' +
      '<p style="color:white;">The amount you are eligible to win on the Hard task, and the probability of winning will be presented at the beginning of each trial.   </p> ' +
      '<p style="color:white;">To choose the Hard task, press the <u><strong>'+HardKey_uCase+'</strong></u> key.  </p> ' +
      '<p style="color:white;">To choose the Easy task, press the <u><strong>'+EasyKey_uCase+'</strong></u> key.  </p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    let instructions_9 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">We cannot pay you based on every choice you make.  </p> ' +
      '<p style="color:white;">However, at the end of the experiment, we will randomly select 4 trials (2 from each session) and add them to your payment.    </p> ' +
      '<p style="color:white;">You won’t know which trials get added to your payment.   </p> ' +
      '<p style="color:white;">Therefore, while the decisions you make on only four trials WILL count, any trial COULD count.  </p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    let instructions_10 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Also keep in mind that you only have <strong>'+ MinutesToPlay + '</strong> minutes to get through the game, and the Hard task takes about twice as long as the Easy task.   </p> ' +
      '<p style="color:white;">If you choose all Easy tasks, you will probably get through approximately 40 trials, if you choose all Hard tasks, you will probably get through around 20 trials, so choose your Hard tasks carefully!    </p> ' +
      '<p style="color:white;">Now you are ready to play the game.    </p> ' +
      '<p style="color:white;">You will begin with a set of 4 practice trials.    </p> ' +
      '<p style="color:white;">Press the space bar to start. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    let instructions_11 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Get your hands in position and press any key to start the practice trials. </p> ' ,
      choices: [32],
      post_trial_gap: 2000,
    };

    let instructions_procedure = {
      timeline: [instructions_1, instructions_2, instructions_3, instructions_4, instructions_5, instructions_6, instructions_7, instructions_8, instructions_9, instructions_10, instructions_11],
    }

    // timeline.push(instructions_procedure);

    /* START TRAINING TRIAL FOR PARTICIPANTS */
// delayed discounting task: three variables: 1st= money now, 2nd= money later, 3rd= money days later
// display the variables on the screen to the participant (write a for loop to iterate through)
    //  variables for practice condition
    let practiceOutcome = ["win", "lose", "lose", "win"]
    let practiceHard = [1.78,2.68,3.58,4.12];
    let practiceEasy = [1,1,1,1];
    let practiceProbability = [50,12,50,88];
  // this is where I put the text for the page
  // we create a new array and we use a for loop to add 4 practice items to the array. at the same time we are also looping through the variables that we assigned from 281-283.
    let practice_prompt_array = [];
    for (let i = 0; i <= 3; i++){
      practice_prompt_array.push('<p style="color:white;">Press the <u><strong>'+EasyKey_uCase+'</strong></u> key. </p> ' +
      '<p style="color:white;">Easy is worth:    </p> ' +
      '<p style="color:white;">$'+practiceEasy[i]+'   </p> ' +
      '<p style="color:white;">Press the <u><strong>'+HardKey_uCase+'</strong></u> key. </p> ' +
      '<p style="color:white;">Hard is worth:    </p> ' +
      '<p style="color:white;">$'+practiceHard[i]+'    </p> ' +
      '<p style="color:white;"> The probability of winning is ' +practiceProbability[i]+'%.   </p> ',)

      
    }
    let practice_feedback_array = [];
        for (let i = 0; i <= 3; i++){
        practice_feedback_array.push('<p id="feedbackGenerator" style="color:white;"></p>')
    }

    let practice_outcome_array = [];
        for (let i = 0; i <= 3; i++){
        practice_outcome_array.push('<p id="outcomeGenerator" style="color:white;"></p>')
        }

    // the feedback array is populated after trial is completed or failed

  
    // '<p style="color:white;">Ready?    </p> ' +
    //   '<p style="color:white;">Push the <u><strong>'+EasyKey_uCase+'</strong></u> key until the bar fills up.   </p>');
    let timeRemaining = '<p id="timeRemaining" style="text-align:center; color:white; font-size:30px"></p>'

     // let progressBar= '<div class="w3-container"><div class="w3-light-grey"><div class="w3-grey" style="height:24px; width:50%;"></div></div></div></div></div>'
    let progressBar = '<div id="counter" class="w3-container"><h2>Progress Bar Width</h2><p>Change the width of the progress bar with the width property:</p><div class="w3-light-grey"><div class="w3-grey" id="keyBar" style="height:24px;width:0%"></div></div><br><div>';

    let feedbackGenerator = '<p id="feedbackGenerator" style="color:white;"></p>';

    let fillUp = '<p id="fillUp" style="color:white;"></p>';

// this is where I call each item from the array above
    let practice_prompt_stimuli = [
    {stimulus: practice_prompt_array[0], feedback: practice_feedback_array[0], outcome: practice_outcome_array[0], progress: progressBar, data: {test_part: 'practice', correct_response: ','}},
    {stimulus: practice_prompt_array[1], feedback: practice_feedback_array[1], outcome: practice_outcome_array[1], progress: progressBar, data: {test_part: 'practice', correct_response: ','}},  
    {stimulus: practice_prompt_array[2], feedback: practice_feedback_array[2], outcome: practice_outcome_array[2], progress: progressBar, data: {test_part: 'practice', correct_response: '.'}},  
    {stimulus: practice_prompt_array[3], feedback: practice_feedback_array[3], outcome: practice_outcome_array[3], progress: progressBar, data: {test_part: 'practice', correct_response: '.'}},
    ]


   

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
    prompt: fillUp + feedbackGenerator + timeRemaining + '<input id="tapTap" type="text" style="background-color:black; outline:none; border:none; background:none" onkeypress="">',
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
          document.getElementById("counter").setAttribute("onkeypress", "moveHard()");
        } else if (pressing_time==7000){ 
          // pressing_time= 21000; // for right handed only
          // buttonPressing.trial_duration = pressing_time;
          document.getElementById("counter").setAttribute("onkeypress", "moveEasy()");
        }
    }
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
            } else if (selection==HardKey_uCase){
             outcome.innerHTML = 'You won $ '+practiceHard[practiceIterator];
             practiceIterator++
          }
        } else if (experimentOutcome[practiceIterator] == 'lose') { // elseif block prevents writing bad outcomeLogic i.e. no reward when completed where win was expected
          outcome.innerHTML = 'No money this round';
          practiceIterator++;
        }
        }
      }





    let practice_position = {
      type: 'html-keyboard-response',
      stimulus: '<p style="color:white;">Get your hands in position and press the space bar to start. </p>',
      // button_html: '<button id="startExp" onclick="experimentTimer()" style="outline:none; border:none; background-color:black">START</button>',
      choices: [32],
      // on_load: function(){
      //   document.getElementById('startExp').focus();
      // }
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
      }
    };

    timeline.push(start_task);

    // this is where the real trials begin with sheet 1 variables
  

    let experimentOutcome = ["lose", "lose", "lose", "win", "lose",	"win", "lose", "win", "win", "win", "lose",	"win", "lose", "win", "lose",	"lose",	"win", "lose", "win", "lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"win", 	"lose",	"lose",	"lose",	"win", 	"lose",	"win", 	"win", 	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"win", 	"win", 	"lose",	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"lose",	"win", 	"win", 	"win", 	"lose",	"win", 	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"win", 	"win", 	"win", 	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"lose"];
    
    let hardAmount = [3.04,	1.42,	2.86,	3.22,	1.78,	1.96,	2.68,	1.78,	2.14,	2.50,	3.94,	2.32,	2.14,	1.42,	3.04,	1.24,	3.58,	2.32,	4.12,	4.12,	2.50,	3.94,	3.22,	4.12,	2.68,	3.40,	2.50,	3.76,	1.78,	1.42,	3.04,	3.40,	3.22,	1.24,	3.58,	3.76,	3.76,	2.14,	3.58,	1.60,	2.86,	2.68,	1.24,	1.96,	1.60,	2.86,	2.32,	3.40,	3.94,	1.96,	1.60,	2.59,	3.49,	3.85,	4.21,	4.03,	3.67,	3.67,	4.03,	2.77,	1.51,	1.87,	4.21,	1.33,	1.87,	1.51,	3.13,	3.13,	3.85,	2.59,	4.21,	2.95,	2.05,	2.77,	3.49,	1.87,	2.95,	3.13,	3.67,	1.69,	2.59,	2.41,	1.33,	3.31,	2.23,	2.23,	4.03,	1.33,	2.41,	3.31,	2.23,	3.85, 2.41,	3.31,	2.77,	2.05,	1.69,	3.49,	1.69,	2.95,	2.05,	1.51];
    
    let easyAmount = [1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,];
    
    let experimentProbability = [12,	50,	50,	88,	12,	88,	50,	88,	50,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	50,	12,	12,	88,	88,	50,	88,	50,	50,	12,	50,	88,	50,	88,	12,	12,	88,	88,	50,	88,	12,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	88,	50,	88,	12,	50,	12,	88,	50,	88,	88,	50,	50,	50,	50,	88,	12,	12,	88,	12,	12,	88,	12,	50,	12,	50,	50,	88,	88,	50,	12,	88,	50,	12,	50,	50,	12,	88,	12,	88,	88,	50,	88,	88,	12,	12,	12,	50,	88,	50,	12,];
    
    let experiment_outcome = {
      type: 'html-keyboard-response',
      // stimulus:'<p style="color:white;">completion </p> ',
      choices: jsPsych.NO_KEYS,
      trial_duration: 2000,
      stimulus: jsPsych.timelineVariable('outcome'),  
      data: jsPsych.timelineVariable('data'),  
      on_load: function(){
        let outcome = document.getElementById("outcomeGenerator");
        if (feedbackLogic == 'You completed the task' && experimentOutcome[experimentIterator] == 'win'){  

            if (selection==EasyKey_uCase){
            outcome.innerHTML = 'You won $ '+easyAmount[experimentIterator];
            experimentIterator++
            
            } else if (selection==HardKey_uCase){
             outcome.innerHTML = 'You won $ '+hardAmount[experimentIterator];
             experimentIterator++
            }
        } else if (experimentOutcome[experimentIterator] == 'lose') { // elseif block prevents writing bad outcomeLogic i.e. no reward when completed where win was expected
          outcome.innerHTML = 'No money this round';
          experimentIterator++;
        }
    }
  }

  let begin_experiment = {
    type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Get your hands in position and press any key to start the real trials.  </p> ' ,
      
  }
  let test_prompt_array = []; // change to selection_array
    for (let i = 0; i <= 102; i++){
      test_prompt_array.push('<p style="color:white;">Press the <u><strong>'+EasyKey_uCase+'</strong></u> key. </p> ' +
      '<p style="color:white;">Easy is worth:    </p> ' +
      '<p style="color:white;">$'+ easyAmount[i]+'   </p> ' +
      '<p style="color:white;">Press the <u><strong>'+HardKey_uCase+'</strong></u> key. </p> ' +
      '<p style="color:white;">Hard is worth:    </p> ' +
      '<p style="color:white;">$'+ hardAmount[i]+'    </p> ' +
      '<p style="color:white;"> The probability of winning is ' +experimentProbability[i]+'%.   </p> ' )
    }
   
    let test_feedback_array = [];
        for (let i = 0; i <= 102; i++){
        test_feedback_array.push('<p id="feedbackGenerator" style="color:white;"></p>')
    }
    let test_outcome_array = [];
    for (let i = 0; i <= 102; i++){
      test_outcome_array.push('<p id="outcomeGenerator" style="color:white;"></p>')
    }
   
     
      let test_prompt_stimuli = [
    {stimulus: test_prompt_array[0], feedback: test_feedback_array[0], outcome: test_outcome_array[0], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}}, // added a new property to the object (progress)
    {stimulus: test_prompt_array[1], feedback: test_feedback_array[1], outcome: test_outcome_array[1], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}}, 
    {stimulus: test_prompt_array[2], feedback: test_feedback_array[2], outcome: test_outcome_array[2], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[3], feedback: test_feedback_array[3], outcome: test_outcome_array[3], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[4], feedback: test_feedback_array[4], outcome: test_outcome_array[4], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[5], feedback: test_feedback_array[5], outcome: test_outcome_array[5], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[6], feedback: test_feedback_array[6], outcome: test_outcome_array[6], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[7], feedback: test_feedback_array[7], outcome: test_outcome_array[7], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[8], feedback: test_feedback_array[8], outcome: test_outcome_array[8], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[9], feedback: test_feedback_array[9], outcome: test_outcome_array[9], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[10], feedback: test_feedback_array[10], outcome: test_outcome_array[10], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[11], feedback: test_feedback_array[11], outcome: test_outcome_array[11], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[12], feedback: test_feedback_array[12], outcome: test_outcome_array[12], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[13], feedback: test_feedback_array[13], outcome: test_outcome_array[13], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[14], feedback: test_feedback_array[14], outcome: test_outcome_array[14], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[15], feedback: test_feedback_array[15], outcome: test_outcome_array[15], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[16], feedback: test_feedback_array[16], outcome: test_outcome_array[16], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[17], feedback: test_feedback_array[17], outcome: test_outcome_array[17], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[18], feedback: test_feedback_array[18], outcome: test_outcome_array[18], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[19], feedback: test_feedback_array[19], outcome: test_outcome_array[19], rogress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[20], feedback: test_feedback_array[20], outcome: test_outcome_array[20], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[21], feedback: test_feedback_array[21], outcome: test_outcome_array[21], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[22], feedback: test_feedback_array[22], outcome: test_outcome_array[22], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[23], feedback: test_feedback_array[23], outcome: test_outcome_array[23], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[24], feedback: test_feedback_array[24], outcome: test_outcome_array[24], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[25], feedback: test_feedback_array[25], outcome: test_outcome_array[25], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[26], feedback: test_feedback_array[26], outcome: test_outcome_array[26], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[27], feedback: test_feedback_array[27], outcome: test_outcome_array[27], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[28], feedback: test_feedback_array[28], outcome: test_outcome_array[28], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[29], feedback: test_feedback_array[29], outcome: test_outcome_array[29], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[30], feedback: test_feedback_array[30], outcome: test_outcome_array[30], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[31], feedback: test_feedback_array[31], outcome: test_outcome_array[31], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[32], feedback: test_feedback_array[32], outcome: test_outcome_array[32], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[33], feedback: test_feedback_array[33], outcome: test_outcome_array[33], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[34], feedback: test_feedback_array[34], outcome: test_outcome_array[34], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[35], feedback: test_feedback_array[35], outcome: test_outcome_array[35], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[36], feedback: test_feedback_array[36], outcome: test_outcome_array[36], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[37], feedback: test_feedback_array[37], outcome: test_outcome_array[37], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[38], feedback: test_feedback_array[38], outcome: test_outcome_array[38], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[39], feedback: test_feedback_array[39], outcome: test_outcome_array[39], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[40], feedback: test_feedback_array[40], outcome: test_outcome_array[40], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[41], feedback: test_feedback_array[41], outcome: test_outcome_array[41], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[42], feedback: test_feedback_array[42], outcome: test_outcome_array[42], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[43], feedback: test_feedback_array[43], outcome: test_outcome_array[43], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[44], feedback: test_feedback_array[44], outcome: test_outcome_array[44], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[45], feedback: test_feedback_array[45], outcome: test_outcome_array[45], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[46], feedback: test_feedback_array[46], outcome: test_outcome_array[46], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[47], feedback: test_feedback_array[47], outcome: test_outcome_array[47], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[48], feedback: test_feedback_array[48], outcome: test_outcome_array[48], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[49], feedback: test_feedback_array[49], outcome: test_outcome_array[49], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[50], feedback: test_feedback_array[50], outcome: test_outcome_array[50], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[51], feedback: test_feedback_array[51], outcome: test_outcome_array[51], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[52], feedback: test_feedback_array[52], outcome: test_outcome_array[52], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[53], feedback: test_feedback_array[53], outcome: test_outcome_array[53], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[54], feedback: test_feedback_array[54], outcome: test_outcome_array[54], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[55], feedback: test_feedback_array[55], outcome: test_outcome_array[55], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[56], feedback: test_feedback_array[56], outcome: test_outcome_array[56], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[57], feedback: test_feedback_array[57], outcome: test_outcome_array[57], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[58], feedback: test_feedback_array[58], outcome: test_outcome_array[58], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[59], feedback: test_feedback_array[59], outcome: test_outcome_array[59], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[60], feedback: test_feedback_array[60], outcome: test_outcome_array[60], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[61], feedback: test_feedback_array[61], outcome: test_outcome_array[61], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[62], feedback: test_feedback_array[62], outcome: test_outcome_array[62], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[63], feedback: test_feedback_array[63], outcome: test_outcome_array[63], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[64], feedback: test_feedback_array[64], outcome: test_outcome_array[64], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[65], feedback: test_feedback_array[65], outcome: test_outcome_array[65], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[66], feedback: test_feedback_array[66], outcome: test_outcome_array[66], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[67], feedback: test_feedback_array[67], outcome: test_outcome_array[67], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[68], feedback: test_feedback_array[68], outcome: test_outcome_array[68], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[69], feedback: test_feedback_array[69], outcome: test_outcome_array[69], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[70], feedback: test_feedback_array[70], outcome: test_outcome_array[70], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[71], feedback: test_feedback_array[71], outcome: test_outcome_array[71], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[72], feedback: test_feedback_array[72], outcome: test_outcome_array[72], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[73], feedback: test_feedback_array[73], outcome: test_outcome_array[73], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[74], feedback: test_feedback_array[74], outcome: test_outcome_array[74], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[75], feedback: test_feedback_array[75], outcome: test_outcome_array[75], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[76], feedback: test_feedback_array[76], outcome: test_outcome_array[76], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[77], feedback: test_feedback_array[77], outcome: test_outcome_array[77], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[78], feedback: test_feedback_array[78], outcome: test_outcome_array[78], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[79], feedback: test_feedback_array[79], outcome: test_outcome_array[79], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[80], feedback: test_feedback_array[80], outcome: test_outcome_array[80], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[81], feedback: test_feedback_array[81], outcome: test_outcome_array[81], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[82], feedback: test_feedback_array[82], outcome: test_outcome_array[82], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[83], feedback: test_feedback_array[83], outcome: test_outcome_array[83], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[84], feedback: test_feedback_array[84], outcome: test_outcome_array[84], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[85], feedback: test_feedback_array[85], outcome: test_outcome_array[85], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[86], feedback: test_feedback_array[86], outcome: test_outcome_array[86], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[87], feedback: test_feedback_array[87], outcome: test_outcome_array[87], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[88], feedback: test_feedback_array[88], outcome: test_outcome_array[88], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[89], feedback: test_feedback_array[89], outcome: test_outcome_array[89], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[90], feedback: test_feedback_array[90], outcome: test_outcome_array[90], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[91], feedback: test_feedback_array[91], outcome: test_outcome_array[91], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[92], feedback: test_feedback_array[92], outcome: test_outcome_array[92], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[93], feedback: test_feedback_array[93], outcome: test_outcome_array[93], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[94], feedback: test_feedback_array[94], outcome: test_outcome_array[94], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[95], feedback: test_feedback_array[95], outcome: test_outcome_array[95], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[96], feedback: test_feedback_array[96], outcome: test_outcome_array[96], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[97], feedback: test_feedback_array[97], outcome: test_outcome_array[97], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[98], feedback: test_feedback_array[98], outcome: test_outcome_array[98], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[99], feedback: test_feedback_array[99], outcome: test_outcome_array[99], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[100], feedback: test_feedback_array[100], outcome:test_outcome_array[100], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[101], feedback: test_feedback_array[101], outcome: test_outcome_array[101], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[102], feedback: test_feedback_array[102], outcome: test_outcome_array[102], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    ]


let test_procedure = {
      timeline: [fixation, trial, ready, load, buttonPressing, feedback, experiment_outcome],
      timeline_variables: test_prompt_stimuli,
      randomize_order: false
    }
    timeline.push(test_procedure);


   let debrief_block = {
      type: "html-keyboard-response",
      stimulus: function(){

        let trials = jsPsych.data.get().filter({test_part: 'practice'});
        let correct_trials = trials.filter({correct: true});
        let accuracy = Math.round(correct_trials.count() / trials.count() * 100);
        let rt = Math.round(correct_trials.select('rt').mean());

        return "<p style='color:white;'> You responded correctly on "+accuracy+"% of the trials. </p>"+
        "<p style='color:white;'>Your average response time was "+rt+"ms.</p>"+
        "<p style='color:white;'>Press any key to complete the experiment. Thank you!</p>";
      }
    }; 

    //  timeline.push(debrief_block); 

    // COMPLETION MESSAGE: Completed Classification Phase
    // let link = "https://survey.az1.qualtrics.com/SE/?SID=SV_9uARDX1aXEXq1pP&Q_JFE=0&workerId="
    // let instructions_16 = {
    //   type: "html-keyboard-response",
    //   stimulus: '<p style="color:white;">You have now completed the task! Saving data...PLEASE DO NOT CLOSE THIS BROWSER until you complete the second part.</p> ' +
    //       '<p style="color:white;">BEFORE THE LINK DISAPPEARS please move on to the second part of the task at this link to obtain your completion code:</p> ' +
    //       "<a href=" + link + ' target="_blank">' + link + "</a>",
    //   choices: jsPsych.NO_KEYS,
    //   trial_duration: 40000
    // };
    // timeline.push(instructions_16);



    /* END PHASE II OF TASK: CLASSIFICATION and ANTICIPATION PHASE */

function saveData(name, data){
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'index.php'); // 'write_data.php' is the path to the php file described above.
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({filename: name, filedata: data}));
}

//let this_seed = new Date().getTime();
    //Math.seedrandom(this_seed);

    //let randNum = Math.random() * 1000
    //let randNumRounded = Math.floor(randNum+1)
    function getParamFromURL(name)
    {
      name = name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
      let regexS = "[\?&]"+name+"=([^&#]*)";
      let regex = new RegExp( regexS );
      let results = regex.exec( window.location.href );
      if( results == null )
        return "";
      else
        return results[1];
    }
    let workerID = prompt( 'subjectId' );

    /* start the experiment */
    function startExperiment(){
      jsPsych.init({
        timeline: timeline,
        show_progress_bar: true,
        on_finish: function(){ saveData("eEfRT_" + workerID, jsPsych.data.get().csv()); }
        //on_finish: function(){
          //jsPsych.data.get().filter([{test_part: 'test'},{test_part: 'prediction'},{test_part: 'c2_test'}]).localSave("csv", `test-self-deception-data.csv`);
            //jsPsych.data.displayData(); 
        //}
      });
    }