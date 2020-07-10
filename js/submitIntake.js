// function to store subject number on submit

function submitIntake() {
    let subjectID = document.getElementById("subjectid").value;
    let rightHandedness = document.getElementById("rightHanded").value;
    let leftHandedness = document.getElementById("leftHanded").value;
    let siteID = document.getElementById("siteid");
   
    if(rightHandedness == "right") {
        handedness = "right"
    } else if(leftHandedness == "left"){
        handedness = "left"
    } else {
        alert("Check only right or left handed")
    }
    
    checkHandedness()

    switch(siteID.options[siteID.selectedIndex].value){
        case "Yale":
            siteNumber = "10";
            break;
        case "UGA":
            siteNumber = "20";
            break;
        case "Northwestern":
            siteNumber = "30";
            break;
        case "Temple":
            siteNumber = "40";
            break;
        case "Maryland":
            siteNumber = "50";
            break;
        default:
            siteNumber = "00";
    }

    // if(siteID.options[siteID.selectedIndex].value == "Yale") {
    //     siteNumber = "10"
    // }

    if(subjectID == "") {
        alert("Please enter a valid subjectid")
    } else {
        alert("your subjectid is " + siteNumber + subjectID);
        workerID = parseInt(siteNumber + subjectID);
        startExperiment()
    }
}