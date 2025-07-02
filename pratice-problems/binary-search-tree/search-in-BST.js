const DFS = (root, val, ans, isFound) => {
  if (!root) return null;

  if (val === root.val) {
    ans[0] = root;
    return;
  }

  if (root.val < val) {
    DFS(root.right, val, ans, isFound);
  } else if (root.val > val) {
    DFS(root.left, val, ans, isFound);
  }
};

const searchBST = (root, val) => {
  const ans = [null];
  DFS(root, val, ans);

  return ans[0];
};
