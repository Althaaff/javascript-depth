function projectionArea(grid) {
  let topViewCount = 0;
  let frontViewCount = 0;
  let sideViewCount = 0;
  let colMax = Array.from(grid).fill(0);

  for (let i = 0; i < grid.length; i++) {
    // finding rows tallest nums
    frontViewCount += Math.max(...grid[i]);

    for (let j = 0; j < grid.length; j++) {
      // finding top view count
      if (grid[i][j] > 0) {
        topViewCount++;
      }
      // finding columns tallest nums
      colMax[j] = Math.max(colMax[j], grid[i][j]);
    }
  }
  sideViewCount = colMax.reduce((sum, curr) => sum + curr, 0);

  return frontViewCount + topViewCount + sideViewCount;
}

console.log(
  projectionArea([
    [1, 3],
    [9, 2],
  ])
);

console.log(
  projectionArea([
    [1, 2],
    [3, 4],
  ])
);

console.log(projectionArea([[2]]));

console.log(
  projectionArea([
    [1, 0],
    [0, 2],
  ])
);

//  u can find array colums max (tallest) value
// const grid = [
//   [1, 2],
//   [0, 1],
// ];

// let res = 0;
// let i = 0;
// for (let i = 0; i < grid.length; i++) {
//   res += Math.max(...grid.map((r) => r[i]));
// }

// console.log(res);
