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

// Syntax of fat arrow function in JS :
let names = ["computers", "laptops", "keyboards", "mouse"];

// traditional :
const res1 = names.map(function (item) {
  return "My " + item;
});

console.log(res1);

// es6 :
const res2 = names.map((item) => {
  return `Hello ${item}`;
});
console.log(res2);

// Implicitly return
// With arrow functions we can skip the explicit return and return the value like this.

const res3 = names.map((item) => `Hyy ${item}`);

console.log(res3);

// If there is only one parameter then we can omit the () parentheses.
// Also we don’t need { }braces when returning implicitly.

const abc = (itemName) => `Item Name : ${itemName}`;

console.log(abc("keyboard"));

// Function with no parameters should follow the following syntax:
const bca = () => `hello world!`;
console.log(bca());

let str = 10;
console.log((str += "10"));

const quantity = "100";
let itemNames = ["computers", "laptops", "keyboards", "mouse"];

const res4 = itemNames.map((itemName, i) => ({
  name: itemName,
  price: 100,
  quantity: quantity * i,
}));

console.log(res4);

// test :
// Dynamic Key Names (using a variable for the key itself):
// You can also use a variable's value as the actual key name in an object using bracket notation.

const itemName = "Mobile Phone";
const brand = "Samsung";

const obj = {
  [itemName]: brand,
};

console.log(obj);

// Rest Parameters :
// We can use rest parameters as well in the fat arrow function in javascript :

const quantity1 = 100;
const items = ["laptops", "computers"];

const cost = (quantity, ...names) => {
  console.log(quantity);
  return names;
};

console.log(cost(quantity1, names, names));

// Default Parameters
// We can now define default Parameters.

const defaultParams = (quantity, price = 2) => {
  console.log(quantity);
  return quantity * price;
};

console.log(defaultParams(100));
console.log(defaultParams(100, 4));

// Destructuring
// Destructuring with parameters is also supported now.

const calc = ([a, b] = [1, 2], { x: c } = { x: a + b }) => a + b + c;
console.log(calc());

/*
 No this of its own.
 One of the most challenging part in Javascript is dealing with `this` keyword. 
 As the value of this depends upon the context in which it was called. 
 See the following function for better understanding.
*/

const increment = {
  default: 1,

  /*
    Arrow functions do not have their own this.
    .call() cannot change the `this` inside an arrow function.
    Use regular functions when you need dynamic `this` binding.
   */
  excute1: () => {
    console.log(this);
    return 10 + this.default;
  },

  // using Regular Function :
  excute2: function () {
    return 10 + this.default;
  },
};

console.log(increment.excute1.call(increment));
console.log(increment.excute2.call({ default: 4 }));

/*
 No this of its own.
 One of the most challenging part in Javascript is dealing with this keyword. 
 As the value of this depends upon the context in which it was called.
*/

// he this inside the setInterval is referencing to its context
// and there is no default parameter and we are trying to increment the undefined value so it is returning NaN.
let increment2 = {
  default: 1,

  start: function () {
    setInterval(function () {
      console.log(this.default++);
    }, 2000);
  },
};

// console.log(increment2.start());

// to solve the above issue :
const increment3 = {
  default: 1,

  start: function () {
    // console.log("this context is :", this.number);
    setInterval(() => {
      console.log(this.default++); // here arrow function inside `this` inherit from it's parent scope //
    });
  },
};
// The this keyword here is referencing to its parent so it is accessing default.

// console.log(increment3.start());

// let count = 1;
// setInterval(() => {
//   console.log(count++);
// }, 3000);

const obj3 = {
  name: "muhammad althaf",
  start: function () {
    console.log(this === obj3);
    console.log(this.name);
  },
};

obj3.start();

/*
 Also, since the `this` value is determined by the containing function in which the arrow function is defined, 
 you cannot change the value of `this` using call(), apply(), or bind(). We can just pass parameters.
*/

const increment4 = {
  base: 3,

  add: function (value) {
    const calc = (v) => console.log("incremented value:", v + this.base);
    calc(value);
  },
  // Here below arrow function ignores `call method` so this.base is `NAN`
  substract: (value) => {
    const calc = (v) => console.log("decremented value:", v - this.base); // here happening: console.log("value", 12 - undefined);

    calc(value);
  },
};

increment4.add(12);
increment4.substract.call({ base: 10 }, 17);

// No constructors.
// We cannot use arrow functions with new key word as constructor, Doing so will result in an error.

// const Abc = () => `Hello world`;

// const x = new Abc();
// console.log(x);

// No arguments binding.
// Arrow functions don’t have their own arguments object.Rest parameters are good alternative for arguments.

let args = ["Muhammad", "Althaf", "Ahmad"];
const abcde = (...args) => console.log(args[0][0], args[0][1]);
abcde(args);

// No prototype property.
// Prototype property does not exists for arrow function in javascript.

const xyz = function () {
  return `Hello World!`;
};
console.log(xyz.prototype);

// Unique parameters :
// Unlike traditional Javascript functions where we can use duplicate parameters in unstrict mode.
// In arrow functions we cannot use duplicate parameters at all.

// example :
function example1(a, a, a) {
  console.log(a);
}

example1(1, 2, 3);

// if we use duplicate params for arrow function we get syntax error :
// const example2 = (a, a, a) => {
//   console.log(a);
// };
// example2(1, 2, 3);

// When to avoid using arrow functions in javascript ?
// let button = document.getElementById("clickme");
// button.addEventListener("click", () => {
//   // error: *this* refers to the `Window` Object
//   this.classList.toggle("on");
// });

const person = {
  age: 10,
  getOld: () => {
    // error: *this* refers to the `Window` Object
    this.age += 20;
  },
};

/*
 Also if you want to access all the arguments of the function then it better to avoid 
 arrow functions as arguments are missing or use rest operators.
*/

const a = () => {
  let count = 1;

  let am = Array.from(arguments);

  am.forEach((elm) => {
    count += elm;
  });

  return count;
};

console.log(a());

let abcse = [1, 2, 3, 4, 5, 6, 7];
let ab = (...arguments) => {
  let count = 1;
  let am = Array.from(arguments);
  am.forEach((e) => {
    count *= e;
  });
  return count;
};
console.log(ab(...abcse));

console.log("logged", arguments);
