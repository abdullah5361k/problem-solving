const BFS = (adj, src) => {
  const distance = new Array(adj.length).fill(-1);
  const queue = [];
  queue.push(src);
  distance[src] = 0;
  let head = 0;

  while (head < queue.length) {
    const currentV = queue[head++];

    // Visit neighbours
    for (let i = 0; i < adj[currentV].length; i++) {
      const ng = adj[currentV][i];
      if (distance[ng] === -1) {
        distance[ng] = distance[currentV] + 1;
        queue.push(ng);
      }
    }
  }

  return distance;
};

const shortestPath = (adj, src) => {
  return BFS(adj, src);
};

const adj = [
  [1, 3],
  [0, 2],
  [1, 6],
  [0, 4],
  [3, 5],
  [4, 6],
  [2, 5, 7, 8],
  [6, 8],
  [7, 6],
];

console.log(shortestPath(adj, 0));
