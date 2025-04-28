// uderstanding `this` :
// 1️⃣:

function getThis() {
  return this;
}

const obj1 = { name: "Muhammad Althaf", age: 21 };
const obj2 = { name: "Muhammad Ansar", age: 16 };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis());
console.log(obj2.getThis());

// 2️⃣:
function object() {
  const info = {
    name: "muhammad althaf",
    age: 21,
    address: "Kudradka",

    getInfo() {
      return this;
    },
  };

  return info;
}

const myInfo = object();

// console.log(info); // object function returned info //

console.log(myInfo.getInfo()); // get info returned `this` --> referes to the global object //

// 3️⃣:
const person = {
  name: "muhammad althaf",
  age: 21,
  poneNumber: 9741645752,
  address: "manglore",

  greet: function () {
    return `My name is ${this.name} & My age is ${this.age} Im from ${this.address}.`;
  },
};

// call the object Method :
console.log(person); // returns the object //

console.log(person.greet());
