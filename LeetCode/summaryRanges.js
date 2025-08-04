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

// optimized solution :

function summaryRangesSolution(nums) {
  if (nums.length === 0) return [];

  let i = 0;
  let result = [];

  while (i < nums.length) {
    let start = i;

    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }

    if (start === i) {
      result.push(nums[start].toString());
    } else {
      result.push(nums[start] + "-->" + nums[i]);
    }
    i++;
  }

  return result;
}

console.log(summaryRangesSolution([1, 2, 4]));
