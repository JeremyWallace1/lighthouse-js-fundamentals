// Reading input from the command line
// -- Reading input from the command line in node is quite difficult in a normal situation. 
// -- For this kata we'd like you to setup a package.json file along side your code for this kata:
let prompt = require("prompt-sync")(
  {
    "dependencies": {
      "prompt-sync": "^4.1.5"
    }
  }
);
// code below (replace this example)
// Write a guessing game where the user has to guess a secret number. 
//  -- Generating a random number

const randomNumber = Math.floor(Math.random() * (100) + 1);
let answer;
let attempts = 0;

function isNum(v) {
  return /\d/.test(v);
}

const numberGuesser = function() {
  do {
    console.log(randomNumber + ", " + typeof randomNumber);
    answer = prompt("Guess a number: ");
    if 
    switch(randomNumber) {
      case (answer === randomNumber):
        attempts += 1;
        console.log("You got it! You took " + attempts + " attempts!");
        return;
      case (answer < randomNumber):
        attempts += 1;
        console.log("Too Low!");
        break;
      case (answer > randomNumber):
        attempts += 1;
        console.log("Too High!");
        break;
      case ((typeof answer) !== "number"):
        console.log("Not a number! Try again!");
    }
  } while (answer !== randomNumber);
};

// After every guess the program tells the user whether their number was too large or too small. 
// At the end, the number of tries needed should be printed.
// Inputting the same number multiple times should only count as one try. 
// If the user provides an answer which isn't a number, print an error message and do not count this as a try.


//console.log(generateNumber());
//console.log("You answered: " + answer);

numberGuesser();