function mergeTowArrays(nums1, m, nums2, n) {
  if (nums1.length === 0 || nums2.length === 0) return;

  // set pointers :
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i = i - 1;
    } else {
      nums1[k] = nums2[j];
      j = j - 1;
    }
    k = k - 1;
  }

  // if any other elements still exist in `nums2` copy them to nums1 :
  while (j >= 0) {
    nums1[k] = nums2[j];
    j = j - 1;
    k = k - 1;
  }

  // if nums1 element is still not sorted then sort it :
  nums1 = nums1.sort((a, b) => a - b);

  return nums1;
}

console.log(mergeTowArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
