const dfs = (root) => {
  if (!root) return true;

  // ignore leaf nodes
  if (!root.left && !root.right) return true;

  const leftData = root.left ? root.left.data : 0;
  const rightData = root.right ? root.right.data : 0;
  if (root.data != leftData + rightData) return false;

  if (!dfs(root.left)) return false;
  if (!dfs(root.right)) return false;

  return true;
};

const isSumProperty = (root) => {
  return dfs(root);
};
