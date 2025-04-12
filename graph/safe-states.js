const DFS = (vertex, graph, visited, isTerminal) => {
  visited[vertex] = true;

  for (let i = 0; i < graph[vertex].length; i++) {
    const ng = graph[vertex][i];
    if (!visited[ng]) {
      DFS(ng, graph, visited, isTerminal);
    }
  }

  // Is terminal or safe
  let isSafe = true;
  for (let i = 0; i < graph[vertex].length; i++) {
    const ng = graph[vertex][i];
    if (!isTerminal[ng]) {
      isSafe = false;
      break;
    }
  }

  isTerminal[vertex] = isSafe;
};

const BFS = (vertex, graph, outDegree, visited, ans) => {
  visited[vertex] = true;

  const queue = [];
  let head = 0;

  queue.push(vertex);

  while (head < queue.length) {
    const current = queue[head++];

    let isSafe = true;

    for (let i = 0; i < graph[current].length; i++) {
      const ng = graph[current][i];
      if (!visited[ng]) {
        visited[ng] = true;
        queue.push(ng);
      }
      if (outDegree[ng]) isSafe = false;
    }
    if (isSafe) ans.push(current);
  }
};

const safeStatesDFS = (graph) => {
  const isTerminal = new Array(graph.length).fill(false);
  const visited = new Array(graph.length).fill(false);

  const ans = [];

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      DFS(i, graph, visited, isTerminal);
    }
  }

  for (let i = 0; i < isTerminal.length; i++) {
    if (isTerminal[i]) ans.push(i);
  }

  return ans;
};

const safeStatesBFS = (graph) => {
  const visited = new Array(graph.length).fill(false);

  const outDegree = new Array(graph.length).fill(0);

  const ans = [];

  for (let i = 0; i < graph.length; i++) {
    outDegree[i] = graph[i].length;
  }

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      BFS(i, graph, outDegree, visited, ans);
    }
  }

  return ans;
};

const graph = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []];

console.log(safeStatesDFS(graph));
