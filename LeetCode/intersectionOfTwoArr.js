// brute force solution :
function interSectionOfTwoArr(nums1, nums2) {
  let temp = [];
  let res = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        temp.push(nums1[i]);
      }
    }
  }

  const removeDuplicates = new Set(temp);

  removeDuplicates.forEach((num) => {
    res.push(num);
  });

  return res;
}

// console.log(interSectionOfTwoArr([1, 2, 2, 1], [2, 2]));
console.log(interSectionOfTwoArr([3, 4, 5, 6], [4, 2]));

// optimized solution :
function interSectionOfTwoArray(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  res = [];

  for (let num of set1) {
    if (set2.has(num)) {
      res.push(num);
    }
  }

  return res;
}

console.log(interSectionOfTwoArray([3, 4, 4, 5, 6], [4, 2]));
