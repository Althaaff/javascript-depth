// Javascript Fat Arrow Function :
/*
  One of the most interesting parts of ES6 is arrow functions. 
  Arrow functions as it sounds is the new syntax => of declaring a function. 
  But it behaves differently from the traditional functions of Javascript.
*/

/*
  No this, arguments, super or new.target bindings of its own.
  We cannot use them as Constructors.
  They do not have prototype property.
  yield keyword cannot be used(Until in special cases).
  Unique named parameters.

*/

// example 1:
const names = ["althaf", "python", "Javascript"];

// tradition javascript function :
const abc = names.map(function (name) {
  return `Hello ${name}`;
});

console.log(abc);

// ES6 arrow function :
const bca = names.map((name) => {
  return `Hello ${name}`;
});

console.log(bca);

// Implicitly return
// With arrow functions we can skip the explicit return and return the value like this.

const func = (a) => a;

const value = 10;

console.log(func(value));

const teams = ["rcb", "mumbai", "gt", "kkr", "lsg"];

const acb = teams.map((team) => `Hello ${team} play bold!`);

console.log(acb);

// If there is only one parameter then we can omit the () parentheses.
// Also we don’t need { }braces when returning implicitly.

const example = (name) => `Hello ${name}`;

console.log(example("Althaf"));

// Function with no paramater syntax should follow the following syntax :
const xyz = () => "Hello";
console.log(xyz());

// With implicit return we can return object literals like this.
// We need to wrap the object literals inside ( ) parentheses.

const quantity = "100";
const items = ["Steel", "Gold", "Copper"];

const cost = items.map((item, i) => ({ item, quantity, price: quantity * i }));

console.log(cost);

// Rest Parameters
// We can use rest parameters as well in the fat arrow function in javascript.

const quantityOfItem = "100";
const itemss = ["Steel", "Gold", "Copper"];

const costs = (quantity, ...items) => {
  console.log(quantity);
  console.log(items);
};

costs(quantityOfItem, items, items, items);

// Default Parameters
// We can now define default Parameters.

const number = 5;

const multiply = (num1, num2 = 3) => {
  console.log(num1 * num2);
};
multiply(number);
multiply(number, 20);

// Destructuring :
// Destructuring with parameters is also supported now.

let num = 3;
const f = ([a, b] = [1, 2], { x: c } = { x: a + b }) => a + b + c + num;

console.log(f());
