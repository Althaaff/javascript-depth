function isContainsDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(isContainsDuplicates([1, 1, 2, 3, 4, 5, 5, 6]));
console.log(isContainsDuplicates([6, 5, 4, 3, 2, 1]));
