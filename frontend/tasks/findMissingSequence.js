function findMissingSequence(arr) {
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}

console.log(findMissingSequence([3, 0, 4, 2, 1]));
console.log(findMissingSequence([1, 3, 0]));
console.log(findMissingSequence([1, 2, 3, 4]));
console.log(findMissingSequence([1]));
