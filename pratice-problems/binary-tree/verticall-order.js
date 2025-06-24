const levelOrder = (root) => {
  if (!root) return [];

  const queue = [{ node: root, order: 0 }];
  const mp = new Map();
  const bound = { min: 0, max: 0 };

  while (queue.length) {
    queue.sort((a, b) => a.node.val - b.node.val);
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const { node, order } = queue.shift();
      if (!mp.has(order)) mp.set(order, []);
      mp.get(order).push(node.val);

      bound.min = Math.min(bound.min, order);
      bound.max = Math.max(bound.max, order);

      if (node.left) {
        queue.push({ node: node.left, order: order - 1 });
      }

      if (node.right) {
        queue.push({ node: node.right, order: order + 1 });
      }
    }
  }

  const res = [];

  for (let i = bound.min; i <= bound.max; i++) {
    if (mp.has(i)) {
      res.push(mp.get(i));
    }
  }

  return res;
};

const verticalTraversal = (root) => {
  return levelOrder(root);
};
