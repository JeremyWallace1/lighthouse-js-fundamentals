const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  let winner = "";
  let compare = 0;  
  console.log(vegetables.length);
  for (i = 0; i < vegetables.length; i++) {
    console.log(vegetables.length);
    if (vegetables.metric > compare) {
      console.log([vegetables]);
      console.log(winner);
      console.log(compare);
      console.log(i);
      console.log(vegetables);
      winner = [vegetables].submitter;
      compare = [vegetables].metric;
    } else if ([vegetables].metric = compare) {
      winner += " & " + [vegetables].submitter;
    }
  }
  return winner;
}

console.log("The winner is... " + judgeVegetable(vegetables, metric));