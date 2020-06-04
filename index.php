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
    <!-- <script src="js/handedness.js"></script> import handedness function  -->
    <script src="jsPsych/jspsych.js"></script>
    <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body  style="background-color:black;">  
  
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
    // MinutesToPlay is the user's length of time on the experiment
    let MinutesToPlay = parseInt(prompt("Enter time in minutes to play the game: "));

    // Ask participant handedness
    let handedness =prompt("Are you right or left handed?");
    
    //const handedness=right;
    let antihandedness;
    let EasyKey_uCase; 
    let HardKey_uCase;
    if (MinutesToPlay == 20) {
      alert("Great! You will play the experiment for "+MinutesToPlay +" minutes.")
    } else {
      alert("You did not enter a number, please refresh the browser and try again.");
    }
    function checkHandedness (){
        if (handedness.toUpperCase() == 'RIGHT'){
             EasyKey_uCase= 'L';  // 108
             HardKey_uCase= 'S';  // 115
             antihandedness= 'LEFT';
        } else if (handedness.toUpperCase() == 'LEFT') {
             EasyKey_uCase= 'S';  // 115
             HardKey_uCase= 'L';  // 108
             antihandedness= 'RIGHT';
        } 
     };
    
// let MinutesToPlay = 20;
    /* define welcome message trial */
    var welcome = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Welcome to the experiment! Press any key to begin.</p>',
      on_load:  checkHandedness (),
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
    timeline.push(instructions_1);

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
    timeline.push(instructions_2);

    var instructions_3 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">If you choose the Easy task, you will need to press the <u><strong>'+EasyKey_uCase+'</strong></u> key with your <u><strong>'+handedness.toUpperCase()+'</strong></u> index finger approximately 30 times within 7 seconds. </p> ' +
      '<p style="color:white;">You are eligible to win $1.00 for each time you complete the Easy task. </p> ' + 
      '<p style="color:white;">Press the space bar to continue. </p>' ,
      choices: [32],
      post_trial_gap: 2000,
      
    };

    timeline.push(instructions_3);
    
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
    timeline.push(instructions_4);

    var instructions_5 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Completing the Easy or Hard task makes you eligible to receive money on that trial, but completion alone does NOT guarantee that you will win money.  </p> ' +
      '<p style="color:white;">Press the space bar to continue.  </p> ' , 
     
      choices: [32],
      post_trial_gap: 2000,
    };
    timeline.push(instructions_5);

    var instructions_6 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Some trials are less likely to give you money than others. </p> ' +
      '<p style="color:white;">To help you decide which trials are more likely to give you money, you will be told the probability that you WILL receive money IF you complete the task at the beginning of each trial.   </p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',

      choices: [32],
      post_trial_gap: 2000,
    };
    timeline.push(instructions_6);

    var instructions_7 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Some trials you will have an 88% receiving money if you complete the task.  </p> ' +
      '<p style="color:white;">Some trials you will have a 50% chance receiving money if you complete the task.   </p> ' +
      '<p style="color:white;">Some trials you will have a 12% chance of receiving money if you complete the task.   </p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',
      
      choices: [32],
      post_trial_gap: 2000,
    };
    timeline.push(instructions_7);

    var instructions_8 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">At the beginning of each trial, you will have a choice between the Hard task and the Easy task.   </p> ' +
      '<p style="color:white;">The amount you are eligible to win on the Hard task, and the probability of winning will be presented at the beginning of each trial.   </p> ' +
      '<p style="color:white;">To choose the Hard task, press <u><strong>'+HardKey_uCase+'</strong></u> key.  </p> ' +
      '<p style="color:white;">To choose the Easy task, press the '+EasyKey_uCase+'</strong></u> key.  </p> ' +
      '<p style="color:white;">Press the space bar to continue. </p>',
      
      choices: [32],
      post_trial_gap: 2000,
    };
    timeline.push(instructions_8);

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
    timeline.push(instructions_9);

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
    timeline.push(instructions_10);

    var instructions_11 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Get your hands in position and press any key to start the practice trials. </p> ' ,
      
      choices: [32],
      post_trial_gap: 2000,
    };
    timeline.push(instructions_11);






    /* START TRAINING TRIAL FOR PARTICIPANTS */
