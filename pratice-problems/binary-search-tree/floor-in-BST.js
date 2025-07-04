const dfs = (root, key, ans) => {
  if (!root) return;

  if (root.data === key) {
    ans[0] = root.data;
    return;
  }

  if (root.data > key) {
    dfs(root.left, key, ans);
  } else {
    ans[0] = root.data;
    dfs(root.right, key, ans);
  }
};

const floor = (root, x) => {
  const ans = [-1];
  dfs(root, x, ans);

  return ans[0];
};
