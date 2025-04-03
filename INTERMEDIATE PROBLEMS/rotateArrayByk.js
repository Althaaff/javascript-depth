function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n; // Normalize k if it's greater than the array length
  if (k === 0) return arr; // No need to rotate if k is 0

  // Helper function to reverse a portion of the array
  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  reverse(0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the remaining elements
  reverse(k, n - 1);

  return arr;
}

// Example Usage:
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5, 6, 7, 1, 2, 3, 4]

// console.log(3 % 7);
