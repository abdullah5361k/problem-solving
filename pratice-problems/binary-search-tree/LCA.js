const LCA = (root, p, q) => {
  if (!root || root === p || root === q) return root;

  while (root) {
    if (p.val < root.val && q.val < root.val) root = root.left;
    else if (p.val > root.val && q.val > root.val) root = root.right;
    else return root;
  }
};

const lowestCommonAncestor = (root, p, q) => {
  return LCA(root, p, q);
};
