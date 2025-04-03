// basic calculator using javascript :

function calculator(num1, num2, operator) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Error: both inputs must be number !";
  }

  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "%":
      return num1 % num2;

    case "*":
      return num1 * num2;

    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero!";

    default:
      return "Error: Invalid Input!";
  }
}

console.log(calculator(1, 3, "+"));
console.log(calculator(3, 0, "/"));
