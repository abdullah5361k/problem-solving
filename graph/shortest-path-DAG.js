function getShortestPath(adjList, inDegree, v) {
  // Use Khan's algo to find topoloical sort
  const queue = [];
  const shortestPath = new Array(v).fill(-1);

  // Vertex wit zero inderee
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let head = 0;

  while (head < queue.length) {
    const current = queue[head++];

    if (!adjList[current]) continue;

    for (let i = 0; i < adjList[current].length; i++) {
      const { edg, wg } = adjList[current][i];
      inDegree[edg] -= 1;
      if (inDegree[edg] === 0) queue.push(edg);
    }
  }

  console.log("Queue: ", queue);

  // Find path
  for (let i = 0; i < queue.length; i++) {
    let vertex = queue[i];

    if (vertex === 0) {
      shortestPath[i] = 0;
    }

    if (!adjList[vertex]) continue;

    // Visit neighbours
    for (let j = 0; j < adjList[vertex].length; j++) {
      const { edg, wg } = adjList[vertex][j];
      if (shortestPath[edg] === -1) {
        shortestPath[edg] = shortestPath[vertex] + wg;
      } else {
        shortestPath[edg] = Math.min(
          shortestPath[edg],
          shortestPath[vertex] + wg
        );
      }
    }
  }

  return shortestPath;
}

function shortestPath(V, E, edges) {
  // code here.

  const adjList = {};
  const inDegree = new Array(V).fill(0);

  for (let i = 0; i < E; i++) {
    if (adjList[edges[i][0]] === undefined) {
      adjList[edges[i][0]] = [];
    }
    adjList[edges[i][0]].push({ edg: edges[i][1], wg: edges[i][2] });
  }

  // Find indegree
  for (let key in adjList) {
    for (let j = 0; j < adjList[key].length; j++) {
      const { edg } = adjList[key][j];
      inDegree[edg] += 1;
    }
  }

  return getShortestPath(adjList, inDegree, V);
}

const path = [
  [0, 2, 6],
  [0, 3, 7],
  [0, 4, 9],
  [0, 6, 8],
  [0, 7, 6],
  [1, 2, 6],
  [1, 3, 7],
  [1, 5, 10],
  [1, 6, 1],
  [1, 7, 4],
  [2, 3, 3],
  [2, 6, 10],
  [2, 8, 8],
  [2, 9, 10],
  [3, 5, 3],
  [3, 6, 10],
  [3, 7, 5],
  [5, 6, 9],
  [5, 7, 7],
  [6, 7, 7],
  [6, 8, 8],
  [6, 9, 8],
  [7, 9, 1],
  [8, 9, 6],
];

console.log(shortestPath(10, 24, path));
