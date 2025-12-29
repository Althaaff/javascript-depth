function isBoomerang(points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;

  const hasDuplicant =
    (x1 === x2 && y1 === y2) ||
    (x1 === x3 && y1 === y3) ||
    (x2 === x3 && y2 === y3);

  if (hasDuplicant) return false;

  const dx1 = x2 - x1;
  const dy1 = y2 - y1;
  const dx2 = x3 - x1;
  const dy2 = y3 - y1;

  const boomBergValue = dx1 * dy2 - dy1 * dx2;

  if (boomBergValue === 0) return false;

  return true;
}

console.log(
  isBoomerang([
    [1, 1],
    [2, 3],
    [3, 2],
  ])
);

console.log(
  isBoomerang([
    [2, 2],
    [2, 2],
    [2, 2],
  ])
);
console.log(
  isBoomerang([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
