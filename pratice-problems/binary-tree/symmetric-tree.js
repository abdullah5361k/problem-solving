const dfs = (root1, root2) => {
  if (!root1 && !root2) return true;
  else if (!root1 || !root2 || root1.val != root2.val) return false;

  if (!dfs(root1.left, root2.right)) return false;
  if (!dfs(root1.right, root2.left)) return false;

  return true;
};

const isSymmetric = (root) => {
  return dfs(root.left, root.right);
};
