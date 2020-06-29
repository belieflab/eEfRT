// pseudo code for progress bar function

// function easyProgressBar ()
// if the participant types L
// the easyProgressBar will fill up a certain amount per click
// EasyKey_uCase: L; 

//  html: <div id="myProgress">
//   <div id="myBar"></div>
//   </div>




function moveHard() { // function definition
    let feedback = document.getElementById("feedbackGenerator");
    var width = document.getElementById("keyBar").style.width; // variable assignment of width property of keyBar
    width = parseFloat(width.slice(0, -1)); // variable reassignment
      if (width >= 99) { // set to record 100 taps
        feedbackLogic = 'You completed the task';
        console.log('complete');
        width = document.getElementById("keyBar").style.width="0%"; // reset to 0
        jsPsych.finishTrial('success');  
      } else {
        width++;
        console.log(width);
        width = document.getElementById("keyBar").style.width=String(width)+"%";
        return (event.charCode == HardKey_ASCII)
      }

    }


function moveEasy() { // function definition
    
    let feedback = document.getElementById("feedbackGenerator");
    var width = document.getElementById("keyBar").style.width; // variable assignment of width property of keyBar
    width = parseFloat(width.slice(0, -1)); // variable reassignment
        if (width >= 96.57) { // set to record 30 taps
        feedbackLogic = 'You completed the task';
        console.log('complete');
        width = document.getElementById("keyBar").style.width="0%";
        jsPsych.finishTrial('data');  
        } else {
        width+=3.33;
        console.log(width);
        width = document.getElementById("keyBar").style.width=String(width)+"%";
        return (event.charCode == EasyKey_ASCII)
        }
    

    }

        
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
            this.value = "";
        }
        });
    });
    }
