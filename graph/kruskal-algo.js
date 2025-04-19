const findParent = (u, parent) => {
  if (parent[u] === u) return u;

  return (parent[u] = findParent(parent[u], parent)); // Path compression
};

const unionByRank = (u, v, parent, rank) => {
  const pu = findParent(u, parent);
  const pv = findParent(v, parent);

  if (rank[pu] > rank[pv]) {
    parent[pv] = pu;
  } else if (rank[pu] < rank[pv]) {
    parent[pu] = pv;
  } else {
    parent[pv] = pu;
    rank[pu] += 1;
  }
};

const findMST = (edges, v) => {
  edges.sort((a, b) => a[2] - b[2]);

  const parent = new Array(v);
  for (let i = 0; i < v; i++) parent[i] = i;
  const rank = new Array(v).fill(0);

  let totalCost = 0;

  for (let [u, v, w] of edges) {
    if (findParent(u, parent) != findParent(v, parent)) {
      totalCost += w;
      unionByRank(u, v, parent, rank);
    }
  }

  return totalCost;
};

const V = 4,
  edges = [
    [0, 1, 5],
    [1, 2, 3],
    [0, 2, 1],
  ];

console.log(findMST(edges, V));
