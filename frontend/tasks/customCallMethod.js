// Function.prototype.call
// The Function.prototype.call() method calls the function with a given this value and arguments provided individually.

// Implement your own Function.prototype.call without calling the native call method.
// To avoid overwriting the actual Function.prototype.call, implement the function as Function.prototype.myCall.

Function.prototype.myCall = function (context, ...args) {
  // Step 1: If context is null or undefined, use global object (window in browser)
  if (context === null) {
    context = typeof window !== "undefined" ? window : globalThis;
  }

  // convert context to object :
  context = Object(context);

  // `this` inside `myCall` refers to the function being called ( ex: greet() )
  const uniqueProp = Symbol("tempFunc");

  context[uniqueProp] = this;
  console.log("context", context);

  const result = context[uniqueProp](...args);

  return result;
};

function greet(greeting, punctuation) {
  return `${greeting} ${this.name}, ${punctuation}`;
}

const person = { name: "muhammad althaf", age: 21 };

console.log(greet.myCall(person, "Hello", "!"));
