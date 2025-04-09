function knapsack(weights, values, W) {
  console.log("weights", weights);
  console.log("values", values);
  console.log("W.capacity", W);
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (weights[i - 1] <= w) {
        const include = values[i - 1] + dp[i - 1][w - weights[i - 1]];
        console.log("include", [w - weights[i - 1]]);

        const exclude = dp[i - 1][w];
        // take the max
        dp[i][w] = Math.max(include, exclude);
      } else {
        // cannot include, just copy above value
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][W]; // Max value for full capacity and all items
}

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;

console.log(knapsack(weights, values, capacity)); // Output: 7
