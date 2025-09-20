// Covering Javascript Fundamentals From Basic Things :

// Primitive Types vs Non-Primitive Types - Simple Explanation
/* 
 Think of Primitive as simple, basic building blocks
 and Non-Primitive as complex containers.
*/

/*
 Primitive Types = Simple Values

 Store one single value
 Immutable (cannot be changed)
 Stored directly in memory
 When you copy them, you get a separate copy
*/

// Primitive: let a = true; let b = a; → b gets a copy of true

// Object: let obj1 = {}; let obj2 = obj1; → obj2 gets the same reference (both point to same object)

// Primitives are stored directly, objects are stored by reference! 🎯

let str = "pen";
let str2 = "eraser";

const copy = str; // when i copy i get separate copy original str value whic is "pen" is still in memory but after some time garbage collector will remove it //
str = "scale";

console.log(str);
console.log(copy);

// primitive (example)
let a = true;

let b = a;

a = false;

console.log(a, b);

// JavaScript Primitive Types (7 total):
let name = "John"; // String
let age = 25.73; // Number
console.log(age.toFixed(3));
let isActive = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined represents absence of value
let id1 = Symbol("user"); // Symbol
let id2 = Symbol("user"); // Symbol
console.log("consoled", age.toFixed(1));

console.log("checks", id1 === id2);

let bigNum = 123n; // BigInt

console.log(bigNum > 100);

console.log(typeof nothing); // indicates intentional absence of value
console.log(typeof String()); // called String function and returns empty string //

console.log(
  typeof (function name() {
    return {};
  })() // IIFE //
);
// similat happens above code //
console.log(typeof {});

// Not Operator in JS :
/*
 In JavaScript, the logical NOT operator is represented by the exclamation mark (!). It is a unary operator, meaning it operates on a single operand, and its primary function is to reverse the boolean value of that operand.
 How it works:
 Converts to Boolean: The ! operator first attempts to convert its operand into a boolean value (true or false). This process follows JavaScript's "truthy" and "falsy" rules.
 Falsy values: false, 0, "" (empty string), null, undefined, and NaN are considered falsy.
 Truthy values: All other values are considered truthy.
 Returns Inverse: After converting the operand to a boolean, the ! operator returns the inverse of that boolean value.
 If the operand is truthy, ! returns false.
 If the operand is falsy, ! returns true. 
*/
const num = null;

if (!NaN) {
  console.log("true");
}

/*
 Double NOT (!!) operator:
 Using the ! operator twice (!!) effectively converts any value to its explicit boolean 
 equivalent without negating its original truthiness. The first ! converts the value to its opposite boolean, and the second ! flips it back, resulting in a pure true or false representation of the original value's truthiness. 
*/
console.log(!!"hello"); // Output: true
console.log(!!0); // Output: false

// above first console example code not empty string is always true so (!true) should be false
// when you use double (!!) flipping boolean two times

// non-primitive (example)
let obj1 = {};

let obj2 = obj1;

obj2.name = "muhammad althaf";

console.log(obj2);
console.log(obj1); // obj2 gets the same reference (both point to same object)

// (undefined) Data Type :
// It is important to distinguish undefined from null.
// While both represent the absence of a value,
// null is an assignment value that explicitly signifies "no value" or the intentional absence of an object,
// whereas undefined typically indicates that a variable has not been assigned a value yet.
// The typeof operator also differentiates them: typeof undefined returns "undefined", while typeof null returns "object".

// functions are in JS is ( non-primitive ) data type :

// Function Declaration :

function greet(name) {
  return "Hello, " + name + "!";
}

const arr = ["muhammad ", "althaf", "hisham"];
function findName(arr) {
  return arr[0].toUpperCase() + arr[1].toUpperCase();
}

// Function Expression :
const sayHello = function (name) {
  return "Hello " + name;
};

const call = sayHello(findName(arr));
console.log(call);

// Arrow Function (a concise function expression).
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

console.log(multiply.length);

// Functions as Objects :
function myFunc(num) {
  return num * num;
}

myFunc.customProperty = "laptop";
console.log(myFunc.customProperty);

// Date Object in Javascript :
const myDate = new Date();
const year = myDate.getFullYear();
const month = myDate.getMonth(); // 0-indexed
const dayOfMonth = myDate.getDate();

console.log(`Year: ${year}, Month: ${month + 1}, Day: ${dayOfMonth}`);

myDate.setFullYear(2026);
console.log(myDate); // now year changed to (2026)

/* 
 The following are the falsy values in JavaScript:
 
 false: The boolean value false itself.

 0: The number zero (including -0 and 0n for BigInt zero).
 
 '' (or "" or `` ` ``): An empty string.
 
 null: Represents the intentional absence of any object value.
 
 undefined: Represents a variable that has been declared but not yet assigned a value, or a non-existent property.
 
 NaN: Stands for "Not a Number" and indicates a value that is not a legal number.
 
 document.all: (Though technically an object, it's treated as falsy for historical reasons related to browser compatibility.)
 
 All other values in JavaScript are considered truthy, meaning they evaluate to true in a Boolean context.
*/
