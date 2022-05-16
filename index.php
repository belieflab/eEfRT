<?php
  require_once 'db/data.php';
  require_once 'db/config.php';
?>

<!DOCTYPE html>
<html>
  <head>
    <title>EEfRT Task</title>
    <script src="db/validate.js"></script>
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="jsPsych/jspsych.js"></script>
    <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script src="jsPsych/plugins/jspsych-html-button-response.js"></script>
    <script src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/w3.css"> <!-- styling for w3c progress bars -->
  </head>
  <body id='unload' onbeforeunload="return areYouSure()" style="background-color:black;">  
    <?php
        if ($db_connection_status == true) {
          include_once "include/nda.php";
          // echo'<br>';
          // echo'connected';
        } else if ($db_connection_status == false) {
          include_once "include/intake.php";
          // echo'<br>';
          // echo'not connected';
        }
    ?>
  </body>
  <footer> 
  <script src="exp/conf.js" type="text/javascript" ></script>
  <script src="exp/fn.js" type="text/javascript" ></script>
  <script type="text/javascript">
      // declare NDA required variables
      let GUID;
      let subjectID;
      let sexAtBirth;
      let siteNumber;
      let ageAtAssessment;
      let feedbackLink;
      let visit;
      let week;
      if (workerId != ""){
          GUID = "";
          subjectID = "";
          sexAtBirth = "";
          siteNumber = "";
          ageAtAssessment = "";
          feedbackLink = "";
          visit = "";
          week = "";
      } else{
        if (db_connection == false){
          GUID = "";
          subjectID = "";
          sexAtBirth = "";
          siteNumber = "";
          ageAtAssessment = "";
          feedbackLink = "";
          visit = "";
          week = "";
        } else if (db_connection == true){
          GUID = "<?php echo $subjectKey?>";
          subjectID = "<?php echo $consortId?>";
          workerId = "<?php echo $consortId?>";
          labId = "<?php echo $labId?>";
          sexAtBirth = "<?php echo $sexAtBirth?>";
          siteNumber = "<?php echo $institutionAlias?>";
          ageAtAssessment = "<?php echo $ageInMonths?>";
          groupStatus = "<?php echo $groupStatus?>";
          //feedbackLink = "https://belieflab.yale.edu/omnibus/eCRFs/feedback/tasks/prl.php?candidateId=<?php echo $candidateId?>&studyId=<?php echo $studyId?>";
          visit = "<?php echo $visit?>";
          week = "<?php echo $week?>";
          feedbackLink = "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_5BB0Y7nlPJ3Nw1g?interview_age=<?php echo $ageInMonths?>&src_subject_id=<?php echo $consortId?>&study_id=<?php echo $labId?>&subjectkey=<?php echo $subjectKey?>&site=<?php echo $institutionAlias?>&sex=<?php echo $sexAtBirth?>&phenotype=<?php echo $groupStatus?>&candidateId=<?php echo $candidateId?>&visit=<?php echo $visit?>";
        }
      }

      if (turkprime_online === true) {
    
      } else if (db_connection === false) {
        GUID = "";
        subjectID = "";
        sexAtBirth = "";
        siteNumber = "";
        ageAtAssessment = "";
        feedbackLink = "";
        visit = "";
        week = "";
      } else if (db_connection === true) {
        GUID = "<?php echo $subjectKey?>";
        workerId = "<?php echo $consortId?>"; // this is necessary so that the data save with the correct id
        subjectID = "<?php echo $consortId?>";
        sexAtBirth = "<?php echo $sexAtBirth?>";
        siteNumber = "<?php echo $institutionAlias?>";
        ageAtAssessment = "<?php echo $ageInMonths?>";
        //feedbackLink = "https://belieflab.yale.edu/omnibus/eCRFs/feedback/tasks/kamin.php?candidateId=<?php echo $candidateId?>&studyId=<?php echo $studyId?>";
        visit = "<?php echo $visit?>";
        week = "<?php echo $week?>";
        feedbackLink = "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_5BB0Y7nlPJ3Nw1g?interview_age=<?php echo $ageInMonths?>&src_subject_id=<?php echo $consortId?>&study_id=<?php echo $labId?>&subjectkey=<?php echo $subjectKey?>&site=<?php echo $institutionAlias?>&sex=<?php echo $sexAtBirth?>&phenotype=<?php echo $groupStatus?>&candidateId=<?php echo $candidateId?>&visit=<?php echo $visit?>";

      }
</script>
  </footer>
</html>
