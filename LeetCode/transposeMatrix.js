function transposeMatrix(matrix) {
  let res = [];

  for (let i = 0; i < matrix[0].length; i++) {
    res.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      res[j].push(matrix[i][j]);
    }
  }

  return res;
}

console.log(
  transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
