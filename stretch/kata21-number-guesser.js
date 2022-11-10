// Write a guessing game where the user has to guess a secret number. 
// After every guess the program tells the user whether their number was too large or too small. 
// At the end, the number of tries needed should be printed.
// Inputting the same number multiple times should only count as one try. 
// If the user provides an answer which isn't a number, print an error message and do not count this as a try.
// Generating a random number
// Reading input from the command line
// -- Reading input from the command line in node is quite difficult in a normal situation. 
// -- For this kata we'd like you to setup a package.json file along side your code for this kata:

{
  "dependencies": {
    "prompt-sync": "^4.1.5"
  }
}

let prompt = require("prompt-sync")();

// code below (replace this example)
let answer = prompt("Guess a number: ");
console.log("You answered: " + answer);