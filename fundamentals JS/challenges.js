// CHALLENGES FOR YOU TO SOLVE
// Challenge 1: Basic Pattern (Easy)

// Create a function that prints this pattern using for loops:
// *
// **
// ***
// ****
// *****

function printStar(n) {
  for (let i = 0; i < n; i++) {
    let line = "";

    for (let j = 0; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
printStar(5);

// Challenge 2: The Closure Trap (Medium)
// Fix this code so it prints 0, 1, 2 instead of 3, 3, 3
// test :
// for (var i = 0; i < 3; i++) {
//   function test() {
//     console.log(i);
//   }
//   test();
// }

// Challenge 2: The Closure Trap (Medium)
// If you use let instead of var, a new variable is created for each loop iteration:
let func = [];

for (let i = 0; i < 3; i++) {
  func[i] = function () {
    console.log(i);
  };
}
func[0]();
func[1]();
func[2]();

// Create a multiplication table using nested loops
// Output should look like:
// 1 x 1 = 1    1 x 2 = 2    1 x 3 = 3
// 2 x 1 = 2    2 x 2 = 4    2 x 3 = 6
// 3 x 1 = 3    3 x 2 = 6    3 x 3 = 9

function multiplicationTable(size) {
  // Your code here

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}
multiplicationTable(10);

// Challenge 4: Algorithm Thinking (Hard)
// Find all pairs in an array that sum to a target value
// Example: [1, 2, 3, 4, 5], target = 5
// Output: [[1,4], [2,3]]

function findPairs(arr, target) {
  // Your code here - use nested loops
  // Bonus: Can you do it in O(n) time instead of O(n²)?
  let res = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === target) {
        res.push([arr[i], arr[j]]);
      }
    }
  }

  return res;
}

console.log(findPairs([1, 2, 3, 4, 5], 5));

// Bonus: Can you do it in O(n) time instead of O(n²)?
function findPairs2(arr, target) {
  let seen = new Set();
  let res = [];

  for (let num of arr) {
    let complement = target - num;
    console.log(complement);

    if (seen.has(complement)) {
      res.push([complement, num]);
    }

    // Add current number to seen set
    seen.add(num);
  }

  return res;
}

console.log(findPairs2([1, 2, 3, 4, 5], 5));

// While Loop Challenge :
// CHALLENGES FOR YOU TO SOLVE
// Challenge 1: Number Guessing Game (Easy)
// Create a number guessing game using while loop
// The computer picks a random number 1-100
// User keeps guessing until they get it right
// Give "higher" or "lower" hints

function numberGuessingGame(simulatedGuess) {
  let targetNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let guessIndex = 0;

  console.log("Simulated game - Target is", targetNumber);

  while (guessIndex < simulatedGuess.length) {
    const userGuess = simulatedGuess[guessIndex];
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      console.log(`Invalid Guess: ${userGuess}. Skipping..`);
      guessIndex++;
      continue;
    }

    console.log(`Guess: ${attempts} - ${userGuess}`);

    if (userGuess === targetNumber) {
      return `Correct! You guessed ${targetNumber} in ${attempts} attempts.`;
    } else if (userGuess < targetNumber) {
      console.log("Too Low! Hint (try higher)");
    } else {
      console.log("Too High! Hint (try lower)");
    }

    guessIndex++;
  }

  return `Game over. Didn't guess ${targetNumber} in ${attempts} attempts.`;
}

// Test with simulated inputs:
console.log(numberGuessingGame([76, 43, 40]));
