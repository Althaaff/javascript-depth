// brute-force solution :
function summaryRanges(nums) {
  if (nums.length == 0) return [];

  let start = nums[0];
  let ranges = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      if (start === nums[i - 1]) {
        ranges.push(start.toString());
      } else {
        ranges.push(start + "-->" + nums[i - 1]);
      }

      start = nums[i];
    }
  }

  if (start === nums[nums.length - 1]) {
    ranges.push(start.toString());
  } else {
    ranges.push(start + "-->" + nums[nums.length - 1]);
  }

  return ranges;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// [0,1,2,4,5,7]
// 0--2
// 4--5
// 7
