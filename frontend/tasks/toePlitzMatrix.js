function isToeplitzMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return true; // empty matrix is considered Toeplitz (edge case)
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  // Check every element with the one above-left (i-1, j-1)
  // If they exist and are not equal → not Toeplitz
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false;
      }
    }
  }

  return true;
}
console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);

console.log(
  isToeplitzMatrix([
    [1, 2],
    [2, 2],
  ])
);
