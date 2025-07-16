const isValid = (i, j, n, m) => {
  return i >= 0 && i < n && j >= 0 && j < m;
};

const BFS = (i, j, n, m, grid) => {
  const queue = [[i, j]];
  grid[i][j] = "W";

  const row = [-1, 1, 0, 0, -1, -1, 1, 1];
  const col = [0, 0, -1, 1, 1, -1, 1, -1];

  let idx = 0;

  while (idx < queue.length) {
    const [r, c] = queue[idx++];

    for (let k = 0; k < 8; k++) {
      const nR = r + row[k];
      const nC = c + col[k];

      if (this.isValid(nR, nC, n, m) && grid[nR][nC] === "L") {
        grid[nR][nC] = "W";
        queue.push([nR, nC]);
      }
    }
  }
};

const numIslands = (grid) => {
  let noOfIslands = 0;
  const n = grid.length;
  const m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "L") {
        noOfIslands++;
        BFS(i, j, n, m, grid);
      }
    }
  }

  return noOfIslands;
};
