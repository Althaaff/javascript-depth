class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBST(nums) {
  function buildTree(start, end) {
    if (start === end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = buildTree(start, mid);
    root.right = buildTree(mid + 1, end);

    return root;
  }

  return buildTree(0, nums.length);
}

// const tree = sortedArrayToBST([-10, -3, 0, 5, 9]);
const tree = sortedArrayToBST([1, 3]);

const convertedToArray = treeToArray(tree);

function treeToArray(root) {
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      result.push(node.value);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }

  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}

console.log("res", convertedToArray);
