const camelCase = function(input) {
  // Your code here
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") { //find the spaces
      input = input.slice(i,-1); //remove the space
    }
  }
  return input;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));