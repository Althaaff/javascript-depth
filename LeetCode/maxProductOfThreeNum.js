function maxProductOfThreeNum(nums) {
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity;
  let min1 = Infinity,
    min2 = Infinity;

  for (let num of nums) {
    if (num > max1) {
      [max3, max2, max1] = [max2, max1, num];
    } else if (num > max2) {
      [max3, max2] = [max2, num];
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      [min2, min1] = [min1, num];
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}

console.log(maxProductOfThreeNum([1, 2, 3, 4]));
console.log(maxProductOfThreeNum([1, 2, 3]));
console.log(maxProductOfThreeNum([-1, -2, -3]));
console.log(maxProductOfThreeNum([-100, -98, -1, 2, 3, 4]));

// easy solution using sort method :
function maxProductOfThreeNum1(nums) {
  nums.sort((a, b) => b - a);

  let len = nums.length;

  const value1 = nums[0] * nums[1] * nums[2];

  const value2 = nums[0] * nums[len - 1] * nums[len - 2];

  return value1 > value2 ? value1 : value2;
}

console.log(maxProductOfThreeNum1([-100, -98, -1, 2, 3, 4]));
console.log(maxProductOfThreeNum1([-1, -2, -3]));
