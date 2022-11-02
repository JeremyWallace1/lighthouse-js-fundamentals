let num = 99;

while (num >= 1) {
  if (num !== 1 && num !== 2) { // if not 1 bottle or 2 bottles display the below
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num -1) + " bottles of juice on the wall!");
  } else if (num === 2) { // if 2 bottles, display the below so bottles becomes bottle when you get to 1
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num -1) + " bottle of juice on the wall!");
  } else if (num === 1) { // if 1 bottle, display the below so it is bottle for 1 and bottles for 0
    console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num -1) + " bottles of juice on the wall!");
  }
  num -= 1;
}
