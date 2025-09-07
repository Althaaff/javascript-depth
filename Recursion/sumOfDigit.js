// Function to check sum of digit using recursion
function sum_of_digit(n) {
  if (n == 0) return 0;
  return (n % 10) + sum_of_digit(parseInt(n / 10));
}

var num = 12345;
var result = sum_of_digit(num);
console.log(result);
