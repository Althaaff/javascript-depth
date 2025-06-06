// List of operations performed on Stack
// push(): Adds a single or multiple items to the top of the Stack.
// pop(): Removes and Returns the top item of the Stack.
// peek(): Returns the top item of the Stack.
// isEmpty(): Returns True if Stack is empty, False otherwise.
// clear(): Removes all the items of the Stack.
// size(): Returns the length of the stack.

// Creating a Stack :
// A classical approach :

// Step By Step Implementation of Stack Data Structure :
function Stack() {
  let items = [];
  let top = 0;

  // Push an item in the Stack :
  this.push = function (element) {
    items[top++] = element; //top++, first performs the operation then increment's the value
  };

  // Display all the pushed elements :
  this.display = function () {
    let pushedElements = "";
    for (let i = 0; i < items.length; i++) {
      pushedElements += items[i] + " ";
    }

    return pushedElements.trim();
  };

  // Push an item in the Stack :
  this.pop = function () {
    return items[--top];
  };

  // Peek top item from the Stack :
  this.peek = function () {
    return items[top - 1];
  };

  // Check if Stack is empty :
  this.isEmpty = function () {
    return top === 0;
  };

  // Clear the Stack :
  this.clear = function () {
    return (top = 0);
  };

  // Size of the Stack :
  this.size = function () {
    return top;
  };
}

// Using the Stack :
// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack.peek());
// console.log(stack.display());
// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.clear());
// console.log(stack.isEmpty());

// Stack data structure in JavaScript with Array :

function Stack() {
  let items = [];

  // Push an item in the Stack :
  this.push = function (element) {
    items.push(element);
  };

  // display pushed elements from the stack :
  this.display = function () {
    let pushedElements = "";
    for (let i = 0; i < items.length; i++) {
      pushedElements += items[i] + " ";
    }

    return pushedElements.trim();
  };

  // Pop an item from the Stack :
  this.pop = function () {
    return items.pop();
  };

  // Peek top item from the Stack :
  this.peek = function () {
    return items[items.length - 1];
  };

  // Check if Stack is empty :
  this.isEmpty = function () {
    return items.length === 0;
  };

  // Clear the Stack :
  this.clear = function () {
    items.length = 0;
  };

  // Size of the stack :
  this.size = function () {
    return items.length;
  };
}

const stack2 = new Stack();
stack2.push(4);
stack2.push(5);
stack2.push(6);

console.log(stack2.display());
console.log(stack2.pop());
console.log(stack2.isEmpty());
console.log(stack2.peek());
console.log(stack2.size());
stack2.clear();
console.log(stack2.isEmpty());

// Making the properties and methods private with closure and IIFE (Immediately Invoked Function Expression).
var StackFunc = (function () {
  return function Stack() {
    let items = [];

    //other methods go here
    //Push an item in the Stack :
    this.push = function (element) {
      items.push(element);
    };

    // display the pushed elements from the stack :
    this.display = function () {
      let pushedElements = "";
      for (let i = 0; i < items.length; i++) {
        pushedElements += items[i] + " ";
      }

      return pushedElements.trim();
    };

    //Pop an item from the Stack :
    this.pop = function () {
      return items.pop();
    };

    //Peek top item from the Stack :
    this.peek = function () {
      return items[items.length - 1];
    };

    //Is Stack empty
    this.isEmpty = function () {
      return items.length === 0;
    };

    // clear the stack :
    this.clear = function () {
      items.length = 0;
    };

    // Size of the stack :
    this.size = function () {
      return items.length;
    };
  };
})();

let stack3 = new StackFunc();

stack3.push(6);
stack3.push(7);
stack3.push(8);

console.log(stack3.display());
console.log(stack3.peek());
console.log(stack3.isEmpty());
console.log(stack3.pop());
console.log(stack3.display());
console.log(stack3.size());
stack3.clear();
console.log(stack3.isEmpty());

// Stack data structure using ES6 :

class StackClass {
  constructor() {
    this.items = [];
  }

  push = function (element) {
    this.items.push(element);
  };

  display = function () {
    let pushedElements = "";

    for (let i = 0; i < this.items.length; i++) {
      pushedElements += this.items[i] + " ";
    }
    return pushedElements.trim();
  };

  pop = function () {
    return this.items.pop();
  };

  peek = function () {
    return this.items[this.items.length - 1];
  };

  isEmpty = function () {
    return this.items.length === 0;
  };

  clear = function () {
    this.items.length = 0;
  };

  size = function () {
    return this.items.length;
  };
}

let stack4 = new StackClass();

stack4.push(11);
stack4.push(12);
stack4.push(13);

console.log(stack4.display());
console.log(stack4.isEmpty());
console.log(stack4.pop());
console.log(stack4.peek());
console.log(stack4.size());
stack4.clear();
console.log(stack4.isEmpty());
