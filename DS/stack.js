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
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
console.log(stack.display());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.clear());
console.log(stack.isEmpty());
