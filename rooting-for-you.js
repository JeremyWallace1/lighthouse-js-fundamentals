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
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > compare) {
      winner = vegetables[i].submitter;
      compare = vegetables[i][metric];
    } else if (vegetables[i][metric] == compare) {
      winner += " & " + vegetables[i].submitter;
    }
  }
  return winner;
}

console.log(judgeVegetable(vegetables, metric));