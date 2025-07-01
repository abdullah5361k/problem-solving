const LCA = (root, p, q) => {
  // O(n)
  if (root == null || root == p || root === q) return root;

  const left = LCA(root.left, p, q);
  const right = LCA(root.right, p, q);

  if (left === null) return right;
  if (right === null) return left;

  return root;
};

const lowestCommonAncestor = (root, p, q) => {
  return LCA(root, p, q);
};
