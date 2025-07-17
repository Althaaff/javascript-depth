function findFactorial(n) {
  // base case :
  if (n === 0) {
    return 1;
  }

  // recursive function call happens here :
  return n * findFactorial(n - 1);
}

console.log(findFactorial(5));
