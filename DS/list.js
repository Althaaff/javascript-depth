/*
 List of operation performed by list ADT
 size (method): Returns the size of the list.
 clear (method): Clears the list.
 print (method): Prints all the items of the list.
 getElement (method): Returns the item at the current position in the list.
 insert (method): Inserts a new item after the given item in the list.
 append (method): Adds a new item on the top of the list.
 remove (method): Removes the given item from the list.
 front (method): Moves the position to the first item in the list.
 rear (method): Moves the position to the last item in the list.
 prev (method): Moves the position to the previous item in the list.
 next (method): Moves the position to the next item in the list.
 currPos (method): Returns the current position in the list.
 moveTo (method): Moves to the specific position in the list.
 contains (method): Check if item is present in the list
*/

// Implementing list data structure in Javascript :
// A classical approach :

function List() {
  this.items = [];
  this.listSize = 0;
  this.pos = 0;

  // all the methods goes here :

  // Adding item to the list :
  this.append = (elm) => {
    this.items[this.listSize++] = elm;
  };

  // Finding item in the list :
  // this wont work for objects and arrays :
  this.find = (elm) => {
    for (let i = 0; i < this.listSize; i++) {
      if (this.items[i] === elm) {
        return i;
      }
    }

    return -1;
  };

  // Removing item from the list :
  this.remove = (elm) => {
    const index = this.find(elm);

    if (index > -1) {
      this.items.splice(index, 1);

      // update the listSize :
      --this.listSize;

      return true;
    }

    return false;
  };

  // Insert item after the given item in the list :
  this.insert = (elm, after) => {
    let insertPos = this.find(after);

    if (insertPos > -1) {
      this.items.splice(insertPos + 1, 0, elm);

      // update listSize :
      ++this.listSize;

      return true;
    }

    return false;
  };

  // Check if item is present in the list :
  this.contains = (elm) => {
    const index = this.find(elm);

    return true ? index > -1 : false;
  };

  // Move to the first item in the list :
  this.front = () => {
    this.pos = 0;
  };

  // Move to the last item in the list :
  this.rear = () => {
    this.pos = this.listSize - 1;
  };

  // Move to the previous item in the list :
  this.prev = () => {
    if (this.pos > 0) {
      --this.pos;
    }
  };

  // Move to the next item in the list :
  this.next = () => {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  };

  // Move to the specific item in the list :
  this.moveTo = (pos) => {
    if (pos > 0 && pos <= this.listSize) {
      this.pos = pos - 1;
    }
  };

  // Get the current position in the list :
  this.currentPos = () => {
    return this.pos;
  };

  // Get the current item in the list :
  this.getElement = () => {
    return this.items[this.pos];
  };

  // Get the size of the list :
  this.size = () => {
    return this.listSize;
  };

  // Print all the items of the list :
  this.print = () => {
    return this.items.join(",");
  };

  // clear the list :
  this.clear = () => {
    this.items = [];
    this.pos = 0;
    this.listSize = 0;
  };
}

const list1 = new List();

list1.append(1);
list1.append(2);
list1.append(3);

list1.insert(4, 3);
console.log(list1.getElement());
list1.next();
console.log(list1.getElement());
list1.prev();
console.log(list1.getElement());
list1.rear();
console.log(list1.getElement());
console.log("size", list1.size());
list1.remove(2);
console.log("size", list1.size());
console.log(list1.print());
