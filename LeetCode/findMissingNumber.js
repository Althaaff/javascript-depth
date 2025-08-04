function findMissingNumber(nums) {
  if (nums.length === 0) return [];

  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}

console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(findMissingNumber([0, 1]));
