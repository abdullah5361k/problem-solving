const DFS = (vertex, parent, explore, min, count, adj, artPoints) => {
  explore[vertex] = count;
  min[vertex] = count;

  let child = 0;

  // Visit neighbour
  for (let i = 0; i < adj[vertex].length; i++) {
    const ng = adj[vertex][i];
    if (!explore[ng]) {
      child++;
      DFS(ng, vertex, explore, min, count + 1, adj, artPoints);
      // Check is the vertex between vertex and it's neighbor make a bridge
      if (min[ng] >= explore[vertex] && parent != -1) artPoints.push(vertex);
      min[vertex] = Math.min(min[vertex], min[ng]);
    } else if (ng != parent) {
      min[vertex] = Math.min(min[vertex], min[ng]);
    }
  }

  if (child > 1 && parent == -1) artPoints.push(0);
};

const articulation = (n, connections) => {
  const explored = new Array(n).fill(0);
  const min = new Array(n).fill(0);
  const adj = new Array(n);
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  for (let [u, v] of connections) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const points = [];

  DFS(0, -1, explored, min, 0, adj, points);

  return bridge;
};

const n = 4,
  connections = [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ];

console.log(articulation(n, connections));

// Output: [[1,3]]

// Bridge: If there is no vertex between two vertices than graph divided into two component
