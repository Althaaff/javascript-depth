function findKthMissingNumber(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k + count) {
      count++;
    }
  }

  return count + k;
}

console.log(findKthMissingNumber([2, 3, 4, 7, 11], 5));
console.log(findKthMissingNumber([1, 2, 3, 4], 2));
