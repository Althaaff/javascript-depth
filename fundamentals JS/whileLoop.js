// The Anatomy of a While Loop

let condition = true;
let i = 0;

while (condition) {
  // loop body
  // update statement (crucial)

  console.log("excute infinitely!");
  /*
   In summary, an infinite while loop can lead to excessive resource consumption, 
   program unresponsiveness, potential system instability, 
   and requires external intervention for termination.
  */
  i++;

  if (i === 5) {
    condition = false;
  }
}

// what happens internall ?
// the while loop is beautifully simple in it's excution

// condition check: Evaluate the condition expression
// body excution: If true, execute the loop body
// back to step 1:  Repeat until condition becomes false

// let's trace though this step by step :
let n = 0;

while (n < 3) {
  console.log("Iteration", n);
  n++;
}

/* Internal execution flow:
   Step 1: i < 3?           (0 < 3 = true)
   Step 2: console.log...   (body executes)
   Step 3: i++              (i becomes 1)
   Step 4: i < 3?           (1 < 3 = true)
   Step 5: console.log...   (body executes)
   Step 6: i++              (i becomes 2)
   Step 7: i < 3?           (2 < 3 = true)
   Step 8: console.log...   (body executes)
   Step 9: i++              (i becomes 3)
   Step 10: i < 3?          (3 < 3 = false) - STOP
*/

// While vs Do-While: The Critical Difference
let count = 5;
while (count < 3) {
  console.log("this will never excute!");
  count++;
}

// Output: nothing

// Do-While Loop
// Key Insight: do-while checks the condition AFTER executing the body, guaranteeing at least one execution.
let num = 5;
do {
  console.log("runs atleast once !");
  num++;
} while (num < 3);
// console.log(num); // incremented to 6 //

// For Loop vs While Loop: Under the Hood :
// These are functionally identical:

// For Loop
for (let i = 0; i < 5; i++) {
  // intialization. condition. body excution. increment --> condition. body excution. incrment. (repeat untill condition is false)
  console.log(i);
}

// Equivalent while loop
let j = 0; // intialization

// condition
while (j < 5) {
  console.log(j); // body
  j++; // increment
}

/*
 When to use which?

 For loops: When you know the number of iterations
 While loops: When you iterate based on a changing condition
*/

// Real-World While Loop Patterns
// 1. Processing User Input

function getUserInput() {
  let input;

  while (!input) {
    // undefined is (falsy) values so `Not` (!) operator inverse the condition so check `true` inside `while ()`

    input = prompt("Please enter valid name ?");
  }

  return input;
}

// console.log(getUserInput());

// 2. Reading Data Until End
function processFileLines(lines) {
  let index = 0;

  while (index < lines.length) {
    let line = lines[index];

    if (line.startsWith("#")) {
      index++;
      continue; // skip current comment
    }

    // print comment:
    console.log("Processing:", line);
    index++;
  }
}

const testLines = [
  "# This is a comment line",
  "First actual line to process",
  "# Another comment",
  "",
  "Second line with some text",
  "# End of file comment",
];
processFileLines(testLines);

// 3. Algorithms with Unknown Iterations
// Binary search using while loop
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([4, 5, 2, 7, 8], 8));

// Advanced Concepts & Memory Management
// The Infinite Loop Trap

// DANGEROUS - This will crash your browser!
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     // Forgot to increment i!
// }

// Safe version with a circuit breaker
let k = 0;
let iterations = 0;
let maxIterations = 1000;

while (k < 10 && iterations < maxIterations) {
  console.log("k:", k);
  k++;
  iterations++;
}
// console.log(k, iterations); both 10

if (iterations >= maxIterations) {
  console.log("Loop Safety Limit Reached!");
}

// While Loops with Complex Conditions
// Multiple Conditons :
let health = 100;
let enemies = 5;
let ammo = 20;

while (health > 0 && enemies > 0 && ammo > 0) {
  console.log(
    `Fighting! Health: ${health}, Enemies: ${enemies}, Ammo: ${ammo}`
  );

  // Simulate Battle :
  health -= Math.floor(Math.random() * 20);
  enemies -= Math.floor(Math.random() * 2);
  ammo -= Math.floor(Math.random() * 3);
}

console.log("Battle Ended!");

// Performance Optimization
let arr = [1, 2, 3, 4, 5];
let num1 = 0;

while (num1 < arr.length) {
  console.log(arr[num1]);
  num1++;
}

let arr1 = [1, 2, 3, 4, 5];
let num2 = 0;
// Optimized - cache the length
let len = arr.length;

while (num2 < len) {
  console.log(arr[num2]);
  num2++;
}

// Event-Driven While Loops
// Simulating a game loop

class GameLoop {
  constructor() {
    this.running = true;
    this.frameCount = 0;
  }

  start() {
    while (this.running && this.frameCount < 100) {
      this.update();
      this.render();
      this.frameCount++;
    }
  }

  update() {
    console.log(`Frame: ${this.frameCount}: Updating Game State!`);
  }
  render() {
    console.log(`Frame ${this.frameCount}: Rendering Game State!`);
  }

  stop() {
    this.running = false;
    console.log("Game Stopped!");
  }
}

const gameLoop = new GameLoop();
console.log(gameLoop);
gameLoop.start();
gameLoop.stop();
