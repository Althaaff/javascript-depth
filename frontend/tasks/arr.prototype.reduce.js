Array.prototype.myReduce = function (callback, initialValue) {
  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const array = Object(this); // Handle array-like objects
  const length = array.length >>> 0; // Convert to unsigned 32-bit integer

  if (length === 0 && arguments.length < 2) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator;
  let startIndex = 0;

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    // Find the first non-empty slot if no initialValue
    while (startIndex < length && !(startIndex in array)) {
      startIndex++;
    }
    if (startIndex >= length) {
      throw new TypeError("Reduce of empty array with no initial value");
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

console.log([1, 2, 3, 4, 5].myReduce((acc, curr) => acc + curr, 0));
