// Implement a function that takes one or more values and returns a function that cycles through those values each time it is called.

function cycle(...values) {
  let index = 0;

  return function () {
    let currentValue = values[index];
    index = (index + 1) % values.length;
    return currentValue;
  };
}

const toggleFunc1 = cycle("hello");
const toggleFunc2 = cycle("on", "off");

console.log(toggleFunc1());
console.log(toggleFunc1());

console.log(toggleFunc2());
console.log(toggleFunc2());
console.log(toggleFunc2());
