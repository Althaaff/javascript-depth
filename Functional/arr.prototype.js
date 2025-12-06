Array.prototype.myReduce = function (callback, initialValue) {
  console.log("this", this);
  if (this === null || this === undefined) {
    throw new Error("Arr.prototype.myReduce is called on null or undefined!");
  }

  if (typeof callback !== "function") {
    throw new Error(callback + "is not a function!");
  }

  let array = Object(this);
  const length = Math.max(0, Math.floor(array.length)) || 0;

  if (length === 0 && arguments.length < 2) {
    throw new Error("reduce of empty array with no initial value !");
  }

  let accumulator;
  let startIndex = 0;

  if (arguments.length >= 2) {
    accumulator = initialValue;
    console.log("acc", accumulator);
  } else {
    // find the first non empty slot if no inital value provided :
    while (startIndex < length && !(startIndex in array)) {
      startIndex++;
    }

    if (startIndex >= length) {
      throw new Error("Reduce of empty array with no initial value!");
    }

    accumulator = array[startIndex++];
  }

  for (let i = startIndex; i < length; i++) {
    if (i in array) {
      accumulator = callback.call(undefined, accumulator, array[i], i, array);
    }
  }

  return accumulator;
};

console.log([1, 2, 3, 4].myReduce((acc, curr) => acc * curr, 2));

const arr = [1, 2, 3, 4, 5, 8]; // here myReduce method available bcoz i have created myReduce method inside the ( Array.prototype (it contains .map .filter and .myReduce etc..) ) prototype in Js is shared toolbox

const total = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(total);
