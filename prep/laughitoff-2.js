
function laugh(num) {
  let laughing = "";
  for (let i = 0; i < num; i++) {
    laughing += "ha";
  }
  laughing += "!";
  return laughing;
}

console.log(laugh(3));