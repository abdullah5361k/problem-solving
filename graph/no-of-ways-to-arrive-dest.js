/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

const findPaths = (adj, n) => {
  const queue = [];
  const minimumTime = new Array(n).fill(Infinity);
  const arrived = new Array(n).fill(0);
  queue.push(0);
  minimumTime[0] = 0;
  arrived[0] = 1;
  let head = 0;
  const MOD = 1e9 + 7;

  while (head < queue.length) {
    // Find minumum
    let node = -1,
      value = Infinity;
    for (let i = head; i < queue.length; i++) {
      if (minimumTime[queue[i]] < value) {
        value = minimumTime[queue[i]];
        node = i;
      }
    }

    const currentV = queue[node];
    if (head != node) {
      queue[node] = queue[head];
      queue[head] = currentV;
    }

    head++;

    for (let i = 0; i < adj[currentV].length; i++) {
      const [ng, t] = adj[currentV][i];
      if (minimumTime[ng] === Infinity) {
        minimumTime[ng] = minimumTime[currentV] + t;
        arrived[ng] = arrived[currentV];
        queue.push(ng);
      } else if (minimumTime[currentV] + t < minimumTime[ng]) {
        minimumTime[ng] = minimumTime[currentV] + t;
        arrived[ng] = arrived[currentV];
      } else if (minimumTime[currentV] + t == minimumTime[ng]) {
        arrived[ng] = arrived[ng] + arrived[currentV];
      }
    }
  }

  return arrived[n - 1];
};

var countPaths = function (n, roads) {
  const adjList = Array.from({ length: n }, () => []);
  for (let [u, v, t] of roads) {
    adjList[u].push([v, t]);
    adjList[v].push([u, t]);
  }
  return findPaths(adjList, n);
};

const n = 6,
  roads = [
    [0, 1, 5],
    [0, 2, 1],
    [1, 3, 1],
    [1, 5, 1],
    [2, 3, 2],
    [2, 4, 1],
    [3, 4, 1],
  ];

console.log(countPaths(n, roads));
