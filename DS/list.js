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

  // this.find = (elm) => {
  //   for (let i = 0; i < this.listSize; i++) {
  //     if (this.items[i] === elm) {
  //       return i;
  //     }
  //   }

  //   return -1;
  // };

  // make the list work with Objects and Arrays data :
  // We will need to update the find method to compare two different objects and arrays :

  this.find = (elm) => {
    for (let i = 0; i < this.listSize; i++) {
      if (Object.entries(this.items[i] === Object.entries(elm))) {
        return i;
      }
    }

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
  // modify the print method to work with objects and arrays :
  this.print = () => {
    return this.items
      .map((item) => {
        if (typeof item === "object" && item !== null) {
          let str = JSON.stringify(item);

          // Remove the first and last characters (the curly braces) :
          str = str.substring(1, str.length - 1);

          // Remove quotes from keys :
          str = str.replace(/"([^"]+)":/g, "$1:");

          return str;
        }

        return item;
      })
      .join(",");
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
list1.append({ a: 1, b: 2 });

list1.insert(4, 3);
console.log(list1.getElement());
list1.next();
console.log(list1.getElement());
list1.prev();
console.log(list1.getElement());
list1.rear();
console.log(list1.getElement());
console.log("size", list1.size());
list1.remove({ a: 1, b: 2 });
console.log("size", list1.size());
console.log(list1.print());

// List implemented with ES6 Class :
class List2 {
  constructor() {
    this.listSize = 0;
    this.items = [];
    this.pos = 0;
  }

  // all the methods :
  append(ele) {
    this.items[this.listSize++] = ele;
  }

  // util function for equality check:
  isEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (
      typeof a !== "object" ||
      a === null ||
      typeof b !== "object" ||
      b === null
    ) {
      return false;
    }

    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    for (let key of aKeys) {
      if (!this.isEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  // find the item in the list :
  find(ele) {
    for (let i = 0; i < this.listSize; i++) {
      if (this.isEqual(this.items[i], ele)) {
        return i;
      }
    }

    console.log("You are searching item is not found in the list!");
    return -1;
  }

  remove(ele) {
    console.log("type", typeof ele);
    const index = this.find(ele);
    console.log("removed index", index);

    if (index > -1) {
      this.items.splice(index, 1);
      --this.listSize;
      return true;
    }

    return false;
  }

  insert(ele, after) {
    let insertPos = this.find(after);

    if (insertPos > -1) {
      this.items.splice(insertPos + 1, 0, ele);
      ++this.listSize;

      console.log("new element inserted to list!");
      return true;
    }

    return false;
  }

  contains(ele) {
    const index = this.find(ele);

    if (index > -1) {
      console.log("contains in the list!");
      return true;
    } else {
      return false;
    }
  }

  front() {
    this.pos = 0;
  }

  // move `pos` to end of the list :
  rear() {
    this.pos = this.listSize - 1;
  }

  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  currPos() {
    return this.pos;
  }

  // move to any particular position in the list :
  moveTo(pos) {
    if (pos > 0 && pos < this.listSize - 1) {
      this.pos = pos - 1;
    }
  }

  getElement() {
    return this.items[this.pos];
  }

  size() {
    return this.listSize;
  }

  // print the list :
  print() {
    return this.items
      .map((item) => {
        if (typeof item === "object" && item !== null) {
          let str = JSON.stringify(item);

          // Remove the first and last characters (the curly braces) :
          str = str.substring(1, str.length - 1);

          // Remove quotes from keys :
          str = str.replace(/"([^"]+)":/g, "$1:");

          return str;
        }

        return item;
      })
      .join(",");
  }

  clear() {
    this.listSize = 0;
    this.pos = 0;
    this.items = [];
  }
}

const list2 = new List2();

list2.append(11);
list2.append(12);
list2.append(13);
list2.append({ a: 1, b: 2 });

console.log(list2.insert({ a: "althaf", d: "dev" }, 13));
console.log(list2.remove({ a: 1, b: 2 }));
console.log(list2.remove(11));
console.log(list2.getElement());
console.log(list2.print());
