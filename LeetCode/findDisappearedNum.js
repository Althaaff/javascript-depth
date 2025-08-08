// Find All Numbers Disappeared in an Array:
function findDisappearedNumber(nums) {
  let uniqueArr = [...new Set(nums)].sort((a, b) => a - b);
  let disappearedNums = [];

  let j = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (uniqueArr[j] !== i) {
      disappearedNums.push(i);
    } else {
      j++;
    }
  }

  return disappearedNums;
}

console.log(findDisappearedNumber([1, 2, 4]));
