let some_array = [];
function range(start, end, step) {
  if ((start == "undefined") || (end == "undefined") || (end == "undefined") || (start > end) || (step <= 0)) {
    return (some_array);
  } else {
    some_array = [];
    let newNumber = start;
    for (let i = 0; start + i * step <= end; i ++) {
      newNumber = start + i * step
      some_array.push(newNumber);
    }
    return (some_array);
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range());
console.log(range(10, 5, 5));
console.log(range(5, 10, -5));