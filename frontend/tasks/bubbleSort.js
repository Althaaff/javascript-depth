function bubbleSort(nums) {
  let n = nums.length - 1;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j <= n - i - 2; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
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

// using recursion :
function bubbleSortRecursion(nums) {
  let shouldSort = false;

  for (let i = 0; i < nums.length - 1; i++) {
    let curr = nums[i];

    if (curr > nums[i + 1]) {
      curr = nums[i + 1];
      nums[i + 1] = curr;
      shouldSort = true;
    }
  }

  if (shouldSort) {
    bubbleSort(nums);
  }
  return nums;
}

console.log(bubbleSortRecursion([9, 3, 6, 2, 1, 11]));
