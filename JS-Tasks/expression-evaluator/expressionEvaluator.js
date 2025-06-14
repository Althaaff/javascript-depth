document.addEventListener("DOMContentLoaded", () => {
  const expressionInput = document.getElementById("expressionInput");
  const calculateButton = document.getElementById("calculateButton");
  const error = document.getElementById("error");
  const result = document.getElementById("result");

  console.log(expressionInput, calculateButton, error, result);

  function tokenize(expression) {
    expression = expression.replace(/\s/g, "");

    console.log(expression[0]);

    if (!expression) throw new Error("Enter an expression!");

    let tokens = [];

    let i = 0;

    while (i < expression.length) {
      let char = expression[i];

      if (/\d/.test(char)) {
        let num = "";

        while (i < expression.length && /\d/.test(expression[i])) {
          num += expression[i++];
        }

        tokens.push(num);

        continue; // skips the other checks go to the next outer loop iteration //
      }

      if (/[\+\-\*\/\(\)]/.test(char)) {
        tokens.push(char);

        i++;
        continue;
      }

      throw new Error("Invalid characters :", +char);
    }

    return tokens;
  }

  function validateTokens(tokens) {
    let parenCount = 0;
    for (let i = 0; i < tokens.length; i++) {
      const curr = tokens[i];
      if (curr === "(") parenCount++;
      if (curr === ")") parenCount--;
      if (parenCount < 0) throw new Error("Unbalanced parentheses");
      if (
        /[\+\-\*\/]/.test(curr) &&
        i < tokens.length - 1 &&
        /[\+\-\*\/]/.test(tokens[i + 1])
      ) {
        throw new Error("Consecutive operators");
      }
    }
    if (parenCount !== 0) throw new Error("Unbalanced parentheses");
    if (/[\+\-\*\/]/.test(tokens[tokens.length - 1]))
      throw new Error("Expression ends with operator");
  }

  function getPrecedence(operator) {
    if (operator === "+" || operator === "-") return 1;
    if (operator === "*" || operator === "/") return 2;

    return 0;
  }

  function toRPN(tokens) {
    const output = [];
    const operators = [];
    for (const token of tokens) {
      if (/\d+/.test(token)) {
        output.push(token);
      } else if (/[\+\-\*\/]/.test(token)) {
        while (
          operators.length &&
          operators[operators.length - 1] !== "(" &&
          getPrecedence(operators[operators.length - 1]) >= getPrecedence(token)
        ) {
          output.push(operators.pop());
        }
        operators.push(token);
      } else if (token === "(") {
        operators.push(token);
      } else if (token === ")") {
        while (operators.length && operators[operators.length - 1] !== "(") {
          output.push(operators.pop());
        }
        if (!operators.length) throw new Error("Unbalanced parentheses");
        operators.pop(); // Remove '('
      }
    }
    while (operators.length) {
      const op = operators.pop();
      if (op === "(" || op === ")") throw new Error("Unbalanced parentheses");
      output.push(op);
    }
    return output;
  }

  function evaluateRPN(rpn) {
    const stack = [];
    for (const token of rpn) {
      if (/\d+/.test(token)) {
        stack.push(parseFloat(token));
      } else {
        if (stack.length < 2) throw new Error("Invalid expression");
        const b = stack.pop();
        const a = stack.pop();
        switch (token) {
          case "+":
            stack.push(a + b);
            break;
          case "-":
            stack.push(a - b);
            break;
          case "*":
            stack.push(a * b);
            break;
          case "/":
            if (b === 0) throw new Error("Division by zero");
            stack.push(a / b);
            break;
          default:
            throw new Error("Unknown operator");
        }
      }
    }
    if (stack.length !== 1) throw new Error("Invalid expression");
    return stack[0];
  }

  function evaluateExpression(expression) {
    const tokens = tokenize(expression);
    validateTokens(tokens);
    const rpn = toRPN(tokens);
    return evaluateRPN(rpn);
  }

  function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
    result.textContent = "";
    setTimeout(() => error.classList.add("hidden"), 3000);
  }

  function renderResult() {
    try {
      const expression = expressionInput.value.trim();
      const value = evaluateExpression(expression);
      result.textContent = `Result: ${value}`;
      error.classList.add("hidden");
    } catch (err) {
      showError(err.message);
    }
  }

  calculateButton.addEventListener("click", (e) => {
    e.preventDefault();
    renderResult();
  });

  expressionInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      renderResult();
    }
  });

  expressionInput.addEventListener("input", () => {
    result.textContent = "";
    error.classList.add("hidden");
  });
});
