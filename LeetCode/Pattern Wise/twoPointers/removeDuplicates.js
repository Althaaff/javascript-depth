function removeDuplicates(nums) {
  let n = nums.length;
  let j = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[j - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
