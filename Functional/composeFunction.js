function compose(...functions) {
  return function (initialValue) {
    console.log("intial value :", initialValue);
    return functions.reduceRight(function (accumulator, currentFunction) {
      return currentFunction(accumulator);
    }, initialValue);
  };
}

function double(x) {
  console.log(x);
  return x * 2;
}

function square(x) {
  return x * x;
}

function increment(x) {
  return x + 1;
}

const composedFunction = compose(increment, square, double);

// How it flows:
// double(2) -> 4
// square(4) -> 16
// increment(16) -> 17

console.log(composedFunction(2)); // Output: 17
