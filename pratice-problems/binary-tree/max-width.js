const FindMaxwidth = (root) => {
  if (!root) return 0;

  const queue = [{ node: root, pos: 0 }];
  let maxWidth = 1;
  let idx = 0;

  while (queue.length > idx) {
    const levelSize = queue.length - idx;
    let minPos = Infinity;
    let maxPos = -Infinity;

    for (let i = 0; i < levelSize; i++) {
      const { node, pos } = queue[idx++];
      minPos = Math.min(pos, minPos);
      maxPos = Math.max(pos, maxPos);

      if (node.left) {
        queue.push({ node: node.left, pos: 2 * (pos - minPos) });
      }

      if (node.right) {
        queue.push({ node: node.right, pos: 2 * (pos - minPos) + 1 });
      }
    }

    maxWidth = Math.max(maxWidth, maxPos - minPos + 1);
    min = Infinity;
    max = -Infinity;
  }

  return maxWidth;
};

const widthOfBinaryTree = (root) => {
  return FindMaxwidth(root);
};
