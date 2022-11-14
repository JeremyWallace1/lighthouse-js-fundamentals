const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function(moves) {
  let position = [];
  let x = 0;
  let y = 0;
  for (let move of moves) {
    if (move === 'south') {
      y--;
    } else if (move === 'north') {
      y++;
    } else if (move === 'west') {
      x--;
    } else if (move === 'east') {
      x++;
    }
  }
  position.push(x,y);
  return position;
}

console.log(finalPosition(moves));