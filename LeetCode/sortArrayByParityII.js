function sortArrayByParity(nums) {
  let odd = 1;
  let even = 0;

  while (odd < nums.length && even < nums.length) {
    if (nums[even] % 2 === 0) {
      even += 2;
    } else if (nums[odd] % 2 === 1) {
      odd += 2;
    } else {
      [nums[odd], nums[even]] = [nums[even], nums[odd]];
    }
  }

  return nums;
}

console.log(sortArrayByParity([4, 2, 5, 7]));
console.log(sortArrayByParity([2, 3]));
console.log(sortArrayByParity([2, 4, 6, 1, 3, 5]));
console.log(sortArrayByParity([1, 3, 5, 2, 4, 6]));
console.log(sortArrayByParity([6, 3, 7, 0]));
