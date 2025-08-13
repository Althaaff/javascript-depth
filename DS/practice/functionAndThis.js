// Function & this in JavaScript
/*
 Functions are the building blocks of JavaScript, it is one of the programming languages that uses functional programming at the core.

 As easy as it is to use the functions, understanding the this keyword is that complex. Because the value of the this is decided at the execution time, unlike other programming languages.

 Majorly there are four different ways to invoke a function in Javascript.
*/

// 1. As a normal function :
function exampleFunc1() {
  console.log("Hello !");
}

exampleFunc1();

// 2. As a method :
const obj = {
  name: "muhammad althaf",
  age: 21,
  displayUserInfo: function () {
    return { info1: this.name, info2: this.age };
  },
};

console.log(obj.displayUserInfo().info1);

// 3. As a constructor :
const number = new Number("3");

console.log(number);

// 4. Indirectly using call, apply, & bind.
function example3(firstName, lastName) {
  return firstName + lastName;
}

console.log(example3.call(undefined, "Muhammad", " Althaf"));

// ex: 2
// The call() method in JavaScript is a built-in Function.prototype method
// used to invoke a function with a specified this value and arguments provided individually.

// Syntax:
// functionName.call(thisArg, arg1, arg2, ...argN)
// functionName: The function you want to invoke.
// thisArg: The value to be passed as this to the function.
// arg1, arg2, ...argN: Optional arguments to be passed to the function.

const person = {
  fullName: function (person2) {
    console.log(person2.firstName + person2.lastName);
    return this.firstName + this.lastName;
  },
};

const person1 = {
  firstName: "muhammad ",
  lastName: "althaf",
};

const person2 = {
  firstName: "muhammad ",
  lastName: "ansar",
};

console.log(person.fullName.call(person1, person2));

/*
 The value of this is decided upon how the function is invoked, 
 each invocation creates its own context and the context decides the value of this.
 Also the “strict mode” affects the behavior of this too.
*/

// It also affects all the inner functions that are defined in the function which is declared in strict mode.

function example4() {
  "use strict";

  console.log(this === undefined);

  // outer function (strict mode) affects inside inner function also :
  function innerFunction() {
    console.log(this === undefined);
  }
  innerFunction();
}

example4();

/*
 IIFE (Immediately Invoked Function Expression)

 When we immediately invoke the function, it is invoked as a normal function thus depending upon the mode, the value of this inside it is decided.
*/

(function example5() {
  // normal mode:

  console.log(this === undefined);
})();

(function example6() {
  // normal mode:
  "use strict";

  console.log(this === undefined);
})();

// Value of “this” when invoked as a method :
/*
 When a function is declared inside an object the value of this inside that function will refer to the object it is declared in.
*/

const exampleObj = {
  founderName: "muhammad althaf",

  displayFounderInfo: function (exObj) {
    return [this.founderName, exObj.founderName];
  },
};

const founderInfo = {
  founderName: "muhammad ansar",
};

console.log(exampleObj.displayFounderInfo.call(founderInfo, exampleObj));

// The context is set at the time of invocation,
// thus if we update the value of the object property value, it will be reflected.

const example = {
  blog: "learn JS",

  displayBlog: function () {
    console.log(this);
    console.log(this === example);
    console.log(this.blog);
  },
};
console.log("outside", this); // here `this` behaves defferently here prints empty object not like object method inside `this` //

example.blog = "MDN";
example.displayBlog();

// If the object is passed as a reference,
// then the context is shared between both the variables, the original and the one that has the reference.

const exampleObj1 = {
  blog: "learn javascript",

  displayBlog: function () {
    console.log(this);
    console.log(this === exampleObj1);
    console.log(this === example2Obj);
    console.log(this.blog);
  },
};

const example2Obj = exampleObj1;
example2Obj.blog = "MDN";

example2Obj.displayBlog();
exampleObj1.displayBlog();

let name = function findName() {
  console.log("Hello world");
};

name();

// This below code is because when object key (method) extracted to a variable and invoked it will be treated as a normal function.

const exampleObj6 = {
  blog: "learn Js",

  displayBlog: function () {
    console.log(this === undefined);
    console.log(this.blog);
  },
};

