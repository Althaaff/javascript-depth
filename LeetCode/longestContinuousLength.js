function findLengthOfLCIS(arr) {
  let count = 1;
  let maxCount = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      count = count + 1;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 1;
    }
  }

  return Math.max(maxCount, count);
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]));
