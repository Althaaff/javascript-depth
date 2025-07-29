function sumArray(arr) {
  if (arr.length === 0) {
    return 0; // base case
  }
  return arr[0] + sumArray(arr.slice(1)); // recursive step
}
console.log(sumArray([1, 2, 3, 4, 5]));
