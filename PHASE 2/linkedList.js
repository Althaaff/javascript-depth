class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert at the End (O(N))
  append(value) {
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // insert at the Beginning (O(1))
  prepend(value) {
    let newNode = new ListNode(value); // if New node with value 0
    newNode.next = this.head; // newNode.next points to 1 (old head)
    this.head = newNode; // Now head points to newNode
    this.size++;
  }

  // delete a Node by Value (O(N))
  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }

  // Search for a Value (O(N))
  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  // Reverse the Linked List (O(N))
  reverse() {
    let prev = null,
      current = this.head,
      next = null;

    while (current) {
      next = current.next; // Save next node
      current.next = prev; // Reverse link
      prev = current; // Move prev forward
      current = next; // Move current forward
    }

    this.head = prev; // New head is the last node
  }

  // print the List
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// usage Example:
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // 1 -> 2 -> 3 -> null

list.prepend(0);
list.print(); // 0 -> 1 -> 2 -> 3 -> null

list.delete(2);
list.print(); // 0 -> 1 -> 3 -> null

console.log(list.search(3)); // true
console.log(list.search(5)); // false

list.reverse();
list.print(); // 3 -> 1 -> 0 -> null
