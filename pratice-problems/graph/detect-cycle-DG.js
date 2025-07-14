const DFS = (vertex, currPath, vis, adj) => {
  vis[vertex] = true;
  currPath[vertex] = true;

  // Visit Neighbour
  for (let i = 0; i < adj[vertex].length; i++) {
    const ng = adj[vertex][i];
    if (!vis[ng]) {
      if (DFS(ng, currPath, vis, adj)) return true;
    } else if (currPath[ng]) {
      return true;
    }
  }

  currPath[vertex] = false;

  return false;
};

const BFS = (inDegree, adj, V) => {
  const queue = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let idx = 0;

  while (idx < queue.length) {
    const current = queue[idx++];

    // Visit neighbour
    for (let i = 0; i < adj[current].length; i++) {
      const ng = adj[current][i];
      inDegree[ng] -= 1;

      if (inDegree[ng] === 0) {
        queue.push(ng);
      }
    }
  }

  return queue.length !== V;
};

const isCyclic = (V, edges) => {
  // code here
  const adjList = Array.from({ length: V }, () => []);
  const vis = new Array(V).fill(false);
  const currPath = new Array(V).fill(false);
  const inDegree = new Array(V).fill(0);

  for (const [u, v] of edges) {
    adjList[u].push(v);
    inDegree[v] += 1;
  }

  // DFS
  // for(let i=0; i<V; i++) {

  //     if(!vis[i]) {
  //         if(DFS(i, currPath, vis, adjList)) return true;
  //     }

  // }

  // return false;

  // BFS
  return BFS(inDegree, adjList, V);
};
