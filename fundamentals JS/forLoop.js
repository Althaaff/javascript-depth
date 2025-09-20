// Different Types of For Loops
// Traditional For Loop:

const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// for of loop ( es6 ):
// ex1:
for (const value of arr) {
  console.log(value); // Iterates over values
}

// ex2:
// Works with any iterable (arrays, strings, maps, sets)

for (const char of "hello") {
  console.log(char);
}

// For In Loop :
const obj = { name: "John", age: 21, city: "manglore" };

// iterates over keys:
for (let key in obj) {
  console.log(key);
}

// Performance Considerations :
const largerArray = new Array(1000).fill(1);
console.log("largerArray", largerArray);
// Inefficient - recalculates length every iteration
for (let i = 0; i < largerArray.length; i++) {
  // process item:
  // console.log(i);
}

// Better - cache the length :
for (let i = 0, len = largerArray.length; i < len; i++) {
  console.log(i);
}

// Modern and clean :
for (let item of largerArray) {
  console.log(item);
}

// Advanced Concepts & Gotchas
// Loop Labels & Break/Continue
outer: for (let i = 0; i < 3; i++) {
  inner: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outer;
    }
    console.log(i, j);
  }
}

// Nested Loops & Time Complexity
// O(n²) - be careful with large datasets!
// O(n²) - be careful with large datasets!
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // This runs n² times
  }
}
