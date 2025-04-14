let currentNumber = "";
let previousNumber = "";
let operator = null;

const display = document.getElementById("display");

function appendNumber(number) {
  if (number === "." && currentNumber.includes(".")) return;

  currentNumber += number;

  updateDisplay();
}

function setOperator(op) {
  if (currentNumber === "") return;

  if (previousNumber !== "") calculateResult();
  operator = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function calculate() {
  if (previousNumber === "" || currentNumber === "" || operator == null) return;

  calculateResult();
  operator = null;
}

function calculateResult() {
  const number1 = parseFloat(previousNumber);
  const number2 = parseFloat(currentNumber);
  let result;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;

    case "-":
      result = number1 - number2;
      break;

    case "*":
      result = number1 * number2;
      break;

    case "%":
      if (num2 === 0) {
        alert("Cannot divide by zero");
        clearDisplay();
        return;
      }
      result = num1 / num2;
      break;

    default:
      return;
  }

  currentNumber = result.toString();
  previousNumber = "";
  updateDisplay();
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = null;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentNumber || "0";
}
