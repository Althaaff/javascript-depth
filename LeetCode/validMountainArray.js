function validMountainArray(arr) {
  if (arr.length < 3) return false;

  let i = 0;
  let n = arr.length;

  // walk up increasing slope :
  // verifying in while loop condition ( i + 1 ) is not out of bound of the array :
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }

  // larger element can't be in first or last of the input array :
  if (i === 0 || i === n - 1) return false;

  // walk up decreasing slope :
  // verifying in while loop condition ( i + 1 ) is not out of bound of the array :
  while (i + 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === n - 1;
}

console.log(validMountainArray([0, 1, 2, 1, 2]));
console.log(validMountainArray([4, 3, 2, 1]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([2, 1]));
console.log(validMountainArray([2, 1, 2]));
console.log(validMountainArray([3, 5, 5]));
