//  deep into JavaScript for loops
// The Anatomy of a For Loop

/* 
 for (initialization; condition; increment/decrement) {
    // loop body
 }
*/
// What Happens Internally ?
// Ans:
// When JavaScript encounters a for loop (step by step excution):

/*
 
 Initialization Phase: Runs once before anything else
 Condition Check: Evaluated before each iteration
 Body Execution: If condition is true
 Increment/Update: Runs after each iteration
 Back to Condition Check: Repeats until condition is false
 
*/

/*
 When you assign a value to a variable that has not been declared in the current scope, 
 JavaScript implicitly creates a global variable (in non-strict mode).
 So, i = 0 inside the for loop implicitly creates a global variable i if it doesn't already exist.
 The loop then runs as expected, incrementing i from 0 to 2, logging each value.
*/
for (i = 0; i < 3; i++) {
  console.log(i);
}

// JAVASCRIPT FOR LOOP (deep) :

/* Internal execution flow:

   Step 1: let i = 0        (initialization - runs once)
   Step 2: i < 3?           (0 < 3 = true)
   Step 3: console.log...   (body executes)
   Step 4: i++              (i becomes 1)
   Step 5: i < 3?           (1 < 3 = true)
   Step 6: console.log...   (body executes)
   Step 7: i++              (i becomes 2)
   Step 8: i < 3?           (2 < 3 = true)
   Step 9: console.log...   (body executes)
   Step 10: i++             (i becomes 3)
   Step 11: i < 3?          (3 < 3 = false) - STOP (exit the for loop)

*/
// example code snippet:
for (let i = 0; i < 10; i++) {
  console.log("Iteration", i);
}

// Variable Scope & Declaration Differences :
// With VAR (function-scoped)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100); // Prints: 3, 3, 3
}
console.log("After loop, i =", i); // i = 3 (accessible outside!)

function name() {
  let name = "muhammad";

  for (let i = name.length - 1; i >= 0; i--) {
    console.log(name[i]);
  }

  if (true) {
    var firstName = "MUHAMMAD";
    let lastName = "Althaf";
  }
  console.log(firstName); // it's accessible outside of the `{}` block .
  // console.log(lastName);// but declared with `let` can access only inside this `{}` block
}

name();
myFunc();
function myFunc() {
  let name = "jS";
  if (true) {
    var x = "JavaScript";
    console.log(name);
  }
  console.log("x:", x);
}
// Even though `x` is declared inside the if block,
// it is accessible anywhere inside the function

/*

var i hoisting
Since there is no function, var i is hoisted to the top of the global scope.
So, i exists as a single global variable.
2. How the loop runs
The loop runs synchronously:

i = 0 → schedules a setTimeout callback (to run later)
i = 1 → schedules another setTimeout callback
i = 2 → schedules another setTimeout callback
i = 3 → loop condition fails, loop ends
Important: The setTimeout callbacks are scheduled but do not run immediately.
*/

// . When do setTimeout callbacks run?
// setTimeout callbacks run after the current synchronous code finishes and after the specified delay (100 ms here).
// So, all three callbacks run after the loop has completed.

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 3000); // Prints: 3, 3, 3
}
console.log("After loop, i =", i); // i = 3 (accessible outside!)
/*
 3. When do setTimeout callbacks run?
 setTimeout callbacks run after the current synchronous code finishes and after the specified delay (100 ms here).
 So, all three callbacks run after the loop has completed.
 4. What is the value of i when callbacks run?
 Because var i is a single variable shared by all iterations,
 By the time the callbacks run, the loop has finished and i is 3.
 So, all three callbacks see the same final value 3.
 
// */
// Why does it print 3 three times, not once?
// You scheduled three separate callbacks inside the loop.
// Each callback runs independently after 100 ms.
// Each callback prints the current value of i at that time.
// Since i is 3 when they run, each prints 3.

// example 2 using `let` keyword same above code :
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log("Runs :", i), 300);
}
// Why does it print 0, 1, 2 correctly?
// let is block-scoped, so each loop iteration gets its own separate i.
// Each setTimeout callback closes over (remembers) its own i value from that iteration.
// When the callbacks run after 100 ms, they print the correct value of i for that iteration.
// In short:
// let creates a new i for each loop iteration.
// Each callback remembers its own i.
// So, you get 0, 1, and 2 printed correctly.
console.log("first ", k);
var k; // if Here i used `let` or `const` instead of `var` then i get the `Reference Error`
console.log("second", k);

k = 4;
console.log("third", i);

var p = "product";
var p = "plane"; // in var redeclaration same variable name allowed but in let or const not allowed //

console.log(p);
console.log(p);

// Different Types of For Loops
// 1. Traditional For Loop
