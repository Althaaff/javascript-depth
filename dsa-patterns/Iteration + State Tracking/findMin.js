function findMin(arr) {
  let min = Infinity;

  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}

console.log(findMin([3, 7, 2, 9, 4, 7, 2]));
