function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1; // base case: element not found
  }
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid; // base case: element found
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, high); // search right half
  } else {
    return binarySearch(arr, target, low, mid - 1); // search left half
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
