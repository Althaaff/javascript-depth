function findFirstRepeating(arr) {
  let set = new Set();

  for (let num of arr) {
    if (set.has(num)) {
      return num;
    }

    set.add(num);
  }

  return -1;
}

console.log(findFirstRepeating([1, 2, 3, 4, 5, 6, 7, 7]));
