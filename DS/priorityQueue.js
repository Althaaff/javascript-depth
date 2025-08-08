// Implementing a priority queue in javascript

/*
 List of operations performed on priority queue
 enqueue(): Adds an item at the tail of the queue.
 dequeue(): Removes an item from the head of the queue.
 front(): Returns the first item in the queue.
 rear(): Returns the last item in the queue.
 size(): Returns the size of the queue.
 isEmpty(): Returns true if queue is empty, false otherwise.
*/

function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  // other methods goes here :
  // Adding an item in the priority queue :
  this.enqueue = function (element, priority) {
    const queueElement = new QueueElement(element, priority);

    let added = false;
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority > items[i].priority) {
        items.splice(i, 0, queueElement);

        // Mark the `added` flag to true
        added = true;
        break;
      }
    }

    if (!added) {
      items.push(queueElement);
    }
  };

  // Remove first queue element from the priority queue:
  this.dequeue = function () {
    return [items.shift(), "item removed"];
  };

  // Return the first queue element from the  priority queue:
  this.front = function () {
    return items[0];
  };

  // Return the last element from the queue:
  this.rear = function () {
    return items[items.length - 1];
  };

  // check if queue is empty:
  this.isEmpty = function () {
    return items.length === 0;
  };

  // Return the size of the queue:
  this.size = function () {
    return items.length;
  };

  // Print the queue elements :
  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(
        `element: ${items[i].element} - priority: ${items[i].priority}`
      );
    }
  };
}

const pQ = new PriorityQueue();

pQ.enqueue(1, 3);
pQ.enqueue(3, 3);
pQ.enqueue(4, 10);
pQ.print();
console.log(pQ.dequeue());
console.log(pQ.dequeue());
console.log(pQ.dequeue());
pQ.print();
console.log(pQ.front(), "first item is returned");
console.log(pQ.isEmpty());
