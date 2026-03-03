function countFrequency(arr) {
  let freqMap = new Map();

  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  return freqMap;
}

console.log(countFrequency([1, 2, 3, 4, 5, 5, 6]));
