function pairSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const currenSum = nums[i] + nums[j];

      if (currenSum === target) {
        return [i, j];
      }
    }
  }
}

console.log(pairSum([0, 7, 1, 9], 7));
console.log(pairSum([0, 7, 1, 9], 10));
console.log(pairSum([4, 9, 2, 1, 7], 5));
console.log(pairSum([4, 4], 8));
