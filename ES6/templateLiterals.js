const a = 10;

console.log(`a is greater than 5 ? ${a > 5 ? true : false}`);

// Passing a function inside template strings
// With ES6 we can pass function to the template literals.
// example 1:
const func = () => 5;

console.log(`a is greater than 5 ? ${func() > 6}`); // func() --> function returns value is greater than 6 then return true else false

// example 2:
const func1 = (i) => i;
const b = 10;

console.log(`a is greater than 5 ? ${func1(b) > 5}`);

// Tagged Templates
// In ES6 the real power of template literals comes from the Tagged Templates.
// With Tagged Templates we can parse the template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions. The function name can be anything that we want. See the following example.
const x = 10;

function square(strings, value1) {
  const str1 = strings[0];
  const str2 = strings[1];

  let num = value1;

  return `${str1} ${num} ${str2} ${num * num} `;
}

console.log(square`Square of ${x} is`);
