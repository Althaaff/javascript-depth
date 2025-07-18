function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let j = 0;
  let res = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      j++;
      nums[j] = nums[i];
    }
  }

  let k = j + 1;

  for (let j = 0; j < k; j++) {
    res.push(nums[j]);
  }

  return res;
}

console.log(removeDuplicates([1, 1, 2, 3, 4, 4], 3));
