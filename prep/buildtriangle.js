function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(height) {
  let step = ""
  for (let i = 1; i <= height; i++) {
    step += makeLine(i);
  }
  return step;
}

console.log(buildTriangle(10));
