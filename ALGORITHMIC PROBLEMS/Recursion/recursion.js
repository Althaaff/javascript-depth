//  Understanding Recursion work flows :

// 1. Factorial :
// Problem: Calculate the factorial of a number n, which is the product of all positive integers up to n.

// Base case: The condition where recursion stops. (n === 0)

// Recursive case: The function calls itself with n-1.

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

// 2. Fibonacci Sequence :
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));

//  Sum of an Array :
// Problem: Calculate the sum of all elements in an array using recursion.

// Example:

// sumArray([1, 2, 3, 4, 5]) should return 15.

// sumArray([]) → 0
// sumArray([5]) → 5 + 0 = 5
// sumArray([4,5]) → 4 + 5 = 9
// sumArray([3,4,5]) → 3 + 9 = 12
// sumArray([2,3,4,5]) → 2 + 12 = 14
// sumArray([1,2,3,4,5]) → 1 + 14 = 15

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Reverse String :
// Example:

// reverseString("hello") should return "olleh" :

// Note: peeling off the last letter and stacking it up as you go back

function reverseString(str) {
  if (str === "") {
    return "";
  }

  return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
}

console.log(reverseString("Hello"));

// Power of a Number :
// Problem: Calculate x raised to the power of n using recursion.
// power(2, 3) should return 8 (2^3).

function power(x, n) {
  if (n === 0) {
    return 1;
  }

  return x * power(x, n - 1);
}

console.log(power(3, 2));
