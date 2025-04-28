function customMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

const arr = [1, 2, 3, 4, 5, 6];

const doubled = customMap(arr, (element, i, arr) => {
  console.log(i); // index
  console.log(arr); // original array //
  return element * 2;
});

console.log(doubled);
