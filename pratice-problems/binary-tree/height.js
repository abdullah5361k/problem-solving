const heightOfBT = (root) => {
  if (!root) return 0;

  const leftH = heightOfBT(root.left);
  const rightH = heightOfBT(root.right);

  return Math.max(leftH, rightH) + 1;
};

const maxDepth = (root) => {
  return heightOfBT(root);
};
