function findOrder(n, m, prerequisites) {
  // code here

  const adjList = new Array(n);
  for (let k = 0; k < adjList.length; k++) {
    adjList[k] = [];
  }
  const inDegree = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    let vertex = prerequisites[i][1];
    let edge = prerequisites[i][0];
    adjList[vertex].push(edge);
    inDegree[prerequisites[i][0]] += 1;
  }

  console.log(adjList);
  return;

  // Vertex with zero indegree should be in Queue
  const queue = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  //   console.log(inDegree, queue);

  let head = 0;

  while (head < queue.length) {
    const current = queue[head++];

    for (let i = 0; i < adjList[current].length; i++) {
      let e = adjList[current][i];
      inDegree[e] -= 1;
      if (inDegree[e] == 0) queue.push(e);
    }
  }

  return queue;
}

const prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

const pre = [
  [6, 0],
  [0, 1],
];
console.log(findOrder(12, 2, pre));
