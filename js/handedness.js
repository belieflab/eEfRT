// pseudo-code for our handedness function

// function handedness (){
//     input("Are you right or left handed?");
//     if participant response = right
//     then
//     EasyKey_uCase: L; 
//     HardKey_uCase: S;
//     else participant response = left 
//     then
//     EasyKey_uCase: S; 
//     HardKey_uCase: L;
// }

function checkHandedness(){
     
    if (handedness.toUpperCase() == 'RIGHT'){
         handedness = 'RIGHT';
         antihandedness = 'LEFT';
         EasyKey_uCase = 'L';  // 108
         HardKey_uCase = 'S';  // 115
         EasyKey_ASCII = 108;
         HardKey_ASCII = 115;
     //     cartoon = document.getElementById("cartoon").src= "stim/cartoonRight.png";
    } else if (handedness.toUpperCase() == 'LEFT') {
         handedness = 'LEFT';
         antihandedness = 'RIGHT';
         EasyKey_uCase = 'S';  // 115
         HardKey_uCase = 'L';  // 108
         EasyKey_ASCII = 115;
         HardKey_ASCII = 108;
     //     cartoon = document.getElementById("cartoon").src= "stim/cartoonLeft.png";
    } 
 }

 function practiceOrientation(){
      let practice_prompt_array = [];
     if (handedness === "RIGHT"){
       for (let i = 0; i <= 3; i++){
         practice_prompt_array.push(
           '<br>'+
           '<br>'+
         '<p style="color:white;">Press the <strong>'+HardKey_uCase+'</strong> key. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Press the <strong>'+EasyKey_uCase+'</strong> key.</p> ' +
         '<p style="color:white;">Easy is worth: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Hard is worth: </p> ' +
         '<p style="color:white;"> '+practiceHard[i]+' points&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp '+practiceEasy[i]+' points</p> ' +
         '<br>'+
         '<br>'+
         '<p style="color:white;"> The probability of winning is ' +practiceProbability[i]+'%.   </p> ')
       }
     } else if (handedness === "LEFT"){
       for (let i = 0; i <= 3; i++){
         practice_prompt_array.push(
           '<br>'+
           '<br>'+
         '<p style="color:white;">Press the <strong>'+EasyKey_uCase+'</strong> key. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Press the <strong>'+HardKey_uCase+'</strong> key.</p> ' +
         '<p style="color:white;">Easy is worth: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Hard is worth: </p> ' +
         '<p style="color:white;"> '+practiceEasy[i]+' points&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp '+practiceHard[i]+' points</p> ' +
         '<br>'+
         '<br>'+
         '<p style="color:white;"> The probability of winning is ' +practiceProbability[i]+'%.   </p> ')
       }
     }
   }