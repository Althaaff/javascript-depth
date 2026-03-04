function findIndexOfLargestEle(arr) {
  let indexL = null;
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      indexL = i;
    }
  }

  return indexL;
}

console.log(
  findIndexOfLargestEle([
    3, 7, 2, 9, 4, 7, 2, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8,
  ]),
);

// find second largest number :
function findSecondLargestNum(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && secondLargest !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

console.log(
  findSecondLargestNum([
    3, 7, 2, 9, 4, 7, 2, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8,
  ]),
);
