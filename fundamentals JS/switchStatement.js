/* JavaScript Switch Statement: In-Depth Guide */
// The switch statement is a powerful control flow structure
// that allows you to execute different code blocks based on different conditions
// serving as a cleaner alternative to long if...else if...else chains.

// How Switch Statements Work :
/* 
switch(expression) {
  case value1:
    // Code to execute when expression === value1
    break;
  case value2:
    // Code to execute when expression === value2
    break;
  default:
    // Code to execute if no cases match
}
*/

/*
How It Works Step-by-Step:
The expression is evaluated once

The value of the expression is compared to each case value

If a match is found, execution starts from that case and continues until:

A break statement is encountered, OR

The end of the switch block is reached

If no matches are found, the default case executes (if present)
*/

// // Key Concepts
// 1. Strict Comparison
// Switch uses strict equality (===),
// so values must match both value AND type:

let value = "7";

switch (value) {
  case 5:
    console.log("Number", value);
    break;

  case "5":
    console.log("String", value);
    break;

  default:
    console.log("Not Found!");
}

// 2. The Break Statement
// Crucial concept: Without break, execution will "fall through" to the next case:

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the weak!");
  // Missing break - will continue to Tuesday!

  case "Tuesday":
    console.log("Second Day of the weak!");
    break;
}
// Output: "Start of work week" AND "Second day"

// 3. Fall-Through (Intentional)

const grade = "B";

switch (grade) {
  case "A":
  case "B":
  case "C":
    console.log("Passing Grade");
    break;

  case "D":
  case "F":
    console.log("Failing Grade");
    break;
}

// 4. Default Case
// The optional default case handles values not explicitly matched:

const fruit = "dragonfruit";

switch (fruit) {
  case "apple":
    console.log("Red Fruit!");
    break;

  case "banana":
    console.log("Yellow Fruit!");
    break;

  default:
    console.log("Unknown Fruit!");
}

/*

 When to Use Switch Statements
 Ideal Scenarios:
 
 Multiple specific values for the same variable 

 Enumerated types or predefined sets of values

 State machines where each state has specific behavior

 Command pattern implementations

 Menu systems or user input handling

*/

// Example Scenarios :
// 1. User Role Permissions

function getUserPermissions(role) {
  let permissions = [];

  switch (role) {
    case "admin":
      permissions.push("edit");
      permissions.push("delete");

    case "editor":
      permissions.push("create");

    case "user":
      permissions.push("view");
      break;

    default:
      permissions.push("quest");
  }

  return permissions;
}

console.log(getUserPermissions("admin"));

// 2. HTTP Status Code Handling

function handleStatusCode(status) {
  switch (status) {
    case 200:
      return "OK - Success";

    case 301:
      return "Moved Permanently";

    case 404:
      return "Not Found";

    case 500:
      return "Internal Server Error";

    default:
      return `Unknown status ${status}`;
  }
}

console.log(handleStatusCode(200));

// 3. Calculator Operations
function calculate(a, b, operaions) {
  switch (operaions) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return b !== 0 ? a / b : "Error: Division by 0";

    default:
      return "Invalid Operations";
  }
}

console.log(calculate(4, 4, "+"));

// 4. Game State Management

let gameState = "playing";

switch (gameState) {
  case "menu":
    showMainMenu();
    break;

  case "playing":
    updateGameLogic();
    renderGame();
    break;

  case "paused":
    showPauseMenu();
    break;

  case "gameover":
    showGameOverScreen();
    updateHighScores();
    break;
}

function showMainMenu() {
  console.log("Game Menu Opened!");
}

function updateGameLogic() {
  console.log("Start the Game!");
}

function renderGame() {
  console.log("Game display rendered!");
}

function showPauseMenu() {
  console.log("Pause The Game!");
}

function showGameOverScreen() {
  console.log("Game Over!");
}

function updateHighScores() {
  console.log("Score: 6/10");
}

// Advanced Patterns
// 1. Multiple Expressions per Case

function getSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Fall";
    default:
      return "Invalid month";
  }
}

console.log(getSeason(5));
console.log(getSeason(6));
console.log(getSeason(3));

// 2. Using Expressions in Cases :
function getPriceRange(price) {
  switch (true) {
    case price < 10:
      return "Budget";

    case price < 50:
      return "Affordable";

    case price < 100:
      return "Premium";

    default:
      return "Luxury";
  }
}

console.log(getPriceRange(50));
console.log(getPriceRange(100));

// 3. Returning Values Directly

const getDirection = (angle) => {
  switch (angle) {
    case angle >= 315 || angle < 40:
      return "North";

    case angle >= 45 && angle < 145:
      return "East";

    case angle >= 225 && angle < 315:
      return "West";

    default:
      "Invalid Signal";
  }
};

// Switch vs If/Else: When to Choose Which
/*
 ( Use Switch When ):
 Testing the same variable/expression against multiple values

 You have 3 or more specific cases to handle

 Values are discrete and known in advance

 Code readability would benefit from a structured approach
*/

/*
 ( Use If/Else When ):
 Conditions involve different variables or complex expressions

 You need to check ranges of values (if (x > 10 && x < 20))

 Conditions require custom logic beyond simple equality

 You have only 1-2 conditions to check
*/

/*
 ( Best Practices )
 Always include break statements unless you intentionally want fall-through

 Always include a default case to handle unexpected values

 Keep cases simple - move complex logic to separate functions

 Order cases logically (most common first, or numerically/alphabetically)

 Use consistent formatting for better readability
*/
/*

Common Pitfalls to Avoid
Forgetting break statements causing unintended fall-through

Using non-constant expressions in case labels

Not handling all possible cases (always include default)

Using switch when if/else would be clearer

*/

//4. Using switch when if/else would be clearer

// ❌ Avoid this - if/else would be better
switch (true) {
  case x > 10 && y < 5:
    // complex condition
    break;
  case z === "test" || w === null:
    // another complex condition
    break;
}

// ✅ Better as if/else statements
if (x > 10 && y < 5) {
  // handle condition
} else if (z === "test" || w === null) {
  // handle other condition
}
