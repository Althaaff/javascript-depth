function heightChecker(heights) {
  // creates new shallow copy of the original array:
  let expectedArr = [...heights].sort((a, b) => a - b);

  let n = heights.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (heights[i] !== expectedArr[i]) {
      count++;
    }
  }

  return count;
}

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
