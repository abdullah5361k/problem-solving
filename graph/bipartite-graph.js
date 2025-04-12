/**
 * @param {number[][]} graph
 * @return {boolean}
 */

const DFS = (vertex, graph, colored, vertexColor) => {
  colored[vertex] = vertexColor;

  for (let i = 0; i < graph[vertex].length; i++) {
    const ng = graph[vertex][i];
    if (colored[ng] === -1) {
      if (!DFS(ng, graph, colored, vertexColor === 0 ? 1 : 0)) return false;
    } else if (colored[ng] === colored[vertex]) {
      return false; // It's mean neighbours is in same set
    }
  }

  return true;
};

const BFS = (vertex, graph, colored, color) => {
  const queue = [];
  queue.push(vertex);
  colored[vertex] = color;
  let head = 0;

  while (head < queue.length) {
    const current = queue[head++];

    // Visit ng
    for (let i = 0; i < graph[current].length; i++) {
      const ng = graph[current][i];
      if (colored[ng] === -1) {
        colored[ng] = colored[current] === 0 ? 1 : 0;
        queue.push(ng);
      } else if (colored[ng] === colored[current]) {
        return false;
      }
    }
  }

  return true;
};

const isGraphBipartite = (graph) => {
  const colored = new Array(graph.length).fill(-1);

  for (let i = 0; i < colored.length; i++) {
    if (!colored[i]) {
      if (!DFS(i, graph, colored, 0)) return false;
    }
  }

  return true;
};
