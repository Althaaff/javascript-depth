// Before ES6.
// Functions were used to replicate class.

// Declaring properties :

/* Arrow functions do not have their own this. 
   They use the outer this. So console.log(this) inside an arrow function shows the surrounding scope's this. 
   They cannot be used with new. 
*/

const check = () => {
  console.log(this); // refers (lexical scope `=>` function doesnt provide `this` of its own)
};

check();

/*
  Creates a New Object: It creates a new empty object.
  Sets the Prototype: It sets the prototype of the new object to the prototype of the constructor function.
  Binds this: It binds the this keyword within the constructor function to the new object.
  Returns the Object: It implicitly returns the new object unless the constructor function explicitly returns a different object.
*/

// Before ES6 :
// Functions were used to replicate class.

function info(name, age) {
  console.log(this);
  this.name = name;
  this.age = age;
}
const name = "Muhammad Althaf";
const age = 21;

// Calling the function as class
const person1 = new info(name, age);

console.log(person1);
console.log(typeof person1);

// Declaring Methods :
function individual(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;

  this.details = function () {
    return `My Name is ${this.name} and Im ${this.age} years old!`;
  };
}
// declaring methods using prototype:
individual.prototype.jobDetails = function () {
  return `My Name is ${this.name} and Im ${this.job} !`;
};

// calling the function :
const personInfo = new individual(
  "Muhammad Althaf",
  21,
  "Full Stack Developer 👨‍💻"
);
console.log(personInfo.details());
console.log(personInfo.jobDetails());

// ---------------------------------------------------------------------------------------------------------------------------------------- //

/* 
 After ES6.
 There are two ways of declaring a class
 1) Class declaration.
 2) Class expression.
*/

class Individual {
  // A constructor in JavaScript is a special type of function used to create and initialize objects //
  // declaring properties inside constructors //
  constructor(name, qualification, ...args) {
    this.name = name;
    this.qualification = qualification;
    this.args = args;
  }

  // declaring a display method :
  display() {
    return `My Name is ${this.name} and Im ${this.qualification} and ${this.args}`;
  }
}

// creating a person object from individual class :
const person = new Individual("Muhammad Althaf", "BCA", "one", "two", "three");
console.log(person.display());

// Class Expression.
// We can assing the class expression to the variables.
// 1) Unnamed class expression
// 2) Named class expression

// 1) Unnamed class expression (example code)

const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    return `My Name is ${this.name} and ${this.age} years old .!`;
  }
};

const obj = new Person("Muhammad Althaf", 21);
console.log(obj.display());

// 2) Named class expression (example code) :
const Details = class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  display() {
    return `My Name is ${this.name} and My Job ${this.job}`;
  }
};

// creating a person object from individual class
const personDetails = new Details("Muhammad Althaf", "SDE");

// declarin the display method :
console.log(personDetails.display());

let set = new Set();
set.add(1);
set.add("Muhammad Althaf");
set.add("Muhammad Ansar");
set.add("Muhammad Ansaf");

for (let item of set.keys()) {
  console.log(item);
}

// Static methods :
// Static methods are only accessible by parents (class),
// derived child or instance of the class cannot access them :

class Configuration {
  // declaring properties :
  constructor(brandName, storage, battryCapacity) {
    this.brandName = brandName;
    this.storage = storage;
    this.battryCapacity = battryCapacity;
  }

  // declaring by method :
  details() {
    return `Laptop Name is ${this.brandName} and storage is ${this.storage} and battry capacity ${this.battryCapacity}!`;
  }
}

const systemInfo = new Configuration("HP", 256, "72%");
console.log(systemInfo.details());

const checkAgain = (name) => {
  this.name = name;
  console.log("?", this.name);
};

checkAgain("Muhammad Althaf");

// practice :
function myNameAndAge(name, age) {
  this.myName = name;
  this.age = age;

  return `My Name is ${this.myName} and my age is ${this.age}`;
}

const test1 = "Muhammad Althaf";
const test2 = 21;

console.log(myNameAndAge(test1, test2));

// ---------------------------------------------------------------------------------------------------------------------------------------- //
class PersonInfo {
  // declaring properties :
  constructor(name, age, qualification) {
    this.name = name;
    this.age = age;
    this.qualification = qualification;
  }

  //declaring method
  //accessible by all
  display() {
    return `My Name is ${this.name} and My Age ${this.age}`;
  }

  // static method
  // accessible only my parent
  static personalMethod() {
    // return `My Qualification ${this.qualification}`;
    console.log("Hello World!");
  }
}

const result = new PersonInfo("Muhammad Althaf", 21, "BCA");

console.log(result.display());
PersonInfo.personalMethod();

// Accessor Properties
// There are two accessor properties which we can use with class.
// 1) Set:- To set the value of any property.
// 2) Get:- To get the value of any property.

class Info {
  constructor(name) {
    this.name = name;
  }

  set setName(name) {
    this.name = name;
  }

  get getName() {
    return `My Name is ${this.name}`;
  }
}

const information = new Info();
information.setName = "Muhammad Ansar";
console.log(information.getName);

// ----------------------------------------------------------------------------------------------------------------------------------------- //

// Inheritance
// Before ES6, implementing inherintance was a tedious process with prototype. Proper inheritance required multiple steps.

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// declaring method to calculate area;
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

// Extending rectangle to use it as square
// using call, apply, bind
function Square(length) {
  Rectangle.call(this, length, length);
}

// Extending Methods :
Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

let square = new Square(4);

console.log(square.getArea());
console.log(square instanceof Square);
console.log(square instanceof Rectangle);

// After ES6, we can use extends keyword to achieve the inheritance like above :
class RectangleCalc {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  // Method to calculate area :
  getArea() {
    return this.width * this.length;
  }
}

// extend the square to use rectangle :
class SquareCalc extends RectangleCalc {
  constructor(width, length) {
    super(width, length);
  }
}

const calculateSquare = new SquareCalc(5);

console.log(calculateSquare instanceof SquareCalc);
console.log(square.getArea());
console.log(calculateSquare instanceof Rectangle);
