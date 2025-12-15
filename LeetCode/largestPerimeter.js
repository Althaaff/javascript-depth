function largestPerimeter(nums) {
  nums = nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] + nums[i + 2] > nums[i]) {
      return nums[i + 1] + nums[i + 2] + nums[i];
    }
  }

  return 0;
}

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 2, 1, 10]));
