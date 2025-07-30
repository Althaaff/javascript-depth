// class TreeNode {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

// var sortedArrayToBST = function (nums) {
//   const build = (start, end) => {
//     if (start === end) return null;
//     const mid = Math.floor((start + end) / 2);
//     const node = new TreeNode(nums[mid]);
//     node.left = build(start, mid);
//     node.right = build(mid + 1, end);
//     return node;
//   };
//   return build(0, nums.length);
// };
// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBST(nums) {
  function buildTree(start, end) {
    if (start === end) return null;

    const mid = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = buildTree(start, mid);
    root.right = buildTree(mid + 1, end);

    return root;
  }

  return buildTree(0, nums.length);
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
