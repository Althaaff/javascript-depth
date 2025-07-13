// function List() {
//   this.append = (elm) => {
//     console.log(elm);

//     return elm;
//   };
// }

// function dequeueDLL(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   this.user = function () {
//     console.log(`User info : ${this.firstName} ${this.lastName}`);
//   };

//   const list = new List();

//   this.insert = function (elm) {
//     list.append(elm);

//     return [list.append("typescript developer"), true];
//   };
// }

// const dequeueDL = new dequeueDLL("muhammad", "athaf");

// console.log(dequeueDL);
// console.log(dequeueDL.insert("software developer"));

// dequeueDL.user();

// code of deque with doubly linked list :
/*
  // List of operations performed on dequeue //  

  insertFront(): Inserts an element at the front.
  insertBack(): Inserts an element at the back.
  removeFront(): Removes an element from the front.
  removeBack(): Removes an element from the back.
  getFront(): Returns the element at the front.
  getBack(): Returns the element at the back.
  isEmpty(): Checks if the deque is empty or not.
  size(): Returns the size of the deque.
  clear(): Clears the deque.
  toString(): Returns all the elements concatenated as a string from front to back.
 */

function doublyLinkedLL() {
  const list = [];

  let Node = function (elm) {
    this.element = elm;
    this.prev = null;
    this.next = null;
  };

  let head = null;

  let tail = null;

  // doubly linked list methods goes here :
  this.append = function (elm) {
    list.push(elm);

    let node = new Node(elm),
      current = head;

    if (!head) {
      head = node;
      tail = node;
    } else {
      node.prev = tail;
      tail.next = node;
      tail = node;
    }
  };

  this.size = function () {
    return list.length;
  };

  this.insert = function (index, elm) {
    list.splice(index, 0, elm);
  };

  this.deleteHead = function () {
    const removed = list.shift();

    if (head) {
      head = head.next;

      if (head) head.prev = null;
      else tail = null;
    }

    return removed;
  };

  this.deleteTail = function () {
    const removed = list.pop();

    if (tail) {
      tail = tail.prev;

      if (tail) tail.next = null;
      else head = null;
    }

    return removed;
  };

  this.getHead = function () {
    console.log("head", head);
    return head;
  };

  this.getTail = function () {
    return tail;
  };
}

function dequeueWithDLL() {
  // create doubly linked list object :
  const dll = new doublyLinkedLL();

  // methods are goes here :
  this.insertFront = function (elm) {
    dll.append(elm);

    return [true, elm];
  };

  this.insertBack = function (elm) {
    const length = dll.size();

    dll.insert(length, elm);
    return [true, elm];
  };

  this.removeFront = function () {
    return dll.deleteHead();
  };

  // remove an item from the back :
  this.removeBack = function () {
    return dll.deleteTail();
  };

  this.getFront = function () {
    const head = dll.getHead();

    return head ? head.element : undefined;
  };

  this.getBack = function () {
    const tail = dll.getTail();

    return tail ? tail.element : undefined;
  };

  this.size = function () {
    return dll.size();
  };

  this.isEmpty = function () {
    return this.size() === 0 ? true : false;
  };

  this.clear = function () {
    dll = new doublyLinkedLL();
  };

  this.toString = function () {
    if (this.isEmpty()) {
      return "";
    }

    let current = dll.getHead();
    let str = "";

    while (current) {
      str += current.element + " ";

      current = current.next;
    }

    return str.trim();
  };
}

const dequeue = new dequeueWithDLL();

console.log(dequeue.insertFront(4));

console.log(dequeue.insertBack(6));

console.log(dequeue.insertBack(5));

console.log(dequeue.insertBack(9));

console.log(dequeue.removeFront());

console.log(dequeue.removeBack());

console.log(dequeue.getFront());

console.log(dequeue.getBack());

console.log(dequeue.isEmpty());

console.log(dequeue.toString());

console.log(dequeue.size());
