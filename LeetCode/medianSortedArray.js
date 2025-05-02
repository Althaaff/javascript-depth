function findMedianSortedArrays(nums1, nums2) {
  const merged = [];
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    merged.push(nums1[i] <= nums2[j] ? nums1[i++] : nums2[j++]);
    console.log(merged);
  }
  merged.push(...nums1.slice(i), ...nums2.slice(j)); // keep the `nums1` array elements and add the remaining elements from `nums2` to `merged array[]`
  const len = merged.length;
  // console.log(len);
  return len % 2 === 0
    ? (merged[len / 2 - 1] + merged[len / 2]) / 2
    : merged[Math.floor(len / 2)];
}

const nums1 = [1, 2];
const nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));
