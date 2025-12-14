function repeatedNtimes(arr) {
  let unique = [];

  for (let [index, num] of arr.entries()) {
    if (unique.includes(num)) {
      return num;
    }
    unique.push(num);
  }
}

console.log(repeatedNtimes([5, 1, 5, 2, 5, 3, 5, 4]));
console.log(repeatedNtimes([1, 2, 3, 3]));
console.log(repeatedNtimes([2, 1, 2, 5, 3, 2]));
console.log(repeatedNtimes([1]));
