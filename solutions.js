function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const flatBT = (root) => {
  if (!root) return null;

  const leftS = flatBT(root.left);
  const rightS = flatBT(root.right);

  if (leftS) {
    root.right = leftS;
    root.left = null;
    let temp = leftS;
    while (temp && temp.right != null) temp = temp.right;
    temp.right = rightS;
  }

  return root;
};

var flatten = function (root) {
  if (!root) return;
  // convertToLL(root);
  flatBT(root);
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(5);
root.right.right = new TreeNode(6);

flatten(root);
