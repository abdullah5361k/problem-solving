const DFS = (vertex, vis, adj, ans) => {
  vis[vertex] = true;

  // Visit ng
  for (let i = 0; i < adj[vertex].length; i++) {
    const ng = adj[vertex][i];
    if (!vis[ng]) {
      DFS(ng, vis, adj, ans);
    }
  }

  ans.push(vertex);
};

const BFS = (inDegree, adj) => {
  const queue = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let idx = 0;

  while (idx < queue.length) {
    const v = queue[idx++];

    // Visit neighbour
    for (let i = 0; i < adj[v].length; i++) {
      const ng = adj[v][i];
      inDegree[ng] -= 1;
      if (inDegree[ng] === 0) {
        queue.push(ng);
      }
    }
  }

  return queue;
};

const topoSort = (V, edges) => {
  const adjList = Array.from({ length: V }, () => []);
  const vis = new Array(V).fill(false);

  const inDegree = new Array(V).fill(0);

  for (const [u, v] of edges) {
    adjList[u].push(v);
    inDegree[v] += 1;
  }

  // const ans = [];

  // for(let i=0; i<vis.length; i++) {
  //     if(!vis[i]) {
  //         DFS(i, vis, adjList, ans);
  //     }
  // }

  // return ans.reverse();

  return BFS(inDegree, adjList);
};
