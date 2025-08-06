// Move zeros :
function moveNonZeros(nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex++] = nums[i];
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveNonZeros([0, 1, 0, 3, 12]));

// two pointer technique to solve move non zero problem by swapping elements :
function moveNonZeros(nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
  }

  return nums;
}

console.log(moveNonZeros([0, 3, 0, 3, 0, 5, 0]));
