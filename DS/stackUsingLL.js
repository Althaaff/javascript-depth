function stackUsingLinkedList() {
  let Node = function (elm) {
    this.element = elm;
    this.next = null;
  };

  let length = 0;

  let head = null;

  // other methods go here :

  // Push an item in the stack :
  this.push = function (elm) {
    let node = new Node(elm),
      current;

    current = head;
    node.next = current;

    head = node;

    length++;
  };

  // Pop an item from the stack :
  this.pop = function () {
    let current = head;

    if (current) {
      let elm = current.element;
      current = current.next;
      head = current;

      length--;
      return elm;
    }

    return null;
  };

  // Peek the top item in the stack :
  // While peeking just return the first item in the list :

  this.peek = function () {
    if (head) {
      return head.element;
    }

    return null;
  };

  // Converting stack to an array :
  // To convert the stack to an array,
  // we can copy all the items to the array and return it.

  this.toArray = function () {
    let current = head;
    let arr = [];

    while (current) {
      arr.push(current.element);

      current = current.next;
    }

    return arr;
  };

  // Get the size of the stack :
  this.size = function () {
    return length;
  };

  // check if stack is empty :
  this.isEmpty = function () {
    return length === 0;
  };

  // clear the stack :
  this.clear = function () {
    head = null;
    length = 0;
  };
}

let stack = new stackUsingLinkedList(); //creating new instance of Stack
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.size());
stack.clear(); //clear the stack
console.log(stack.isEmpty());
