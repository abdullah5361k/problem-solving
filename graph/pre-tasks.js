function prereqTasks(n, p, prerequisites) {
  const adjList = new Array(n);
  for (let k = 0; k < adjList.length; k++) adjList[k] = [];
  const inDegree = new Array(n).fill(0);

  for (let i = 0; i < p; i++) {
    adjList[prerequisites[i][1]].push(prerequisites[i][0]);
    inDegree[prerequisites[i][0]] += 1;
  }

  const queue = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let head = 0;
  let count = 0;

  while (head < queue.length) {
    const current = queue[head++];
    count++;

    // Visite neighbour
    for (let i; i < adjList[current].length; i++) {
      inDegree[adjList[current][i]] -= 1;
      if (inDegree[adjList[current][i]] === 0) queue.push(adjList[current][i]);
    }
  }

  return queue.length === n ? "Yes" : "No";
}

const prerequisites = [
  [1, 0],
  [2, 1],
  [3, 2],
];
console.log(prereqTasks(4, 3, prerequisites));
