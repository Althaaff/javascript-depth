// Maximum Sum of Distinct Subarrays With Length K : (sliding window)

function distinctSubArr(arr, k) {
  if (arr.length < k) return 0;

  let maxSum = 0;
  let currSum = 0;
  let set = new Set();

  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    while (set.has(arr[right])) {
      set.delete(arr[left]);
      currSum -= arr[left];
      left++;
    }

    set.add(arr[right]);
    currSum += arr[right];

    if (right - left + 1 > k) {
      set.delete(arr[left]);
      currSum -= arr[left];
      left++;
    }

    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, currSum);
    }
  }

  return maxSum;
}

console.log(distinctSubArr([3, 5, 3, 4], 2));

// console.log(distinctSubArr([4, 4, 4], 3));
