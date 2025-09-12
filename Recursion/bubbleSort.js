const inputArr = [23, 1000, 1, -1, 8, 3];
console.log(inputArr); // original array //
bubbleSort(inputArr);
console.log(inputArr);

function bubbleSort(arr) {
  let shouldSort = false;

  for (let i = 0; i < arr.length - 1; i++) {
    let a = arr[i];

    if (a > arr[i + 1]) {
      arr[i] = arr[i + 1];
      arr[i + 1] = a;
      shouldSort = true;
    }
  }

  if (shouldSort) {
    bubbleSort(arr);
  }
}
