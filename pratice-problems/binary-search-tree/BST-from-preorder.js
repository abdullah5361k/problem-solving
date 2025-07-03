const insert = (root, key) => {
  if (!root) return new TreeNode(key);

  if (root.val > key) {
    root.left = insert(root.left, key);
  } else {
    root.right = insert(root.right, key);
  }

  return root;
};

const createBst = (pre) => {
  let root = null;
  for (let i = 0; i < pre.length; i++) {
    root = insert(root, pre[i]);
  }

  return root;
};

const bstFromPreorder = (preorder) => {
  return createBst(preorder);
};
