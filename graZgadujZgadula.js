
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) { 
    maximum = parseInt(prompt("Enter a valid number!"))};

const targetNum = Math.floor(Math.random() * maximum + 1);
console.log(`The correct number was ${targetNum}`)

let guess = parseInt(prompt("Guess the number"));
let attempts = 1

while (guess !== targetNum) {attempts+=1;
    if(guess > targetNum) { guess = parseInt(prompt("Too high, try once more"))}
    else { guess = parseInt(prompt("Too low, try again"))}
    };
    
console.log(`You got it in ${attempts} guesses!`)


 