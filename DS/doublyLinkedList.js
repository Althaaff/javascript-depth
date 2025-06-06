/*
 List of operations performed on linked list
 append(element): Adds a new element in the list.
 removeAt(position): Removes an element from the given position in the list and returns it.
 insert(position, element): Adds an element at the given position in the list.
 toString(): Joins all the elements of the list and returns it as a string.
 toArray(): Converts the linked list to the array and returns it.
 indexOf(element): Returns the position of the given element in the list.
 delete(element): Removes the given element from the list.
 deleteHead(): Removes the first element from the list.
 deleteTail(): Removes the last element from the list.
 isPresent(element): Returns true if element is present in the list, false otherwise.
 isEmpty(): Returns true if the list is empty, false otherwise.
 size(): Returns the size of the list.
 getHead(): Returns the whole list to iterate in forward direction.
 getTail(): Returns the whole list to itreate in backward direction.
*/

/*  In the doubly linked list, we maintain two pointers
     1. For the next element.
     2. For the previous element. 
*/

// implementing doubly linked list using javascript :

function doublyLinkedLL() {
  let Node = function (elm) {
    this.element = elm;
    this.prev = null;
    this.next = null;
  };

  let head = null;

  let tail = null;

  let length = 0;

  // other methods goes here :

  // Adding an item in the doubly linked list :
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

  // Insert an element at the given position in doubly linked list :
  // Insert element at the beginning :

  this.insert = function (position, elm) {
    if (position >= 0 && position <= length) {
      let node = new Node(elm),
        current = head,
        previous,
        index = 0;

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

        node.next = current;
        previous.next = node;

        // new :
        current.prev = node;
        node.prev = previous;
      }

      length++;

      return true;
    } else {
      return false;
    }
  };

  // Remove an element from the given position in doubly linked list :
  // removing first element :
  this.removeAt = function (position) {
    // look for out of bounds values :
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;

      // removing first item :
      if (position === 0) {
        head = current.next;

        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;
      return current.element;
    } else {
      return null;
    }
  };

  // Getting index of the given element
  // We will be returning the zero based index for linked list elements just like arrays,
  // If element is not present then we will return -1.

  this.indexOf = function (elm) {
    let current = head;
    let index = -1;

    while (current) {
      if (elm === current.element) {
        return ++index;
      }

      index++;
      current = current.next;
    }

    // above `while loop` doesnt return anything means ur finding element is not found in the list just return -1 (not found):
    return -1;
  };

  // Check if element is present in the doubly linked list :
  this.isPresent = function (elm) {
    return this.indexOf(elm) !== -1;
  };

  // delete an element from the doubly linked list:
  this.delete = function (elm) {
    return this.removeAt(this.indexOf(elm));
  };

  // delete the head of the doubly linkedlist :
  this.deleteHead = function () {
    this.removeAt(0);
  };

  // delete the tail of the doubly linked list :
  this.deleteTail = function () {
    this.removeAt(length - 1);
  };

  // Return the doubly linked list as string :
  this.toString = function () {
    let current = head,
      string = "";

    while (current) {
      string += current.element + (current.next ? "\n" : "");
      current = current.next;
    }

    return string;
  };

  // Return the doubly linked list as an array :
  this.toArray = function () {
    let arr = [];
    let current = head;

    while (current) {
      arr.push(current.element);
      current = current.next;
    }

    return arr;
  };

  // Check if doubly linked list is empty :
  this.isEmpty = function () {
    return length === 0;
  };

  // Get the size of doubly linked list :
  this.size = function () {
    return length;
  };

  // Get the head of doubly linked list :
  this.getHead = function () {
    return head;
  };

  // Get the tail of doubly linked list :
  this.getTail = function () {
    return tail;
  };
}
let dll = new doublyLinkedLL();
dll.append(1);
dll.append(2);
dll.append(3);
dll.insert(3, 4);
// dll.deleteHead();
// dll.deleteTail();
// dll.deleteHead();
console.log(dll.toArray());
console.log(dll.toString());
