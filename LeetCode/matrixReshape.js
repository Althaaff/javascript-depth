// // i want to do just The reshaped matrix should be filled with all the elements of the original matrix
// // in the same row-traversing order as they were.

// // If the reshape operation with given parameters is possible and legal, output the new reshaped matrix;
// // Otherwise, output the original matrix.

// /*
//  Input: mat = [[1,2],[3,4]], r = 1, c = 4
//  Output: [[1,2,3,4]]
// */

function matrixReshape(nums, r, c) {
  let flatArray = nums.flat();
  let totalElements = flatArray.length;

  let newMatrix = [];

  if (totalElements === r * c) {
    for (let i = 0; i < r; i++) {
      newMatrix[i] = [];

      for (let j = 0; j < c; j++) {
        newMatrix[i][j] = flatArray[i * c + j];
      }
    }
  } else {
    return nums;
  }

  return newMatrix;
}

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
);
