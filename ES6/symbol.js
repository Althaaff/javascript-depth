// 🧩 What is a Symbol in JavaScript?
// A Symbol is a unique and primitive data type introduced in ES6.

// Every Symbol value is completely unique, even if it has the same description.

// It's often used to create unique property keys in objects — so they don’t accidentally conflict with other keys.

// 📌 Why Use Symbol?
// To avoid key name collisions in objects.

// To create private-like properties (not truly private, but hidden from common loops like for...in).

// Useful in library code or APIs to safely add hidden data.

// Simple Example code 1 :
const user1 = Symbol("userId");
const user2 = Symbol("userId");

console.log(user1 === user2); // false even if both description same bocz Symbol creates new description everytime

// example 2 :
const user = {
  name: "Muhammad Althaf",
  [user1]: 101,

  // [user2]: 102,
};

console.log(user);
console.log(user[user1]);
console.log(user[user2]);

// Symbol hidden from loops :
// Because JavaScript intentionally designed Symbols to be "non-enumerable by default" — meaning they don't show up in typical loops like:

// for...in

// Object.keys()

// JSON.stringify()

// Example 3 :
// Example: Library adds secret data :

const secret = Symbol("secret");

const info = {
  name: "Muhammad Althaf",

  [secret]: "admin-token",
};

for (let key in info) {
  console.log(key); // only `name` printed in console
}

// but here u can still access `value` of the key :
console.log(info[secret]);

console.log(info);
