const bfs = (root) => {
  if (!root) return root;

  let queue = [root];

  while (queue.length) {
    const next = [];

    for (let i = 0; i < queue.length; i++) {
      const current = queue[i];

      if (current.left) next.push(current.left);

      if (current.right) next.push(current.right);

      current.next = queue[i + 1] ? queue[i + 1] : null;
    }

    queue = next;
  }

  return root;
};

const connect = (root) => {
  return bfs(root);
};
