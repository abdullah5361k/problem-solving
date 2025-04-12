const DFS = (vertex, adj, visited, recStack) => {
  visited[vertex] = true;
  recStack[vertex] = true;

  for (let i = 0; i < adj[vertex].length; i++) {
    const ng = adj[vertex][i];
    if (!visited[ng]) {
      if (DFS(ng, adj, visited, recStack)) return true;
    } else {
      if (recStack[ng]) return true;
    }
  }

  recStack[vertex] = false;

  return false;
};

const cycleDetectionInDirectedGraph = (edges, V) => {
  const adj = new Array(V);
  const visited = new Array(V).fill(false);
  const recStack = new Array(V).fill(false);

  for (let i = 0; i < adj.length; i++) {
    adj[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    const u = edges[i][0];
    const v = edges[i][1];
    adj[u].push(v);
  }

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (DFS(i, adj, visited, recStack)) return true;
    }
  }

  return false;
};

const edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 0],
  [2, 3],
];
console.log(cycleDetectionInDirectedGraph(edges, 4));
