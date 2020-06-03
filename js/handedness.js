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

function handedness (){
   // participant_response=input("Are you right or left handed?");
    if (participant_response == 'right'){
        EasyKey_uCase= 108;  // l key
        HardKey_uCase= 115;  // s key
    } else if (participant_response == 'left') {
        EasyKey_uCase= 115;  // s key
        HardKey_uCase= 108;  // l key
    }
   
}

handedness()
