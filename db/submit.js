// function to store subject number on submit
let workerId;

let handedness;
let antihandedness;
let EasyKey_uCase;
let HardKey_uCase;

let ageAtAssessment;

let sexAtBirth;

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

function validateIntake() {
    let intake = document.getElementById("intake");
    let consent = document.getElementById("nextButton");
    if (intake.style.display === "none") {
      intake.style.display = "block";
    } else {
      intake.style.display = "none";
      consent.style.display = "block";
    }
  }

function sexFinder() {
    // document.getElementById("sex").value = sex;
    if (document.getElementById("male").checked === true) {
        sexAtBirth = "M";
    } else if (document.getElementById("female").checked === true) {
        sexAtBirth = "F";
    }
}

function ageFinder() {
    // document.getElementById("sex").value = sex;
    if (document.getElementById("age").value !== '') {
        let currentAge = document.getElementById("age").value;
        ageAtAssessment = parseInt(currentAge);
    } else {
        alert("please enter your current age");

    }
}

function submitIntake() {
    let subjectID = document.getElementById("subjectid").value;
    let rightHandedness = document.getElementById("rightHanded").checked;
    let leftHandedness = document.getElementById("leftHanded").checked;
    let siteID = document.getElementById("siteid");

    if (rightHandedness === true) {
        handedness = "right";
    } else if (leftHandedness === true) {
        handedness = "left";
    }

    const zeroPad = (num, places) => String(num).padStart(places, '0');
    switch(siteID.options[siteID.selectedIndex].value){
        case "Maryland":
            siteNumber = zeroPad(1,2);
            break;
        case "Northwestern":
            siteNumber = zeroPad(2,2);
            break;
        case "Temple":
            siteNumber = zeroPad(3,2);
            break;
        case "Georgia":
            siteNumber = zeroPad(4,2);
            break;
        case "Yale":
            siteNumber = zeroPad(5,2);
            break;
        case "Emory":
            siteNumber = zeroPad(6,2);
            break;
        default:
            siteNumber = zeroPad(0,2);
    }

  

    if(subjectID == "") {
        alert("Please enter a valid subjectid")
    } else {
        alert("your subjectid is " + siteNumber + subjectID);
        workerId = parseInt(siteNumber + subjectID);
        switch(workerId%2){
            case 0:
              version = 'money';
              break;
            case 1:
              version = 'points';
              break;
        }  
        validateIntake();
        checkHandedness();
        versionRandomization();
    }
}


