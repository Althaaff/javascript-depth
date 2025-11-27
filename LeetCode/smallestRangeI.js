function smallestRangeI(nums, k) {
  nums = nums.sort((a, b) => a - b);

  let originalRange = Math.max(...nums) - Math.min(...nums);

  let answer = Math.max(0, originalRange - 2 * k);

  return answer;
}

console.log(smallestRangeI([1, 3, 6], 3));
console.log(smallestRangeI([0, 10], 2));
console.log(smallestRangeI([1], 0));
