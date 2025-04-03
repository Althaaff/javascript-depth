function memoizedFibonacci() {
  let cache = {}; // store computed values

  function fib(n) {
    if (n < 2) return n;

    if (cache[n]) return cache[n]; // Return cached result if exists

    cache[n] = fib(n - 1) + fib(n - 2); // Compute and store result

    return cache[n]; // Return computed value
  }

  return fib; // Return the memoized function
}

// usage of the function :
const fibonacci = memoizedFibonacci();
console.log(fibonacci(9)); // 55
// console.log(fibonacci(50)); // 12586269025 (Fast due to memoization)

// practice :
function memoizedFibonacci() {
  let cache = {};

  function fibo(n) {
    if (n < 2) {
      return n;
    }

    if (cache[n]) return cache[n];

    cache[n] = fibo(n - 1) + fibo(n - 2);

    return cache[n];
  }

  return fibo;
}

const findFibo = memoizedFibonacci();

console.log(findFibo(5));

// working like below :  fib(5) = fib(4) + fib(3)
/* 
     = (fib(3) + fib(2)) + (fib(2) + fib(1))
        = ((fib(2) + fib(1)) + 1) + (1 + 1)
        = ((1 + 0) + 1) + 1 + 1
        = (1 + 1) + 1 + 1
        = 2 + 1 + 1
        = 3 + 2
        = 5
  */

/*

Base cases (stopping condition):

fib(1) = 1

fib(0) = 0

Recursive calls start combining previous results:

fib(2) = fib(1) + fib(0) = 1 + 0 = 1

fib(3) = fib(2) + fib(1) = 1 + 1 = 2

fib(4) = fib(3) + fib(2) = 2 + 1 = 3

fib(5) = fib(4) + fib(3) = 3 + 2 = 5

fib(6) = fib(5) + fib(4) = 5 + 3 = 8

fib(7) = fib(6) + fib(5) = 8 + 5 = 13

fib(8) = fib(7) + fib(6) = 13 + 8 = 21

fib(9) = fib(8) + fib(7) = 21 + 13 = 34

*/
