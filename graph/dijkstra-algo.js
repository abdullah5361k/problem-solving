function findShortesPath(adj, src) {
  const path = new Array(adj.length + 1).fill(Math.min());
  const queue = [];
  path[src] = 0;
  let head = 0;
  queue.push(src);

  while (head < queue.length) {
    let nodeIdx = -1,
      value = Math.min();
    // Find min path element from queue
    for (let i = head; i < queue.length; i++) {
      if (path[queue[i]] < value) {
        nodeIdx = i;
      }
    }
    const vertex = queue[nodeIdx];
    if (nodeIdx != head) {
      // Swap
      const temp = queue[head];
      queue[head] = queue[nodeIdx];
      queue[nodeIdx] = temp;
    }
    head++;

    // Visit neighbour
    for (let i = 0; i < adj[vertex].length; i++) {
      const neighbour = adj[vertex][0];
      const weight = adj[vertex][1];

      if (path[neighbour] === Infinity) {
        path[neighbour] = path[vertex] + weight;
        queue.push(neighbour);
      } else if (path[neighbour] > path[vertex] + weight) {
        path[neighbour] = path[vertex] + weight;
      }
    }
  }

  return path;
}

// Function to find the shortest distance of all the vertices
// from the source vertex src.
function dijkstra(adj, src) {
  // code here

  return findShortesPath(adj, src);
}

console.log(dijkstra([[1, 9]], 0));
