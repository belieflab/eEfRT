  //******************************************/
 //        EEfRT CONFIGURATION FILE          /
//******************************************/

// hard code playtime to 20 minutes (default)
const MinutesToPlay = 20;

// select version disabled; randomization handled by submit.js
// const version = 'points';
// const version = 'money';

// practice variables
let practiceOutcome     = [];
let practiceHard        = [];
let practiceEasy        = [];
let practiceProbability = [];

// experiment variables
let experimentOutcome = [];
let hardAmount = [];
let easyAmount = [];
let experimentProbability = [];

// declare currency and point values
let currency;
let points;
let reward = [];

// declare tally for $ version
let rewardTally = 0;

let rangeLow;
let rangeHigh;

let rewardEasy;

let breakSpace;

let practiceHardRewardValue;
let hardRewardValue;

// randomization via modulus
let version;

// additional instructions for money version
let instructions_9;
