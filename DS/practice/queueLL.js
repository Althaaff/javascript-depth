function queueUsingLL() {
  let Node = function (elm) {
    this.element = elm;
    this.next = null;
  };

  let head = null;
  let length = 0;

  this.enqueue = function (elm) {
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

    length++;
  };

  // dequeue :
  this.dequeue = function () {
    let current = head;

    if (current) {
      const element = current.element;
      current = current.next;
      head = current;
      length--;
      return element;
    }

    return null;
  };

  // Return the first element in the queue :
  this.front = function () {
    if (head) {
      return head.element;
    }

    return null;
  };

  // Return the last element in the queue :
  this.rear = function () {
    let current = head;

    if (current === null) {
      return null;
    }

    while (current.next) {
      current = current.next;
    }

    return current.element;
  };

  // Convert the queue to an array :
  this.toArray = function () {
    let arr = [];

    let current = head;

    while (current) {
      arr.push(current.element);
      current = current.next;
    }

    return arr;
  };

  // Check if queue is empty :
  this.isEmpty = function () {
    return length === 0;
  };

  // Return the size of the queue :
  this.size = function () {
    return length;
  };

  // clear the queue :
  this.clear = function () {
    head = null;
    length = 0;
  };
}

let queue = new queueUsingLL();
console.log(queue.isEmpty());
queue.enqueue("muhammad");
queue.enqueue("althaf");
queue.enqueue("JS Dev");
console.log(queue.toArray());
queue.dequeue();
queue.dequeue();
console.log(queue.toArray());
queue.enqueue("muhammad");
queue.enqueue("ansar");
queue.dequeue();
console.log(queue.toArray());
console.log(queue.size());
console.log(queue.front());
console.log(queue.rear());
