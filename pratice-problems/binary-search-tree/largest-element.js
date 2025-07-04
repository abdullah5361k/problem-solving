const inorderTraversal = (root, arr) => {
  if (!root) return;

  inorderTraversal(root.left, arr);
  arr.push(root.data);
  inorderTraversal(root.right, arr);
};

const kthLargest = (root, k) => {
  const arr = [];
  inorderTraversal(root, arr);
  return arr[arr.length - k];
};
