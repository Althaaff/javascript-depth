for (var i = 0; i < 10; i++) {
  var iAmInside = "I am available outside of the loop";
}
console.log(iAmInside); // loop runs 10 times but `iAmInside` value logged when last iteration goes that time assigns the string and logs

function sampleTest() {
  var name = "muhammad althaf";

  return name;
}
// console.log(name); // `var` name is not available outside of the function scope
console.log(sampleTest());

if (true) {
  var str = "Im available outside of the (block scope) !";
}

console.log(str);

// function scoped :
function functionScope() {
  var str2 = "im available only inside of the function !";

  console.log(str2);
}
// console.log(str2); `str2` is not available outside of the `function scope` // ReferenceError: functionScoped is not defined

functionScope();

/*
  Explanation

  In the above first and second example, the value of the var leaked out of the block-scope and could be accessed from outside of it, 
  whereas in the third example var was confined inside a function-scope and we could not access it from outside.
*/

var inside;

//block scope:
if (true) {
  var inside = "Im inside of the block scope!";
}

console.log(inside);

// Function scoped In this case value is hoisted inside the function
function getValue(condition) {
  if (condition) {
    var value = "Blue";
    return value;
  } else {
    // value exists here with a value of undefined
    console.log(value);
    // re assigned and it return `red`
    return (value = "Red");
  }
  // value exists here with a value of undefined
}

console.log(getValue(true));
console.log(getValue(false));

//While execution it is hoisted like this internally
function getValue(condition) {
  var value; //value is hoisted as there is no value attached, so it is undefined.
  if (condition) {
    var value = "blue";
    return value;
  } else {
    // value exists here with a value of undefined
    return value;
  }

  // value exists here with a value of undefined
}
console.log(getValue(true)); // blue
console.log(getValue(false)); // undefined

// Block-Level Declarations in javascript //

// Block or lexical scopes are the boundaries in which declared variables are not accessible outside it. This means the variables declared inside it are available inside given block and its sub-blocks.

// Many c-based languages work with block scoping and with its introduction in ES6 will bring the same flexibility to the Javascript.

// Block are indicated by { and } characters.

/*
 let in javascript

  let are declared same as var but it limits the variable scope to the given block. 
  That is why we should declare let at the top of the block so that is accessible throughout the block and its sub-blocks.
*/

if (true) {
  let value = "im available";
  console.log(value);
}

function getColor(condition) {
  if (condition) {
    console.log("true");
    let color = "blue";
    return color;
  } else {
    return color;
  }
}

console.log(getColor(true));
console.log(getValue(false)); // ReferenceError: value is not defined

let x = 10;

if (x === 10) {
  let x = 11;
  console.log(x);
}

console.log(x);

// no re declarations :
var c = 0;
// let c = 0;

var c = 10;
var c = 12;
console.log(c);

if (c === 12) {
  var c = 11;
  console.log(c); // this will work as it is declared in another scope //
}

// const in javascript

//  Like let const is also block scoped.
//  But it differs from the fact that their variable cannot be redeclared or change by re-assigning the value.
//  The value remains Constant.

const abc = "abc";
// let abc;
console.log(abc);

let xyz = "xyz";
// const xyz;
console.log(xyz);

// Just like let, const is also blocked scoped :

if (true) {
  const a = "abc";
  console.log(a);
}
// console.log(a);ReferenceError: a is not defined

// However, the value a constant holds may be modified if it is an object.
const person = {
  age: 21,
};

person.age = 18;
// person = {};// Assignment to constant variable.
// console.log(person); // Assignment to constant variable.
console.log(person.age);

// (above code) const declarations for objects do not prevent modification of those objects.
// A const declaration prevents modification of the binding and not of the value of the binding.

// But this below code will result in the error.
const person1 = {
  name: "Prashant",
  age: 25,
};

// person1 = 26;
console.log(person); //  TypeError: Assignment to constant variable.

/*
  In ECMAScript 2015, let bindings are not subject to Variable Hoisting,
  which means that let declarations do not move to the top of the current execution context. 
  Referencing the variable in the block before the initialization results in a ReferenceError (contrary to a variable declared with var,
   which will just have the undefined value).
  The variable is in a “temporal dead zone” from the start of the block until the initialization is processed.
*/
// before understanding below code read above explainations //
function do_something() {
  console.log(bar);
  // console.log(foo);

  var bar = "bar";
  let foo = "foo"; // ReferenceError: Cannot access 'foo' before initialization
}

do_something();

// The Temporal Dead Zone and typeof :

// using the typeof operator to check the type of a variable in it's temporal deadzone will throw a ReferenceError.
// But for the undeclared variables it will throw undefined.

/*

typeof Operator:

  The typeof operator is designed to return a string indicating the type of the unevaluated operand. 
  If the variable is undeclared, typeof will return "undefined" instead of throwing an error.
*/
console.log(typeof iAmNotDeclared); // undefined check ''

// console.log(typeof iAmDeclared); // ReferenceError: iAmDeclared is not defined
//Above this is it's temporal dead zone
// let iAmDeclared = 10;

// Temporal Dead Zone with lexical or block scoping:
/*
 Due to lexical or block scoping let foo = (foo + 55) access the foo of the current block that is inside the if condition.
 It does not access the var foo = 33; as let is blocked scope. 
 let foo is declared but it is not initialized that is why it is still in temporal dead zone.
*/
function test() {
  var foo = 33;
  if (true) {
    let foo = foo + 44;
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  }
}
test();

// When to use Var, Let and Const

// There is no as such rule stating where to use each of them, Everyone has different opinions.
// But according to the properties of these three, it should be used as follows.

//     Use var for top-level variables that are shared across many (especially larger) scopes.
//     let can used for localized variables in smaller scopes.
//     If there is no need to re-assign any variable. like const PI = 3.14; then use const.

// Do your own research and figure out which one to use where.
