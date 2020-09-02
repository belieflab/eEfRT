  //******************************************/
 //        EEfRT CONFIGURATION FILE          /
//******************************************/

// hard code playtime to 20 minutes (default)
const MinutesToPlay = 20;

// select version
// const version = 'points';
const version = 'money';

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

// declare currency value
let currency;
let points;

// declare tally for $ version
let rewardTally;

let rangeLow;
let rangeHigh;

let rewardEasy;

let breakSpace;


if (version === 'money') {
  rewardTally = 0;
  breakSpace = '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
  currency = "$";
  points="";
  rangeLow = "$1.20";
  rangeHigh = "$4.00";

  // practice variables
  practiceOutcome     = ["win", "lose", "lose", "win"];
  practiceHard        = [1.78, 2.68, 3.58, 4.12];
  practiceEasy        = [1.00, 1.00, 1.00, 1.00];
  practiceProbability = [50,  12,  50,  88];

  // experiment variables
  experimentOutcome = ["lose", "lose", "lose", "win", "lose",	"win", "lose", "win", "win", "win", "lose",	"win", "lose", "win", "lose",	"lose",	"win", "lose", "win", "lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"win", 	"lose",	"lose",	"lose",	"win", 	"lose",	"win", 	"win", 	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"win", 	"win", 	"lose",	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"lose",	"win", 	"win", 	"win", 	"lose",	"win", 	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"win", 	"win", 	"win", 	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"lose"];
  hardAmount = [3.04, 1.42,	2.86,	3.22,	1.78,	1.96,	2.68,	1.78,	2.14,	2.50,	3.94,	2.32,	2.14,	1.42,	3.04,	1.24,	3.58,	2.32,	4.12,	4.12,	2.50,	3.94,	3.22,	4.12,	2.68,	3.40,	2.50,	3.76,	1.78,	1.42,	3.04,	3.40,	3.22,	1.24,	3.58,	3.76,	3.76,	2.14,	3.58,	1.60,	2.86,	2.68,	1.24,	1.96,	1.60,	2.86,	2.32,	3.40,	3.94,	1.96,	1.60,	2.59,	3.49,	3.85,	4.21,	4.03,	3.67,	3.67,	4.03,	2.77,	1.51,	1.87,	4.21,	1.33,	1.87,	1.51,	3.13,	3.13,	3.85,	2.59,	4.21,	2.95,	2.05,	2.77,	3.49,	1.87,	2.95,	3.13,	3.67,	1.69,	2.59,	2.41,	1.33,	3.31,	2.23,	2.23,	4.03,	1.33,	2.41,	3.31,	2.23,	3.85, 2.41,	3.31,	2.77,	2.05,	1.69,	3.49,	1.69,	2.95,	2.05,	1.51];
  easyAmount = [1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,	1.00,];
  experimentProbability = [12,	50,	50,	88,	12,	88,	50,	88,	50,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	50,	12,	12,	88,	88,	50,	88,	50,	50,	12,	50,	88,	50,	88,	12,	12,	88,	88,	50,	88,	12,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	88,	50,	88,	12,	50,	12,	88,	50,	88,	88,	50,	50,	50,	50,	88,	12,	12,	88,	12,	12,	88,	12,	50,	12,	50,	50,	88,	88,	50,	12,	88,	50,	12,	50,	50,	12,	88,	12,	88,	88,	50,	88,	88,	12,	12,	12,	50,	88,	50,	12,];

} else if (version === 'points') {
  breakSpace = '';
  currency = "";
  points="points";
  rewardEasy= "100 points";
  rangeLow = "120";
  rangeHigh = "400 points";

  // practice variables
  practiceOutcome     = ["win", "lose", "lose", "win"]
  practiceHard        = [178, 268, 358, 412];
  practiceEasy        = [100, 100, 100, 100];
  practiceProbability = [50,  12,  50,  88];

  // experiment variables
  experimentOutcome = ["lose", "lose", "lose", "win", "lose",	"win", "lose", "win", "win", "win", "lose",	"win", "lose", "win", "lose",	"lose",	"win", "lose", "win", "lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"win", 	"lose",	"lose",	"lose",	"win", 	"lose",	"win", 	"win", 	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"win", 	"win", 	"lose",	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"lose",	"win", 	"win", 	"lose",	"win", 	"win", 	"win", 	"lose",	"win", 	"win", 	"lose",	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"win", 	"win", 	"win", 	"win", 	"lose",	"lose",	"win", 	"lose",	"win", 	"lose",	"lose"];
  hardAmount = [304, 142,	286,	322,	178,	196,	268,	178,	214,	250,	394,	232,	214,	142,	304,	124,	358,	232,	412,	412,	250,	394,	322,	412,	268,	340,	250,	376,	178,	142,	304,	340,	322,	124,	358,	376,	376,	214,	358,	160,	286,	268,	124,	196,	160,	286,	232,	340,	394,	196,	160,	259,	349,	385,	421,	403,	367,	367,	403,	277,	151,	187,	421,	133,	187,	151,	313,	313,	385,	259,	421,	295,	205,	277,	349,	187,	295,	313,	367,	169,	259,	241,	133,	331,	223,	223,	403,	133,	241,	331,	223,	385, 241,	331,	277,	205,	169,	349,	169,	295,	205,	151];
  easyAmount = [100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,	100,];
  experimentProbability = [12,	50,	50,	88,	12,	88,	50,	88,	50,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	50,	12,	12,	88,	88,	50,	88,	50,	50,	12,	50,	88,	50,	88,	12,	12,	88,	88,	50,	88,	12,	12,	50,	50,	12,	88,	88,	12,	88,	12,	50,	12,	88,	50,	88,	12,	50,	12,	88,	50,	88,	88,	50,	50,	50,	50,	88,	12,	12,	88,	12,	12,	88,	12,	50,	12,	50,	50,	88,	88,	50,	12,	88,	50,	12,	50,	50,	12,	88,	12,	88,	88,	50,	88,	88,	12,	12,	12,	50,	88,	50,	12,];
}

