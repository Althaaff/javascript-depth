// implement circular doubly linked list :

function circularDoublyLL() {
  let Node = function (element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  };

  let length = 0;
  let head = null;
  let tail = null;

  // methods goes here:
  this.append = function (element) {
    let node = new Node(element),
      current = head,
      previous;

    if (!head) {
      head = node;
      tail = node;
    } else {
      node.prev = tail;
      tail.next = node;
      tail = node;
    }

    // mark head's prev element as last element
    head.prev = tail;

    // mark tail's next element as first element
    tail.next = head;
    length++;
  };

  // Inserting element at given position in circular double linked list :
  // insert element at any position
  this.insert = function (element, position) {
    // Check of out-of-bound value
    if (position >= 0 && position <= length) {
      let node = new Node(element),
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

        // set next node :
        node.next = current;
        previous.next = node;

        // set prev node :
        current.prev = node;
        node.prev = previous;
      }
      head.prev = tail;

      tail.next = head;

      length++;
      return true;
    } else {
      return false;
    }
  };

  // helper function to get element from specific index :
  this.getElementAt = function (index) {
    if (index >= 0 && index <= length) {
      let current = head;

      let node = current;

      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }
      return node;
    } else {
      return undefined;
    }
  };

  this.removeAt = function (index) {
    let current = head;

    if (index >= 0 && index < length) {
      if (index === 0) {
        if (length === 1) {
          head = undefined;
        } else {
          const removed = head;
          current = this.getElementAt(length - 1);
          head = head.next;
          current.next = head;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      if (head) {
        head.prev = tail;

        tail.next = head;
      }

      length--;
      return current.element;
    } else {
      return undefined;
    }
  };

  this.toString = function () {
    let current = head;
    let string = "";
    let temp = head.element;

    while (current) {
      if (temp === current.next.element) {
        string += current.element + (current.next && "\n");
        break;
      }

      string += current.element + (current.next && "\n");
      current = current.next;
    }

    return string;
  };

  this.toArray = function () {
    let current = head;
    let temp = head.element;

    let arr = [];
    while (current) {
      if (temp === current.next.element) {
        arr.push(current.element);
        break;
      }

      arr.push(current.element);
      current = current.next;
    }

    return arr;
  };

  this.indexOf = function (element) {
    let current = head;
    let index = -1;

    while (current) {
      if (element === current.element) {
        return ++index;
      }

      index++;
      current = current.next;
    }
  };

  this.getHead = function () {
    return head.element;
  };

  this.getTail = function () {
    return tail.element;
  };

  this.delete = function (element) {
    return this.removeAt(this.indexOf(element));
  };

  this.deleteHead = function () {
    return this.removeAt(0);
  };

  this.deleteTail = function () {
    return this.removeAt(length - 1);
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.size = function () {
    return length;
  };
}

const cLL = new circularDoublyLL();
cLL.append(10);
cLL.append(20);
cLL.append(30);
console.log(cLL.toString());
console.log(cLL.insert(40, 3));
console.log(cLL.toArray());
console.log(cLL.insert(50, 2));
console.log(cLL.insert(70, 0));
console.log(cLL.toArray());
console.log(cLL.delete(70));
console.log(cLL.toArray());
console.log(cLL.getHead());
console.log(cLL.getTail());
