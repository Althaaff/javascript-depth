function numEquivDominoPairs(dominoes) {
  let freq = new Map();

  for (let [a, b] of dominoes) {
    const key = [Math.min(a, b), Math.max(a, b)].toString();

    freq.set(key, (freq.get(key) || 0) + 1);
  }

  let totalPairs = 0;

  for (let count of freq.values()) {
    totalPairs += (count * (count - 1)) / 2;
  }

  return totalPairs;
}

console.log(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ]),
);

console.log(
  numEquivDominoPairs([
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 2],
    [2, 2],
  ]),
);
