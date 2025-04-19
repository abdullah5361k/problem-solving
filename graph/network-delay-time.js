/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

const delayTime = (adj, n, k) => {
  const queue = [];
  const time = new Array(n + 1).fill(Infinity);
  let minimumTime = -Infinity;
  queue.push(k);
  time[k] = 0;
  let head = 0;

  while (head < queue.length) {
    let node = -1,
      value = Infinity;
    for (let i = head; i < queue.length; i++) {
      if (time[queue[i]] < value) {
        value = time[queue[i]];
        node = i;
      }
    }

    const currentV = queue[node];

    if (node != head) {
      queue[node] = queue[head];
      queue[head] = currentV;
    }
    head++;

    for (let i = 0; i < adj[currentV].length; i++) {
      const [v, t] = adj[currentV][i];
      if (time[v] === Infinity) {
        time[v] = time[currentV] + t;
        queue.push(v);
        minimumTime = Math.max(minimumTime, time[v]);
      } else {
        time[v] = Math.min(time[v], time[currentV] + t);
        minimumTime = Math.max(minimumTime, time[v]);
      }
    }
  }

  console.log(minimumTime, queue);

  return queue.length === n ? minimumTime : -1;
};

var networkDelayTime = function (times, n, k) {
  const adjList = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, t] of times) {
    adjList[u].push([v, t]);
  }

  return delayTime(adjList, n, k);
};

const times = [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
  ],
  n = 4,
  k = 2;
console.log(networkDelayTime(times, n, k));
// Output: 2
