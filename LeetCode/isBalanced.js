function isBalanced(str) {
  let stack = [];
  let pairs = { "(": ")", "[": "]", "{": "}" };

  for (let char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("({[()]})"));
console.log(isBalanced("({[})"));
