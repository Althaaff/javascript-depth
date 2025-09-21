function findShortestSubArray(nums) {
  let freqMap = new Map();
  let firstPos = new Map();
  let lastPos = new Map();

  // populate frequency map and first/last positions :
  nums.forEach((num, i) => {
    if (!firstPos.has(num)) {
      firstPos.set(num, i);
    }

    lastPos.set(num, i);
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  });

  let degree = Math.max(...freqMap.values());
  let minLength = nums.length;

  for (let [num, count] of freqMap.entries()) {
    if (count === degree) {
      let length = lastPos.get(num) - firstPos.get(num) + 1;

      if (length < minLength) {
        minLength = length;
      }
    }
  }

  return minLength;
}

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
