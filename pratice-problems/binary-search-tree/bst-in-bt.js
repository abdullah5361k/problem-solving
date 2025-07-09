const BST = (root, maxSum) => {
  if (!root) return { min: Infinity, max: -Infinity, isValid: true, sum: 0 };

  const left = BST(root.left, maxSum);
  const right = BST(root.right, maxSum);

  if (left.isValid && right.isValid) {
    if (root.val > left.max && root.val < right.min) {
      const currSum = left.sum + right.sum + root.val;
      maxSum[0] = Math.max(maxSum[0], currSum);
      let min = left.min === Infinity ? root.val : left.min;
      let max = right.max === -Infinity ? root.val : right.max;
      return { min, max, isValid: true, sum: currSum };
    }
  }

  return left.sum > right.sum
    ? { ...left, isValid: false }
    : { ...right, isValid: false };
};

var maxSumBST = (root) => {
  const max = [null];
  BST(root, max);
  return max[0];
};
