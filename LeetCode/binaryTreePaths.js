class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function binaryTreePaths(root) {
  let result = [];

  function dfs(node, path) {
    if (node.val) {
      path.push(node.val);
    }

    if (!node.left && !node.right) {
      result.push(path.join("-->"));
    }

    if (node.left) dfs(node.left, path);
    if (node.right) dfs(node.right, path);

    path.pop();
  }

  dfs(root, []);
  if (!root) return [];

  return result;
}

const root1 = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3),
);

console.log(binaryTreePaths(root1));
