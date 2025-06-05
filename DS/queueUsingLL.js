/* 
 Enqueue adds elements to the back of the queue.
 Dequeue removes elements from the front of the queue.
*/

function queueUsingLL() {
  let Node = function (elm) {
    this.element = elm;
    this.next = null;
  };

  // keep track of the size :
  let length = 0;

  // keep track of the list :
  let head = null;

  // other methods goes here:
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

    // increase the length:
    length++;
  };

  this.dequeue = function () {
    let current = head;

    if (current) {
      let element = current.element;

      current = current.next;
      head = current;
      length--;

      return element;
    }

    return null;
  };

  this.front = function () {
    if (head) {
      return head.element;
    }

    return null;
  };

  // peek the last item in the queue :
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

  // convert queue to and array :
  this.toArray = function () {
    let arr = [];

    let current = head;

    while (current) {
      arr.push(current.element);
      current = current.next;
    }

    return arr;
  };

  // get the size of the queue :
  this.size = function () {
    return length;
  };

  // check if queue is Empty :
  this.isEmpty = function () {
    return length === 0;
  };
}

let queue = new queueUsingLL();
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.size());
queue.dequeue();
console.log(queue.size());
console.log(queue.rear());
console.log(queue.front());
console.log(queue.toArray());
console.log(queue.isEmpty());
