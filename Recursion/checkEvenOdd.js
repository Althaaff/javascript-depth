function checkEvenOrOdd(num) {
  // if num is negative then convert it to its absolute value
  if (num < 0) {
    num = Math.abs(num);
  }

  // if num is `0` then it's (even)
  if (num === 0) {
    return true;
  }

  // if num is equal to `1` then its (odd)
  if (num === 1) {
    return false;
  } else {
    // Recursive case: Subtract 2 from the number and recursively check the new number.
    num = num - 2;
    return checkEvenOrOdd(num);
  }
}

console.log(checkEvenOrOdd(2));
console.log(checkEvenOrOdd(-3));
console.log(checkEvenOrOdd(345));
