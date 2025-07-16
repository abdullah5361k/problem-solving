const DFS = (vertex, visited, adj) => {
  // Mark as visited
  visited[vertex] = true;

  // Visit neighbour
  for (let i = 0; i < adj[vertex].length; i++) {
    if (adj[vertex][i] === 1 && !visited[i]) {
      this.DFS(i, visited, adj);
    }
  }
};

const BFS = (vertex, visited, adj) => {
  const queue = [vertex];
  visited[vertex] = true;

  let idx = 0;

  while (idx < queue.length) {
    const v = queue[idx++];

    for (let i = 0; i < adj[v].length; i++) {
      if (adj[v][i] === 1 && !visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
};

const numProvinces = (V, adj) => {
  // code here
  const visited = new Array(V).fill(false);
  let noOfProvinces = 0;
  for (let i = 0; i < V; i++)
    if (!visited[i]) {
      BFS(i, visited, adj);
      noOfProvinces++;
    }

  return noOfProvinces;
};
