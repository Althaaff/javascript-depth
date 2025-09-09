function findMean(arr) {
  const n = arr.length;

  if (n === 1) {
    // base case : when there is only one element:
    return arr[n - 1];
  } else {
    return (findMean(arr.slice(0, n - 1)) * (n - 1) + arr[n - 1]) / n;
  }
}

console.log(findMean([1, 2, 3, 4, 5]));
