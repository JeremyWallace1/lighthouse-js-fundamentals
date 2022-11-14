// x and y are parameters in this function declaration
function add(x, y) {
  // function body
  // Here, "sum" variable has a scope within the function.
  // Such variables defined within a function are called Local variables
  // You can try giving it another name
  let sum = x + y;
  return sum; // return statement
}

// 1 and 2 are passed into the function as arguments,
// and the result returned by the function is stored in a new variable "sum"
// Here, "sum" is another variable, different from one used inside the function

let sum = add(1, 2);
console.log(sum);