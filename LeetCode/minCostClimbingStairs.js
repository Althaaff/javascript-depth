function minCostClimbingStairs(cost) {
  cost.push(0);

  let i = cost.length - 4;

  while (i >= 0) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);

    i--;
  }

  return Math.min(cost[0], cost[1]);
}

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
