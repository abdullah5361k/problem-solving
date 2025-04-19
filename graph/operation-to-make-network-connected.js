const findParent = (u, parent) => {
  if (parent[u] === u) return u;
  return (parent[u] = findParent(parent[u], parent));
};

const unionBySize = (u, v, parent, size) => {
  const pu = findParent(u, parent);
  const pv = findParent(v, parent);
  if (pu === pv) return false;

  if (size[pu] > size[pv]) {
    parent[pv] = pu;
    size[pu] += size[pv];
  } else if (size[pu] < size[pv]) {
    parent[pu] = pv;
    size[pv] += size[pu];
  } else {
    parent[pv] = pu;
    size[pu] += size[pv];
  }

  return true;
};

const makeConnected = (n, connections) => {
  const parent = new Array(n);
  const size = new Array(n);
  for (let i = 0; i < n; i++) {
    parent[i] = i;
    size[i] = 1;
  }

  let countOfFreeWires = 0;

  for (let [u, v] of connections) {
    if (!unionBySize(u, v, parent, size)) countOfFreeWires += 1;
  }

  let unConnected = 0;
  for (let i = 0; i < n; i++) {
    findParent(i, parent); // Path compression
    if (parent[i] != parent[0] && parent[i] === i) {
      unConnected += 1;
    }
  }

  return countOfFreeWires < unConnected ? -1 : unConnected;
};

const connections = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [1, 3],
];

console.log(makeConnected(6, connections));

// Output: 2
