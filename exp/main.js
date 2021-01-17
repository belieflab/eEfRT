/* main procedures */

let instructions_procedure;

if (version === "money") {
  instructions_procedure = {
  timeline: [instructions_1, instructions_2, instructions_3, instructions_4, instructions_5, instructions_6, instructions_7, instructions_8, instructions_9]
  };
} else if (version === "points") {
  instructions_procedure = {
  timeline: [instructions_1, instructions_2, instructions_3, instructions_4, instructions_5, instructions_6, instructions_7, instructions_8]
  };
}

let practice_start = {
    timeline: [begin_practice],
};

let practice_procedure = {
    timeline: [fixation, trial, ready, load, buttonPressing, feedback, practice_outcome],
    timeline_variables: practice_prompt_stimuli,
    randomize_order: false
};

let test_start = {
    timeline: [begin_experiment],
};

let test_procedure = {
    timeline: [fixation, trial, ready, load, buttonPressing, feedback, experiment_outcome],
    timeline_variables: test_prompt_stimuli,
    randomize_order: false
};

timeline.push(welcome);
timeline.push(instructions_procedure);
timeline.push(practice_start);
timeline.push(practice_procedure);
timeline.push(test_start);
timeline.push(test_procedure);
timeline.push(save_data);
timeline.push(end);


// var new_timeline = {
//   timeline: [present_reward]
// }
// jsPsych.addNodeToEndOfTimeline(new_timeline)