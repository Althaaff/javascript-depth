function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
}

// console.log(twoSum([3, 6, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));
