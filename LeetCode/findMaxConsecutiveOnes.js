function maxConsecutiveOnes(nums) {
  let currLength = 0;
  let maxLength = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === 1) {
      currLength++;
      maxLength = Math.max(currLength, maxLength);
    } else {
      currLength = 0;
      if (nums[i] === 1) {
        currLength++;
      }
    }
    i++;
  }

  return maxLength;
}
// right 0 --> 1 2
// left
// currLength 2

console.log(maxConsecutiveOnes([0, 0, 1, 1, 1]));
console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log(maxConsecutiveOnes([0, 1]));