// delayed discounting task: three variables: 1st= money now, 2nd= money later, 3rd= money days later
// display the variables on the screen to the participant (write a for loop to iterate through)
    var train_stimuli_array = [];
    for (var i = 1; i <= 4; i++){
      train_stimuli_array.push("Stimuli/dog"+i+".jpeg");
      // train_stimuli_array.push("Stimuli/dog2.jpeg");
      // train_stimuli_array.push("Stimuli/dog3.jpeg");
    }
      //train_stimuli_array.push("Stimuli/dog.png");
     // train_stimuli_array.push("Stimuli/dog2.jpeg");
      //train_stimuli_array.push("Stimuli/dog3.jpeg");

    var c1_train_stimuli = [
    {stimulus: train_stimuli_array[0], data: {test_part: 'c1_train', correct_response: ','}},//{stimulus: train_stimuli_array[0]}, //{stimulus: train_stimuli_array[0], data: {test_part: 'test', correct_response: ','}},
    {stimulus: train_stimuli_array[1], data: {test_part: 'c1_train', correct_response: ','}},  //{stimulus: train_stimuli_array[1]}, //{stimulus: train_stimuli_array[1], data: {test_part: 'test', correct_response: ','}},
    {stimulus: train_stimuli_array[2], data: {test_part: 'c1_train', correct_response: '.'}},  //{stimulus: train_stimuli_array[2]},  //{stimulus: train_stimuli_array[2], data: {test_part: 'test', correct_response: '.'}},
    {stimulus: train_stimuli_array[3], data: {test_part: 'c1_train', correct_response: '.'}},
    ]
    

    var fixation = {
      type: 'html-keyboard-response',
      stimulus: '<div style="color:white; font-size:60px;">+</div>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {test_part: 'fixation'}
    }

    var c1_train = {
      type: "image-keyboard-response",
      stimulus: jsPsych.timelineVariable('stimulus'), //train_stimuli_array, //jsPsych.timelineVariable('stimulus'),
      choices: [',', '.'],
      data: jsPsych.timelineVariable('data'),
      on_finish: function(data){
        data.C1_train = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
        //data.c1 = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        
      }
    }

    var c1_train_procedure = {
      timeline: [fixation, c1_train],
      timeline_variables: c1_train_stimuli,
      randomize_order: false
    }

    timeline.push(c1_train_procedure);

    /* END TRAINING TRIAL FOR PARTICIPANTS */

    var instructions_4 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Let us begin! Press the space bar when you are ready to start block 1 of 4.</p> ',
      choices: [32],
      post_trial_gap: 2000
    };
    timeline.push(instructions_4);

    // Import all stimuli for the task
    var test_stimuli_array = [];
    for (var i = 0; i < 100; i++){
      test_stimuli_array.push("Stimuli/Hangul_F" + i + ".bmp");
      test_stimuli_array.push("Stimuli/Hangul_M" + i + ".bmp");
    }

    /* START OF PHASE I - BLOCK 1 */

    // Import stimuli for phase I - block 1     
    var stimuli_block1 = [
      {stimulus: test_stimuli_array[0], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[1], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[2], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[3], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[4], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[5], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[6], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[7], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[8], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[9], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[10], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[11], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[12], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[13], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[14], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[15], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[16], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[17], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[18], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[19], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[20], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[21], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[22], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[23], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[24], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[25], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[26], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[27], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[28], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[29], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[30], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[31], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[32], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[33], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[34], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[35], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[36], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[37], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[38], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[39], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[40], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[41], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[42], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[43], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[44], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[45], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[46], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[47], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[48], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[49], data: {test_part: 'test', correct_response: ','}}, 
    ]

    //var shuffled_stimuli = jsPsych.randomization.shuffle(all_test_stimuli);

    var test = {
      type: "image-keyboard-response",
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: [',', '.'],
      data: jsPsych.timelineVariable('data'),
      on_finish: function(data){
        data.C1 = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
        //data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    }
  }

    var test_procedure_block1 = {
      timeline: [fixation, test],
      timeline_variables: stimuli_block1,
      randomize_order: true
    }

    timeline.push(test_procedure_block1);

    /* END OF PHASE I - BLOCK 1 */

    // BREAK: Block 1 complete, start Block 2
    var instructions_5 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Good job, block 1 complete! Please take a moment to rest.</p> ' +
          '<p style="color:white;">When you are ready to continue with block 2 of 4, press the space bar.</p> ',
      choices: [32],
      post_trial_gap: 2000
    };
    timeline.push(instructions_5);


      /* START OF PHASE I - BLOCK 2 */

    // Import stimuli for phase I - block 2     
    var stimuli_block2 = [
      {stimulus: test_stimuli_array[50], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[51], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[52], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[53], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[54], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[55], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[56], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[57], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[58], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[59], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[60], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[61], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[62], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[63], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[64], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[65], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[66], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[67], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[68], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[69], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[70], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[71], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[72], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[73], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[74], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[75], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[76], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[77], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[78], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[79], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[80], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[81], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[82], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[83], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[84], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[85], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[86], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[87], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[88], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[89], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[90], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[91], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[92], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[93], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[94], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[95], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[96], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[97], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[98], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[99], data: {test_part: 'test', correct_response: ','}}, 
    ] 

    //var shuffled_stimuli = jsPsych.randomization.shuffle(all_test_stimuli);

    var test_procedure_block2 = {
      timeline: [fixation, test],
      timeline_variables: stimuli_block2,
      randomize_order: true
    }

    timeline.push(test_procedure_block2);


    /* END OF PHASE I - BLOCK 2 */

    // BREAK: Block 2 complete, start Block 3
    var instructions_6 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Half way there! Please take a moment to rest.</p> ' +
          '<p style="color:white;">When you are ready to continue with block 3 of 4, press the space bar.</p> ',
      choices: [32],
      post_trial_gap: 2000
    };
    timeline.push(instructions_6);

    /* START OF PHASE I - BLOCK 3 */

    // Import stimuli for phase I - block 3     
    var stimuli_block3 = [
      {stimulus: test_stimuli_array[100], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[101], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[102], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[103], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[104], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[105], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[106], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[107], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[108], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[109], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[110], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[111], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[112], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[113], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[114], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[115], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[116], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[117], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[118], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[119], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[120], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[121], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[122], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[123], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[124], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[125], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[126], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[127], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[128], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[129], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[130], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[131], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[132], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[133], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[134], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[135], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[136], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[137], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[138], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[139], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[140], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[141], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[142], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[143], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[144], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[145], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[146], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[147], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[148], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[149], data: {test_part: 'test', correct_response: ','}},
     ]

    //var shuffled_stimuli = jsPsych.randomization.shuffle(all_test_stimuli);

    var test_procedure_block3 = {
      timeline: [fixation, test],
      timeline_variables: stimuli_block3,
      randomize_order: true
    }

    timeline.push(test_procedure_block3);


    /* END OF PHASE I - BLOCK 3 */

    // BREAK: Block 3 complete, start Block 4
    var instructions_7 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">One more block to go! Please take a moment to rest.</p> ' +
          '<p style="color:white;">When you are ready to continue with block 4 of 4, press the space bar.</p> ',
      choices: [32],
      post_trial_gap: 2000
    };
    timeline.push(instructions_7);

        /* START OF PHASE I - BLOCK 4 */

    // Import stimuli for phase I - block 4     
    var stimuli_block4 = [
      {stimulus: test_stimuli_array[150], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[151], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[152], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[153], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[154], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[155], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[156], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[157], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[158], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[159], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[160], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[161], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[162], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[163], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[164], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[165], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[166], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[167], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[168], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[169], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[170], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[171], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[172], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[173], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[174], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[175], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[176], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[177], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[178], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[179], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[180], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[181], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[182], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[183], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[184], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[185], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[186], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[187], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[188], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[189], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[190], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[191], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[192], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[193], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[194], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[195], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[196], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[197], data: {test_part: 'test', correct_response: ','}},
      {stimulus: test_stimuli_array[198], data: {test_part: 'test', correct_response: '.'}},
      {stimulus: test_stimuli_array[199], data: {test_part: 'test', correct_response: ','}}, 
    ]

    //var shuffled_stimuli = jsPsych.randomization.shuffle(all_test_stimuli);

    var test_procedure_block4 = {
      timeline: [fixation, test],
      timeline_variables: stimuli_block4,
      randomize_order: true
    }

    timeline.push(test_procedure_block4);


    /* END OF PHASE I - BLOCK 4 */ 

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
    var instructions_8 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Phase I of the experiment is complete.</p> ' +
          '<p style="color:white;">Press the space bar to proceed to Phase II of the experiment.</p> ',
      choices: [32],
      post_trial_gap: 2000
    };
    timeline.push(instructions_8);


    /* END PHASE I OF TASK: CLASSIFICATION PHASE */


    /* START PHASE II OF TASK: CLASSIFICATION and ANTICIPATION PHASE */

    var instructions_9 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Now we are interested in how well you can predict patterns in the series of figures. You will be asked to predict whether the next figure in the series is more male-like or female-like. '+
        'When you see the <q>Next Figure</q> prompt, press the corresponding response keys to indicate your prediction: </p>'+
        '<p style="color:white;"> Male &#8594 <q>,</q> (comma)</p>'+
        '<p style="color:white;"> Female &#8594 <q>.</q> (period)</p>'+
        '<p style="color:white;">The actual figure will then appear on the screen. After you see the figure, please guess the assigned gender with response keys. </p>'+
        '<p style="color:white;">As before, you will receive 2 cents for correctly classifying each figure.</p>'+
        '<p style="color:white;">Press either response keys to continue.</p>',
      choices: [',', '.'],
    };
    timeline.push(instructions_9);

    var instructions_10 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">PREDICTION BONUS</p> ' +
          '<p style="color:white;">Your prediction accuracy is the total number of correct predictions you make over the 200 trials.</p> ' +
          '<p style="color:white;">In addition to the 2 cents per correct figure classification, you have the chance to receive a bonus of 40 dollars IF your accuracy is above average relative to previous participants.</p>' +
          '<p style="color:white;">If your accuracy is below average relative to previous participants, then you will not receive the 40 dollar bonus.</p>'+
          '<p style="color:white;">Press the space bar to continue.</p>',
      choices: [32],
    };
    timeline.push(instructions_10);

    var instructions_11 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Here are some examples.</p> ' +
          '<p style="color:white;">For each, predict whether the next figure looks more male-like or female-like. Then, when the figure appears, guess whether it looks more male-like or female-like and indicate your choice.</p> ' +
          '<p style="color:white;">Press the space bar to continue.</p>',
      choices: [32],
      post_trial_gap: 2000
    };
    timeline.push(instructions_11);

    /* START TRAINING TRIAL FOR PARTICIPANTS */

