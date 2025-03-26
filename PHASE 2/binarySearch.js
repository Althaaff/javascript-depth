// Approach 1:
function binarySearch(arr, target) {
  let left = 0;

  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("mid", mid);

    if (arr[mid] === target) {
      // console.log("worked 1st");
      return mid;
    } else if (arr[mid] < target) {
      console.log("worked 2nd");
      left = mid + 1;
    } else {
      // console.log("worked 3rd");
      right = mid - 1;
    }
  }

  return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 15];

console.log(binarySearch(arr, 8));
