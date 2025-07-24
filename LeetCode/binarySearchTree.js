class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;

  function buildTree(start, end) {
    if (start > end) return null; // base case for recursion

    let mid = Math.floor((start + end) / 2); // correctly calculate mid
    let root = new TreeNode(nums[mid]);

    root.left = buildTree(start, mid - 1); // left subtree
    root.right = buildTree(mid + 1, end); // right subtree

    return root;
  }

  return buildTree(0, nums.length - 1);
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
