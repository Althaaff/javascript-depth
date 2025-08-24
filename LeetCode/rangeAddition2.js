function rangeAddition(m, n, operations) {
  if (operations.length === 0) return m * n;

  let minA = m;
  let minB = n;

  for (let [a, b] of operations) {
    minA = Math.min(minA, a);
    minB = Math.min(minB, b);
  }

  return minA * minB;
}

console.log(
  rangeAddition(3, 3, [
    [2, 2],
    [3, 3],
  ])
);

console.log(
  rangeAddition(3, 3, [
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
  ])
);

console.log(rangeAddition(3, 3, []));
