function dominantIndex(nums) {
  let largestElement = 0;
  let largestElementIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (largestElement < nums[i]) {
      largestElement = nums[i];
      largestElementIndex = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === largestElementIndex) continue;

    if (largestElement < nums[i] * 2) {
      return -1;
    }
  }

  return largestElementIndex;
}

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([-1, 0, -32, -4]));
console.log(dominantIndex([1, 2, 3, 4]));
console.log(dominantIndex([0, 0, 0, 1]));
