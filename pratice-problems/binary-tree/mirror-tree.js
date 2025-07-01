const dfs = (root) => {
  if (!root) return null;

  const left = dfs(root.left);
  const right = dfs(root.right);

  root.left = right;
  root.right = left;

  return root;
};

const mirror = (node) => {
  dfs(node);
};
