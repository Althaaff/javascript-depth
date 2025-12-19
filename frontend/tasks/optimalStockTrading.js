function optimalStockTrading(prices) {
  let minValue = Math.min(...prices);
  let maxValue = Math.max(...prices);

  return maxValue - minValue;
}

console.log(optimalStockTrading([1, 2, 3, 4]));
console.log(optimalStockTrading([4, 3, 2, 1]));
console.log(optimalStockTrading([6, 8, 1, 2, 30, 19]));
