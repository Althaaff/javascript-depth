/* 
 Deque or Double-ended queue is a generalized version of queue in which data can be added and removed from both the ends. 
 It performs both the combined operations of stack and queue together and can be used as any of them.
*/

/*
  List of operations performed on Deque
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

function Deque() {
  // track the elements from the back :
  let count = 0;

  // track the elements from the front :
  let lowestCount = 0;

  // to store the data :
  let items = {};

  // other methods goes here :
  // add an item on the front :

  this.insertFront = (elm) => {
    if (this.isEmpty()) {
      this.insertBack(elm);
    } else if (lowestCount > 0) {
      items[--lowestCount] = elm;
    } else {
      for (let i = count; i > 0; i--) {
        items[i] = items[i - 1];
      }

      count++;
      items[0] = elm;
    }
  };

  this.insertBack = (elm) => {
    items[count++] = elm;
  };

  this.removeFront = () => {
    if (this.isEmpty()) {
      return null;
    }

    const result = items[lowestCount];

    delete items[lowestCount];

    lowestCount++;

    return result;
  };

  this.removeBack = () => {
    if (this.isEmpty()) {
      return null;
    }

    count--;
    const result = items[count];

    delete items[count];

    return result;
  };

  // Get the first element from the front :
  this.getFront = () => {
    if (this.isEmpty()) {
      return null;
    }

    return items[lowestCount];
  };

  // get the last element fron the back :
  this.getBack = () => {
    if (this.isEmpty()) {
      return null;
    }

    return items[count - 1];
  };

  // check if dequeue is empty :
  this.isEmpty = () => {
    return this.size() === 0;
  };

  // check the size of the dequeue :
  this.size = () => {
    return count - lowestCount;
  };

  // clear the dequeue :
  this.clear = () => {
    items = {};
    lowestCount = 0;
    count = 0;
  };

  this.toString = () => {
    if (this.isEmpty()) {
      return null;
    }

    const objString = `${items[lowestCount]}`;

    for (let i = lowestCount + 1; i < count; i++) {
      objString = `${objString} ${items[i]}`;
    }

    return objString;
  };
}

let deque = new Deque();
deque.insertBack(5);
deque.insertBack(10);
console.log(deque.getBack());
deque.removeBack();
console.log(deque.getBack());
deque.insertFront(15);
console.log(deque.getFront());
deque.removeFront();
console.log(deque.getFront());
