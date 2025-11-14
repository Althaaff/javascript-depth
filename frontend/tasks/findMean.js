function mean(array) {
  if (array.length === 0) {
    return NaN;
  }

  let total = 0;
  let length = array.length;

  for (let num of array) {
    total += num;
  }

  return total / length;
}

console.log(mean([4, 2, 8, 6]));
console.log(mean([1, 2, 3, 4]));
console.log(mean([]));
