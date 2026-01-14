class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  if (root === null) {
    return 0;
  }

  let depth = 0;
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    depth++; // increment depth for each level

    // process all nodes at current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;
}

function buildTree(arr) {
  if (arr.length === 0 || !arr) {
    return 0;
  }

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

const root = buildTree([1, 2, 3, 4, 5]);
console.log(maxDepth(root));
