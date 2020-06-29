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
         EasyKey_uCase = 'L';  // 108
         HardKey_uCase = 'S';  // 115
         antihandedness = 'LEFT';
         EasyKey_ASCII = 108;
         HardKey_ASCII = 115;
    } else if (handedness.toUpperCase() == 'LEFT') {
         EasyKey_uCase = 'S';  // 115
         HardKey_uCase = 'L';  // 108
         antihandedness = 'RIGHT';
         EasyKey_ASCII = 115;
         HardKey_ASCII = 108;
    } 
 }