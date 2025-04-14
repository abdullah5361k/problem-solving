findShortestDistanceFromSrc = (V, adj, src) => {
  const shortestDistance = new Array(V).fill(Infinity);
  const queue = [];
  shortestDistance[src] = 0;
  queue.push(src);
  let head = 0;

  while (head < queue.length) {
    // Find the shortes distance vertex from queue
    let node = -1,
      value = Infinity;

    for (let i = head; i < queue.length; i++) {
      if (shortestDistance[queue[i]] < value) {
        node = i;
        value = shortestDistance[queue[i]];
      }
    }

    const currentV = queue[node];

    if (head != node) {
      // Swap
      queue[node] = queue[head];
      queue[head] = currentV;
    }

    // Visit neighbour
    for (let i = 0; i < adj[currentV].length; i++) {
      const [v, wt] = adj[currentV][i];
      if (shortestDistance[v] === Infinity) {
        shortestDistance[v] = shortestDistance[currentV] + wt;
        queue.push(v);
      } else {
        shortestDistance[v] = Math.min(
          shortestDistance[v],
          shortestDistance[currentV] + wt
        );
      }
    }
  }

  return shortestDistance;
};

const dijkstraAlgo = (V, edges, src) => {
  // Create adj
  const adj = new Array(V);
  for (let i = 0; i < adj.length; i++) {
    adj[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    const u = edges[i][0];
    const v = edges[i][1];
    const wt = edges[i][2];
    adj[u].push([v, wt]);
    adj[v].push([u, wt]);
  }

  return dijkstraAlgo(V, adj, src);
};

const edges = [
  [0, 1, 1],
  [1, 2, 3],
  [0, 2, 6],
];
console.log(dijkstraAlgo(3, edges, 2));

// Output: [4, 3, 0]
