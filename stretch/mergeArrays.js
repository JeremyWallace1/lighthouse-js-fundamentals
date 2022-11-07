function merge(arrayOne, arrayTwo) {
  let newArray = [];
  for (let i = 0; i < arrayOne.length; i++) {
    newArray.push(arrayOne[i]);
  }
  for (let j = 0; j < arrayTwo.length; j++) {
    newArray.push(arrayTwo[j]);
  }
  newArray = newArray.sort();
  return(newArray);
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);