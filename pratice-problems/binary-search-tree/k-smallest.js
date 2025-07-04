function inorderTraversal(root, arr) {
  if (root === null) return;

  inorderTraversal(root.left, arr);
  arr.push(root.val);
  inorderTraversal(root.right, arr);
}

const findSmallest = (root, k) => {
  const arr = [];
  inorderTraversal(root, arr);
  return arr[k - 1];
};

const kthSmallest = (root, k) => {
  return findSmallest(root, k);
};
