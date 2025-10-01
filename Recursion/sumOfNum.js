function sumOfNum(n, sum) {
  if (n === 0) return sum;

  sum += n; // 5 - 9 - 12 - 14 - 15

  return sumOfNum(n - 1, sum);
}
let sum = 0;

console.log(sumOfNum(5, sum));
