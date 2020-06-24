<?php
$post_data = json_decode(file_get_contents('php://input'), true); 
// the directory "data" must be writable by the server
$name = "data/".$post_data['filename'].".csv"; 
$data = $post_data['filedata'];
// write the file to disk
file_put_contents($name, $data);
?>


<!DOCTYPE html>
<html>
  <head>
    <title>EEfRT Task</title>
    <script src="js/playTime.js"></script>
    <script src="js/timer.js"></script> <!-- importing our timer function from timer.js file -->
    <script src="js/progressBars.js"></script> 
    <script src="js/handedness.js"></script>
    <script src="jsPsych/jspsych.js"></script>
    <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script src="jsPsych/plugins/jspsych-html-button-response.js"></script>
    <script src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> <!-- styling for w3c progress bars -->
  </head>
  <body  
  style="background-color:black;">  
  
  <div class="loading centeredDiv">
    <h1 class="loading">Loading...</h1>
  </div>
  <div id="consentHolder" class="consent centeredDiv">
  <h3 id="consentPreamble" class="consent" style="color:white;">In order for us to conduct this test online, we need to include the standard consent form below. <br /> <br /> </h3>
  <div id="consentForm" class="consent consent-box"> 
    <h2 id="consentHeading" class="consent">
      CONSENT FOR PARTICIPATION IN A RESERCH PROJECT 200 FR. 1 (2016-2)
      <br>
      YALE UNIVERSITY SCHOOL OF MEDICINE CONNECTICUT MENTAL HEALTH CENTER
    </h2> 

    <h2>
      
    </h2>
    <p id="consentInstructions" class="consent">
      <b>Study Title:</b> Computerized Assessment of Psychosis Risk
      <br><br>
      <b>Principal Investigator:</b> Gregory P. Strauss, PhD
      <br><br>
      <b>Funding Source:</b> department funds
      <br><br>
      <u><b>Invitation to Participate and Description of Project</b></u>
      <br>
      You are invited to participate in a research study that concerns psychological processes related to beliefs, perceptions, decisions, and personality traits. Due to the nature of psychology experiments, we cannot explain the precise purpose of the experiment until after the session is over. Afterwards, the experimenter will be happy to answer any questions you might have about the purpose of the study.
      <br><br>
      <u><b>Description of Procedures</b></u>
      <br>
      If you agree to participate in this study, this Human Intelligence Task (HIT) will require you to (1) play a computer game using the computer mouse or keys on your keyboard and (2) answer simple questions about your demographics, health (including mental health), beliefs, and personality through an interactive web survey. You will never be asked for personally identifiable information such as your name, address, or date of birth. 
      <br>
      The experiment is designed to take approximately 1 hour. You will have up to six hours to complete the experiment and submit codes for credit. 
      <br><br>
      <u><b>Risks and Inconveniences</b></u>
      <br>
      There are little to no risks associated with this study. Some individuals may experience mild boredom. 
      <br><br>
      <u><b>Economic Considerations</b></u>
      <br>
      You will receive the reward specified on the Mechanical-Turk HIT for completing both the game and the questionnaire. Payment for completion of the HIT is $6.00 with up to a $2.00 bonus based on task performance and a further $40 bonus to individuals who score in the top 1%. Upon finishing the game and submitting the questionnaire, you will receive code numbers. Please record these two code numbers and submit them for payment. 
      <br><br>
      <u><b>Confidentiality</b></u>
      <br>
      We will never ask for your name, birth date, email or any other identifying piece of information. Your data will be pooled with those of others, and your responses will be completely anonymous. We will keep this data indefinitely for possible use in scientific publications and presentations. 
      <br>
      The researcher will not know your name, and no identifying information will be connected to your survey answers in any way. The survey is therefore anonymous. However, your account is associated with an mTurk number that the researcher has to be able to see in order to pay you, and in some cases these numbers are associated with public profiles which could, in theory, be searched. For this reason, though the researcher will not be looking at anyone’s public profiles, the fact of your participation in the research (as opposed to your actual survey responses) is technically considered “confidential” rather than truly anonymous.
      <br><br>
      <u><b>Voluntary Participation</b></u>
      <br>
      Your participation in this study is completely voluntary. You are free to decline to participate or to end participation at any time by simply closing your browser window. However, please note that you must submit both the computer game and questionnaire in order to receive payment. You may decline answering any question by selecting the designated alternative response (e.g., “I do not wish to answer”). Declining questions will not affect payment.
      <br><br>
      <u><b>Questions or Concerns</b></u>
      <br>
      If you have any questions or concerns regarding the experiment, you may contact us here at the lab by emailing BLAMLabRequester@gmail.com If you have general questions about your rights as a research participant, you may contact the Yale University Human Investigation Committee at 203-785-4688 or human.subjects@yale.edu (HSC# 2000026290).

    </p>
  </div>


</div>
<div id="attritionHolder" class="attrition centeredDiv"> 
  <p id="attritionInstructions" class="attrition"></p>
  <input required type="text" id="attritionAns" class="attrition" size="60" style="width:inherit; height:17px; font-size:15px; margin: 0 auto;" />
</div>
<div id="errorMessageHolder" class="error centeredDiv">
  <p id="mobileBrowserErrorMessage">You cannot access this test from a mobile browser. Please use a desktop computer to complete the task.</p>
  <p id="workerIDErrorMessage">You are ineligible for this task, since your worker ID has been recorded as participating in this task already. 
    Please return the HIT.</p>
</div>



  <div id="nextButtonHolder" class="buttonHolder">
  <button id="nextButton" onclick="startExperiment()">CONSENT/NEXT</button>
</div>
</body>
  
  <script>
   

    /* create timeline */
    var timeline = [];

    // hard code playtime to 20 minutes
    const MinutesToPlay = 20;

    // MinutesToPlay is the user's length of time on the experiment
    // let MinutesToPlay = parseInt(prompt("Enter time in minutes to play the game: "));



    // Ask participant handedness
    let handedness =prompt("Are you right or left handed?");
    
    // const handedness=right;
    let antihandedness;
    let EasyKey_uCase; 
    let HardKey_uCase;

    // declare variable for the time to press
    let pressing_time;
  
    // run script to ask participant how much time they would like to play for
    playTime();

    /* define welcome message trial */
    var welcome = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Welcome to the experiment! Press any key to begin.</p>',
      on_load: checkHandedness(),
    };

    timeline.push(welcome);

    /* define instructions trial */
    var instructions_1 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">You are going to play the lever-press game. </p>' +
        '<p style="color:white;">The game will consist of a series of individual trials. </p>' +
        '<p style="color:white;">The length of time required to complete each trial will depend upon decisions you make during that trial.  </p>'+
        '<p style="color:white;">You will play the game for exactly <strong>'+ MinutesToPlay + '</strong> minutes, after which you will be asked to stop.  </p>'+
        '<p style="color:white;"> Even if you choose to go through trials quickly, you will still play for the same total amount of time.  </p>'+
        '<p style="color:white;"> Press the space bar to continue.</p>',
      choices: [' '],
    };

    var instructions_2 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">For each trial, you will have an opportunity to win some money.</p> ' +
          '<p style="color:white;">In order to be eligible to win money on a given trial, you must first complete a task.</p> ' + 
          '<p style="color:white;">The task involves making repeated button presses within a certain amount of time. </p>' +
          '<p style="color:white;">For each trial you can choose to complete an Easy task, or a Hard task. </p> '+
          '<p style="color:white;">Press the space bar to continue.</p>',
      choices: [32],
      post_trial_gap: 2000
    };

    var instructions_3 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">If you choose the Easy task, you will need to press the <u><strong>'+EasyKey_uCase+'</strong></u> key with your <u><strong>'+handedness.toUpperCase()+'</strong></u> index finger approximately 30 times within 7 seconds. </p> ' +
      '<p style="color:white;">You are eligible to win $1.00 for each time you complete the Easy task. </p> ' + 
      '<p style="color:white;">Press the space bar to continue. </p>' ,
      choices: [32],
      post_trial_gap: 2000,
    };
    
    var instructions_4 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">If you choose the Hard task, you will need to press the <u><strong>'+HardKey_uCase+'</strong></u> key with the pinky finger of your <u><strong>'+antihandedness+'</strong></u> hand approximately 100 times within 21 seconds.  </p> ' +
      '<p style="color:white;">For each trial, the amount that you are eligible to win if you complete the Hard task will change.  </p> ' + 
      '<p style="color:white;">The amount that the Hard task is worth on a given trial will be presented to you at the beginning of that trial.  </p>' +
      '<p style="color:white;">Hard trials range from $1.20 to around $4.00. </p>' + 
      '<p style="color:white;">Press the space bar to continue. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    var instructions_5 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Completing the Easy or Hard task makes you eligible to receive money on that trial, but completion alone does NOT guarantee that you will win money.  </p> ' +
      '<p style="color:white;">Press the space bar to continue.  </p> ' , 
     
      choices: [32],
      post_trial_gap: 2000,
    };

    var instructions_6 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Some trials are less likely to give you money than others. </p> ' +
      '<p style="color:white;">To help you decide which trials are more likely to give you money, you will be told the probability that you WILL receive money IF you complete the task at the beginning of each trial.   </p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    var instructions_7 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Some trials you will have an 88% receiving money if you complete the task.  </p> ' +
      '<p style="color:white;">Some trials you will have a 50% chance receiving money if you complete the task.   </p> ' +
      '<p style="color:white;">Some trials you will have a 12% chance of receiving money if you complete the task.   </p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    var instructions_8 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">At the beginning of each trial, you will have a choice between the Hard task and the Easy task.   </p> ' +
      '<p style="color:white;">The amount you are eligible to win on the Hard task, and the probability of winning will be presented at the beginning of each trial.   </p> ' +
      '<p style="color:white;">To choose the Hard task, press the <u><strong>'+HardKey_uCase+'</strong></u> key.  </p> ' +
      '<p style="color:white;">To choose the Easy task, press the <u><strong>'+EasyKey_uCase+'</strong></u> key.  </p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    var instructions_9 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">We cannot pay you based on every choice you make.  </p> ' +
      '<p style="color:white;">However, at the end of the experiment, we will randomly select 4 trials (2 from each session) and add them to your payment.    </p> ' +
      '<p style="color:white;">You won’t know which trials get added to your payment.   </p> ' +
      '<p style="color:white;">Therefore, while the decisions you make on only four trials WILL count, any trial COULD count.  </p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    var instructions_10 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Also keep in mind that you only have <strong>'+ MinutesToPlay + '</strong> minutes to get through the game, and the Hard task takes about twice as long as the Easy task.   </p> ' +
      '<p style="color:white;">If you choose all Easy tasks, you will probably get through approximately 40 trials, if you choose all Hard tasks, you will probably get through around 20 trials, so choose your Hard tasks carefully!    </p> ' +
      '<p style="color:white;">Now you are ready to play the game.    </p> ' +
      '<p style="color:white;">You will begin with a set of 4 practice trials.    </p> ' +
      '<p style="color:white;">Press the space bar to start. </p>',
      choices: [32],
      post_trial_gap: 2000,
    };

    var instructions_11 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Get your hands in position and press any key to start the practice trials. </p> ' ,
      choices: [32],
      post_trial_gap: 2000,
    };

    var instructions_procedure = {
      timeline: [instructions_1, instructions_2, instructions_3, instructions_4, instructions_5, instructions_6, instructions_7, instructions_8, instructions_9, instructions_10, instructions_11],
      // timeline_variables: practice_prompt_stimuli,
      // randomize_order: false
    }

    // timeline.push(instructions_procedure);

    /* START TRAINING TRIAL FOR PARTICIPANTS */
