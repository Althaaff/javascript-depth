// var in javascript :

// var are function scoped, which means they are still accessible outside the block scope .
// even though we have declared them inside it.

// for loop is block scope :
for (let i = 0; i < 9; i++) {
  var inside = "I am available outside of the loop";

  console.log(inside);
}

console.log("outside", inside);

// block scope :
if (true) {
  var inside = "Inside";
  console.log(inside);
}

console.log(inside);

// Function Scoped :
function myFunction() {
  var functionScoped = "Im available inside of this function!";
  console.log(functionScoped);
}

myFunction();

// console.log(functionScoped);  // reference error bcoz functionScoped variable is inside function only we can access it
/* 
  Explanation
  In the first and second example, the value of the var leaked out of the block-scope and could be accessed from outside of it, 
  whereas in the third example var was confined inside a function-scope and we could not access it from outside.
*/

/* ----------------------------------------------------------------------------------------------------------------------------------------- */

// This happens because of Hoisting.
var string; // global scope accessible from anywehere

if (true) {
  string = "heyy";
}

console.log(string);

/*
Global Scope: The variable value is declared outside of any function, making it a global variable. Global variables can be accessed from any function within the same script.

Function Definition: The function myFunc is defined, and it contains a console.log(value); statement. This line attempts to access the variable value.

Function Invocation: When you call myFunc();, the function executes, and it looks for the variable value. Since value is defined in the global scope, it finds it and logs "Heyy.. Hello!" to the console.
*/

var value = "Heyy.. Hello!"; // global scope accessible from anywhere

function myFunc() {
  console.log(value);
}

myFunc();

// Example for: Function scoped In `this case value is hoisted inside the function` :
function call(condition) {
  if (condition) {
    var value = "blue";
    return value;
  } else {
    return value;
  }
}

// in false :
/*
  The if condition is false, so the code inside the if block does not run, and value is not assigned the string "blue".
  However, because value was declared with var, it exists in the function scope, but it is not initialized. Therefore, its value is undefined.  
*/
console.log(call(false));
console.log(call(true)); // runs if block and function returns value

// While execution of the `above code`  it is hoisted like this internally :
function getValue(condition) {
  var value; // value is hoisted as there is no value initialized, so it is undefined.

  if (condition) {
    var value = "blue";

    return value;
  } else {
    return value;
  }
}

console.log(getValue(false));
console.log(getValue(true));

/* ----------------------------------------------------------------------------------------------------------------------------------------------- */
// let in javascript :
// let are declared same as var but it limits the variable scope to the given block.
// That is why we should declare let at the top of the block so that is accessible throughout the block and its sub-blocks.

function getLetValue(condition) {
  let valueColor = "heyy global U saved Me!";
  if (condition) {
    let valueColor = "blue";
    return valueColor;
  } else {
    return valueColor;
  }
}

console.log(getLetValue(false));
console.log(getLetValue(true));

// example let :
let x = 11;
if (x === 10) {
  let x = 11;
  console.log(x);
} else {
  console.log("failed!");
}

console.log(x);

// No Redeclaration's
// We cannot redeclare a given variable with the same name again in the given block. Doing so will result is an error.
// example :
// var c = 10;
// let c = 11;  // get error --> `c` has been already declared //

var c = 10;

if (c === 10) {
  let c = 12;
  console.log(c);
}

/* ------------------------------------------------------------------------------------------------------------------------------------------ */
// const in javascript
// Like let const is also block scoped. But it differs from the fact ,
// that their variable cannot be redeclared or change by re-assigning the value. The value remains Constant.

// example:
// const abc = "XYZ";
// let abc; //SyntaxError: Identifier 'abc' has already been declared
// abc = "pqr"; //TypeError: Assignment to constant variable.

//Should be initialised while declaring
// const XYZ; //SyntaxError: Missing initializer in a const declaration

// Just like let, const is also blocked scoped :
if (true) {
  const a = 10;
  console.log(a);
}
// console.log(a);  errror: `a` is not defined

// However, the value a constant holds may be modified if it is an object.
const person = {
  name: "faraz",
  age: 21,
};

person.age = 22; // updates age value

console.log(person);

// But this will result in the error.

const personObj = {
  name: "Prashant",
  age: 25,
};

// person = 26;
console.log(personObj); //  TypeError: Assignment to constant variable.
