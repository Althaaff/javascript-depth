function findSingleNumber(nums) {
  if (nums.length === 0) return;

  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = nums[i] ^ res;
  }

  return res;
}

console.log(findSingleNumber([1]));
