function findPow(base, exponent) {
  if (exponent <= 0) {
    return 1;
  }

  return base * findPow(base, exponent - 1);
}

console.log(findPow(2, 4));
