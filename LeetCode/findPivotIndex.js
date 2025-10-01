function findPivotIndex(nums) {
  let totalSum = 0;

  // find total sum of all numbers:
  for (let num of nums) {
    totalSum += num;
  }

  // create a variable for left sum (starts at 0)
  let leftSum = 0;

  // loop through array using index and value
  for (let [i, num] of nums.entries()) {
    let rightSum = totalSum - leftSum - num;

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += num;
  }

  // if no pivot found return -1:
  return -1;
}

console.log(findPivotIndex([1, 7, 3, 6, 5, 6]));
console.log(findPivotIndex([2, 1, -1]));
console.log(findPivotIndex([1, 2, 3]));
