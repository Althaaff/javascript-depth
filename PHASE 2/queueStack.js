class QueueUsingStacks {
  constructor() {
    this.inStack = []; // Stack for enqueue operations
    this.outStack = []; // Stack for dequeue operations
  }

  // Enqueue :
  enqueue(value) {
    this.inStack.push(value);
  }

  // dequeue :
  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    return this.outStack.pop();
  }

  // peek returns the front element after dequeue:
  peek() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    return this.outStack[this.outStack.length - 1] || null;
  }

  isEmpty() {
    return this.outStack.length === 0 && this.inStack.length === 0;
  }
}

const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log("peek", queue.peek());
console.log(queue.dequeue());
console.log(queue.isEmpty());
// console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.inStack);
console.log(queue.outStack);
