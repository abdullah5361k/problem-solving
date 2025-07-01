const leftBoundary = (root, ans) => {
  if (!root) return;
  else if (!root.left && !root.right) return;

  ans.push(root.data);

  if (!root.left) leftBoundary(root.right, ans);
  else leftBoundary(root.left, ans);
};

const leafNodes = (root, ans) => {
  if (!root) return;
  if (!root.left && !root.right) {
    ans.push(root.data);
    return;
  }

  leafNodes(root.left, ans);
  leafNodes(root.right, ans);
};

const rightBoundary = (root, ans) => {
  if (!root) return;
  else if (!root.left && !root.right) return;

  if (!root.right) rightBoundary(root.left, ans);
  else rightBoundary(root.right, ans);
  ans.push(root.data);
};

const boundaryTraversal = (root) => {
  // code here
  const ans = [root.data];
  leftBoundary(root.left, ans);
  leafNodes(root.left, ans);
  leafNodes(root.right, ans);
  rightBoundary(root.right, ans);

  return ans;
};
