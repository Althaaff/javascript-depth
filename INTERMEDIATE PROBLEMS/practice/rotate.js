function rotateArray(arr, k) {
  const n = arr.length; // 5
  k = k % n; // 4

  // helper function reverse() expects start and end paramaters :

  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // swaps indexOf elements  if start < end

      start++;
      end--;
    }
  }

  // reversed entire array
  reverse(0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the remaining elements
  reverse(k, n - 1);

  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 4));
