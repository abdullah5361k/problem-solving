const bfs = (root) => {
  if (!root) return [];

  const queue = [root];
  let idx = 0;
  const ans = [];

  while (queue.length > idx) {
    const levelSize = queue.length - idx;
    const nodes = [];
    for (let i = 0; i < levelSize; i++) {
      const current = queue[idx++];
      nodes.push(current.val);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    ans.push(nodes);
  }

  return ans;
};

const levelOrder = (root) => {
  return bfs(root);
};
