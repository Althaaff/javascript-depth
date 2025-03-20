function findFactorial(num) {
  let result = 1;

  for (let i = 1; i < num; i++) {
    result *= i;
    console.log("i", i, "result", result);
  }

  return result;
}

console.log(findFactorial(5));
