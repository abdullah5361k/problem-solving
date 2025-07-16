const DFS = (vertex, color, colouring, adjList) => {
  colouring[vertex] = color;

  // Visit neighbour
  for (let i = 0; i < adjList[vertex].length; i++) {
    const ng = adjList[vertex][i];
    if (colouring[ng] == -1) {
      if (!DFS(ng, color === 0 ? 1 : 0, colouring, adjList)) return false;
    } else if (colouring[ng] === colouring[vertex]) {
      return false;
    }
  }

  return true;
};

const BFS = (colouring, adjList) => {
  const queue = [];
  queue.push(0);
  colouring[0] = 0;

  let idx = 0;

  while (idx < queue.length) {
    const vertex = queue[idx++];

    // Visist neighbours
    for (let i = 0; i < adjList[vertex].length; i++) {
      const ng = adjList[vertex][i];
      if (colouring[ng] === -1) {
        const ngColor = colouring[vertex] === 0 ? 1 : 0;
        colouring[ng] = ngColor;
        queue.push(ng);
      } else if (colouring[ng] === colouring[vertex]) {
        return false;
      }
    }
  }

  return true;
};

const isBipartite = (V, edges) => {
  const adjList = Array.from({ length: V }, () => []);
  const colouring = new Array(V).fill(-1);

  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  return BFS(colouring, adjList);
};
