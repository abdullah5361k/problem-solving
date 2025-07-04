class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const BST = (root) => {
  if (!root) return { min: Infinity, max: -Infinity, isValid: true, sum: 0 };

  const left = BST(root.left);
  const right = BST(root.right);

  if (left.isValid && right.isValid) {
    if (root.val > left.max && root.val < right.min) {
      let min = left.min === Infinity ? root.val : left.min;
      let max = right.max === -Infinity ? root.val : right.max;
      return { min, max, isValid: true, sum: left.sum + right.sum + root.val };
    }
  }

  return left.sum > right.sum
    ? { ...left, isValid: false }
    : { ...right, isValid: false };
};

var maxSumBST = function (root) {
  return BST(root).sum;
};

const root = new TreeNode(4);
root.left = new TreeNode(3);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);

maxSumBST(root);
