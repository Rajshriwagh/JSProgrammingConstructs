//Problem 2
const ps = require("prompt-sync");
const prompt = ps();

let day = prompt("Enter the date !! ");
let month = prompt("Enter the Month !! ");
switch(+month){
    case 03:
        if(+day>=20 && +day<=31){
            console.log("true");
        }else{
            console.log("false");
        }
        break;
    case 04:
        if(+day>=1 && +day<=30){
            console.log("true");
        }else{
            console.log("false");
        }
        break;
    case 05:
        if(+day>=1 && +day<=31){
            console.log("true");
        }else{
            console.log("false");
        }
        break;
    case 06:
        if(+day>=1 && +day<=20){
            console.log("true");
        }else{
            console.log("false");
        }
        break;
    default:
        console.log("Entered wrong Month !!");                
}