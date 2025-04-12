const BFS = (adj, V) => {
  // Find Indegree of each course
  const inDegree = new Array(V).fill(0);
  for (let i = 0; i < adj.length; i++) {
    for (let j = 0; j < adj[i].length; j++) {
      inDegree[adj[i][j]] += 1;
    }
  }

  // Cours with zero indegree should be in queue
  const queue = [];

  for (let i = 0; i < V; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let head = 0;

  while (head < queue.length) {
    const current = queue[head++];

    for (let i = 0; i < adj[current].length; i++) {
      const ng = adj[current][i];
      inDegree[ng] -= 1;
      if (inDegree[ng] == 0) {
        queue.push(ng);
      }
    }
  }

  return queue.length === V;
};

const courseSchedule = (numCourses, prerequisites) => {
  const adj = new Array(numCourses);
  for (let i = 0; i < adj.length; i++) {
    adj[i] = [];
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const u = prerequisites[i][1];
    const v = prerequisites[i][0];
    adj[u].push(v);
  }

  return BFS(adj, numCourses);
};

console.log(
  courseSchedule(2, [
    [1, 0],
    [0, 1],
  ])
);
