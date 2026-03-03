function findMax(arr) {
  let max = 0;

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(findMax([12, 8, -19, 3, 4, 5, 6, 18, 11]));
