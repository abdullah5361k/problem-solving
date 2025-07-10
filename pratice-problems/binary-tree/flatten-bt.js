const flatBT = (root) => {
  if (!root) return null;

  const leftS = flatBT(root.left);
  const rightS = flatBT(root.right);

  if (leftS) {
    root.right = leftS;
    root.left = null;
    let temp = leftS;
    while (temp && temp.right != null) temp = temp.right;
    temp.right = rightS;
  }

  return root;
};

const flatten = (root) => {
  if (!root) return;
  convertToLL(root);
};
