function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  const closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum === target) {
        return target;
      }

      if (currentSum < target) {
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++;
      } else {
        right--;
        while (left < right && nums[right] === nums[right + 1]) right--;
      }
    }
  }

  return closestSum;
}

console.log(threeSumClosest([3, 4, 4, 5, 3, 2], 5));
