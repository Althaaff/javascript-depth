// Implement Linked List using javascript :
// 1. Creaing a Linked List

// To create a simple linked list in JavaScript,
// the provided code defines a LinkedList class and a Node class to represent individual elements.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  printList() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.value + "-->";

      current = current.next;
    }

    console.log(result + "null");
  }
}

let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log(list.printList());
