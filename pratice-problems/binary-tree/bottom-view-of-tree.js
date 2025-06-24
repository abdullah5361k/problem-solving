const bfs = (root) => {
  if (!root) return [];

  const queue = [{ node: root, order: 0 }];
  const mp = new Map();
  const bound = { min: 0, max: 0 };

  while (queue.length) {
    const { node, order } = queue.shift();

    mp.set(order, node.data);

    bound.min = Math.min(bound.min, order);
    bound.max = Math.max(bound.max, order);

    if (node.left) {
      queue.push({ node: node.left, order: order - 1 });
    }

    if (node.right) {
      queue.push({ node: node.right, order: order + 1 });
    }
  }

  const res = [];

  for (let i = bound.min; i <= bound.max; i++) {
    if (mp.has(i)) res.push(mp.get(i));
  }

  return res;
};

const bottomView = (root) => {
  return bfs(root);
};
