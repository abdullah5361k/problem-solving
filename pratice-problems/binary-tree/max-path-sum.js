const dfs = (root, max) => {
  if (!root) return 0;

  let left = Math.max(0, dfs(root.left, max));
  let right = Math.max(0, dfs(root.right, max));

  max[0] = Math.max(max[0], left + right + root.val);

  return Math.max(left, right) + root.val;
};

const maxPathSum = (root) => {
  const max = [-Infinity];
  dfs(root, max);

  return max[0];
};
