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
 