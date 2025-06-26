const dfs = (root, ans, res) => {
  if (!root) return;

  res.push(root.data);

  if (!root.left && !root.right) {
    ans.push([...res]);
  }

  this.dfs(root.left, ans, res);
  this.dfs(root.right, ans, res);

  res.pop();
};

const paths = (root) => {
  // code here
  const ans = [];
  this.dfs(root, ans, []);
  return ans;
};
