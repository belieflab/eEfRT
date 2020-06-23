// pseudo code for progress bar function

// function easyProgressBar ()
// if the participant types L
// the easyProgressBar will fill up a certain amount per click
// EasyKey_uCase: L; 

//  html: <div id="myProgress">
//   <div id="myBar"></div>
//   </div>




function moveHard() { // function definition
    var width = document.getElementById("keyBar").style.width; // variable assignment of width property of keyBar
    width = parseInt(width.slice(0, -1)); // variable reassignment
      if (width >= 100) {
        width = document.getElementById("keyBar").style.width="0%";
        jsPsych.finishTrial('data');  
      } else {
        width++;
        width = document.getElementById("keyBar").style.width=String(width)+"%";
      }
    }

function moveEasy() { // function definition
    var width = document.getElementById("keyBar").style.width; // variable assignment of width property of keyBar
    width = parseInt(width.slice(0, -1)); // variable reassignment
        if (width >= 100) {
        width = document.getElementById("keyBar").style.width="0%";
        jsPsych.finishTrial('data');  
        } else {
        width+=5;
        width = document.getElementById("keyBar").style.width=String(width)+"%";
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
    
// {/* <input type="text" onkeypress="myFunction()"></input>
// object.onkeypress = move() */}
