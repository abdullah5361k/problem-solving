const isValid = (i, j, n, m) => {
  return i >= 0 && i < n && j >= 0 && j < m;
};

const BFS = (i, j, n, m, grid) => {
  const queue = [[i, j]];

  grid[i][j] = "O";

  const row = [-1, 1, 0, 0];
  const col = [0, 0, 1, -1];

  let idx = 0;

  while (idx < queue.length) {
    const [r, c] = queue[idx++];

    for (let k = 0; k < 4; k++) {
      const nR = r + row[k];
      const nC = c + col[k];

      if (this.isValid(nR, nC, n, m) && grid[nR][nC] === "X") {
        grid[nR][nC] = "O";
        queue.push([nR, nC]);
      }
    }
  }
};

const xShape = (grid) => {
  const n = grid.length;
  const m = grid[0].length;
  let totalGrps = 0;

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j] === "X") {
        BFS(i, j, n, m, grid);
        totalGrps++;
      }

  return totalGrps;
};
