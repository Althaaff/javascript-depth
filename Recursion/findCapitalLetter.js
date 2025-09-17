// First uppercase letter in a string (Iterative and Recursive)
// JavaScript program to find the first
// uppercase letter using linear search

// Function to find string which has
// first character of each word.

function first(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) return str[i];
  }

  return 0;
}

const res1 = first("laptop"); // no uppercase letter so returns `0`
const res2 = first("moBile"); // B (uppercase)

console.log(res1);
console.log(res2);

// (solution) using recursion :

function first(str, i = 0) {
  if (i === str.length) {
    return 0;
  }
  if (str[i] === str[i].toUpperCase()) {
    return str[i];
  } else {
    return first(str, i + 1);
  }
}

console.log(first("coding"));
console.log(first("coding Dev"));
