const BFS = (matrix, inDegree, V) => {
  const distance = new Array(V).fill(-1);

  distance[0] = 0; // Src node distance
  const queue = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let head = 0;

  while (head < queue.length) {
    const currentV = queue[head++];

    // Visit neighbour
    for (let j = 0; j < matrix[0].length; j++) {
      const wt = matrix[currentV][j];
      if (wt) {
        // If there is an edge
        inDegree[j] -= 1;
        if (inDegree[j] === 0) queue.push(j);
        if (distance[currentV] === -1) continue;
        if (distance[j] === -1) {
          distance[j] = distance[currentV] + wt;
        } else {
          distance[j] = Math.min(distance[j], distance[currentV] + wt);
        }
      }
    }
  }

  return distance;
};

const shortestPathInDirectedGraph = (V, E, edges) => {
  // Create a matrix
  const matrix = new Array(V);
  const inDegree = new Array(V).fill(0);
  for (let j = 0; j < matrix.length; j++) {
    matrix[j] = new Array(V).fill(0);
  }

  for (let i = 0; i < edges.length; i++) {
    const u = edges[i][0];
    const v = edges[i][1];
    const wt = edges[i][2];
    matrix[u][v] = wt;
    inDegree[v] += 1;
  }

  return BFS(matrix, inDegree, V); //  Return the shortest path array
};

const V = 6;
const edges = [
  [0, 1, 2],
  [0, 4, 1],
  [1, 2, 3],
  [4, 2, 2],
  [2, 3, 6],
  [4, 5, 4],
  [5, 3, 1],
];

console.log(shortestPathInDirectedGraph(V, edges.length, edges));
// Output: [0, 2, 3, 6, 1, 5]
