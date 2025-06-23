const postOrder = (root, res) => {
  if (!root) return;
  postOrder(root.left, res);
  postOrder(root.right, res);
  res.push(root.val);
};

const postorderTraversal = (root) => {
  const res = [];
  postOrder(root, res);
  return res;
};
