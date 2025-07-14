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

// DOUBLY LINKED LIST :
function doublyLinkedLL() {
  let Node = function (elm) {
    this.element = elm;
    this.prev = null;
    this.next = null;
  };

  let head = null;

  let tail = null;

  let length = 0;

  // doubly linked list methods goes here :
  this.append = function (elm) {
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

    length++;
  };

  this.size = function () {
    return length;
  };

  this.insert = function (position, elm) {
    let node = new Node(elm),
      previous,
      current = head,
      index = 0;

    if (position >= 0 && position <= length) {
      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // update now inserting node.next node is current node which node loop ends with iteration that node and previousNode.next node is inserting node //
        node.next = current;
        previous.next = node;

        // update current.prev node is now inserting node and now inserting node previous node is previous node  :
        current.prev = node;
        node.prev = previous;
      }
    }

    length++;

    return true;
  };

  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      // logic:
      // 1) for removing position 0th node from the Node list
      // 2) for removing position last node from the Node list (ex:- [1,2,3] position === length-1)
      // 3) for removing any of the position except oth and last node

      let current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;

        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
        // testing purpose :
        return "removed!";
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;

        // testing purpose :
        return "removed!";
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;
    }
  };

  this.deleteHead = function () {
    return this.removeAt(0);
  };

  this.deleteTail = function () {
    return this.removeAt(length - 1);
  };

  this.getHead = function () {
    return head;
  };

  this.getTail = function () {
    return tail;
  };
}

// DEQUEUE WITH DOUBLY LINKED LIST :
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

dequeue.removeFront();

dequeue.removeBack();

console.log("HEAD", dequeue.getFront());

console.log("TAIL", dequeue.getBack());

console.log(dequeue.isEmpty());

console.log(dequeue.toString());

console.log(dequeue.size());
