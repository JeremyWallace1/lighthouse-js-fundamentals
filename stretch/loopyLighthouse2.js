function loopyLighthouse(range, multiples, words) {
  //range = start and end values of loop
  for (let i = range[0]; i <= range[1]; i++) {
  //multiples = which numbers you want to replace with words
  //words = which words to replace the multiples with
    if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]); 
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);