// [[1,2],[3,4]] r = 4, c = 1

function matrixReshape(nums, r, c) {
  const flattedArray = flatArray(nums);
  console.log(flattedArray);

  // custom flattening array using reduce method :
  function flatArray(arr) {
    return arr.reduce((acc, curr) => {
      if (Array.isArray(curr)) {
        return acc.concat(flatArray(curr));
      } else {
        return acc.concat(curr);
      }
    }, []);
  }

  const newMatrix = [];
  if (flattedArray.length === r * c) {
    console.log("logged");
    for (let i = 0; i < r; i++) {
      newMatrix[i] = [];

      for (let j = 0; j < c; j++) {
        newMatrix[i][j] = flattedArray[i * c + j];
      }
    }
  } else {
    return nums;
  }

  return newMatrix;
}
console.log(matrixReshape([[1], [3]], 1, 3));
