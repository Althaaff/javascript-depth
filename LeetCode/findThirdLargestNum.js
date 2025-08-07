// optimized solution:

function findThirdLargestNum(nums) {
  let first = null,
    second = null,
    third = null;

  for (let num of nums) {
    // if duplicate `num` found skip the iteration :
    if (first === num || second === num || third === num) continue;

    if (first === null || num > first) {
      third = second;
      second = first;
      first = num;
    } else if (second === null || num > second) {
      second = first;
      first = num;
    } else if (third === null || num > third) {
      third = num;
    }
  }

  return third !== null ? third : first;
}

console.log(findThirdLargestNum([3, 2, 1, 5, 6, 7, 8, 9]));
