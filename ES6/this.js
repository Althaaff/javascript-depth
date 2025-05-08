// No this of its own.
// One of the most challenging part in Javascript is dealing with this keyword.
// As the value of this depends upon the context in which it was called. Check out this here.
/*

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

*/
var increment = {
  default: 1,

  start: function () {
    // here below used stand alone function
    setInterval(function () {
      console.log(this.default++);
    }, 2000);
  },
};

// increment.start();

// this in below example `this` referes to the global object (window object) .

var increment = {
  default: 1,

  start: function () {
    setInterval(() => {
      console.log(this);
      console.log(this.default++);
    }, 1000);
  },
};

// increment.start();

// simple example for `this` :
const person = {
  firstName: "Muhammad ",
  lastName: "Althaf",
  qualification: "BCA",

  call: function () {
    setInterval(() => {
      console.log(this.firstName + " " + this.lastName);
    }, 1000);
  },
};

// call the object method :

// person.call();

// example call method :

/* What is `f`?
   `f` is a function that takes a number (v) and adds it to this.base.
    At this point, this is not yet defined because f hasn’t been called.
    Why Use call(this, a)?

    When you write f.call(this, a), you are telling JavaScript to run the function `f` and use the current context (the increment object) as `this` inside f.
    This means that when f runs, this.base will refer to increment.base, which is 1. */

let incrementObj = {
  base: 1,

  add: function (a) {
    let f = (f) => f + this.base;

    return f(a);
  },

  // here base 10 is not adds bcoz `=>` function doesnt provide `this` of its own  :
  // when `f` function runs.. base: 10 doesnt adds to this.base thats why `base: 10` ignored in => function :

  addAgain: function (b) {
    let f = (f) => f + this.base;

    return f.call({ base: 10 }, b);
  },
};

console.log(incrementObj.add(12));
console.log(incrementObj.addAgain(12));

// for fix the above issue :
var incrementObject = {
  base: 3,

  multiply: function (num) {
    let v = function (value) {
      console.log("base :", this.base);
      return value * this.base;
    };

    return v.call(this, num);
  },

  // example: using `=>` function  :
  // note: `=>` function doesnt provide `this` of its own :

  // substract: function (num) {
  //   let s = (value) => {
  //     return value - this.base;
  //   };

  //   return s(num);
  // },

  // without using arrow function :
  substract: function (num) {
    let sub = function (value) {
      return value - this.base;
    };

    return sub.call(this, num);
  },
};

console.log(incrementObject.multiply(9));
console.log(incrementObject.substract(9));
