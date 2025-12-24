function largestSumAfterKNegations(nums, k) {
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length && k > 0; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i]; // flip the sign ex: ( - to +)
      k--;
    }
  }

  if (k === 0 || k % 2 === 0) {
    // if k is 0 we are done return sum of array elements or
    // k if its even double flip make numbers as it is for ex : first flip = [-2 to +2] second flip = [+2 to -2] again -2
    // so donneed to flip again just return the maximized sum
    return nums.reduce((sum, num) => sum + num, 0);
  }

  // if k is odd flip the smallest absolute value from the array
  // find the index of smallest absolute value
  let minIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (Math.abs(nums[i]) < Math.abs(nums[minIndex])) {
      minIndex = i;
    }
  }

  // flip the smallest absolute value :
  nums[minIndex] = -nums[minIndex];

  return nums.reduce((sum, num) => sum + num, 0);
}

console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3));
console.log(largestSumAfterKNegations([4, 2, 3, 1], 1));
console.log(largestSumAfterKNegations([4, 2, 3], 1));
