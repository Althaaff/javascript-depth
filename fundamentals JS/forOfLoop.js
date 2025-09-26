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
const [a, b, c] = Object.entries(obj); // Object.entries will Returns an array of key/values of the enumerable own properties of an object

console.log("object ", a, b, c);
for (let [key, value] of Object.entries(obj)) {
  console.log("key :", key, "value :", value);
}

// Critical Fundamental: for...of vs for...in
const array = ["a", "b", "c"];
array.customProperty = "custom"; // array is also typeof object //

// for...in iterates over KEYS (including inherited properties)
console.log(array);
console.log("for...in:");

for (let key in array) {
  console.log("key", key); // custom property is also one of the key of the array (object)
}

const arr2 = Object.entries(obj);
console.log(arr2);

for (let [key, value] of arr2) {
  console.log(`key ${key} value ${value}`);
}

/*

  No, "custom" is not one of the array's values (i.e., it is not an element stored at an array index like 0, 1, or 2). 
  Instead, it is an own property added to the array object (since arrays in JavaScript are objects under the hood, 
  and typeof array returns 'object').

  Why for...of Doesn't Log "custom"
  The for...of loop iterates over an object's values using its default iterator (via the Symbol.iterator protocol).
  For arrays, the default iterator only yields the indexed elements (e.g., "a", "b", "c" at positions 0, 1, 2). 
  It ignores non-indexed properties like customProperty.

  This is by design: for...of is meant for iterables like arrays, strings, or Sets/Maps, 
  focusing on their "collection" values, not arbitrary object properties.

*/
for (let value of array) {
  console.log("over value", value);
}

for (let key of Object.keys(array)) {
  console.log("key and value :", key, array[key]);
}

for (let key in Object.keys(obj)) {
  // iterates over keys only (not values) so values are undefined  //
  console.log(key, obj[key]);
}

/*
 Object.keys(obj): Returns only own enumerable property names (per spec: filters out non-enumerable ones).
 for...in: Iterates over all enumerable properties (own + inherited); non-enumerable like 'secret' are skipped.
*/

// Base object with an enumerable own property
let obj2 = { visible: "I am seen!" };

// Add a non-enumerable own property
Object.defineProperty(obj2, "secret", {
  value: "I am hidden!",
  enumerable: false, // Key: This hides it from enumeration
  writable: true,
  configurable: true,
});

// Add an enumerable inherited property (via prototype)
Object.prototype.inherited = "I am from prototype!"; // Enumerable by default

// Now, demonstrate Object.keys() and for...in

console.log("=== Object.keys(obj) ===");
console.log(Object.keys(obj2));
// Output: ['visible']
// Why? Only own enumerable properties: 'visible' (own + enumerable), skips 'secret' (own but non-enumerable), ignores 'inherited' (inherited).

console.log("=== for...in Loop ===");
for (let key in obj2) {
  console.log(key, obj2[key]);
}
// Output:
// visible
// inherited
// Why? All enumerable properties (own + inherited): 'visible' (own enumerable), 'inherited' (inherited enumerable), skips 'secret' (non-enumerable).

// Direct access still works for everything
console.log("Direct access:", obj2.visible, obj2.secret, obj2.inherited);
// Output: I am seen! I am hidden! I am from prototype!

// Remember: for...in gives you keys as strings, for...of gives you actual values.

// Advanced: Creating Custom Iterables
// Make any object iterable by implementing Symbol.iterator

const obj3 = { a: 1, b: 2, c: 3 };
const array1 = ["c", "d", "e"];

// u can see Object.entries() method what it returns ?
const res = Object.entries(obj3); // returns array
console.log(res);

for (let [key, value] of Object.entries(obj3)) {
  console.log(key, value);
}

const value = array1[Symbol.iterator]();
console.log("value", value);
for (let n of value) {
  console.log(n);
}

const result2 = value.next();

while (!result2.done) {
  console.log(result2.value);

  result2 = result.next;
}

// Important to understand
// Symbol.iterator is a special, built-in symbol that acts as a key for a method on an object. ex:- obj[Symbol.iterator]()
// This method, when called, returns an iterator for that object. ( returns iterator )

// Iterables: Any object that can be "iterated over"
// (meaning you can loop through its elements one by one) is called an iterable.
// Examples include arrays, strings, Maps, and Sets.

/*
 The Role of Symbol.iterator: For an object to be considered iterable, 
 it must have a method associated with the Symbol.iterator key.
 This method's purpose is to provide a way to access the object's elements sequentially.
*/

// Iterators: When you call the method at Symbol.iterator method.
// The next() Method: Each time you call the next() method on an iterator, it returns an object with two properties:
// value: The current element in the sequence.
// done: A boolean indicating whether the iteration has finished (true if finished, false otherwise).

// Make any object iterable by implementing Symbol.iterator
const range = {
  start: 1,
  end: 5,

  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;

    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let num of range) {
  console.log("num:", num);
}

// Destructuring Power with for...of
const pairs1 = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

for (let index in pairs1) {
  console.log("logged", index, pairs1[index]);
}

// Array of arrays :
const pairs2 = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
for (const [letter, number] of pairs2) {
  console.log(`${letter}: ${number}`);
}

// Array of objects :
const users1 = [
  { name: "alex", age: 25 },
  { name: "john", age: 50 },
];

const users2 = { name: "alex", age: 25 };

const keys = Object.keys(users2); // name and age are keys //
console.log(keys);

for (let { name, age } of users1) {
  console.log(`name ${name} and age ${age}`);
}

// With Rest paramaters :
const data = [
  [1, 2, 3],
  [4, 5, 6],
];

for (let [first, ...rest] of data) {
  console.log(`First: ${first}, Rest: ${rest}`);
}
