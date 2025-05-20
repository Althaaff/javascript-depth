/* 
  List of operation performed by queue
  enqueue(): Adds an item at the tail of the queue.
  dequeue(): Removes an item from the head of the queue.
  front(): Retruns the first item in the queue.
  rear(): Retruns the last item in the queue.
  size(): Returns the size of the queue.
  isEmpty(): Returns true if queue is empty, false otherwise.
*/

// Creating Queue in different approaches :

/*1. Classical Approach */

function Queue() {
  let items = [];
  let front = 0;
  let rear = -1;
  let count = 0;

  console.log(count);

  // other methods goes here :

  // Adding an item in the queue
  this.enqueue = (elm) => {
    items[++rear] = elm;
    count++;
  };

  // Remove an item from the queue :
  this.dequeue = () => {
    let current = front++;

    const temp = items[current];
    items[current] = null;
    count--;

    return temp; // return removed element from the queue //
  };

  // Return the first element from the queue :
  this.front = () => {
    return items[front];
  };

  // Return the last element from the queue :
  this.rear = () => {
    return items[rear];
  };

  // Check if queue is empty :
  this.isEmptyQueue = () => {
    return true ? count === 0 : false;
  };

  // Return the size of the queue :
  this.size = () => {
    return count;
  };

  // Print the queue :
  this.print = () => {
    const temp = items.filter((elm) => elm !== null);

    return temp.toString();
  };
}

// Using the queue :
// Input :

const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.print());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log("rear", queue.rear());
console.log("size", queue.size());

console.log(queue.isEmptyQueue());

// 2. Queue with javascript array methods :
function Queue2() {
  let items = [];

  // other methods goes here :

  // Add a new element in queue
  this.enqueue = function (elm) {
    items.push(elm);
  };

  // remove element from the queue and return it :
  this.dequeue = function () {
    return items.shift();
  };

  // Return the first element from the queue :
  this.front = function () {
    return items[0];
  };

  // Return the last element from the queue :
  this.rear = function () {
    return items[items.length - 1];
  };

  // Check if queue is empty :
  this.isEmptyQueue = function () {
    return items.length === 0;
  };

  // Return the size of the queue :
  this.size = function () {
    return items.length;
  };

  // Print the queue :
  this.print = function () {
    return items.toString();
  };
}

let queue2 = new Queue2();
queue2.enqueue(5);
queue2.enqueue(6);
queue2.enqueue(7);

console.log("empty ?", queue2.isEmptyQueue());
console.log(queue2.size());
console.log(queue2.dequeue());
console.log(queue2.front());
console.log(queue2.rear());
console.log(queue2.print());
