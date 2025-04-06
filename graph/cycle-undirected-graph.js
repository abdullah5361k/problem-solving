/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
 */

const DFS = (vertex, adj, visited, parent) => {
  visited[vertex] = true;

  // Visite neighbour
  for (let i = 0; i < adj[vertex].length; i++) {
    const ng = adj[vertex][i];
    if (!visited[ng]) {
      if (DFS(ng, adj, visited, vertex)) return true;
    } else if (ng != parent) {
      return true; // It mean there is a cycle
    }
  }

  return false;
};

const BFS = (vertex, adj, visited) => {
  const queue = [];
  queue.push([vertex, -1]);
  visited[vertex] = true;
  let head = 0;

  while (head < queue.length) {
    const [v, p] = queue[head++];

    // Visit ng
    for (let i = 0; i < adj[v].length; i++) {
      const ng = adj[v][i];
      if (!visited[ng]) {
        queue.push([ng, v]);
        visited[ng] = true;
      } else if (ng != p) {
        return true;
      }
    }
  }

  return false;
};

const detectCycleInUndirectedGraph = (edges, V) => {
  const adj = new Array(V);
  const visited = new Array(V).fill(false);
  for (let i = 0; i < V; i++) {
    adj[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    const u = edges[i][0];
    const v = edges[i][1];
    adj[u].push(v);
    adj[v].push(u);
  }

  // Check all components of graph
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      if (DFS(i, adj, visited, -1)) return true;
    }
  }

  return false;
};

const edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
];
console.log(detectCycleInUndirectedGraph(edges, 4));
