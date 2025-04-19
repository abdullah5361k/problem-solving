const bellmanFord = (V, edges, src) => {
  const dis = new Array(V).fill(Infinity);
  dis[src] = 0;

  let i = V - 1;

  while (i--) {
    for (let [u, v, wt] of edges) {
      if (dis[u] === Infinity) continue;
      // Relax edges
      if (dis[u] + wt < dis[v]) dis[v] = dis[u] + wt;
    }
  }

  for (let [u, v, wt] of edges) {
    if (dis[u] === Infinity) continue;
    // Relax edges
    if (dis[u] + wt < dis[v]) return [-1];
  }

  return dis;
};

const edges = [
  [1, 3, 2],
  [4, 3, -1],
  [2, 4, 1],
  [1, 2, 1],
  [0, 1, 5],
];

console.log(bellmanFord(5, edges, 0));

// Output:  [0, 5, 6, 6, 7]
