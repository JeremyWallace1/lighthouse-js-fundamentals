const smartGarbage = function (trash, bins) {
  // Your code in here ...
  if (trash === 'waste') {
    bins.waste++;
  } else if (trash === 'recycling') {
    bins.recycling++;
  } else {
    bins.compost++;
  }
  return bins;
};
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));