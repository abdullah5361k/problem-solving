/**
 * @param {number[][]} grid
 * @return {number}
 */

const isValid = (i, j, n, m) => {
  return i >= 0 && i < n && j >= 0 && j < m;
};

const shortestPathUsingBFS = (grid) => {
  if (grid[0][0] != 0) return -1;
  const n = grid.length;
  const shortestDistance = new Array(n);
  for (let i = 0; i < n; i++) {
    shortestDistance[i] = new Array(n).fill(0);
  }
  const row = [-1, 1, 0, 0, -1, -1, 1, 1];
  const col = [0, 0, -1, 1, 1, -1, 1, -1];
  const queue = [];
  queue.push([0, 0]);
  shortestDistance[0][0] = 1;
  let head = 0;

  while (head < queue.length) {
    const [i, j] = queue[head++];
    // Visit neighbour
    for (let k = 0; k < 8; k++) {
      const nR = i + row[k];
      const nC = j + col[k];
      if (
        isValid(nR, nC, n, n) &&
        grid[nR][nC] === 0 &&
        shortestDistance[nR][nC] === 0
      ) {
        shortestDistance[nR][nC] = shortestDistance[i][j] + 1;
        queue.push([nR, nC]);
      }
    }
  }

  return shortestDistance[n - 1][n - 1] === 0
    ? -1
    : shortestDistance[n - 1][n - 1];
};

const shortestPathBinaryMatrix = function (grid) {
  return shortestPathUsingBFS(grid);
};

const grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
console.log(shortestPathBinaryMatrix(grid));
// Output: 4
