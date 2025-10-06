// linked lists

function ListNode() {}

function mergeList(list1, list2) {
  let dummy = new ListNode();

  let currentNode = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      currentNode.next = list2;
      list2 = list2.next;
    } else {
      currentNode.next = list1;
      list1 = list1.next;
    }
    currentNode = currentNode.next;
  }

  currentNode.next = list1 || list2;

  return dummy.next;
}

// example
const obj = {
  val: 1,
  next: null,
};

const objStore = obj;

let nextNode = {
  val: 2,
  next: null,
};

let resObj = (objStore.next = nextNode);

console.log(objStore);
console.log(nextNode);
console.log(resObj);
