function isValid(s) {
  let stack = [];

  let mapObj = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  for (let bracket of s) {
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    } else if (bracket === "}" || bracket === ")" || bracket === "]") {
      if (stack.length === 0) {
        return false;
      } else {
        const poppedElm = stack[stack.length - 1];
        // console.log(poppedElm);

        // check matching opening bracket for current closing bracket :
        if (mapObj[bracket] === poppedElm) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));

console.log(isValid("(])"));

// optimized solution :
function isValidBrackets(s) {
  let stack = [];

  let map = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  for (let bracket of s) {
    if (Object.values(map).includes(bracket)) {
      stack.push(bracket);
    } else if (!stack.length || map[bracket] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isValidBrackets("()"));
console.log(isValidBrackets("()[]{}"));
console.log(isValidBrackets("(]"));
console.log(isValidBrackets("([])"));
console.log(isValidBrackets("([)]"));
console.log(isValidBrackets("(])"));
