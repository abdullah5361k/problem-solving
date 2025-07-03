const buildBST = (si, ei, arr) => {
  if (si > ei) return null;

  const mid = Math.floor((si + ei) / 2);
  const node = new TreeNode(arr[mid]);

  node.left = buildBST(si, mid - 1, arr);
  node.right = buildBST(mid + 1, ei, arr);

  return node;
};

const sortedArrayToBST = (nums) => {
  return buildBST(0, nums.length - 1, nums);
};