// delayed discounting task: three variables: 1st= money now, 2nd= money later, 3rd= money days later
// display the variables on the screen to the participant (write a for loop to iterate through)
    //  variables for practice condition
    let practiceHard = [1.78,2.68,3.58,4.12];
    let practiceEasy = [1,1,1,1];
    let practiceProbability = [50,12,50,88];
  // this is where I put the text for the page
  // we create a new array and we use a for loop to add 4 practice items to the array. at the same time we are also looping through the variables that we assigned from 281-283.
    var practice_prompt_array = [];
    for (var i = 0; i <= 3; i++){
      practice_prompt_array.push('<p style="color:white;">Press the <u><strong>'+EasyKey_uCase+'</strong></u> key. </p> ' +
      '<p style="color:white;">Easy is worth:    </p> ' +
      '<p style="color:white;">$'+practiceEasy[i]+'   </p> ' +
      '<p style="color:white;">Press the <u><strong>'+HardKey_uCase+'</strong></u> key. </p> ' +
      '<p style="color:white;">Hard is worth:    </p> ' +
      '<p style="color:white;">$'+practiceHard[i]+'    </p> ' +
      '<p style="color:white;"> The probability of winning is ' +practiceProbability[i]+'%.   </p> ' ,)
      
      
    }
  
    // '<p style="color:white;">Ready?    </p> ' +
    //   '<p style="color:white;">Push the <u><strong>'+EasyKey_uCase+'</strong></u> key until the bar fills up.   </p>');
    let timeRemaining = '<p id="timeRemaining" style="text-align:center; color:white; font-size:30px"></p>'

     // let progressBar= '<div class="w3-container"><div class="w3-light-grey"><div class="w3-grey" style="height:24px; width:50%;"></div></div></div></div></div>'
     let progressBar = '<div id="counter" class="w3-container"><h2>Progress Bar Width</h2><p>Change the width of the progress bar with the width property:</p><div class="w3-light-grey"><div class="w3-grey" id="keyBar" style="height:24px;width:0%"></div></div><br><div>';

