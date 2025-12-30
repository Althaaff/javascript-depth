function lastStoneWeight(stones) {
  if (stones.length === 1) {
    return stones[0];
  }

  while (stones.length > 1) {
    const sortedArr = stones.sort((a, b) => a - b);
    const x = sortedArr.pop(sortedArr[sortedArr.length - 1]);
    const y = sortedArr.pop(sortedArr[sortedArr.length - 2]);

    const diff = Math.abs(y - x);
    if (diff > 0) sortedArr.push(diff);
  }

  return stones[0] || 0;
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
console.log(lastStoneWeight([2, 2]));
console.log(lastStoneWeight([5]));
console.log(lastStoneWeight([10, 4, 2, 10]));
