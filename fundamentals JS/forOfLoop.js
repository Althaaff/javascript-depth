// for...of works with ANY object that implements the Iterator Protocol

let arr = [1, 2, 3, 4, 5];

let iterator = arr[Symbol.iterator]();
console.log("iterator", iterator);

let result = iterator.next();
console.log("res", result);

while (!result.done) {
  console.log(result.value);

  result = iterator.next();
  // console.log("res", result);
}
// Key Insight: for...of is syntactic sugar over the iterator protocol. Understanding this is crucial!

// What's Iterable vs What's Not
// Built-in Iterables

// Array
for (let item of [1, 2, 3]) {
  console.log(item);
}

// String (character by character)
for (let char of "hello") {
  console.log("char", char);
}

// Maps
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

for (let [key, value] of map) {
  console.log(`Key: ${key} | Value: ${value}`);
}

// NodeLists (DOM) :
// for (let element of document.querySelectorAll(".item")) {
//   console.log(element);
// }

// NOT Iterable (Common Gotcha!)
const obj = { a: 1, b: 2, c: 3 };

// this will throw TypeError: obj is not iterable:
// for (let value of obj) {
//   console.log(value);
// }

// Use for..in for object instead :
for (let key in obj) {
  console.log(key, obj[key]);
}

// Or Object.entries() to make it iterable
for (let [key, value] of Object.entries(obj)) {
  console.log("key :", key, "value :", value);
}
