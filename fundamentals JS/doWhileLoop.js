// The Anatomy of Do...While Loop
// Syntax :
/*
 do {
  // loop body - ALWAYS executes at least once
 } while (condition);
*/

/*
 What Happens Internally
 The key difference from while loops is the execution order:
 Body Execution: Execute the loop body immediately  
 Condition Check: Evaluate the condition after execution
 Decision: If true, go back to step 1; if false, exit
*/

// Let's trace through this step by step
let i = 5;

do {
  console.log("Iteration:", i); // excuted once before condition check
} while (i < 3); // condition got false so exited from the loop

/* Internal execution flow:
 Step 1: console.log...   (body executes - no condition check first!)
 Step 2: i++              (i becomes 6)
 Step 3: i < 3?           (6 < 3 = false) - STOP
 Output: "Iteration: 5"   (executed once despite false condition)
*/

// Do...While vs While: The Critical Difference :
// Scenario: User input validation
let userInput;

// ( while loop ) might never excute :
userInput = "valid input"; // pre populated //
while (!userInput || userInput.trim() === "") {
  // never runs :
  userInput = "Enter Something..";
  console.log(userInput);
}

// DO...WHILE LOOP - always executes at least once
userInput = ""; // start empty

do {
  userInput = "Enter Something..";
  console.log(userInput);
} while (!userInput || userInput.trim() === "");

// Memory and Performance Insights
// Stack Frame Analysis
// Each iteration creates a new execution context

function demonstrateStack() {
  let callCount = 0;

  do {
    console.log(`Call ${callCount}: Stack depth at this point`);
    callCount++;

    // The condition check happens AFTER this execution
    // Memory for variables stays allocated until condition check
  } while (callCount < 3);
}

demonstrateStack();

// Condition Evaluation Cost
// EXPENSIVE condition - only evaluated after each execution
function expensiveCondition() {
  console.log("Complex calculation is running!");
  return Math.random() > 0.8; // 20% chance to continue //
}

let attempts = 0;

do {
  attempts++;
  console.log(`Attempt --> ${attempts}: Doing Work!`);
} while (expensiveCondition() && attempts < 10);

// Real-World Patterns Where Do...While Shines
// Menu Systems :

function displayMenu() {
  let choice;

  do {
    console.log("\n === MAIN MENU === ");
    console.log("1. View Profile");
    console.log("2. Settings");
    console.log("3. Exit");

    choice = "3";

    switch (choice) {
      case "1":
        console.log("Viewing profile...");
        break;

      case "2":
        console.log("Opening settings...");
        break;

      case "3":
        console.log("Good Bye!");
        break;

      default:
        console.log("Invalid Choice!");
    }
  } while (choice !== "3");
}

displayMenu();

// 2. Retry Mechanisms

async function fetchDataWithRetry(url, maxTries = 3) {
  let attempt = 0;
  let response;

  // Subsequent Iterations (If Retries Needed)
  // If the condition was true, the body runs again:
  // attempt++ (e.g., to 2).
  // Same process: Log, await fetch, check OK, possibly return JSON (exits early), or catch error.
  // After each body (if no return), check condition again.
  // Maximum iterations: 3 (attempts 1, 2, 3). On the 3rd, if no success, condition fails after body, and it throws.

  do {
    attempt++;

    try {
      console.log(`Attempt ${attempt}: Fetching data...`);
      response = await fetch(url);

      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.log(`Attempt: ${attempt} failed:`, error.message);
    }
    // Always try at least once, then check if we should retry
  } while (attempt < maxTries);

  throw new Error(`Failed after ${maxTries} attempts`);
}
(async () => {
  try {
    const data = await fetchDataWithRetry(
      "https://fake-json-api.mock.beeceptor.com/users",
      3
    );

    console.log("json data:", data);
  } catch (error) {
    console.log("error while fetching..", error.message);
  }
})();

// Game Loops :
class GameLoops {
  constructor() {
    this.gameOver = false;
    this.score = 0;
  }

  playRound() {
    this.score += Math.floor(Math.random() * 100);
    console.log(`Round complete! Score: ${this.score}`);

    // random chance to end game :
    if (Math.random() < 0.3) {
      this.gameOver = true;
      console.log("Game Over!");
    }
  }

  startGame() {
    do {
      // always excutes body once without condition check
      this.playRound();
    } while (!this.gameOver);

    console.log(`Final Score : ${this.score}`);
  }
}

const game = new GameLoops();
game.startGame();
