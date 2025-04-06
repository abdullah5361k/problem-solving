const findMinimumTimeUsingKhanAlgo = (n, adjList, inDegree, time) => {
  const maxPrereq = new Array(n + 1).fill(0);

  const queue = [];
  let maxTime = 0;
  let head = 0;
  // Add courses with zero inDegree into queue
  for (let i = 1; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (head < queue.length) {
    const current = queue[head++];

    maxTime = Math.max(maxTime, maxPrereq[current] + time[current - 1]);

    // Visit neihbour
    for (let i = 0; i < adjList[current].length; i++) {
      const e = adjList[current][i];
      inDegree[e] -= 1;
      maxPrereq[e] = Math.max(maxPrereq[e], time[current - 1]);
      if (inDegree[e] == 0) queue.push(e);
    }
  }

  return maxTime;
};

var minimumTime = function (n, relations, time) {
  const adjList = new Array(n + 1);
  const inDegree = new Array(n + 1).fill(0);
  for (let j = 0; j < adjList.length; j++) adjList[j] = [];

  // Add edges of each vertex into adjList
  for (let i = 0; i < relations.length; i++) {
    let vertex = relations[i][0];
    let edge = relations[i][1];
    adjList[vertex].push(edge);
    inDegree[relations[i][1]] += 1;
  }

  return findMinimumTimeUsingKhanAlgo(n, adjList, inDegree, time);
};

console.log(
  minimumTime(
    3,
    [
      [1, 3],
      [2, 3],
    ],
    [3, 2, 5]
  )
);
