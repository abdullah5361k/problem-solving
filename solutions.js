var minimumTime = function (n, relations) {
  const adjList = new Array(n + 1);
  const inDegree = new Array(n + 1).fill(0);
  for (let j = 0; j < adjList.length; j++) adjList[j] = [];

  // Add edges of each vertex into adjList
  for (let i = 0; i < n; i++) {
    let vertex = relations[i][0];
    let edge = relations[i][1];
    adjList[vertex].push(edge);
    inDegree[relations[i][1]] += 1;
  }
};

minimumTime(3, [
  [1, 3],
  [2, 3],
]);
