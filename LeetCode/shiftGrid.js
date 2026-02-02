function shiftGrid(grid, k) {
  let arr = grid.flat(),
    len = grid[0].length,
    res = [];

  // when `k` becomes `0` in JS `0` --> is booleanly false so loop will exit :
  while (k--) {
    arr.unshift(arr.pop());
  }

  // when `arr.length` becomes `0` --> in JS `0` is booleanly false so loop will exit :
  while (arr.length) {
    res.push(arr.splice(0, len));
  }

  return res;
}

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const k = 1;

console.log(shiftGrid(input, k));
