let laugh = function(num) {
  let sound = "";
  for (i = 1; i <= num; i++) {
    sound += "ha"
  }
  sound += "!";
  return sound;
}

console.log(laugh(10));