const dfs = (root, level, res) => {
  if (!root) return;

  if (res.length === level) {
    res.push(root.data);
  }
  dfs(root.left, level + 1, res);
  dfs(root.right, level + 1, res);
};

const leftView = (root) => {
  // your code here
  const res = [];
  dfs(root, 0, res);
  return res;
};