/*     var train_stimuli_array = [];
    for (var i = 0; i < 3; i++){
      train_stimuli_array.push("Stimuli/Hangul_E" + i + ".bmp");
    } */

    var c2_train_stimuli = [
    {stimulus: train_stimuli_array[0], data: {test_part: 'c2_train', correct_response: ','}},//{stimulus: train_stimuli_array[0]}, //{stimulus: train_stimuli_array[0], data: {test_part: 'test', correct_response: ','}},
    {stimulus: train_stimuli_array[1], data: {test_part: 'c2_train', correct_response: ','}},  //{stimulus: train_stimuli_array[1]}, //{stimulus: train_stimuli_array[1], data: {test_part: 'test', correct_response: ','}},
    {stimulus: train_stimuli_array[2], data: {test_part: 'c2_train', correct_response: '.'}},  //{stimulus: train_stimuli_array[2]},  //{stimulus: train_stimuli_array[2], data: {test_part: 'test', correct_response: '.'}},
    ]

    var prediction ={
        type: "html-keyboard-response",
        stimulus: '<p style="color:white;"> Next Figure: Male or Female? </p>',
        choices: [',','.'],
        data: {
            test_part: 'prediction_train',
            //correct_predicted_response: ',',
        },
        on_finish: function(data){
          data.A = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
        //data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.pred_response);
      }
    }

