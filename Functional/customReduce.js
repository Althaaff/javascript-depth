function customReduce(arr, callback, intialValue) {
  let accumulator = intialValue;

  for (let i = 0; i < arr.length; i++) {
    if (accumulator === undefined) {
      // console.log(true);
      accumulator = arr[i];
    } else {
      accumulator = callback(accumulator, arr[i]);
    }
  }
  return accumulator;
}

const arr = [1, 2, 3, 4, 5, 6];

// we can pass the initial value :
const sum = customReduce(
  arr,
  (accumulator, current) => {
    return accumulator + current;
  },
  5
);

console.log(sum);
