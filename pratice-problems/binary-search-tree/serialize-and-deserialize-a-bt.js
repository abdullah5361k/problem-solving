const dfs = (root, ans) => {
  if (!root) {
    ans.push("N");
    return;
  }

  ans.push(root.val);
  dfs(root.left, ans);
  dfs(root.right, ans);
};

var serialize = function (root) {
  let arr = [];
  dfs(root, arr);
  return arr.join(",");
};

var deserialize = function (data) {
  const values = data.split(",");
  let idx = 0;
  const dfs = () => {
    if (values[idx] === "N") {
      idx++;
      return null;
    }

    const node = new TreeNode(Number(values[idx]));
    idx++;
    node.left = dfs();
    node.right = dfs();

    return node;
  };
  return dfs();
};
