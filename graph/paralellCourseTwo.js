/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number} k
 * @return {number}
 */

const noOfSmesters = (adjList, inDegree, k) => {
  let queue = [];
  let noOfSmesters = 0;
  // Add vertex with zero indegree into queue
  for (let i = 1; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const next = [];
    let takeCourse = 0;
    let head = 0;

    for (let i = 0; i < queue.length; i++) {
      const current = queue[head++];
      // Visit neighbour
      for (let j = 0; j < adjList[current].length; j++) {
        const nbr = adjList[current][j];
        inDegree[nbr] -= 1;
        if (inDegree[nbr] === 0) next.push(nbr);
      }

      // Increase takeCourse by one
      takeCourse += 1;
      if (takeCourse === k) {
        noOfSmesters++;
        takeCourse = 0;
      }
    }

    if (takeCourse > 0) noOfSmesters++;
    queue = next;
  }

  return noOfSmesters;
};

var minNumberOfSemesters = function (n, relations, k) {
  const adjList = new Array(n + 1);
  for (let i = 0; i < adjList.length; i++) adjList[i] = [];
  const inDegree = new Array(n + 1).fill(0);

  // Create adj list
  for (let i = 0; i < relations.length; i++) {
    adjList[relations[i][0]].push(relations[i][1]);
    inDegree[relations[i][1]] += 1;
  }

  console.log(adjList);

  return noOfSmesters(adjList, inDegree, k);
};

const relations = [
  [1, 2],
  [1, 3],
  [7, 5],
  [7, 6],
  [4, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
];

console.log(minNumberOfSemesters(13, relations, 9));
