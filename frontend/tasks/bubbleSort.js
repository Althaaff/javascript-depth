function bubbleSort(nums) {
  let n = nums.length - 1;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j <= n - i - 2; j++) {
      if (nums[j] > nums[j + 1]) {
        console.log("compare", nums[j], nums[j + 1]);
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
        console.log("nums", nums);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return nums;
}

console.log(bubbleSort([9, 3, 6, 2, 1, 11]));
