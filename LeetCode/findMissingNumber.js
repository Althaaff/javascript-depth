// brute force solution
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

// optimized solution for the above problem :
function findMissingNum(nums) {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);

  return expectedSum - actualSum;
}

console.log(findMissingNumber([3, 0, 1, 4, 2, 6]));
