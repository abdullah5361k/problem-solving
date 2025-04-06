/**
 * @param {number[][]} isConnected
 * @return {number}
 */

const DFS = (vertex, matrix, visited) => {
  // Mark vertex as visited
  visited[vertex] = true;

  // Visit neighbour (edges)
  for (let i = 0; i < matrix[vertex].length; i++) {
    const ng = matrix[vertex][i];
    if (ng === 1 && !visited[i]) {
      DFS(i, matrix, visited);
    }
  }
};

const BFS = (vertex, matrix, visited) => {
  const queue = [];
  queue.push(vertex);
  visited[vertex] = true;
  let head = 0;

  while (head < queue.length) {
    const current = queue[head++];

    // Visit neighbour
    for (let i = 0; i < matrix[current].length; i++) {
      if (matrix[current][i] === 1 && !visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
};

const noOfProvincess = (isConnected) => {
  const visited = new Array(isConnected.length).fill(false);
  let noOfProvinces = 0;

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      noOfProvinces += 1;
      BFS(i, isConnected, visited);
    }
  }

  return noOfProvinces;
};

const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
console.log(noOfProvincess(isConnected));
