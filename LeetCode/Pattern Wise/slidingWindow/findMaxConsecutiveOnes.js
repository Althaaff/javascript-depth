// find max consecutive ones from the input (sliding window)

function findMaxConsecutiveOnes(nums) {
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 1) {
      maxLen = Math.max(maxLen, right - left + 1);
    } else {
      left = right + 1;
    }
  }
  return maxLen;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([0, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([0, 0, 0, 1, 11]));
