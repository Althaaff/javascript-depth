function sortByArrayParity(nums) {
  let n = nums.length;
  let updatedArr = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0) {
      updatedArr.push(nums[i]);
    }
  }

  for (let num of nums) {
    if (num % 2 !== 0) {
      updatedArr.push(num);
    }
  }

  return updatedArr;
}

console.log(sortByArrayParity([3, 1, 2, 4]));
console.log(sortByArrayParity([0]));