/*     var fixation = {
      type: 'html-keyboard-response',
      stimulus: '<div style="color:white; font-size:60px;">+</div>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {test_part: 'fixation'}
    } */

    var c2_train = {
      type: "image-keyboard-response",
      stimulus: jsPsych.timelineVariable('stimulus'), //train_stimuli_array, //jsPsych.timelineVariable('stimulus'),
      choices: [',', '.'],
      data: jsPsych.timelineVariable('data'),
      on_finish: function(data){
        data.C2 = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
      }
    }

    var c2_train_procedure = {
      timeline: [prediction, fixation, c2_train],
      timeline_variables: c2_train_stimuli,
      randomize_order: true
    }

    timeline.push(c2_train_procedure);

    var instructions_12 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Let us begin! Press the space bar when you are ready to start block 1 of 4.</p> ',
      choices: [32],
      post_trial_gap: 2000
    };
    timeline.push(instructions_12);

    // Import all stimuli for the task
/*     var test_stimuli_array = [];
    for (var i = 0; i < 100; i++){
      test_stimuli_array.push("Stimuli/Hangul_F" + i + ".bmp");
      test_stimuli_array.push("Stimuli/Hangul_M" + i + ".bmp");
    } */

    /* START OF PHASE I - BLOCK 1 */

    // Import stimuli for phase I - block 1     
    var stimuli_c2block1 = [
      {stimulus: test_stimuli_array[0], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[1], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[2], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[3], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[4], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[5], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[6], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[7], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[8], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[9], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[10], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[11], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[12], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[13], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[14], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[15], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[16], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[17], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[18], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[19], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[20], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[21], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[22], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[23], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[24], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[25], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[26], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[27], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[28], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[29], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[30], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[31], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[32], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[33], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[34], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[35], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[36], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[37], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[38], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[39], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[40], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[41], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[42], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[43], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[44], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[45], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[46], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[47], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[48], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[49], data: {test_part: 'c2_test', correct_response: ','}}, 
    ]

    //var shuffled_stimuli = jsPsych.randomization.shuffle(all_test_stimuli);

    var prediction_c2 ={
        type: "html-keyboard-response",
        stimulus: '<p style="color:white;"> Next Figure: Male or Female? </p>',
        choices: [',','.'],
        data: {
            test_part: 'prediction',
            //correct_predicted_response: ',',
        },
        on_finish: function(data){
          data.A = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
        //data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.pred_response);
      }
    }

    var c2test = {
      type: "image-keyboard-response",
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: [',', '.'],
      data: jsPsych.timelineVariable('data'),
      on_finish: function(data){
        data.C2 = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press)
        //data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    }
  }

    var test_procedure_c2block1 = {
      timeline: [prediction_c2, fixation, c2test],
      timeline_variables: stimuli_c2block1,
      randomize_order: true
    }

    timeline.push(test_procedure_c2block1);

    /* END OF PHASE I - BLOCK 1 */

    // BREAK: Block 1 complete, start Block 2
    var instructions_13 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Good job, block 1 complete! Please take a moment to rest.</p> ' +
          '<p style="color:white;">When you are ready to continue with block 2 of 4, press the space bar.</p> ',
      choices: [32],
      post_trial_gap: 2000
    };
    timeline.push(instructions_13);


      /* START OF PHASE I - BLOCK 2 */

    // Import stimuli for phase I - block 2     
    var stimuli_c2block2 = [
      {stimulus: test_stimuli_array[50], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[51], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[52], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[53], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[54], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[55], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[56], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[57], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[58], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[59], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[60], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[61], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[62], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[63], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[64], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[65], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[66], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[67], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[68], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[69], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[70], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[71], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[72], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[73], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[74], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[75], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[76], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[77], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[78], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[79], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[80], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[81], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[82], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[83], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[84], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[85], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[86], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[87], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[88], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[89], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[90], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[91], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[92], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[93], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[94], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[95], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[96], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[97], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[98], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[99], data: {test_part: 'c2_test', correct_response: ','}}, 
    ] 

    //var shuffled_stimuli = jsPsych.randomization.shuffle(all_test_stimuli);

    var test_procedure_c2block2 = {
      timeline: [prediction_c2, fixation, c2test],
      timeline_variables: stimuli_c2block2,
      randomize_order: true
    }

    timeline.push(test_procedure_c2block2);


    /* END OF PHASE I - BLOCK 2 */

    // BREAK: Block 2 complete, start Block 3
    var instructions_14 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">Half way there! Please take a moment to rest.</p> ' +
          '<p style="color:white;">When you are ready to continue with block 3 of 4, press the space bar.</p> ',
      choices: [32],
      post_trial_gap: 2000
    };
    timeline.push(instructions_14);

    /* START OF PHASE I - BLOCK 3 */

    // Import stimuli for phase I - block 3     
    var stimuli_c2block3 = [
      {stimulus: test_stimuli_array[100], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[101], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[102], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[103], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[104], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[105], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[106], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[107], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[108], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[109], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[110], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[111], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[112], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[113], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[114], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[115], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[116], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[117], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[118], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[119], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[120], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[121], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[122], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[123], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[124], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[125], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[126], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[127], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[128], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[129], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[130], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[131], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[132], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[133], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[134], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[135], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[136], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[137], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[138], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[139], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[140], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[141], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[142], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[143], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[144], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[145], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[146], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[147], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[148], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[149], data: {test_part: 'c2_test', correct_response: ','}}, 
    ]

    //var shuffled_stimuli = jsPsych.randomization.shuffle(all_test_stimuli);

    var test_procedure_c2block3 = {
      timeline: [prediction_c2, fixation, c2test],
      timeline_variables: stimuli_c2block3,
      randomize_order: true
    }

    timeline.push(test_procedure_c2block3);


    /* END OF PHASE I - BLOCK 3 */

    // BREAK: Block 3 complete, start Block 4
    var instructions_15 = {
      type: "html-keyboard-response",
      stimulus: '<p style="color:white;">One more block to go! Please take a moment to rest.</p> ' +
          '<p style="color:white;">When you are ready to continue with block 4 of 4, press the space bar.</p> ',
      choices: [32],
      post_trial_gap: 2000
    };
    timeline.push(instructions_15);

        /* START OF PHASE I - BLOCK 4 */

    // Import stimuli for phase I - block 4     
    var stimuli_c2block4 = [
      {stimulus: test_stimuli_array[150], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[151], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[152], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[153], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[154], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[155], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[156], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[157], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[158], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[159], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[160], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[161], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[162], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[163], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[164], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[165], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[166], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[167], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[168], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[169], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[170], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[171], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[172], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[173], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[174], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[175], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[176], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[177], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[178], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[179], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[180], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[181], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[182], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[183], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[184], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[185], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[186], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[187], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[188], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[189], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[190], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[191], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[192], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[193], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[194], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[195], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[196], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[197], data: {test_part: 'c2_test', correct_response: ','}},
      {stimulus: test_stimuli_array[198], data: {test_part: 'c2_test', correct_response: '.'}},
      {stimulus: test_stimuli_array[199], data: {test_part: 'c2_test', correct_response: ','}}, 
    ]

    //var shuffled_stimuli = jsPsych.randomization.shuffle(all_test_stimuli);

    var test_procedure_c2block4 = {
      timeline: [prediction_c2, fixation, c2test],
      timeline_variables: stimuli_c2block4,
      randomize_order: true
    }

    timeline.push(test_procedure_c2block4);


    /* END OF PHASE I - BLOCK 4 */ 

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
  xhr.open('POST', 'test-self-deception.php'); // 'write_data.php' is the path to the php file described above.
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
        on_finish: function(){ saveData("full-self-deception_" + workerID, jsPsych.data.get().csv()); }
        //on_finish: function(){
          //jsPsych.data.get().filter([{test_part: 'test'},{test_part: 'prediction'},{test_part: 'c2_test'}]).localSave("csv", `test-self-deception-data.csv`);
            //jsPsych.data.displayData(); 
        //}
      });
    }
  </script>

<footer>

<!-- <script type="text/javascript" src="https://perceptionexperiments.net/SDU/Libraries/Timeout.js"></script> -->
<!-- <script type="text/javascript" src="https://perceptionexperiments.net/SDU/Libraries/lodash.js"></script> -->
<!-- <script type="text/javascript" src="https://perceptionexperiments.net/SDU/Libraries/seedrandom.js"></script> -->
<script type="text/javascript" src="//code.jquery.com/jquery-git.js"></script>
<!-- <script type="text/javascript" src="https://perceptionexperiments.net/SDU/Libraries/jquery.csv.js"></script> -->

<script>
// show page when loaded 
window.onload = function() {
  $(".loading").css({display: "none"});
  $(".consent").css({display: "block"});
  $(".buttonHolder").css({display: "block"});
};
</script>
</footer>
  </html>
