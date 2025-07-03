const isValid = (root, min, max) => {
  if (!root) return true;

  if (root.val <= min || root.val >= max) return false;

  return (
    isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
  );
};

const isValidBST = (root) => {
  return isValid(root, -Infinity, Infinity);
};
