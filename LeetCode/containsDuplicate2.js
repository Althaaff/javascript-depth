// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array
// such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// brute-force solution (doesnt work for larger inputs):
function containsDuplicate1(nums, k) {
  if (nums.length === 0) return [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        let constraint = j - i;

        if (constraint <= k) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(containsDuplicate1([1, 2, 3, 1], 3));

// optimized solution (hashmap):
function containsDuplicate2(nums, k) {
  const hashmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (i - hashmap.get(nums[i]) <= k) return true;

    hashmap.set(nums[i], i);
  }

  return false;
}

console.log(containsDuplicate2([1, 2, 3, 1], 3));
