// Move all zeros in an array to the end without changing the order of non-zeros :

function moveZeros(arr) {
  let nonZeroIndex = 0;

  // move all non zero elements forward :
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }

  // fill the rest with zeros :
  for (let i = nonZeroIndex; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

const arr = [9, 0, 8, 0, 3, 4, 0];

console.log(moveZeros(arr));
