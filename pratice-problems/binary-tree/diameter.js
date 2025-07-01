const dfs = (root) => {
  if (!root) return { h: 0, d: 0 };

  const left = dfs(root.left);
  const right = dfs(root.right);

  const diameter = Math.max(Math.max(left.d, right.d), left.h + right.h + 1);

  return { h: Math.max(left.h, right.h) + 1, d: diameter };
};

const diameterOfBinaryTree = (root) => {
  return dfs(root).d - 1;
};
