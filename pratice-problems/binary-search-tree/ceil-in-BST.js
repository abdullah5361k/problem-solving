const dfs = (root, key, ans) => {
  if (!root) return;

  if (root.data === key) {
    ans[0] = root.data;
    return;
  }

  if (root.data > key) {
    ans[0] = root.data;
    dfs(root.left, key, ans);
  } else {
    dfs(root.right, key, ans);
  }
};

const findCeil = (root, input) => {
  const ans = [-1];
  dfs(root, input, ans);
  return ans[0];
};
