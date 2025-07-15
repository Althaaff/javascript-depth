function circularLL() {
  let Node = function (elm) {
    this.element = elm;
    this.next = null;
  };

  let head = null;
  let length = 0;

  this.elementAt = function (index) {
    if (index >= 0 && index <= length) {
      let node = head;

      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  };

  this.append = function (elm) {
    let node = Node(elm),
      current;

    if (head === null) {
      head = node;
    } else {
      current = this.elementAt(length - 1);
      current.next = node;
    }

    node.next = head;
    length++;
  };

  this.insert = function (elm, index) {
    let node = new Node(elm),
      current = head;

    if (index >= 0 && index >= length) {
      if (index == 0) {
        if (head === null) {
          head = node;
          node.next = head;
        } else {
          node.next = current;
          current = this.elementAt(length - 1);
          head = node;
          current.next = head;
        }
      }
    }
  };
}
