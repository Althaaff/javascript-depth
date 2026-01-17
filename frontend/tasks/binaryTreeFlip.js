function binaryTreeFlip(root) {
  if (root === null) return null;

  [root.left, root.right] = [root.right, root.left];

  binaryTreeFlip(root.left);
  binaryTreeFlip(root.right);

  return root;
}

const root = [2, 1, 3];

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const leaf1 = new TreeNode(1);
const leaf2 = new TreeNode(3);
const rootNode = new TreeNode(2, leaf1, leaf2);

const flippedRoot = binaryTreeFlip(rootNode);

console.log(flippedRoot.val);
console.log(flippedRoot.left.val);
console.log(flippedRoot.right.val);

/*
  *How Recusion works here :
   Recursion works like a stack of pancakes. Each time the function calls itself, it puts a new pancake on top. It can't finish the bottom pancake until the ones on top are eaten (finished).

   Call(2): "I need to swap 1 and 3, but first I must wait for my children to finish."

   Call(3): "I'm swapping my nulls... okay, I'm done!" (Pancake removed)

   Call(1): "I'm swapping my nulls... okay, I'm done!" (Pancake removed)

   Call(2): "My children are done, here is the final result." (Final pancake removed)

*/
