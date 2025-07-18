function findRangeOfNumber(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = findRangeOfNumber(startNum, endNum - 1);

    numbers.push(endNum);
    return numbers;
  }
}

console.log(findRangeOfNumber(1, 5));
