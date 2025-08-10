function isLandPerimeter(grid) {
  let rows = grid.length,
    cols = grid[0].length,
    perimeter = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;

        if (i > 0 && grid[i - 1][j] === 1) perimeter -= 2;
        if (j > 0 && grid[i][j - 1] === 1) perimeter -= 2;
      }
    }
  }

  return perimeter;
}

console.log(
  isLandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
console.log(isLandPerimeter([[1]]));
console.log(isLandPerimeter([[1, 0]]));