const display = example2Obj.displayBlog; // displayBlog treated as a normal function
display();

/*
 The same happens when you pass the methods to the timers i.e setTimeout and setInterval. 
 Timers invoke the function as a normal function or throw errors in strict mode.
*/

const exampleObj7 = {
  blog: "learn Js",

  displayBlog: function () {
    console.log("boolean", this === undefined);
    console.log(this.blog);
  },
};

setTimeout(exampleObj7.displayBlog, 300); // here also displayBlog function treated as a noraml function

// If there are any inner functions inside the methods,
// the value of this inside them depends upon how inner function is invoked.

const example8 = {
  blog: "learn Js",

  displayBlog: function () {
    console.log("method", this);
    console.log("method", this.blog);

    // here inner function treated as a normal function so `this.blog` is undefined //
    function inner() {
      // Because the inner function is invoked as a normal function the value of this is a window object.
      console.log(this === undefined);
      console.log(this.blog);
    }

    inner();
  },
};

example8.displayBlog();

/*
 To access the value of the parent we can use either the Fat arrow function or indirect invocation technique using call & apply 
*/

/*
 (Fat arrow function)

 The fat arrow function does not have the this of its own, it access the `this` in its nearest scope.

 In the below example, the fat arrow’s this refers to the this of displayBlog() which refers to the this of the object it is part of.
*/

const example9 = {
  blog: "learn frontend",

  displayBlog: function () {
    // fat arrow function doesnt have `this` of its own so it access `this` in its nearest scope:
    // inner function:
    const inner = () => {
      console.log(this);
      console.log("blog", this.blog);
    };

    inner();
  },
};

example9.displayBlog();

// Using call() method

// We can change the value of `this` inside a function by calling it indirectly with the call method.
const example10 = {
  blog: "learn Js",

  displayBlog: function () {
    console.log("this points to :", this);

    function inner() {
      console.log("logs:", this.blog);
    }

    inner.call(this);
  },
};

example10.displayBlog();

// Value of “this” when invoked as a constructor :
function Example(blog) {
  this.blog = blog;
  console.log("blog ", this.blog);

  this.displayBlog = () => {
    console.log("blog name", this.blog);
  };
}

const ex = new Example("learn node js");
ex.displayBlog();

// Note – There are some methods in JavaScript that when invoked normally behave as a constructor.
const reg1 = RegExp("\\w+");
const reg2 = RegExp("\\w+");

console.log("true or false ?", reg1 === reg2);

// To avoid this we can add a check to the function which we want to be invoked as a constructor only.

function Example1(blog) {
  if (!(this instanceof Example1))
    throw new Error("can be invoked only as a constructor");
  this.blog = blog;
}
const ex2 = new Example1("learn mern stack");
console.log(ex2);
const ex3 = new Example1("learn full stack");
console.log(ex3);

// here below line of code didnt used `new` keyword so it doesnt creates empty object so `this` doesnt points to the object
// so `this` is not a instance of Example1 function

// const ex4 = Example1("learn golang");
// console.log(ex4); throes above error

// Value of “this” when invoked indirectly :
// When the function is invoked indirectly the value of this is what is passed as an argument to the call, apply, & bind method.

// Run time binding

// Using the call and apply methods we can invoke the function with the new context. The values will be attached to that execution only.

const info = {
  role: "javascript engineer",
};

function test(name) {
  console.log(`${name} ${this.role}`);
}
// The difference between call and apply is that (apply) accepts arguments in an array, while (call) accepts it normally.
// FUNCTION PROTOTYPE METHOD is call()
test.call(info, "muhammad altaf");

// FUNCTION PROTOTYPE METHOD is apply()
test.apply(info, ["john"]);

// Permanent binding

// When using bind, we can create a new function with the new values and store it in a variable,
// and then use it further. It creates fresh permanent binding without affecting the original function.

const info2 = {
  name: "muhammad althaf",
};

function test2(blog) {
  console.log(`${this.name} ${blog}`);
}

const ex4 = test2.bind(info2);
ex4("full stack engineer!");
ex4("mern stack engineer!");
