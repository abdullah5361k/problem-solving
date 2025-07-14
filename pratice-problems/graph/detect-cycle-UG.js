const dfs = (par, vertex, vis, adj) => {
  vis[vertex] = true;

  // Visit it  negihbours
  for (let i = 0; i < adj[vertex].length; i++) {
    const ng = adj[vertex][i];
    if (!vis[ng]) {
      if (dfs(vertex, ng, vis, adj)) return true;
    } else if (ng != par) {
      return true;
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

const isCycle = (V, edges) => {
  const adjList = Array.from({ length: V }, () => []);
  const vis = new Array(V).fill(false);

  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  // Check all components of graph
  for (let i = 0; i < vis.length; i++) {
    if (!vis[i]) {
      if (dfs(-1, i, vis, adjList)) return true;
    }
  }
  return false;
};
