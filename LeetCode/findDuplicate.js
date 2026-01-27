function findDuplicateNums(nums) {
  let seen = new Set();
  let duplicates = [];

  for (let num of nums) {
    if (seen.has(num)) {
      duplicates.push(num);
    } else {
      seen.add(num);
    }
  }

  return duplicates;
}

console.log(findDuplicateNums([1, 2, 3, 4, 4, 5, 6, 0, 0]));
