// Approach 1:
function binarySearch(arr, target) {
  let left = 0;

  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("mid", mid);

    if (arr[mid] === target) {
      console.log("worked 1st");
      return mid;
    } else if (arr[mid] < target) {
      console.log("worked 2nd");
      left = mid + 1;
    } else {
      console.log("worked 3rd");
      right = mid - 1;
    }
  }

  return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 15];
// const arr = [1, 3, 5, 7, 11, 9, 15];
console.log(binarySearch(arr, 9));

// Approach 2 ( recursive ):

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // base case
  }

  let mid = Math.floor((left + right) / 2); // finding the middle value //

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right); // search in the right half of the input array
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

const array = [1, 3, 5, 7, 9, 11, 15];
console.log(binarySearchRecursive(array, 11)); // Output: 5 (index of 11)
