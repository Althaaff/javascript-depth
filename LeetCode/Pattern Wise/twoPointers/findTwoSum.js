/* 1 indexed

**Problem Statement:**
Given an array of integers `nums` and an integer `target`, return the *indices* of the two numbers such that they add up to the `target`.
You may assume that each input would have ***exactly one solution***, and you may not use the same element twice.

---

### Main Test Cases

#### Test Case 1: The Standard Case
*   **Purpose:** Tests the basic functionality with a straightforward input.
*   **Input:**
    *   `nums = [2, 7, 11, 15]`
    *   `target = 9`
*   **Expected Output:** `[0, 1]`
*   **Reasoning:** The numbers at indices 0 and 1 (`2` and `7`) add up to the target `9`. This is the most common example.

#### Test Case 2: Solution with Duplicate Values (but not the same element)
*   **Purpose:** Ensures the solution correctly handles arrays with duplicate numbers without using the same index twice.
*   **Input:**
    *   `nums = [3, 3, 4, 5]`
    *   `target = 6`
*   **Expected Output:** `[0, 1]`
*   **Reasoning:** The two `3`s at indices 0 and 1 are the only pair that adds up to `6`. A solution must be able to identify these two distinct indices pointing to the same value.

#### Test Case 3: Solution Not at the Beginning
*   **Purpose:** Tests that the algorithm doesn't make the wrong assumption that the solution will be found early in the array. It checks the logic for scanning the entire array.
*   **Input:**
    *   `nums = [1, 5, 9, 12, 3]`
    *   `target = 15`
*   **Expected Output:** `[1, 4]`
*   **Reasoning:** The solution (`9` and `12`) is located later in the array. The numbers at the start (`1`, `5`) are not part of the solution, so the algorithm must continue its search.

---

### Bonus "Trap" Test Case (Good to Consider)

#### Test Case 4: Negative and Positive Numbers
*   **Purpose:** Ensures the solution works correctly when numbers are negative or zero, and the target can be reached in non-obvious ways.
*   **Input:**
    *   `nums = [-3, 4, 3, 90]`
    *   `target = 0`
*   **Expected Output:** `[0, 1]`
*   **Reasoning:** The numbers `-3` and `3` add up to the target `0`. This tests if the logic for finding the complement (e.g., `target - current_value`) works with negative numbers.

A robust solution should pass all these test cases. Good luck

*/

function findTwoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let res = [];
  nums = nums.sort((a, b) => a - b);
  console.log("sorted", nums);

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      res.push(left + 1, right + 1);

      return res;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return res;
}

console.log(findTwoSum([-3, 4, 3, 90], 0));
console.log(findTwoSum([1, 5, 9, 12, 3], 15));
console.log(findTwoSum([2, 7, 11, 15], 9));
console.log(findTwoSum([3, 3, 4, 5], 6));
console.log(findTwoSum([2, 3, 4], 6));
console.log(findTwoSum([-1, 0], -1));
