var findCheapestPrice = function (n, flights, src, dst, k) {
  const adjList = new Array(n).fill(0).map(() => []);
  for (const [u, v, w] of flights) {
    adjList[u].push([v, w]);
  }

  const queue = [[src, 0, 0]]; // [city, cost, stops]
  const visited = new Array(n).fill(Infinity);

  let minCost = Infinity;
  let head = 0;

  while (head < queue.length) {
    const [city, cost, stops] = queue[head++];

    if (city === dst) {
      minCost = Math.min(minCost, cost);
      continue;
    }

    if (stops > k || cost >= minCost) continue;

    for (const [neighbor, price] of adjList[city]) {
      if (cost + price < visited[neighbor] || stops < k) {
        visited[neighbor] = cost + price;
        queue.push([neighbor, cost + price, stops + 1]);
      }
    }
  }

  return minCost === Infinity ? -1 : minCost;
};

const flights = [
  [1, 2, 10],
  [2, 0, 7],
  [1, 3, 8],
  [4, 0, 10],
  [3, 4, 2],
  [4, 2, 10],
  [0, 3, 3],
  [3, 1, 6],
  [2, 4, 5],
];

findCheapestPrice(5, flights, 0, 4, 1);
