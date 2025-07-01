const bfs = (root) => {
  if (!root) return [];

  let queue = [root];
  let level = 0;
  let idx = 0;
  const ans = [];

  while (queue.length) {
    const next = [];
    let size = queue.length;
    const nodesInCurrentLevel = new Array(size);
    for (let i = 0; i < size; i++) {
      const current = queue[i];

      let idx = level % 2 === 0 ? i : size - i - 1;
      nodesInCurrentLevel[idx] = current.val;

      if (current.left) next.push(current.left);
      if (current.right) next.push(current.right);
    }
    ans.push(nodesInCurrentLevel);
    level++;
    queue = next;
  }

  return ans;
};

const zigzagLevelOrder = (root) => {
  return bfs(root);
};
