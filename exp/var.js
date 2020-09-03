// store feedback generated from trial outcome
let feedbackLogic;

// user selection of hard or easy trials
let selection;

// randomized selection of hard or easy trials
let selectionTimeout = [EasyKey_uCase, HardKey_uCase];

// declare variable for the time to press
let pressing_time;

// declare iterators for the practice and experiment outcome
// they must be declared separatly, don't even think about it Ben
let practiceIterator=0;
let experimentIterator=0;

// tracks timeout in log file
let timeout;

// tracks timeout in log file
let width;

// set the progress bar
// let timer;
// let timerFloat;
// let progress_bar = 0.00;
// let instruction_tick = 0.005;
// let practice_tick = 0.01;
// let experiment_tick;

// set the time remaining notification for participant
let timeRemaining = '<p id="timeRemaining" style="text-align:center; color:white;"></p>';

// feedback contrainer
let feedbackGenerator = '<p id="feedbackGenerator" style="color:white;"></p>';

// progress bar container
let progressBar = '<div id="counter" class="w3-container"><h2>Progress Bar Width</h2><p>Change the width of the progress bar with the width property:</p><div class="w3-light-grey"><div class="w3-grey" id="keyBar" style="height:24px;width:0%;"></div></div><br><div>';
let fillUp = '<p id="fillUp" style="color:white;"></p>';

// participant selects easy or hard condition, practice
let practice_prompt_array = [];
practicePromptPush();

//participant selects easy or hard condition, experiment
let test_prompt_array = []; // change to selection_array
experimentPromptPush();


// feedback objects

let practice_feedback_array = [];
    for (let i = 0; i <= 3; i++){
    practice_feedback_array.push('<p id="feedbackGenerator" style="color:white;"></p>')
    }

let test_feedback_array = [];
    for (let i = 0; i < experimentOutcome.length; i++){
    test_feedback_array.push('<p id="feedbackGenerator" style="color:white;"></p>')
    }

// outcome objects

let practice_outcome_array = [];
    for (let i = 0; i <= 3; i++){
    practice_outcome_array.push('<p id="outcomeGenerator" style="color:white;"></p>')
    }

let test_outcome_array = [];
    for (let i = 0; i < experimentOutcome.length; i++){
        test_outcome_array.push('<p id="outcomeGenerator" style="color:white;"></p>')
    }

// practice trials
let practice_prompt_stimuli = [
{stimulus: practice_prompt_array[0], feedback: practice_feedback_array[0], outcome: practice_outcome_array[0], progress: progressBar, data: {test_part: 'practice', task_version: version, trial: -1, probability: practiceProbability[0], handedness: handedness, easy_key: EasyKey_uCase, hard_key: HardKey_uCase, reward_easy: practiceEasy[practiceIterator], reward_hard: practiceHard[practiceIterator], paid_trial: practiceOutcome[0]}},
{stimulus: practice_prompt_array[1], feedback: practice_feedback_array[1], outcome: practice_outcome_array[1], progress: progressBar, data: {test_part: 'practice', task_version: version, trial: -2, probability: practiceProbability[1], handedness: handedness, easy_key: EasyKey_uCase, hard_key: HardKey_uCase, reward_easy: practiceEasy[practiceIterator], reward_hard: practiceHard[practiceIterator], paid_trial: practiceOutcome[1]}},
{stimulus: practice_prompt_array[2], feedback: practice_feedback_array[2], outcome: practice_outcome_array[2], progress: progressBar, data: {test_part: 'practice', task_version: version, trial: -3, probability: practiceProbability[2], handedness: handedness, easy_key: EasyKey_uCase, hard_key: HardKey_uCase, reward_easy: practiceEasy[practiceIterator], reward_hard: practiceHard[practiceIterator], paid_trial: practiceOutcome[2]}},
{stimulus: practice_prompt_array[3], feedback: practice_feedback_array[3], outcome: practice_outcome_array[3], progress: progressBar, data: {test_part: 'practice', task_version: version, trial: -4, probability: practiceProbability[3], handedness: handedness, easy_key: EasyKey_uCase, hard_key: HardKey_uCase, reward_easy: practiceEasy[practiceIterator], reward_hard: practiceHard[practiceIterator], paid_trial: practiceOutcome[3]}},
]

// experiment trials
let test_prompt_stimuli = [];
    for (let i = 0; i < test_feedback_array.length; i++){
    test_prompt_stimuli.push({stimulus: test_prompt_array[i], feedback: test_feedback_array[i], outcome: test_outcome_array[i], progress: progressBar, data: {test_part: 'experiment', task_version: version, trial: i+1, probability: experimentProbability[i], handedness: handedness, easy_key: EasyKey_uCase, hard_key: HardKey_uCase, reward_easy: easyAmount[experimentIterator], reward_hard: hardAmount[experimentIterator], paid_trial: experimentOutcome[i]}},)
    }
