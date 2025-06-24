const bfs = (root) => {
  if (!root) return [];

  const queue = [{ node: root, order: 0 }];
  const bound = { min: 0, max: 0 };
  const res = new Map();

  while (queue.length) {
    const { node, order } = queue.shift();

    if (!res.has(order)) res.set(order, node.data);

    bound.min = Math.min(bound.min, order);
    bound.max = Math.max(bound.max, order);

    if (node.left) {
      queue.push({ node: node.left, order: order - 1 });
    }

    if (node.right) {
      queue.push({ node: node.right, order: order + 1 });
    }
  }

  const ans = [];

  for (let i = bound.min; i <= bound.max; i++) {
    if (res.has(i)) ans.push(res.get(i));
  }

  return ans;
};

const topView = (root) => {
  // code here
  return this.bfs(root);
};
