// Object in javascript :
// // Syntax :
// const objectName = {
//   key1: value1,
//   key2: value2,
// };

// Using object literals :
// The most simplest and prominent method to declare objects in javascript is by using { } braces :

const object = {};

// As the keys of the objects can be any string including the empty string .
// we can omit the quotes around the property names while declaring in object literals if the string does not contain any spaces.
object.name = "Muhammad althaf";
object["age"] = 21;

console.log(object);

// Example 1: Basic Object Literal

const person = {
  name: "muhammad althaf",
  age: 21,
  isStudent: true,
};

console.log(person.name);
console.log(person.isStudent);

// Example 2: Object Literal with Function (Method) :
const car = {
  brand: "toyota",
  model: "camry",

  startEngine: function () {
    console.log(this.brand + " engine started!");
  },
};

console.log(car.brand);
car.startEngine();

// Example 3: Nested Object Literal:
const student = {
  studentName: "Muhammad Althaf",
  roleNo: "22BDACC133",

  college: {
    name: "yenepoya",
    course: "BCA",
  },
};

console.log(student.studentName);
console.log(student.roleNo);
console.log(student.college.name);
console.log(student.college.course);

// Example 4: Array of Object Literals

const users = [
  { name: "Muhammad Althaf", age: 21 },
  { name: "Muhammad Ansar", age: 16 },
];

users.length = 1;
console.log(users);
console.log(users[0].name);
console.log(users.length);

// By creating instance of the object using new keyword :

const object1 = new Object();

object1.name = "muhammad althaf ";
object1.role = "software developer ";
object1.age = "21";

object1.getAllValues = function () {
  return `Name: ${this.name}` + `Role: ${this.role}` + `Age: ${this.age}`;
};

console.log(object1.getAllValues());

// By creating a constructor :
// we can create a function which can be used as a constructor to create new objects.

function Obj(name, age) {
  // Properties:
  this.name = name;
  this.age = age;

  // Methods :
  this.getDetails = function () {
    return `${this.name} and ${this.age} years old!`;
  };
}

const result = new Obj("Muhammad Althaf", 21);
console.log(result.getDetails());

// Retrieving data from objects :
// Values from objects can be retrieved using two different techniques.
// Using dot . notation
// We can use the period or . to retrieve the value of properties or call the methods
// if the name of the properties names does not contains any space.

let exampleObj = {
  name: "Muhammad Althaf",
  "what is this": "Example",
  "my age": 21,
};

console.log(exampleObj.name);
console.log(exampleObj["what is this"]);
console.log(exampleObj["my age"]);

// example :
let exampleObj2 = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
};

// run for loop to access the object key value :
for (let i = 0; i <= 3; i++) {
  console.log(exampleObj2[i]);
}

// Updating the object values :
// We can update the values of the object by assigning the new values to it.
// If the property does not already exists then it will add a new one.

let obj = {
  name: "Muhammad Althaf",
};

console.log(obj.name);
obj.age = 21;

// Updating the object values
let obj1 = {};

obj1.name = "althaf";

obj1.age = 21;

obj1["gender"] = "Male";

console.log(obj1["gender"]);
console.log(obj1);

const person1 = obj1;

person1.name = "Muhammad ansar";
person1.age = "16";

console.log(person1.name);
console.log(person1.age);

// Copying an object in javascript :
// Shallow copy :

// If we want to do a shallow copy of an object then we can use Object.assign(To, From) method which copies one object to other.

let obj2 = {
  name: "Muhammad Althaf",
  age: 21,
  details: {
    gender: "Male",
  },
};

// Note: In shallow copy, the nested objects are still passed as a reference to the new object.
const copy = Object.assign({}, obj2);

console.log(copy);

console.log(copy.details.gender);

// updating the age from the shallow copy object :
copy.age = 22;

console.log(copy);

// Deep copy
// We can use JSON.parse() and JSON.stringify() together to create a deep copy of an object.

let obj3 = {
  name: "Muhammad Althaf",
  age: 23,
};

let copyObject = JSON.parse(JSON.stringify(obj));

console.log(copyObject);

// Extending objects with prototype
// Every object in javascript is linked to a prototype object from which it can inherit properties and methods.
// Prototype object comes standard with javascript and is available with every object that is created with object literals.

let obj4 = {};

obj4.name = "Muhammad Althaf";
obj4.age = 21;

obj4.getInfo = function () {
  return `My name is ${this.name} ${this.age} years old!`;
};

console.log(obj4.getInfo());

// Deleting object properties
// We can use the delete operator to remove the property from the object.
// If the property is not present then it will simply ignore it.

let obj9 = {};

obj9.name = "Muhammad Althaf";
obj9.age = 21;

obj9.getInfos = function () {
  return `My Name is ${this.name} and ${this.age} years old!`;
};

// delete obj9.age;

console.log(obj9.getInfos());

let object9 = {
  name: "Muhammad Althaf",
};

object9.gender = "Male";
object9.getDetails = function () {
  return this;
};

console.log(object9.hasOwnProperty("gender"));

// use in operator to check if a given property exist or not.
// It will look for the property in the prototype chain also.

console.log("gender" in object9);
console.log("getDetails" in object9);

// Enumerating the objects in javascript.
// Using the for...in loop to iterate through each property of the given object.

let exObject = {
  name: "Althaf",
  age: 24,
  getDetails: function () {
    return `${this.name} is ${this.age} years old`;
  },
};

// Adding property to prototype :

// example 1:
// for (let key in exObject) {
//   if (typeof exObject[key] === "function") {
//     console.log(exObject[key]());
//   } else {
//     console.log(exObject[key]);
//   }
// }

// example 2:
for (let key in exObject) {
  if (exObject.hasOwnProperty(key) && typeof exObject[key] !== "function") {
    console.log("consoled");
    console.log(exObject[key]);
  } else {
    console.log("consoled");
    console.log(exObject[key]());
  }
}

// Using Object.Keys.
// Object.Keys(obj) takes an object as an input and returns the array of keys as a output.
// It does not return keys from the prototype chain so we can use this safely.

console.log(Object.keys(exObject));

const checkArray = Object.keys(exObject);

for (let value of checkArray) {
  console.log("value", value);
}

for (let key in checkArray) {
  console.log("keys", key);
}

Object.keys(exObject).forEach((key, i) => {
  console.log(`key ${key} index ${i}`);
});
