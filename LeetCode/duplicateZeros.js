function duplicateZeros(arr) {
  let originalLength = arr.length;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);

    if (arr[i] === 0) {
      res.push(0);
    }

    if (res.length >= originalLength) break;
  }

  for (let i = 0; i < originalLength; i++) {
    arr[i] = res[i];
  }

  return arr;
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZeros([0, 0, 0, 0, 0, 0, 0]));
