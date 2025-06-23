const inOrder = (root, arr) => {
  if (!root) return;

  inOrder(root.left, arr);
  arr.push(root.val);
  inOrder(root.right, arr);
};

const inorderTraversal = (root) => {
  const arr = [];
  inOrder(root, arr);
  return arr;
};
