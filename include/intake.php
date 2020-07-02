<!--<!DOCTYPE html>
<html>
  <head>
    <title>EEfRT Task</title>
    <script src="js/playTime.js"></script>
    <script src="js/timer.js"></script>  importing our timer function from timer.js file 
    <script src="js/progressBars.js"></script> 
    <script src="js/handedness.js"></script>
    <script src="jsPsych/jspsych.js"></script>
    <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script src="jsPsych/plugins/jspsych-html-button-response.js"></script>
    <script src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> styling for w3c progress bars 
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
  </div> -->

<!DOCTYPE html>
<html>
    <head>
        <title>Demographics Form</title>
        <script src="jsPsych/jspsych.js"></script>
        <script src="js/intake.js"></script>
        <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
        <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
        <link href="css/intake.css" rel="stylesheet" type="text/css"></link>
        <!-- <link rel="stylesheet" type="text/css" href="css/style.css"></link> -->
    </head>
    <body
    style="background-color:lightgrey;">
    <header><h1 style="text-align:center;">Behavioral Intake Form</h1></header>
    <div class="Screening" style="background-color:powderblue; text-align:center; margin:35px; vertical-align:middle">

    <br>
    <br>

    <!-- <p><b>Select your facility</b></p>
    <p style="color:red">*must provide value</p>
    <input type="dropdown"> -->

    <label for="facility"><b>Select your facility</b></label>

    <select name="facility" id="facility">
        <option value="Yale">Yale</option>
        <option value="UGA">UGA</option>
        <option value="Northwestern">Northwestern</option>
        <option value="Temple">Temple</option>
        <option value="Maryland">Maryland</option>
    </select>

    <!-- <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
    Name: <input type="text" name="fname">
    <input type="submit" value="Submit">
    </form> -->

    <form action="/action_page.php" method="post">
        <input type="text" name="fname" required>
        <input type="submit" value="Submit">
    </form>

    <p><b>Site Specific Subject ID Number</b></p>
    <p style="color:red">*must provide value</p>
    <input type="number">

    <p><b>Participant DOB</b></p>
    <p><b>Enter as MM/DD/YYYY</b></p>
    <p style="color:red">*must provide value</p>
    <input type="date">
    <form>
    
    <label for="handedness"><b>Are you right or left handed?</b></label>
    <label class="container">Right
        <input type="checkbox" checked="checked">
        <span class="checkmark"></span>
    </label>
    <label class="container">Left
        <input type="checkbox" checked="checked">
        <span class="checkmark"></span>
    </label>

    <!-- <input type="checkbox"><p>Left</p> -->

    <p><b>Before proceeding to the task, please confirm that the following are true:</b></p>
    <p style="color:red">*must provide value</p>
    <input type="checkbox"><p>Screen brightness is up to 100%</p>
    <input type="checkbox"><p>Headphones are plugged in</p>
    <input type="checkbox"><p>Volume is up to 100%</p>

    <br>
</div>

<!-- <label class="container">One
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
</label>

<label class="container">Two
  <input type="checkbox">
  <span class="checkmark"></span>
</label>

<label class="container">Three
  <input type="checkbox">
  <span class="checkmark"></span>
</label>

<label class="container">Four
  <input type="checkbox">
  <span class="checkmark"></span>
</label> -->