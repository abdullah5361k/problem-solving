const preOrder = (root, res) => {
  if (!root) return null;
  res.push(root.val);
  preOrder(root.left, res);
  preOrder(root.right, res);
};

const preorderTraversal = (root) => {
  const res = [];
  preOrder(root, res);
  return res;
};
