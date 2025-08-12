function findNextGreaterElement(nums1, nums2) {
  let res = [];

  for (let left = 0; left < nums1.length; left++) {
    let startIndex = nums2.indexOf(nums1[left]);
    let found = -1;

    for (let right = startIndex + 1; right < nums2.length; right++) {
      if (nums2[right] > nums1[left]) {
        found = nums2[right];
        break; // break the next iterations of the loop if found greater element
      }
    }

    res.push(found); // if not found push `-1` as it is if found push greater next element
  }

  return res;
}

console.log(findNextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
console.log(findNextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
