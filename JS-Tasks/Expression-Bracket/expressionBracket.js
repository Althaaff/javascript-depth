const textInput = document.getElementById("expression-input");
const validateButton = document.getElementById("validate-btn");
const resultDisplay = document.getElementById("result");

validateButton.addEventListener("click", () => {
  const expression = textInput.value;
  const validateResult = validateBrackets(expression);
  displayResult(validateResult, resultDisplay);
});

function validateBrackets(expression) {
  const exprArr = expression.split("");
  const bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = new Stack();
  const openBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];

  // track the position for reporting errors :
  const positionTracker = Array(expression.length).fill(null);

  for (let index = 0; index < exprArr.length; index++) {
    const char = exprArr[index];

    if (openBrackets.includes(char)) {
      stack.push({ type: char, position: index });
      positionTracker[index] = "open";
    } else if (closingBrackets.includes(char)) {
      if (stack.isEmpty()) {
        return {
          valid: false,
          error: "Unmatched closing bracket",
          positions: [index],
        };
      }

      const lastOpen = stack.pop();
      if (bracketPairs[lastOpen.type] !== char) {
        return {
          valid: false,
          error: "Mismatched brackets",
          positions: [lastOpen.position, index],
        };
      }

      positionTracker[lastOpen.position] = "matched";
      positionTracker[index] = "matched";
    }
  }

  if (!stack.isEmpty()) {
    const unmatchedPosition = getAllPos(stack.storage);
    return {
      valid: false,
      error: "Unmatched opening brackets",
      positions: unmatchedPosition,
    };
  }

  return { valid: true, positions: positionTracker };
}
function hilightMatchedBracket(positions) {
  textInput.focus();

  textInput.selectionStart = textInput.selectionEnd = 0;

  for (let i = 0; i < positions.length; i++) {
    if (positions[i] === "matched") {
      textInput.selectionStart = i;
      textInput.selectionEnd = i + 1;

      try {
        document.execCommand("hiliteColor", false, "#d1f3d1");
      } catch (e) {
        console.log("Highlighting not supported", e);
      }
    }
  }

  textInput.selectionStart = textInput.selectionEnd = 0;
}

function hilightErrorBracket(positions) {
  textInput.focus();

  textInput.selectionStart = textInput.selectionEnd = 0;

  positions.forEach((pos) => {
    textInput.selectionStart = pos;
    textInput.selectionEnd = pos + 1;

    try {
      document.execCommand("hiliteColor", false, "#f5b7b1");
    } catch (e) {
      console.log("Highlighting not supported", e);
    }
  });

  textInput.selectionStart = textInput.selectionEnd = 0;
}

function hilightMatchedBracket(positions) {
  textInput.focus();
  textInput.selectionStart = textInput.selectionEnd = 0;

  for (let i = 0; i < positions.length; i++) {
    if (positions[i] === "matched") {
      textInput.selectionStart = i;
      textInput.selectionEnd = i + 1;
      try {
        document.execCommand("hiliteColor", false, "#d1f3d1");
      } catch (e) {
        console.log("Highlighting not supported", e);
      }
    }
  }

  textInput.selectionStart = textInput.selectionEnd = 0;
}

class Stack {
  constructor() {
    this.storage = [];
  }

  push(item) {
    this.storage.push(item);
  }

  pop() {
    if (this.storage.length === 0) return null;
    return this.storage.pop();
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

function getAllPos(stack) {
  return stack.map((item) => item.position);
}

function displayResult(result, displayElement) {
  if (result.valid) {
    displayElement.textContent = "✓ Valid expression!";
    displayElement.className = "valid";
    hilightMatchedBracket(result.positions);
  } else {
    displayElement.textContent = `✗ Error: ${result.error}`;
    displayElement.className = "invalid";
    hilightErrorBracket(result.positions || [result.position]);
  }
}
