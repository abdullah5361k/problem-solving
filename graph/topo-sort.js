const DFS = (vertex, adj, st, visited) => {
  visited[vertex] = true;

  // Visit neighbour
  for (let i = 0; i < adj[vertex].length; i++) {
    const ng = adj[vertex][i];

    if (!visited[ng]) {
      DFS(ng, adj, st, visited);
    }
  }

  st.push(vertex);
};

const BFS = (adj, V) => {
  // Khan's algo
  // i) Find in degree of each vertex
  // ii) Vertex with zero inDegree should be in queue

  const inDegree = new Array(V).fill(0);
  for (let i = 0; i < adj.length; i++) {
    for (let j = 0; j < adj[i].length; j++) {
      const v = adj[i][j];
      inDegree[v] += 1;
    }
  }

  const queue = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let head = 0;

  while (head < queue.length) {
    const current = queue[head++];

    for (let i = 0; i < adj[current].length; i++) {
      const ng = adj[current][i];
      inDegree[ng] -= 1;
      if (inDegree[ng] === 0) {
        queue.push(ng);
      }
    }
  }

  return queue;
};

const topoSort = (adj, V) => {
  const visited = new Array(V).fill(false);
  const st = [];

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      DFS(i, adj, st, visited);
    }
  }

  // return BFS(adj, V);

  return st.reverse();
};

const adj = [[], [], [3], [1], [0, 1], [0, 2]];

const V = 6;

console.log(topoSort(adj, V));
