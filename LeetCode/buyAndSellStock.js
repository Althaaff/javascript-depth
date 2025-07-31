/* 
  You want to buy on 1 day and sell on a future day (you can't sell before you buy).

  🧠 Goal:

  Maximize your profit = sell price - buy price

  You’re allowed to do only one transaction:

  Pick one day to buy

  Pick one later day to sell

  Get the maximum profit possible.
 */

// brute-force approach :
function buyAndSellStock(prices) {
  let maxProfit = 0;
  let currProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      currProfit = prices[j] - prices[i];
      // console.log("current profit:", currProfit);

      if (currProfit > maxProfit) {
        maxProfit = currProfit;
      }
    }
  }

  return maxProfit;
}

// console.log(buyAndSellStock([7, 1, 5, 3, 6, 4]));
console.log(buyAndSellStock([7, 6, 4, 3, 1]));

// optimized solution :
function buyAndSellStockPrice(prices) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      maxProfit = Math.max(profit, maxProfit);
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
}

console.log(buyAndSellStockPrice([7, 6, 4, 3, 1]));
console.log(buyAndSellStockPrice([7, 1, 5, 3, 6, 4]));
