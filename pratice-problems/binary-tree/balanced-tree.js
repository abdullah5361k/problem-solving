const dfs = (root) => {
  if (!root) return 0;

  const left = dfs(root.left);
  if (left === -1) return -1;
  const right = dfs(root.right);
  if (right === -1) return -1;

  const diff = Math.abs(left - right);

  if (diff > 1) return -1;

  return Math.max(left, right) + 1;
};

const isBalanced = (root) => {
  return dfs(root) != -1;
};
