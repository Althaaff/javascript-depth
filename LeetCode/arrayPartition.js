// using sort method :

function arrayPartition(nums) {
  let sum = 0;
  let n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i += 2) {
    sum += nums[i];
  }

  return sum;
}

console.log(arrayPartition([6, 2, 6, 5, 1, 2]));
console.log(arrayPartition([1, 4, 3, 2]));
