function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

let laugh = 

emotions("happy", function(num) {
  let sound = "";
  for (i = 1; i <= num; i++) {
    sound += "ha"
  }
  sound += "!";
  return sound;
});