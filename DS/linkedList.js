// Linked List implementation :

function linkedList() {
  let Node = function (elm) {
    this.element = elm;
    this.next = null;
  };

  let length = 0;

  let head = null;

  // all the other methods go here :

  // Adding an item in the linked list :
  this.append = function (elm) {
    let node = new Node(elm),
      current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    // after append increase the length :
    length++;
  };

  // Removing an item from the given position in the linked list :
  this.removeAt = function (pos) {
    if (pos > -1 && pos < length) {
      let current = head,
        previous,
        index = 0;

      if (pos === 0) {
        head = current.next;
      } else {
        if (index++ < pos) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      // decrease the lenghth :
      length--;

      return current.element;
    } else {
      return null;
    }
  };

  // Insert element at the given position in the linked list :
  this.insert = function (pos, elm) {
    if (pos >= 0 && pos <= length) {
      let node = new Node(elm),
        current = head,
        previous,
        index = 0;

      if (pos === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < pos) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }

      length++;

      return true;
    } else {
      return false;
    }
  };

  // Getting the index of the element in the list :
  this.indexOf = function (elm) {
    let current = head,
      index = -1;

    while (current) {
      if (elm === current.element) {
        return ++index;
      }

      index++;
      current = current.next;
    }

    return -1;
  };

  // Check if element is present in the list :
  this.isPresent = function (elm) {
    return this.indexOf(elm) !== -1;
  };

  // Delete element from the list :
  this.delete = function (elm) {
    return this.removeAt(this.indexOf(elm));
  };

  // Delete first item from the list :
  this.deleteHead = function () {
    let current = head;

    if (current === null) {
      return true;
    }
    if (current.next) {
      current = current.next;
      head = current;
    } else {
      head = null;
    }

    return true;
  };

  // Delete last item from the list :
  this.deleteTail = function () {
    let current = head;

    while (current.next) {
      if (!current.next.next) {
        current.next = null;
      } else {
        current = current.next;
      }
    }

    return true;
  };

  // Return the list as a string :
  this.toString = function () {
    let current = head,
      string = " ";

    while (current) {
      string += current.element + (current.next ? "\n" : " ");

      current = current.next;
    }

    return string;
  };

  // Return the list as an array :
  this.toArray = function () {
    let arr = [],
      current = head;

    while (current) {
      arr.push(current.element);

      current = current.next;
    }

    return arr;
  };

  // Check if list is empty :
  this.isEmpty = function () {
    return length === 0;
  };

  // Get the size of the list :
  this.getSize = function () {
    return length;
  };

  // Get the head of the list :
  this.getHead = function () {
    return head;
  };
}

let ll = new linkedList();
ll.append("muhammad");
ll.append("althaf");
ll.append("ansar");
console.log(ll.toArray());

// remove 'althaf' from the list
ll.removeAt(1);
console.log(ll.toArray());

// remove the first element from the list
ll.deleteTail();
console.log(ll.toArray());

console.log(ll.insert(1, "althaf"));
console.log(ll.toString());
