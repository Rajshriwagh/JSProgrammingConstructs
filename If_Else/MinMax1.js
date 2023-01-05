let Array = [];
for(let i = 0 ; i < 5 ; i++){
    let randomNumber = Math.floor(Math.random()*(999-100+1))+100;
    Array.push(randomNumber);
}
console.log(Array);
let minNumber = Array.sort((a,b) => a-b);
console.log(minNumber[0]);
let maxNumber = Array.sort((a,b)=>b-a);
console.log(maxNumber[0]);