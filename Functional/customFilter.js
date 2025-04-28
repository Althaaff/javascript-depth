function customFilter(arr, callback) {
  let result = [];

  for (i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const oddNumbers = customFilter(arr, (element) => {
  return element % 2 !== 0;
});

console.log(oddNumbers);