// this is where I call each item from the array above
    var practice_prompt_stimuli = [
    {stimulus: practice_prompt_array[0], progress: progressBar, data: {test_part: 'practice', correct_response: ','}},
    {stimulus: practice_prompt_array[1], progress: progressBar, data: {test_part: 'practice', correct_response: ','}},  
    {stimulus: practice_prompt_array[2], progress: progressBar, data: {test_part: 'practice', correct_response: '.'}},  
    {stimulus: practice_prompt_array[3], progress: progressBar, data: {test_part: 'practice', correct_response: '.'}},
    ]
    
    // var practice_prompt_array = [];
    // for (var i = 1; i <= 4; i++){
    //   practice_prompt_array.push('<p style="color:white;">Press the <u><strong>'+EasyKey_uCase+'</strong></u> key. </p> ' +
    //   '<p style="color:white;">Easy is worth:    </p> ' +
    //   '<p style="color:white;"> $1.    </p> ' +
    //   '<p style="color:white;">Ready?    </p> ' +
    //   '<p style="color:white;">Push the <u><strong>'+EasyKey_uCase+'</strong></u> key until the bar fills up.   </p>');
      
    // }
   
    var practice_position = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Get your hands in position and press the space bar to start. </p>',
      choices: [32],
      // post_trial_gap: 2000,
    };
   
    // var practice_fixation = {
    //   type: "html-keyboard-response",
    //   stimulus: '<p style="color:white;">+</p>' ,
    //   // choices: [32],
    //   post_trial_gap: 2000,
    // };

    var end_of_trial = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">You completed the task.   </p> ' +
      '<p style="color:white;">No money this round    </p> ' +
      '<p style="color:white;">Now you are ready to play the game.    </p> ' +
      '<p style="color:white;">You did not complete the task.   </p> ' +
      '<p style="color:white;">Get your hands in position and press the space bar to start. </p>',
      
      choices: [32],
      post_trial_gap: 2000,
    
    };
    var fixation = {
      type: 'html-keyboard-response',
      stimulus: '<div style="color:white; font-size:60px;">+</div>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
    }

    var selection = {
      type: 'html-keyboard-response',
      choices: jsPsych.NO_KEYS,
      trial_duration: 2000,
      stimulus:jsPsych.timelineVariable('stimulus'),
    }    

    var completion = {
      type: 'html-keyboard-response',
      stimulus:'<p style="color:white;">completion </p> ',
      choices: jsPsych.NO_KEYS,
      trial_duration: 2000,
    }

    var feedback = {
      type: 'html-keyboard-response',
      stimulus:'<p style="color:white;"> feedback </p> ',
      choices: jsPsych.NO_KEYS,
      trial_duration: 2000, 
    }


    var trial_prompt = {
      type: "html-keyboard-response",
      stimulus: jsPsych.timelineVariable('stimulus'), //train_stimuli_array, //jsPsych.timelineVariable('stimulus'),
      choices: [EasyKey_uCase.toUpperCase(), HardKey_uCase.toUpperCase()],
      data: jsPsych.timelineVariable('data'),
      on_finish: function(data){
        selection = String(jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press))
        selection = selection.toUpperCase()
        console.log(selection)
        // if (selection='l')
        //   pressing_time= 7000;
        //   document.getElementById("ready").setAttribute("onclick", "countdownEasy(1)");
        // } else { 
        //   document.getElementById("ready").setAttribute("onclick", "countdownHard(1)");
        //   pressing_time= 21000; // for right handed only
        // }
        

        //data.c1 = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        
      }
    }
    var ready = {
      type: 'html-keyboard-response',
      prompt: '<p id="timeRemaining" style="color:white;" id="counter">timer placeholder</p>',
      stimulus:'<p style="color:white;">Ready?</p>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
  }
    
    var load = {
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

    var buttonPressing = {
    type: "html-keyboard-response",
    // prompt: '<p style="color:white;" id="counter"> </p>' +'<input type="text" onkeypress="move()">'+'<p style="color:white;" id="counter"> </p>',
    prompt: timeRemaining + '<input id="tapTap" type="text" style="background-color:black; outline:none; border:none; background:none" onkeypress="">',
    // stimulus: , //this gets filled in with the countdown
    choices: [selection],
    response_ends_trial: false,
    trial_duration: pressing_time,
    data: jsPsych.timelineVariable('data'),
    stimulus: jsPsych.timelineVariable('progress'),    
    on_load:function buttonPress(){
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
  

    timeline.push(practice_position);


  
// this is where the procedure loops over the timeline property below. the timeline variables are the stimuli.
    
    var practice_procedure = {
      timeline: [fixation, trial_prompt, ready, load, buttonPressing, completion, feedback],
      timeline_variables: practice_prompt_stimuli,
      randomize_order: false
    }
    timeline.push(practice_procedure);

    // var test_procedure = {
    //   timeline: [fixation, trial_prompt, ready, buttonPressingHard, completion, feedback],
    //   timeline_variables: test_prompt_stimuli,
    //   randomize_order: false
    // }

    var end_of_trial = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">You completed the task.   </p> ' +
      '<p style="color:white;">No money this round    </p> ' +
      '<p style="color:white;">Now you are ready to play the game.    </p> ' +
      '<p style="color:white;">You did not complete the task.   </p> ' +
      '<p style="color:white;">Get your hands in position and press the space bar to start. </p>',
      
      choices: [32],
      post_trial_gap: 2000,
    
    };
    // timeline.push(end_of_trial)

    /* END TRAINING TRIAL FOR PARTICIPANTS */


    var start_task = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">That was the practice. The experiment starts now!</p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',
      choices: [32],
      post_trial_gap: 5000,
    };

    timeline.push(start_task);

    // this is where the real trials begin with sheet 1 variables
  

    let procedure = ["Lose",	"Lose",	"Lose",	"Win", 	"Lose",	"Win", 	"Lose",	"Win", 	"Win", 	"Win", 	"Lose",	"Win", 	"Lose",	"Win", 	"Lose",	"Lose",	"Win", 	"Lose",	"Win", 	"Lose",	"Win", 	"Lose",	"Lose",	"Win", 	"Win", 	"Lose",	"Win", 	"Lose",	"Win", 	"Lose",	"Lose",	"Win", 	"Lose",	"Win", 	"Lose",	"Lose",	"Win", 	"Win", 	"Win", 	"Lose",	"Lose",	"Lose",	"Win", 	"Lose",	"Win", 	"Win", 	"Win", 	"Lose",	"Win", 	"Lose",	"Win", 	"Lose",	"Lose",	"Lose",	"Win", 	"Lose",	"Win", 	"Lose",	"Win", 	"Lose",	"Win", 	"Lose",	"Lose",	"Win", 	"Win", 	"Win", 	"Win", 	"Lose",	"Lose",	"Win", 	"Lose",	"Lose",	"Win", 	"Lose",	"Lose",	"Win", 	"Win", 	"Lose",	"Win", 	"Win", 	"Win", 	"Lose",	"Win", 	"Win", 	"Lose",	"Win", 	"Lose",	"Lose",	"Win", 	"Lose",	"Win", 	"Win", 	"Win", 	"Win", 	"Win", 	"Lose",	"Lose",	"Win", 	"Lose",	"Win", 	"Lose",	"Lose"];
    
    let hardAmount = [3.04,	1.42,	2.86,	3.22,	1.78,	1.96,	2.68,	1.78,	2.14,	2.50,	3.94,	2.32,	2.14,	1.42,	3.04,	1.24,	3.58,	2.32,	4.12,	4.12,	2.50,	3.94,	3.22,	4.12,	2.68,	3.40,	2.50,	3.76,	1.78,	1.42,	3.04,	3.40,	3.22,	1.24,	3.58,	3.76,	3.76,	2.14,	3.58,	1.60,	2.86,	2.68,	1.24,	1.96,	1.60,	2.86,	2.32,	3.40,	3.94,	1.96,	1.60,	2.59,	3.49,	3.85,	4.21,	4.03,	3.67,	3.67,	4.03,	2.77,	1.51,	1.87,	4.21,	1.33,	1.87,	1.51,	3.13,	3.13,	3.85,	2.59,	4.21,	2.95,	2.05,	2.77,	3.49,	1.87,	2.95,	3.13,	3.67,	1.69,	2.59,	2.41,	1.33,	3.31,	2.23,	2.23,	4.03,	1.33,	2.41,	3.31,	2.23,	3.85, 2.41,	3.31,	2.77,	2.05,	1.69,	3.49,	1.69,	2.95,	2.05,	1.51];
    
    let easyAmount = [1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,];
    
    let testProbability = [12,	50,	50,	88,	12,	88,	50,	88,	50,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	50,	12,	12,	88,	88,	50,	88,	50,	50,	12,	50,	88,	50,	88,	12,	12,	88,	88,	50,	88,	12,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	88,	50,	88,	12,	50,	12,	88,	50,	88,	88,	50,	50,	50,	50,	88,	12,	12,	88,	12,	12,	88,	12,	50,	12,	50,	50,	88,	88,	50,	12,	88,	50,	12,	50,	50,	12,	88,	12,	88,	88,	50,	88,	88,	12,	12,	12,	50,	88,	50,	12,];

  var begin_experiment = {
    type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Get your hands in position and press any key to start the real trials.  </p> ' ,
      
  }
  var test_prompt_array = []; // change to selection_array
    for (var i = 0; i <= 102; i++){
      test_prompt_array.push('<p style="color:white;">Press the <u><strong>'+EasyKey_uCase+'</strong></u> key. </p> ' +
      '<p style="color:white;">Easy is worth:    </p> ' +
      '<p style="color:white;">$'+ easyAmount[i]+'   </p> ' +
      '<p style="color:white;">Hard is worth:    </p> ' +
      '<p style="color:white;">$'+ hardAmount[i]+'    </p> ' +
      '<p style="color:white;"> The probability of winning is ' +testProbability[i]+'%.   </p> ' )
      
      
    }
   
    let buttonPressingEasy_array = [];
    for (var i = 0; i <= 102; i++){
      buttonPressingEasy_array.push( '<p style="color:white;">Press the <u><strong>'+EasyKey_uCase+'</strong></u> key until the bar fills up.   </p>');
    }

    let buttonPressingHard_array = [];
      for (var i = 0; i <= 102; i++){
        buttonPressingHard_array.push ('<p style="color:white;">Press the <u><strong>'+HardKey_uCase+'</strong></u> key until the bar fills up.   </p>');
      }
    
     
      
      var test_prompt_stimuli = [
    {stimulus: test_prompt_array[0], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}}, // added a new property to the object (progress)
    {stimulus: test_prompt_array[1], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}}, 
    {stimulus: test_prompt_array[2], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[3], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[4], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[5], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[6], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[8], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[9], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[10], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[11], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[12], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[14], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[15], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[16], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[17], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[18], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[19], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[20], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[21], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[22], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[23], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[24], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[25], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[26], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[27], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[28], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[29], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[30], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[31], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[32], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[33], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[34], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[35], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[36], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[37], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[38], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[39], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[40], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[41], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[42], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[43], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[44], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[45], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[46], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[47], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[48], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[49], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[50], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[51], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[52], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[53], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[54], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[55], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[56], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[57], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[58], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[59], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[60], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[61], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[62], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[63], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[64], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[65], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[66], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[67], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[68], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[69], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[70], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[71], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[72], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[73], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[74], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[75], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[76], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[77], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[78], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[79], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[80], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[81], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[82], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[83], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[84], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[85], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[86], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[87], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[88], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[89], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[90], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[91], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[92], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[93], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[94], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[95], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[96], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[97], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[98], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    {stimulus: test_prompt_array[99], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},  
    {stimulus: test_prompt_array[100], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},  
    {stimulus: test_prompt_array[101], progress: progressBar, data: {test_part: 'experiment', correct_response: '.'}},
    {stimulus: test_prompt_array[102], progress: progressBar, data: {test_part: 'experiment', correct_response: ','}},
    ]



  
  //   var buttonPressingHard = {
  //   type: "html-keyboard-response",
  //   // prompt: '<p style="color:white;" id="counter"> </p>' +'<input type="text" onkeypress="move()">'+'<p style="color:white;" id="counter"> </p>',
  //   prompt: '<input type="text" onkeypress="moveHard()">'+'<p style="color:white;" id="counter"> </p>',
  //   // prompt: '<p id="counter" style="text-align:center; color:white; font-size:30px"></p>', //this gets filled in with the countdown
  //   choices: [HardKey_uCase.toLowerCase()],
  //   response_ends_trial: false,
  //   trial_duration: 21000,
  //   data: jsPsych.timelineVariable('data'),
  //   stimulus: jsPsych.timelineVariable('progress'),    
  //   // on_start: hardTimer(),
  //   // on_start: move(),
  //   // on_start: countdownHard(0),
   
  // }
  // var buttonPressingEasy= {
  //   type: "html-keyboard-response",
  //   // prompt: '<p style="color:white;" id="countdown"> </p>',
  //   prompt: '<input type="text" onkeypress="moveEasy()">'+'<p style="color:white;" id="counter"> </p>',
  //   choices: [EasyKey_uCase.toLowerCase()],
  //   response_ends_trial: false,
  //   trial_duration: 7000,
  //   data: jsPsych.timelineVariable('data'),
  //   stimulus: jsPsych.timelineVariable('progress'), 
  //   // on_start: countdownEasy(0),
  // }

