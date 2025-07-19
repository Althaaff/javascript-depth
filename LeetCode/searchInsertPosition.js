function searchInsertPosition(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      return i;
    } else if (nums[i] === target) {
      return i;
    } else {
      if (i === nums.length - 1) {
        return i + 1;
      }
    }
  }

  return index;
}

console.log(searchInsertPosition([1, 3, 5, 6], 7));
