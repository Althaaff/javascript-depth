function fairCandySwap(aliceSizes, bobSizes) {
  let sumA = 0;
  let sumB = 0;

  for (let num of aliceSizes) {
    sumA += num;
  }

  for (let num of bobSizes) {
    sumB += num;
  }

  let diff = (sumA - sumB) / 2;

  let set = new Set(bobSizes);

  for (let x of aliceSizes) {
    if (set.has(x - diff)) {
      return [x, x - diff];
    }
  }
}

console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([1, 2, 5], [2, 4]));
console.log(fairCandySwap([2], [1, 3]));
console.log(fairCandySwap([1, 2], [2, 3]));