var test_procedure = {
      timeline: [fixation, selection, ready, load, buttonPressing, completion, feedback],
      timeline_variables: test_prompt_stimuli,
      randomize_order: false
    }

    timeline.push(test_procedure);

/*   var debrief_block = {
      type: "html-keyboard-response",
      stimulus: function(){

        var trials = jsPsych.data.get().filter({test_part: 'test'});
        var correct_trials = trials.filter({correct: true});
        var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
        var rt = Math.round(correct_trials.select('rt').mean());

        return "<p style='color:white;'> You responded correctly on "+accuracy+"% of the trials. </p>"+
        "<p style='color:white;'>Your average response time was "+rt+"ms.</p>"+
        "<p style='color:white;'>Press any key to complete the experiment. Thank you!</p>";
      }
    }; 

     timeline.push(debrief_block); */

    // COMPLETION MESSAGE: Completed Classification Phase
    var link = "https://survey.az1.qualtrics.com/SE/?SID=SV_9uARDX1aXEXq1pP&Q_JFE=0&workerId="
    var instructions_16 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">You have now completed the task! Saving data...PLEASE DO NOT CLOSE THIS BROWSER until you complete the second part.</p> ' +
          '<p style="color:white;">BEFORE THE LINK DISAPPEARS please move on to the second part of the task at this link to obtain your completion code:</p> ' +
          "<a href=" + link + ' target="_blank">' + link + "</a>",
      choices: jsPsych.NO_KEYS,
      trial_duration: 40000
    };
    timeline.push(instructions_16);



    /* END PHASE II OF TASK: CLASSIFICATION and ANTICIPATION PHASE */

