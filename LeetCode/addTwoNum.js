function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

let addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let res = dummy;
  let total = 0,
    carry = 0;

  while (l1 || l2 || carry) {
    total = carry;

    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    let num = total % 10;
    // console.log("num", num);
    carry = Math.floor(total / 10);
    // console.log("carry", carry);
    dummy.next = new ListNode(num);
    // console.log("dummy.next", dummy.next);
    dummy = dummy.next;
    // console.log("dummy", dummy);
  }

  return res.next;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let result = addTwoNumbers(l1, l2);

console.log(result);
function printList(head) {
  // console.log("head", head);
  let output = "";
  while (head) {
    output += head.val + (head.next ? " → " : "");
    head = head.next;
  }
  console.log(output);
}

printList(result);
