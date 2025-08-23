function longestHarmoniousSubSequence(nums) {
  let maxNum = 0;
  const freqMap = new Map();

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let num of freqMap.keys()) {
    if (freqMap.has(num + 1)) {
      const length = freqMap.get(num) + freqMap.get(num + 1);

      maxNum = Math.max(length, maxNum);
    }
  }
  // console.log("freqMap", freqMap);

  return maxNum;
}

console.log(longestHarmoniousSubSequence([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(longestHarmoniousSubSequence([1, 1, 1, 1, 1, 1, 1]));
console.log(longestHarmoniousSubSequence([1, 2, 3, 4]));

// const arr = [1, 2, 3, 3, 4];

// const freqMap = new Map();

// for (let num of arr) {
//   freqMap.set(num, (freqMap.get(num) || 0) + 1);
// }

// // console.log("get", freqMap.get(1 + 4));

// console.log(freqMap);
