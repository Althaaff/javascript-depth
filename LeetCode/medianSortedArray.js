function findMedianSortedArray(nums1, nums2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    merged.push(nums1[i] <= nums2[j] ? nums1[i++] : nums2[j++]);
  }

  merged.push(...nums1.slice(i), ...nums2.slice(i));

  const len = merged.length;

  return len % 2 === 0
    ? (merged[len / 2 - 1] + merged[len / 2]) / 2
    : merged[Math.floor(len / 2)];
}

const nums1 = [1, 3, 4, 5, 6];
const nums2 = [2];

console.log(findMedianSortedArray(nums1, nums2));

// slice method working example code :
const arr1 = [1, 3];
const arr2 = [2];
const merged = [];

merged.push(...arr1.slice(1), ...arr2.slice(1));

console.log(merged);
