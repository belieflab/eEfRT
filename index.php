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
    <script src="db/validate.js"></script>
    <!-- <script src="js/timer.js"></script> importing our timer function from timer.js file -->
    <!-- <script src="js/progressBars.js"></script>  -->
    <!-- <script src="js/handedness.js"></script> -->
    <!-- <script src="js/submitIntake.js"></script> -->
    <script src="jsPsych/jspsych.js"></script>
    <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script src="jsPsych/plugins/jspsych-html-button-response.js"></script>
    <script src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/w3.css"> <!-- styling for w3c progress bars -->
  </head>
  <body style="background-color:black;">  
    <?php include_once 'include/intake.php';?>
  </body>
  <footer> 
  <script src="exp/conf.js" type="text/javascript" ></script>
  <script src="exp/fn.js" type="text/javascript" ></script>
    <script type="text/javascript" src="js/jquery-git.js"></script>
    <!-- <script type="text/javascript" src="js/consent-load.js"></script> -->
    
  </footer>
</html>
