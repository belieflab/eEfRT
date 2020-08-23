// store feedback generated from trial outcome
let feedbackLogic;

// user selection of hard or easy trials
let selection;


// declare variable for the time to press
let pressing_time;

// declare iterators for the practice and experiment outcome
let practiceIterator=0;
let experimentIterator=0;

// set the progress bar
let timer;
let timerFloat;
let progress_bar = 0.00;
let instruction_tick = 0.005;
let practice_tick = 0.01;
let experiment_tick;

// run script to ask participant how much time they would like to play for
// playTime();

// the feedback array is populated after trial is completed or failed


// '<p style="color:white;">Ready?    </p> ' +
//   '<p style="color:white;">Push the <strong>'+EasyKey_uCase+'</strong> key until the bar fills up.   </p>');
let timeRemaining = '<p id="timeRemaining" style="text-align:center; color:white; font-size:30px"></p>'

    // let progressBar= '<div class="w3-container"><div class="w3-light-grey"><div class="w3-grey" style="height:24px; width:50%;"></div></div></div></div></div>'
let progressBar = '<div id="counter" class="w3-container"><h2>Progress Bar Width</h2><p>Change the width of the progress bar with the width property:</p><div class="w3-light-grey"><div class="w3-grey" id="keyBar" style="height:24px;width:0%;"></div></div><br><div>';

let feedbackGenerator = '<p id="feedbackGenerator" style="color:white;"></p>';

let fillUp = '<p id="fillUp" style="color:white;"></p>';