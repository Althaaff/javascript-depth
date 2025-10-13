function findMaxAverage(nums, k) {
  if (k > nums.length) return;

  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
    console.log(windowSum);
  }

  maxSum = windowSum;

  for (let j = k; j < nums.length; j++) {
    windowSum += nums[j] - nums[j - k];

    maxSum = Math.max(windowSum, maxSum);
  }

  return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
