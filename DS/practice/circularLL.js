function circularLL() {
  let Node = function (elm) {
    this.element = elm;
    this.next = null;
  };

  let head = null;
  let length = 0;

  this.elementAt = function (index) {
    if (index >= 0 && index <= length) {
      let node = head;

      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  };

  this.append = function (elm) {
    let node = new Node(elm),
      current;

    if (head === null) {
      head = node;
    } else {
      current = this.elementAt(length - 1);
      current.next = node;
    }

    node.next = head;
    length++;
  };

  this.insert = function (elm, index) {
    if (index >= 0 && index <= length) {
      let node = new Node(elm),
        current = head;

      if (index == 0) {
        if (head === null) {
          head = node;
          node.next = head;
        } else {
          node.next = current;
          current = this.elementAt(length - 1);
          head = node;
          current.next = head;
        }
      } else {
        // insert node at (middle or end) :
        const previous = this.elementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      length++;

      return [true, "new node inserted successfully.."];
    }
  };

  this.removeAt = function (index) {
    let current = head;
    if (index >= 0 && index < length) {
      if (index === 0) {
        if (head === null) {
          head = undefined;
        } else {
          const removed = head;
          current = this.elementAt(length);
          head = head.next;
          current.next = head;
          current = removed;
        }
      } else {
        // removing (middle or end node) :
        const previous = this.elementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      length--;
      return current.element;
    }
    return undefined;
  };

  // find index of element :
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

  this.isPresent = function (elm) {
    return this.indexOf(elm) !== -1;
  };

  this.getHead = function () {
    return head;
  };

  this.getTail = function () {
    return this.elementAt(length - 1);
  };

  // delete an element from circular linked list :
  this.delete = function (elm) {
    return this.removeAt(this.indexOf(elm));
  };

  this.deleteHead = function () {
    this.removeAt(0);
  };

  this.toString = function () {
    let current = head;

    let string = "";
    // keep track of the head :
    let temp = head.element;

    while (current) {
      if (temp === current.next.element) {
        //If head is the next element then break :
        string += current.element + (current.next ? "\n" : " ");
        break;
      }

      string += current.element + (current.next ? "\n" : " ");
      current = current.next;
    }

    return string;
  };

  // convert list to array :
  this.toArray = function () {
    let arr = [],
      current = head;

    // keep track of the head :
    const temp = head.element;

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

  // check if list is empty :
  this.isEmpty = function () {
    return length === 0;
  };

  // get the size of the list :
  this.size = function () {
    return length;
  };
}

const dll = new circularLL();
dll.append(10);
dll.append(20);
dll.append(30);
dll.append(60);
dll.append(50);

console.log(dll.removeAt(3));
dll.insert(40, 3);
console.log(dll.toString());
console.log(dll.toArray());
dll.deleteHead();
console.log(dll.indexOf(40));
console.log(dll.delete(50));
console.log(dll.toArray());
