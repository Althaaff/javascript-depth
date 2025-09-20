// Phase 2: Logic and Control Flow (Making Decisions) :-
// Conditional Statements
// if...else if...else - Complete Guide
// What is if...else if...else?
// It's a way to make decisions in your code. Like asking questions and doing different things based on the answers.
// Think of it like: "If this is true, do this. Otherwise, if that is true, do that. Otherwise, do something else."

// Basic Syntax :
const condition1 = false;
const condition2 = true;
if (condition1) {
  // Do this if condition1 is true
  console.log("condition 1 is excuted!");
} else if (condition2) {
  // Do this if condition1 is false AND condition2 is true
  console.log("condition2 is excuted!");
} else {
  // Do this if ALL conditions above are false
  console.log("both above condition fails !");
}

// Simple Examples:
// Ex1: Age Checker :

let age = 18;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You are too young to vote !");
}

// Example 2: Grade Calculator :

let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 85) {
  console.log("Grade C");
} else {
  console.log("Grade: F");
}

// Example 3: Weather Advice
let weather = "rainy";

if (weather === "sunny") {
  console.log("Wear sunglasses!");
} else if (weather === "rainy") {
  console.log("Take an umbrella!");
} else if (weather === "cold") {
  console.log("Wear a jacket!");
} else {
  console.log("Check the weather forecast!");
}
/*
 Important Rules:
 Only ONE block executes - once a condition is true, it skips the rest
 else if can be used multiple times
 else is optional and runs when all conditions are false
 Order matters - conditions are checked from top to bottom
*/

/*
  🎯 CHALLENGES FOR YOU!
  Challenge 1: Number Classifier (Easy)
  Write code that takes a number and tells if it's:

  Positive
  Negative
  Zero
*/

function checkInput(num) {
  if (num === 0) {
    console.log("your input number is Zero!");
  } else if (num > 0) {
    console.log("your input number is positive!");
  } else {
    console.log("your input is negative!");
  }

  // using ternary operator (simple):
  console.log(
    num > 0 ? "num is positive" : num < 0 ? "num is negative" : "num is 0"
  );
}

checkInput(0);
checkInput(2);
checkInput(-3);

/*
 Challenge 2: Traffic Light (Easy)
 Create a traffic light system:

 "red" → "Stop!"
 "yellow" → "Get Ready!"
 "green" → "Go!"
 Any other color → "Invalid signal!"
*/

function trafficLight(light) {
  if (light === "red") {
    console.log("Stop!");
  } else if (light === "yellow") {
    console.log("Get Ready!");
  } else if (light === "Green") {
    console.log("Go!");
  } else {
    console.log("Invalid Signal!");
  }
}
trafficLight("red");
trafficLight("yellow");
trafficLight("Green");
trafficLight("blue");

// Challenge 3: Movie Ticket Pricing (Medium)
// Calculate movie ticket price based on:

// Child (under 12): $8
// Student (12-17): $10
// Adult (18-64): $15
// Senior (65+): $10

function movieTicketPricing(age, price) {
  if (age < 12) {
    console.log(`Child ( Under 12 ): $${price}`);
  } else if (age >= 12 && age <= 17) {
    console.log(`Student Movie Ticket Price ${price}`);
  } else if (age >= 18 && age <= 64) {
    console.log(`Adult Movie Ticket Price ${price}`);
  } else {
    console.log("Senior Movie Ticket Price ", price);
  }
}

movieTicketPricing(11, 8);

// Challenge 4: Password Strength Checker (Medium)
/*
 Check password strength:

 Length < 6: "Weak"
 Length 6-10: "Medium"
 Length > 10: "Strong"
*/

function passwordStrengthChecker(password) {
  let length = password.length;

  if (length < 6) {
    console.log("your password too weak!");
  } else if (length >= 6 && length <= 10) {
    console.log("your password is Medium!");
  } else {
    console.log("your password is Strong!");
  }
}
passwordStrengthChecker("alfhyg");
passwordStrengthChecker("k1k1");
passwordStrengthChecker("a12s3fe45thy");

// Challenge 5: Grade Calculator with + and - (Hard)
/*
 Expand the grade system:

 97-100: A+
 93-96: A
 90-92: A-
 87-89: B+
 83-86: B
 80-82: B- 
*/

function gradeCalculator(score) {
  if (score >= 97 && score <= 100) {
    console.log("your grade is A+");
  } else if (score >= 93 && score <= 96) {
    console.log("your grade is A");
  } else if (score >= 90 && score <= 92) {
    console.log("your grade is A-");
  } else if (score >= 87 && score <= 89) {
    console.log("your grade is B+");
  } else if (score >= 83 && score <= 86) {
    console.log("your grade is B");
  } else {
    console.log("your grade is B-");
  }
}
gradeCalculator(90);
gradeCalculator(60);
gradeCalculator(89);

// Challenge 6: Day of Week Activity (Hard)
/*
 Based on the day, suggest an activity:

 Monday: "Start the week strong!"
 Tuesday-Thursday: "Keep working hard!"
 Friday: "TGIF! Almost weekend!"
 Saturday: "Sleep in and relax!"
 Sunday: "Prepare for the new week!"
*/

function activity(day) {
  if (day === "Monday") {
    console.log("Start the week strong!");
  } else if (day === "Tuesday" || day === "Thursday") {
    console.log("Keep working hard!");
  } else if (day === "Firday") {
    console.log("TGIF! Almost weekend!");
  } else if (day === "Saturday") {
    console.log("Sleep in and relax!");
  } else {
    console.log("Prepare for the new week!");
  }
}

activity("Monday");
activity("Tuesday");
activity("Thursday");
activity("Sunday");

// Number (data type) :
let integerNumber = 42; // Integer
let floatNumber = 3.14159; // Floating-point number
let scientificNotation = 1.23e5; // Scientific notation (1.23 * 10^5)
let hexNumber = 0xff; // Hexadecimal (255 in decimal)
let binaryNumber = 0b1010; // Binary (10 in decimal)

console.log(integerNumber);
console.log(floatNumber);
console.log(scientificNotation);
console.log(hexNumber);
console.log(binaryNumber);

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("hello" / 2); // NaN
