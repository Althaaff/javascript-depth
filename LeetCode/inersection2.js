// leet code intersection 2 solution :

function intersectionOfTwoArr(nums1, nums2) {
  const res = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        res.push(nums1[i]);
        nums2[j] = null;
        break;
      }
    }
  }

  return res;
}

console.log(intersectionOfTwoArr([1, 2, 2, 1], [2, 2]));
console.log(intersectionOfTwoArr([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersectionOfTwoArr([1, 2, 2, 1], [2]));

// solution 2 using hash map :
function intersectionOfTwoArr2(nums1, nums2) {
  let countMap = new Map();
  let res = [];

  for (let num of nums1) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (countMap[num] > 0) {
      res.push(num);
      countMap[num]--;
    }
  }
  return res;
}

console.log(intersectionOfTwoArr2([1, 2, 2, 1], [2, 2]));
console.log(intersectionOfTwoArr2([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersectionOfTwoArr2([1, 2, 2, 1], [2]));
