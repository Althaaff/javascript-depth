function countOccuranceOf7(arr) {
  let count = 0;

  for (let num of arr) {
    if (num === 7) {
      count += 1;
    }
  }

  return count;
}

console.log(countOccuranceOf7([-7, 3, 7, 2, 9, 4, 7, 2]));
