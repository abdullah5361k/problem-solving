const DFS = (vertex, parent, explore, min, count, adj, bridge) => {
  explore[vertex] = count;
  min[vertex] = count;

  // Visit neighbour
  for (let i = 0; i < adj[vertex].length; i++) {
    const ng = adj[vertex][i];
    if (!explore[ng]) {
      DFS(ng, vertex, explore, min, count + 1, adj, bridge);
      // Check is the vertex between vertex and it's neighbor make a bridge
      if (min[ng] > explore[vertex]) bridge.push([vertex, ng]);
      min[vertex] = Math.min(min[vertex], min[ng]);
    } else if (ng != parent) {
      min[vertex] = Math.min(min[vertex], min[ng]);
    }
  }
};

const bridgeInGraph = (n, connections) => {
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

  const bridge = [];

  DFS(0, -1, explored, min, 0, adj, bridge);

  return bridge;
};

const n = 4,
  connections = [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ];

console.log(bridgeInGraph(n, connections));

// Output: [[1,3]]

// Bridge: If there is no vertex between two vertices than graph divided into two component
