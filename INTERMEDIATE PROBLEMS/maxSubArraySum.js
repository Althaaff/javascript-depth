// given an array of numbers and a number k.
// You need to find the maximum sum of any contiguous subarray of size k

function maxSubarraySum(arr, k) {
  if (arr.length < k) return null; // Edge case

  // Step 1: Initial sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  console.log(maxSum);

  // Step 2: Slide the window
  for (let i = k; i < arr.length; i++) {
    console.log(i);
    windowSum = windowSum - arr[i - k] + arr[i];
    console.log(i, windowSum);
    maxSum = Math.max(maxSum, windowSum);

    console.log("maxSum", maxSum);
  }

  return maxSum;
}

let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

console.log(maxSubarraySum(arr, k));

// practice :
function maxSubarraySum(arr, k) {
  if (arr.length < k) {
    return null;
  }

  let maxSum = 0;

  // step 1: initial sum of first window :
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  // return maxSum;

  let windowSum = maxSum;

  console.log(windowSum);

  // step 2: slide the window :

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];

    // console.log("windowSum", windowSum);

    maxSum = Math.max(maxSum, windowSum);

    // console.log(i, maxSum);
  }

  return maxSum;
}

const arr = [1, 2, 3, 4, 5];
const k = 3;

console.log(maxSubarraySum(arr, k));
