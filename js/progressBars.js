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

    // this is for the js psych global progress bar
        
    // function practiceTick() {
    //     progress_bar += practice_tick;
    //     jsPsych.setProgressBar(progress_bar);
    //   }

    //   function instructionTick() {
    //     progress_bar += instruction_tick;
    //     jsPsych.setProgressBar(progress_bar);
    //   }
