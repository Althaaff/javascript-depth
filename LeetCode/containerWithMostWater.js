// leetcode container with most water problem bruteforce and optimized solution :
// 11. Container With Most Water
/*

  You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

  Find two lines that together with the x-axis form a container, such that the container contains the most water.
  
  Return the maximum amount of water a container can store.

  *Notice that you may not slant the container*

*/

/*
  Input: height = [1,8,6,2,5,4,8,3,7]
  Output: 49
  Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 
*/

// bruteforce solution :

// function containerWithMostWater(height) {
//   let mostWater = 0;

//   // run left pointer and right pointer to track all elements from the array :
//   for (let left = 0; left < height.length; left++) {
//     for (let right = left + 1; right < height.length; right++) {
//       // find the width (distance between current index and prev index) :
//       const containerWidth = right - left;
//       const containerHeight = Math.min(height[left], height[right]);

//       const containerWater = containerWidth * containerHeight;

//       if (containerWater > mostWater) {
//         mostWater = containerWater;
//       }
//     }
//   }

//   return mostWater;
// }

// console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// optimized solution :
function containerWithMostWater(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const currentContainerWater = width * minHeight;

    maxWater = Math.max(maxWater, currentContainerWater);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