function saveData(name, data){
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'index.php'); // 'write_data.php' is the path to the php file described above.
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({filename: name, filedata: data}));
}

//var this_seed = new Date().getTime();
    //Math.seedrandom(this_seed);

    //var randNum = Math.random() * 1000
    //var randNumRounded = Math.floor(randNum+1)
    function getParamFromURL(name)
    {
      name = name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
      var regexS = "[\?&]"+name+"=([^&#]*)";
      var regex = new RegExp( regexS );
      var results = regex.exec( window.location.href );
      if( results == null )
        return "";
      else
        return results[1];
    }
    var workerID = getParamFromURL( 'workerId' );

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
  </script>

<footer> 

   

<script type="text/javascript" src="//code.jquery.com/jquery-git.js"></script>


<script>
// show page when loaded 
window.onload = function() {
  $(".loading").css({display: "none"});
  $(".consent").css({display: "block"});
  $(".buttonHolder").css({display: "block"});
  
};

$("input").on("input", function () {
    var $this = $(this);
    if ($this.val().length >= parseInt($this.attr("maxlength"), 10)) {
        var nextEmpty = $this.nextAll("input[value=''], input:not([value])")[0];
        if (nextEmpty) {
            nextEmpty.focus();
        }
    }
});
</script>
</footer>
  </html>
